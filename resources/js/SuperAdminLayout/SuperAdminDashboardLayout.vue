<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Tableau de bord',
            icon: 'ni ni-tv-2 ',
            path: '/super-admin-dashboard',
          }"
        />

        <sidebar-item
          :link="{
            name: 'Admins',
            icon: 'ni ni-single-02',
            path: '/admins',
          }"
        />
        <!-- <sidebar-item
          :link="{
            name: 'Stats',
            icon: 'ni ni-planet ',
            path: '/niches',
          }"
        /> -->
        <!-- <sidebar-item
          :link="{
            name: 'Interventions',
            icon: 'ni ni-ui-04 ',
            path: '/interventions',
          }"
        /> -->
        <!-- <sidebar-item :link="{name: 'Maps', icon: 'ni ni-pin-3 ', path: '/maps'}" />
        <sidebar-item :link="{name: 'User Profile', icon: 'ni ni-single-02 ', path: '/profile'}" />
        <sidebar-item :link="{name: 'Login', icon: 'ni ni-key-25 ', path: '/login'}" />
        <sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08 ', path: '/register'}" />-->
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <super-admin-dashboard-navbar></super-admin-dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <super-admin-content-footer
          v-if="!$route.meta.hideFooter"
        ></super-admin-content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import SuperAdminDashboardNavbar from "./SuperAdminDashboardNavbar.vue";
import SuperAdminContentFooter from "./SuperAdminContentFooter.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    SuperAdminDashboardNavbar,
    SuperAdminContentFooter,
    FadeTransition,
  },
  data() {
    return {
      sidebarBackground: "vue", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss"></style>
