<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8"></base-header>
    <div class="container-fluid mt--7">
      <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
        <div class="card-header border-0" :class="type === 'dark' ? 'bg-transparent' : ''">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">{{ title }}</h3>
            </div>
            <div class="col text-right">
              <button
                type="button"
                class="btn btn-primary"
                @click="create"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >Ajouter Ligne</button>
            </div>
          </div>
        </div>

        <div class="table-responsive">
          <base-table
            class="table align-items-center table-flush"
            :class="type === 'dark' ? 'table-dark' : ''"
            :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
            tbody-classes="list"
            :data="tableData"
          >
            <template slot="columns">
              <th>Ligne</th>
              <th>Nombre de points limineux</th>
              <th>Puissance d'un point limineux</th>
              <th class="text-center">Actions</th>
            </template>

            <!-- (For example, scope=“myScope”,
        properties passed into the <slot> will be accessible as {{myScope.myProperty}}
            while scope=“yourScope” will be accessed as {{yourScope.myProperty}}.)-->

            <template slot-scope="{ row,index }">
              <th scope="row">{{index+1}}</th>
              <td>{{ row.nombre_point_limineux }}</td>
              <td>{{ row.puissance_moyenne}}</td>

              <td>
                <button
                  class="btn btn-info"
                  @click="edit(row)"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >Modifier</button>

                <button class="btn btn-danger" @click="destroy(row.id)">Supprimer</button>
              </td>
            </template>
          </base-table>
        </div>

        <div
          class="card-footer d-flex justify-content-end"
          :class="type === 'dark' ? 'bg-transparent' : ''"
        >
          <!-- <pagination :data="tableData" @pagination-change-page="getLignes"></pagination> -->
        </div>
        <!----------------------- Modal --------------------------------------->
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
                <h5 class="modal-title" id="exampleModalLongTitle">Informations Ligne</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
                <div class="modal-body">
                  <div>
                    <div class="row">
                      <!-- nombre de points limineux----------------------------------------------- -->

                      <div class="col-lg-6">
                        <base-input
                          alternative
                          label="Nombre de points limineux"
                          type="number"
                          placeholder="Nombre de points limineux"
                          input-classes="form-control-alternative"
                          v-model.trim="$v.nbl.$model"
                          v-model.number="nbl"
                          required
                        />
                        <div class="text-danger pb-4" v-if="sub && !$v.nbl.required  ">
                          <small>
                            "Nombre de points
                            limineux" obligatoire
                            !
                          </small>
                        </div>
                        <div class="text-danger pb-4" v-if=" sub && !$v.nbl.between">
                          <small>
                            "Nombre de points
                            limineux" doit comporter
                            au minimum 1 point
                            !
                          </small>
                        </div>
                      </div>

                      <!------------ puissance d'un point limineux ------------------------------------- -->

                      <div class="col-lg-6">
                        <base-input
                          alternative
                          label="Puissance d'un point limineux"
                          type="number"
                          placeholder="Puissance d'un point limineux"
                          input-classes="form-control-alternative"
                          v-model.trim="$v.pu.$model"
                          v-model.number="pu"
                          required
                        />
                        <div class="text-danger pb-4" v-if="sub && !$v.pu.required">
                          <small>
                            "Puissance d'un point
                            limineux" obligatoire
                            !
                          </small>
                        </div>
                        <div class="text-danger pb-4" v-if="sub && !$v.pu.between ">
                          <small>
                            "Puissance d'un point
                            limineux" doit etre au
                            minimum 250 volt.
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Footer Buttons -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                  <button
                    type="button"
                    class="btn btn-success"
                    @click.prevent="editMode ? update() : submit()"
                  >Enregistrer</button>
                </div>
              </form>
            </div>
          </div>
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
  name: "lignes-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  computed: {},
  data() {
    return {
      id: null,
      editMode: false,
      editPassword: false,
      tableData: [],
      nbl: null,
      pu: null,
      i: 0,
      id_niche: null,
      sub: false,
      errors: false,
      niche: [],
      nombre_ligne: 0,
    };
  },
  validations: {
    pu: {
      required,
      between: between(0, 100000),
    },
    nbl: {
      required,
      between: between(0, 100000),
    },
  },

  methods: {
    getNiche(test) {
      axios
        .get("api/niches/" + this.id_niche)
        .then((response) => {
          this.niche = response.data;
          this.updateNich(test);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submit() {
      this.sub = true;

      if (this.$v.$invalid) {
        this.errors = true;
      } else {
        axios
          .post("api/lignes", {
            id_niche: this.id_niche,
            nombre_point_limineux: this.nbl,
            puissance_moyenne: this.pu,
          })
          .then((response) => {
            console.log("responseEEEE");
            console.log(response);
            console.log("getniche() submit");
            this.getNiche(1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    updateNich(test) {
      console.log("niche into updateNiche(): ", this.niche);
      this.nombre_ligne = this.niche.nombre_lignes;
      if (test == 1) {
        this.nombre_ligne = this.niche.nombre_lignes + 1;
      } else if (test == 0) {
        this.nombre_ligne = this.niche.nombre_lignes - 1;
      }

      axios
        .put("api/niches/" + this.id_niche, {
          nombre_lignes: this.nombre_ligne,
          nom: this.niche.nom,
          gsm: this.niche.gsm,
          map: this.niche.map,
          adresse: this.niche.adresse,
          // puissance_moyenne: this.niche.puissance_moyenne,
        })
        .then((response) => {
          console.log("niche updated:");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      if (test == 0) {
        axios
          .put("api/niches/" + this.id_niche, {
            nombre_lignes: this.nombre_ligne,
            nom: this.niche.nom,
            gsm: this.niche.gsm,
            map: this.niche.map,
            adresse: this.niche.adresse,
            // puissance_moyenne: this.niche.puissance_moyenne,
          })
          .then((response) => {
            console.log("niche updated 2:");
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.resetForm();
      this.getLignes();
    },
    getNicheId() {
      this.id_niche = this.$route.query.id_niche;
    },

    getLignes() {
      axios
        .get("api/lignes/" + this.id_niche)
        .then((response) => {
          console.log("res lignes");
          console.log(response);
          this.tableData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    edit(ligne) {
      this.editMode = true;
      this.resetForm();
      this.id = ligne.id;
      this.nbl = ligne.nombre_point_limineux;
      this.pu = ligne.puissance_moyenne;
    },
    destroy(id) {
      this.$swal
        .fire({
          title: "Êtes-vous sûr?",
          text: "Vous ne pourrez pas revenir en arrière!",
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "Annuler",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Oui, Supprimer",
        })
        .then((result) => {
          if (result.value) {
            axios
              .delete("api/lignes/" + id)
              .then((response) => {
                this.$swal.fire(
                  "Effectué!",
                  "La ligne a été supprimé.",
                  "success"
                );
                this.getLignes();
                console.log("getniche() destroy");
                this.getNiche(0);
              })
              .catch((err) => console.log(err));
          }
        });
    },
    update() {
      this.sub = true;
      //   console.log(this.$v);
      if (this.$v.$invalid) {
        this.errors = true;
      } else {
        axios
          .put("api/lignes/" + this.id, {
            nombre_point_limineux: this.nbl,
            puissance_moyenne: this.pu,
          })
          .then((response) => {
            console.log("getniche() update");
            this.getNiche(-1);

            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        this.resetForm();
        this.getLignes();
      }
    },
    resetForm() {
      this.pu = null;
      this.nbl = null;
      this.sub = false;
      this.errors = false;
    },
    create() {
      this.editMode = false;
      this.resetForm();
    },
  },
  mounted() {
    this.getNicheId();
    this.getLignes();
  },

  // },
};
</script>
<style></style>
