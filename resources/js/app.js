require("./bootstrap");

import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import ArgonDashboard from "./plugins/argon-dashboard";
import Vuelidate from "vuelidate";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import { store } from "../../app/store";
Vue.use(Vuex);
Vue.component('v-select', vSelect);
Vue.use(VueSweetalert2);
Vue.use(Vuelidate);
Vue.config.productionTip = false;
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.use(ArgonDashboard);
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);


let vm = new Vue({
    el: "#app",
    components: {
        App
    },
    router,
    store: store,
});
global.vm = vm;