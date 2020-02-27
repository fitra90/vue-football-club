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
      <ion-icon name="heart"></ion-icon>
      <strong>centered</strong> on desktop.
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'


export default {
  name: "App"
  // components: {
  //   HelloWorld
  // }
};


</script>

<style>
</style>
