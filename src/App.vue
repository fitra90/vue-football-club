
<template>
  <div class>
    <b-navbar type="is-success" wrapper-class="container">
      <template slot="brand">
        <b-navbar-item @click="home">
          <b>VueFootballClub</b>
        </b-navbar-item>
      </template>
      <template slot="start"></template>

      <template slot="end">
        <b-navbar-item tag="div">
          <a href="https://github.com/fitra90/vue-football-club">
            <button class="button is-warning">
              <font-awesome-icon :icon="['fab', 'github']" class="myIcon" />&nbsp; GitHub
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
  methods: {
    home: function() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.myIcon {
  margin-right: 5px;
}
a {
  text-decoration: none !important;
}
.linkStyle {
  padding: 1rem;
  margin: 0.5rem;
  border: 2px solid silver;
}
.linkStyle:hover {
  background-color: #dfe4ea;
}
h1 {
  font-weight: bold;
}
.active {
  text-decoration: underline !important;
  cursor: pointer;
}

.noData {
  color: #ff4757;
}
</style>
