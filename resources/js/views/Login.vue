<template>
  <div class="row justify-content-center">
    <!-- <div v-if="loading" class="spinner-grow" role="status">
      <span class="sr-only">Loading...</span>
    </div> -->
    <div class="col-lg-5 col-md-7">
      <div class="text-center text-muted mb-4">
        <router-link to="/dashboard">
          <img src="img/brand/green.png" style="height: 2rem" />
        </router-link>
      </div>
      <div class="text-center text-muted mb-4">
        <h2>CONNECTEZ-VOUS À VOTRE COMPTE</h2>
      </div>
      <div
        class="card bg-transparent shadow border-1"
        style="border: 1px solid #bdc3c7"
      >
        <div class="card-body px-lg-5 py-lg-5">
          <form role="form">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="Login"
              addon-left-icon="ni ni-circle-08"
              v-model="model.log"
            ></base-input>
            <div class="text-danger pb-4 pt-0">
              <small v-if="e1 != ''">{{ e1 }}</small>
            </div>

            <base-input
              class="input-group-alternative"
              placeholder="Mot de passe"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
            ></base-input>
            <div class="text-danger pb-4 pt-0">
              <small v-if="e2 != ''">{{ e2 }}</small>
            </div>
            <base-checkbox class="custom-control-alternative">
              <span class="text-muted">Mémoriser le mot de passe</span>
            </base-checkbox>

            <div class="text-center">
              <button
                type="button"
                class="my-4 btn btn-success btn-block"
                @click.prevent="login"
              >
                Se Connecter
              </button>
              <a href class="password">Mot de passe oublié?</a>
            </div>
          </form>
        </div>
      </div>
      <!-- <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light">
            <small>Forgot password?</small>
          </a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/register" class="text-light">
            <small>Create new account</small>
          </router-link>
        </div>
      </div>-->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",

  data() {
    return {
      e1: "",
      e2: "",
      model: {
        log: "",
        password: "",
      },
      loading: true,
    };
  },

  methods: {
    login() {
      this.e1 = "";
      this.e2 = "";
      if (!this.model.log) {
        this.e1 = " 'Login' est obligatoire !";
        console.log(this.e1);
      }
      if (!this.model.password) {
        this.e2 = " 'Mot de passe' est obligatoire !";
      }
      if (this.model.password && this.model.log) {
        axios
          .post("api/login", this.model)
          .then((response) => {
            console.log("current user Token: ");
            console.log(response);
            if (response.data.logged_in_user.role == 1) {
              this.$router.push({ name: "super-admin-dashboard" });
            } else {
              this.$router.push({ name: "dashboard" });
            }
          })
          .catch((error) => {
            this.$swal.fire({
              icon: "error",
              title: "Identifiant ou mot de passe incorrect",
              text: "Essayez de nouveau!",
            });
            this.model.password = "";
            this.model.log = "";
          });
      }
    },
  },
};
</script>
<style>
.password {
  color: #95a5a6;
}
.password:hover,
.password:link {
  color: black;
  text-decoration: underline;
}
</style>
