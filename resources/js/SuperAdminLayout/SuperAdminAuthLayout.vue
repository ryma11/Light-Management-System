<template>
  <div class="main-content bg-secondary">
    <!-- Navbar -->
    <!-- <base-nav
      class="navbar-top navbar-horizontal navbar-dark"
      containerClasses="px-4 container"
      expand
    >
      <router-link slot="brand" class="navbar-brand" to="/dashboard">
        <img src="img/brand/green.png" />
      </router-link>
    </base-nav>-->
    <!-- Content -->
    <div class="py-5 py-lg-8">
      <div class="container">
        <slide-y-up-transition mode="out-in" origin="center top">
          <router-view></router-view>
        </slide-y-up-transition>
      </div>
    </div>
  </div>
</template>
<script>
import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "super-admin-auth-layout",
  components: {
    SlideYUpTransition,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      showMenu: false,
    };
  },
};
</script>
<style>
</style>
