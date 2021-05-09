<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
        </div>
        <div class="col text-right">
          <button
            type="button"
            class="btn btn-success"
            @click="create"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            Ajouter Agent
          </button>
        </div>
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
          <th>Prenom</th>
          <th>Nom d'utlisateur</th>
          <th>Adresse</th>
          <th>Date de naissance</th>
          <th>E-mail</th>
          <th>Numéro Téléphone</th>
          <th class="text-center">Actions</th>
          <!-- <th></th> -->
        </template>

        <!-- (For example, scope=“myScope”,
        properties passed into the <slot> will be accessible as {{myScope.myProperty}}
        while scope=“yourScope” will be accessed as {{yourScope.myProperty}}.)-->

        <template slot-scope="{ row }">
          <th scope="row">{{ row.last_name }}</th>
          <td>{{ row.first_name }}</td>
          <td>{{ row.username }}</td>
          <td>{{ row.address }}</td>
          <td class="text-center">
            {{ new Date(row.birthday).toISOString().substring(0, 10) }}
          </td>
          <td>{{ row.email }}</td>
          <td>{{ row.phone }}</td>
          <td>
            <button
              class="btn btn-info"
              @click="edit(row)"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              Modifier
            </button>
            <button class="btn btn-warning" @click="blockAgent(row)">
              {{ row.is_blocked ? "Débloquer" : "Bloquer" }}
            </button>
            <button class="btn btn-danger" @click="destroy(row.id)">
              Supprimer
            </button>
          </td>
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <pagination
        :data="tableData"
        @pagination-change-page="getAgents"
      ></pagination>
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
            <h5 class="modal-title" id="exampleModalLongTitle">
              Informations agent
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
            <div class="modal-body">
              <div class="pl-lg-4">
                <div class="row">
                  <!-- Nom----------------------------------------------- -->

                  <div
                    class="col-lg-6"
                    :class="{
                      'form-group--error': $v.nom.$error,
                    }"
                  >
                    <base-input
                      alternative
                      label="Nom"
                      type="text"
                      placeholder="Nom"
                      input-classes="form-control-alternative"
                      v-model.trim="$v.nom.$model"
                      required
                    />
                    <div
                      class="text-danger pb-4 pt-0"
                      v-if="sub && !$v.nom.required"
                    >
                      <small>"Nom" obligatoire !</small>
                    </div>
                    <div
                      class="text-danger pb-4"
                      v-if="sub && !$v.nom.minLength"
                    >
                      <small>
                        "Nom" doit comporter au minimum 3 lettres.
                      </small>
                    </div>
                  </div>
                  <!-- prénom--------------------------------------------------------------------------------------------------- -->
                  <div
                    class="col-lg-6"
                    :class="{
                      'form-group--error': $v.prenom.$error,
                    }"
                  >
                    <base-input
                      alternative
                      label="Prénom"
                      type="text"
                      placeholder="Prénom"
                      input-classes="form-control-alternative"
                      v-model.trim="$v.prenom.$model"
                      required
                    />
                    <div
                      class="text-danger pb-4 pt-0"
                      v-if="sub && !$v.prenom.required"
                    >
                      <small>"Prénom" obligatoire !</small>
                    </div>
                    <div
                      class="text-danger pb-4"
                      v-if="sub && !$v.prenom.minLength"
                    >
                      <small>
                        "Prénom" doit comporter au minimum 3 lettres.
                      </small>
                    </div>
                  </div>
                </div>
                <!-- adresse mail------------------------------------------------------------------------------------------------------------- -->
                <div class="row">
                  <div class="col-lg-6">
                    <base-input
                      alternative
                      type="email"
                      label="Adresse Email"
                      placeholder="Agent@example.com"
                      input-classes="form-control-alternative"
                      v-model.trim="$v.email.$model"
                      required
                    />
                    <div
                      class="text-danger pt-0"
                      v-if="sub && !$v.email.required"
                    >
                      <small>"Adresse Email" obligatoire !</small>
                    </div>
                    <div
                      class="text-danger pb-4 pt-0"
                      v-if="sub && !isEmailValid()"
                    >
                      <small>"Adresse Email"invalide !</small>
                    </div>
                  </div>
                  <!--  Date de naissance------------------------------------------------------------------------------------------------>
                  <div class="col-lg-6">
                    <div>
                      <label class="form-control-label pb-2"
                        >Date de naissance *</label
                      >
                    </div>
                    <datepicker
                      input-class="form-control-alternative"
                      v-model="datnaiss"
                      v-model.trim="$v.datnaiss.$model"
                      required
                      valuetype="format"
                    ></datepicker>
                    <div
                      class="text-danger pt-0"
                      v-if="sub && !$v.datnaiss.required"
                    >
                      <small>"Date de naissance obligatoire !</small>
                    </div>
                  </div>
                </div>              
                <div class="row">
                  <!---------- Nom d'utilisateur------------------------------------------------------------------------------------- -->

                  <div class="col-lg-6">
                    <base-input
                      alternative
                      label="Nom d'utilisateur"
                      placeholder="Nom d'utilisateur"
                      input-classes="form-control-alternative"
                      v-model.trim="$v.nomuser.$model"
                      v-model="nomuser"
                      required
                    />
                    <div
                      class="text-danger pb-4 pt-0"
                      v-if="sub && !$v.nomuser.required"
                    >
                      <small> "Nom d'utilisateur" obligatoire ! </small>
                    </div>
                  </div>
                  <!--------------------- --- Numero Tel----------------------------------------------------------- -->
                  <div class="col-lg-6">
                    <base-input
                      alternative
                      type="number"
                      label="Numero Tel"
                      placeholder="Numero Tel"
                      input-classes="form-control-alternative"
                      v-model.trim="$v.numtl.$model"
                      v-model="numtl"
                      required
                    />

                    <div
                      class="text-danger pb-4"
                      v-if="sub && !$v.numtl.required"
                    >
                      <small>"Numero telephone" obligatoire !</small>
                    </div>
                    <div
                      class="text-danger pb-4"
                      v-if="sub && !$v.numtl.between"
                    >
                      <small>
                        "Numreo telephone" doit comporter excatement 8 chiffres.
                      </small>
                    </div>
                  </div>
                  <!--  -->

                  <!-- ----------------------------adresse---------------------------------------------------------------- -->
                  <div class="col-lg-12">
                    <base-input
                      alternative
                      label="Adresse"
                      placeholder="Adresse"
                      input-classes="form-control-alternative"
                      v-model.trim="$v.adr.$model"
                      v-model="adr"
                      required
                    />
                    <div class="text-danger" v-if="sub && !$v.adr.required">
                      <small>"Adresse" obligatoire !</small>
                    </div>
                  </div>
                  <!--  -->
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Fermer
              </button>
              <button
                type="button"
                class="btn btn-success"
                @click.prevent="editMode ? update() : submit()"
              >
                Enregistrer
              </button>
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
  name: "agents-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  data() {
    return {
      id: "",
      editMode: false,
      
      tableData: {},
      datnaiss: null,
      nom: null,
      adr: null,
      sub: false,
      errors: false,
      prenom: null,
    
      passvald: null,
      email: null,
      nomuser: null,
      numtl: null,
      reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  validations: {
    nom: { required, minLength: minLength(3) },
    prenom: { required, minLength: minLength(3) },
    email: { required },
    datnaiss: { required },
    nomuser: { required },
    numtl: { required, between: between(11111111, 99999999) },
    adr: { required },
  },
  mounted() {
    this.getAgents();
  },
  methods: {
    create() {
      this.editMode = false;
      this.resetForm();
    },
    resetForm() {
      this.datnaiss = null;
      this.nom = null;
      this.adr = null;
      this.sub = false;
      this.errors = false;
      this.prenom = null;
      this.email = null;
      this.nomuser = null;
      this.numtl = null;
    },
    submit() {
      this.sub = true;
      //   console.log(this.$v);
      if (this.$v.$invalid) {
        this.errors = true;
      } else {
        axios
          .post("api/agents", {
            first_name: this.prenom,
            last_name: this.nom,
            email: this.email,
            username: this.nomuser,
            birthday: this.datnaiss,
            phone: this.numtl,
            address: this.adr,
          })
          .then((response) => {
            console.log(response);
            this.resetForm();
            this.getAgents();
            
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    getAgents(page = 1) {
      axios.get("api/agents?page=" + page).then((response) => {
        // console.log(response.data);
        this.tableData = response.data;
      });
    },
    edit(agent) {
      this.editMode = true;
      this.resetForm();
      this.id = agent.id;
      this.prenom = agent.first_name;
      this.nom = agent.last_name;
      this.email = agent.email;
      this.nomuser = agent.username;
      this.datnaiss = agent.birthday;
      this.numtl = agent.phone;
      this.adr = agent.address;
    },
    update() {
      this.sub = true;
      //   console.log(this.$v);
      if (this.$v.$invalid) {
        this.errors = true;
      } else {
        axios
          .put("api/agents/" + this.id, {
            first_name: this.prenom,
            last_name: this.nom,
            email: this.email,
            username: this.nomuser,
            birthday: this.datnaiss,
           
            phone: this.numtl,
            address: this.adr,
          })
          .then((response) => {
            this.resetForm();
            this.getAgents();
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
              .delete("api/agents/" + id)
              .then((response) => {
                this.$swal.fire(
                  "Effectué!",
                  "L'agent a été supprimé.",
                  "success"
                );
                this.getAgents();
              })
              .catch((err) => console.log(err));
          }
        });
    },
    blockAgent(agent) {
      axios
        .put("api/agent/" + agent.id, {
          is_blocked: !agent.is_blocked,
        })
        .then((response) => {
          this.getAgents();
        })
        .catch((err) => console.log(err));
    },
    isEmailValid() {
      return this.email == "" ? "" : this.reg.test(this.email) ? true : false;
    },
  },
};
</script>
<style></style>
