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
            Ajouter Commune
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
          <th>Login</th>
          <th>Gouvernorat</th>
          <th>Adresse</th>
          <th>Numéro Téléphone</th>
          <th>E-mail</th>

          <th class="text-center">Actions</th>
          <!-- <th></th> -->
        </template>

        <!-- (For example, scope=“myScope”,
        properties passed into the <slot> will be accessible as {{myScope.myProperty}}
        while scope=“yourScope” will be accessed as {{yourScope.myProperty}}.)-->

        <template slot-scope="{ row }">
          <th scope="row">{{ row.nom }}</th>
          <td>{{ row.login }}</td>
          <td>{{ row.gouvernorat_nom }}</td>
          <td>{{ row.address }}</td>
          <td>{{ row.mobile }}</td>
          <td>{{ row.email }}</td>
          <td>
            <button
              class="btn btn-info"
              @click="edit(row)"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              Modifier
            </button>
            <button class="btn btn-warning" @click="blockAdmin(row)">
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
        @pagination-change-page="getAdmins"
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
              Informations Admin
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
                  <!-- Gouvernaorat--------------------------------------------------------------------------------------------------- -->

                  <div
                    class="col-lg-6"
                    :class="{
                      'form-group--error': $v.prenom.$error,
                    }"
                  >
                    <label class="form-control-label">Gouvernaorat *</label>
                    <v-select
                      class="pt-xl-2"
                      id="g"
                      label="nom"
                      v-model="gouv"
                      :options="gouvernorats"
                      :value="gouv ? gouv : gouvernorats.nom"
                      @input="changeLocation"
                    >
                    </v-select>
                    <div class="text-danger pb-4 pt-0">
                      <small v-if="err">{{ err }}</small>
                    </div>
                    <!-- <div
                      class="text-danger pb-4 pt-0"
                      v-if="sub && !$v.g.required"
                    >
                      <small>"Gouvernorat" obligatoire !</small>
                    </div> -->
                  </div>
                </div>
                <!-- <b-icon-arrow-up></b-icon-arrow-up> -->
                <!-- adresse mail------------------------------------------------------------------------------------------------------------- -->
                <div class="row">
                  <div class="col-lg-12">
                    <base-input
                      alternative
                      type="email"
                      label="Adresse Email"
                      placeholder="Admin@example.com"
                      input-classes="form-control-alternative"
                      v-model.trim="$v.email.$model"
                    />
                    <!-- <div
                      class="text-danger pt-0"
                      v-if="sub && !$v.email.required"
                    >
                      <small>"Adresse Email" obligatoire !</small>
                    </div> -->
                    <div
                      class="text-danger pb-4 pt-0"
                      v-if="sub && !isEmailValid()"
                    >
                      <small>"Adresse Email"invalide !</small>
                    </div>
                  </div>
                </div>
          

                <div class="row">
                  <!---------- Nom d'utilisateur------------------------------------------------------------------------------------- -->

                  <div class="col-lg-6">
                    <base-input
                      alternative
                      label="Login"
                      placeholder="Login"
                      input-classes="form-control-alternative"
                      v-model.trim="$v.nomuser.$model"
                      v-model="nomuser"
                      required
                    />
                    <div
                      class="text-danger pb-4 pt-0"
                      v-if="sub && !$v.nomuser.required"
                    >
                      <small> "Login" obligatoire ! </small>
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
                  <!-- ----------------------------Envoyer login et mot de passe par Email---------------------------------------------------------------- -->
                  <div class="col-lg-12">
                    <div class="row ml-2">
                      <label
                        style="
                          color: #3498db;
                          font-size: 14px;
                          font-family: sans-serif;
                        "
                      >
                        Envoyer Login Et Mot de passe par Email
                      </label>

                      <input
                        class="ml-2 mb-lg-0"
                        style="width: 20px; height: 22px"
                        type="checkbox"
                        value="true"
                        v-model="smail"
                      />
                    </div>
                  </div>

                  <!-- ----------------------------Envoyer login et mot de passe par SMS---------------------------------------------------------------- -->
                  <div class="col-lg-12">
                    <div class="row ml-2">
                      <label
                        style="
                          color: #3498db;
                          font-size: 14px;
                          font-family: sans-serif;
                        "
                      >
                        Envoyer Login Et Mot de passe par SMS
                      </label>

                      <input
                        class="ml-2 mb-lg-0"
                        style="width: 20px; height: 22px"
                        type="checkbox"
                        value="true"
                        v-model="sms"
                      />
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
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { required, minLength, sameAs, between } from "vuelidate/lib/validators";

// import { required, email } from "vee-validate/dist/rules";
export default {
  components: {
    Datepicker,
    DropDownListPlugin,
  },
  name: "admins-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  data() {
    return {
      err: "",
      select: null,
      gouv: "",
      g: null,
      gouvernorats: [],
      id: "",
      editMode: false,
     
      tableData: {},
      datnaiss: null,
      gouv: "",
      nom: null,
      adr: null,
      sub: false,
      errors: false,
      prenom: null,
      passvald: null,
      email: null,
      nomuser: null,
      numtl: null,
      sms: null,
      smail:null,
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
    this.getAdmins();
    this.getGouvernorat();
  },
  methods: {
    changeLocation(value) {
      console.log("this is the value= ");
      console.log(value.nom);
      this.gouv = value.nom;
    },
    getGouvernorat() {
      axios.get("api/gouvernorats").then((response) => {
        // console.log(response.data);
        this.gouvernorats = response.data;
      });
    },

    create() {
      this.editMode = false;
      this.resetForm();
    },
    resetForm() {
      this.smail=null;
      this.sms = null;
      this.gouv = null;
      this.datnaiss = null;
      this.nom = null;
      this.adr = null;
      this.sub = false;
      this.errors = false;
      this.prenom = null;
      this.passvald = null;
      this.email = null;
      this.nomuser = null;
      this.numtl = null;
      this.select = 0;
      this.err = null;
    },
    submit() {
      this.sub = true;
      if (!this.gouv) {
        this.err = "'Gouvernorat' est obligatoire !";
        console.log(this.err);
      } else {
        axios
          .post("api/add-admin", {
            smail:this.smail,
            sms: this.sms,
            name: this.nom,
            gouvernorat_nom: this.gouv,
            email: this.email,
            username: this.nomuser,
            phone: this.numtl,
            address: this.adr,
          })
          .then((response) => {
            this.resetForm();
            console.log(response);
            this.getAdmins();
          })
           .catch((error) => {
            this.$swal.fire({
              icon: "error",
              title: "Admin Existe déja",
              text: "Essayez de nouveau!",
            });
            this.resetForm();
          });
      }
    },
    getAdmins(page = 1) {
      axios.get("api/get-admins?page=" + page).then((response) => {
        // console.log(response.data);
        this.tableData = response.data;
      });
    },
    edit(admin) {
      this.editMode = true;
      this.resetForm();
      this.id = admin.id;
      this.nom = admin.nom;
      this.gouv = admin.gouvernorat_nom;
      this.email = admin.email;
      this.nomuser = admin.login;
      this.numtl = admin.mobile;
      this.adr = admin.address;
    },
    update() {
      this.sub = true;
      // //   console.log(this.$v);
      // if (this.$v.$invalid) {
      //   this.errors = true;
      // } else {
      // axios.get("api/sms").then((response) => {
      //   console.log("send: ");
      //   console.log(response);
      // });

      axios
        .put("api/edit-admin/" + this.id, {
          sms: this.sms,
          smail: this.smail,
          name: this.nom,
          gouvernorat_nom: this.gouv,
          email: this.email,
          username: this.nomuser,
          phone: this.numtl,
          address: this.adr,
        })
        .then((response) => {
          this.resetForm();
          this.getAdmins();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
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
              .delete("api/delete-admin/" + id)
              .then((response) => {
                this.$swal.fire(
                  "Effectué!",
                  "La Commune a été supprimé.",
                  "success"
                );
                this.getAdmins();
              })
              .catch((err) => console.log(err));
          }
        });
    },
    blockAdmin(admin) {
      axios
        .put("api/block-admin/" + admin.id, {
          is_blocked: !admin.is_blocked,
        })
        .then((response) => {
          this.getAdmins();
          console.log(response);
        })
        .catch((err) => console.log(err));
    },
    isEmailValid() {
      return this.email == "" ? "" : this.reg.test(this.email) ? true : false;
    },
  },
};
</script>
<style>
</style>
