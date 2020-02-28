<template>
  <div class="container">
    <div>
      <span class="active">
        <router-link to="/">Country</router-link>
      </span> >
      <span class="active" @click="goBack">Competition</span> >
      <span>Clubs</span>
    </div>
    <br />
    <h1>Select Club For Detail :</h1>
    <ul>
      <li v-for="club in clubs" :key="club.id">
        <router-link :to="{ name: 'club-profile', params: {clubId: club.id } }">
          <div class="linkStyle">{{club.name}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Clubs",
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      clubs: []
    };
  },
  async mounted() {
    const clubs = await axios.get(
      "http://api.football-data.org/v2/competitions/" +
        this.$route.params.competitionId +
        "/teams",
      {
        headers: { "X-Auth-Token": "de41491bcce54e58a400640d7fe71ec0" }
      }
    );
    this.clubs = clubs.data.teams;
    console.log(this.clubs);
  }
};
</script>
<style scoped>
</style>