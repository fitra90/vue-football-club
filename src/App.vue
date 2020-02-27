
<template>
  <div class="container">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item>
          <b>VueFootballClub</b>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="/">Home</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <a href="https://github.com/fitra90/vue-football-club">
            <button class="button is-warning">
              <ion-icon name="logo-github"></ion-icon>&nbsp; GitHub
            </button>
          </a>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="notification">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",

  data() {
    return {};
  },
  method: {
    getClubList: function() {
      console.log("areaId");
    }
  }
};
</script>

<style>
</style>
