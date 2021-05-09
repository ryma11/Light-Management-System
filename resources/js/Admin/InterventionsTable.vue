<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div class="card-header border-0" :class="type === 'dark' ? 'bg-transparent' : ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">{{ title }}</h3>
        </div>
        <!-- <div class="col text-right">
          <button
            type="button"
            class="btn btn-success"
            @click="create"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >Ajouter Agent</button>
        </div>-->
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="tableData.data"
      >
        <template slot="columns">
          <th>Nom</th>
          <th>Numéro GSM</th>
          <th>Adresse</th>
          <th>Localisation</th>
          <th>Nombre de Lignes</th>
          <th>Puissance Moyenne</th>

          <th class="text-center">Actions</th>
          <!-- <th></th> -->
        </template>

        <!-- (For example, scope=“myScope”,
        properties passed into the <slot> will be accessible as {{myScope.myProperty}}
        while scope=“yourScope” will be accessed as {{yourScope.myProperty}}.)-->

        <template slot-scope="{ row }">
          <th scope="row">{{ row.nom}}</th>
          <td>{{ row.gsm }}</td>
          <td>{{ row.adresse }}</td>
          <td>{{ row.map}}</td>
          <td>{{row.nombre_lignes}}</td>
          <td>{{row.puissance_moyenne}}</td>
          <td>
            <button
              style="width:100px"
              class="btn btn-success"
              data-toggle="modal"
              data-target="#exampleModalLong"
              @click="ShowLignes(row.id)"
            >Lignes</button>
          </td>
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <!-- <pagination :data="tableData" @pagination-change-page="getNiches"></pagination> -->
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalLong"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Lignes</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
            <!-- <div class="modal-body">
              <div class="row" v-for="(item,index) in tableData.data" :key="index">
                <div calss="pl-lg-4">{{item.id}}</div>
                <div calss="pl-lg-4">{{item.nombre_point_limineux}}</div>
              </div>
            </div>-->
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Points Limineux</th>
                  <th scope="col">Puissance</th>
                  <th scope="col">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in ligneData" :key="index">
                  <th scope="row">{{index+1}}</th>
                  <td>{{item.nombre_point_limineux}}</td>
                  <td>{{item.puissance_moyenne}}</td>
                  <td>
                    <button
                      type="button"
                      style="width:100px"
                      :class="{'btn btn-danger':item.etat,'btn btn-success':!item.etat}"
                      @click="toggleStatus(item)"
                    >{{ item.etat ? "Eteindre" : "Allumer" }}</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import { required, minLength, sameAs, between } from "vuelidate/lib/validators";

export default {
  components: {
    Datepicker,
  },
  name: "interventions-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  data() {
    return {
      nom: "Niche",
      gsm: null,
      map: null,
      adr: null,
      subl: false,
      sub: false,
      errors: false,
      al: false,
      ligneData: [],
      tableData: {},
      editMode: false,
      idLigne: null,
    };
  },

  mounted() {
    this.getNiches();
  },
  methods: {
    ShowLignes(id) {
      //this.$router.push("lignes/" + id);
      // this.$router.push({ name: "lignes", query: { id_niche: id } });
      this.idLigne = id;
      axios
        .get("api/lignes/" + id)
        .then((response) => {
          console.log("res lignes");
          console.log(response);
          this.ligneData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getNiches(page = 1) {
      axios.get("api/niches?page=" + page).then((response) => {
        //  console.log(response.data);
        this.tableData = response.data;
      });
    },
    toggleStatus(ligne) {
      axios
        .put("api/ligne/" + ligne.id, {
          etat: !ligne.etat,
        })
        .then((response) => {
          this.addIntervention(ligne);
          //  this.ShowLignes(this.idLigne);
          console.log(response);
        })
        .catch((err) => console.log(err));
    },
    addIntervention(ligne) {
      console.log("ligne:");
      console.log(ligne);
      axios
        .post("api/interventions", {
          type: !ligne.etat,
          ligne_id: ligne.id,
          niche_id: ligne.niche_id,
        })
        .then((response) => {
          console.log("respense intervention");
          console.log(response);
          this.ShowLignes(this.idLigne);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style></style>
