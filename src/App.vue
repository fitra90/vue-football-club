<template>
  <div class="container">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item >
         <b>VueFootballClub</b>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">Home</b-navbar-item>
        <b-navbar-item href="#">Documentation</b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">About</b-navbar-item>
          <b-navbar-item href="#">Contact</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="notification">
      This container is
      <strong>centered</strong> on desktop.
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

export default {
  name: "App"
  // components: {
  //   HelloWorld
  // }
};
Vue.use(Buefy, {
  defaultIconPack: "fas",
  defaultContainerElement: "#content"
  // ...
});
</script>

<style>
</style>
