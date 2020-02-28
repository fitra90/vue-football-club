<template>
  <div class="container">
    <div>
      <span class="active">
        <router-link to="/">Country</router-link>
      </span>
 >
      <span>Competition</span>
    </div>
    <br />
    <h1>Select Club By Competition :</h1>
    <div v-if="competitions.length > 0">
      <ul>
        <li v-for="competition in competitions" :key="competition.id">
          <router-link :to="{ name: 'clubs', params: {competitionId: competition.id } }">
            <div class="linkStyle">{{competition.name}}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <br />
      <i class="noData">Sorry, no data found!</i>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Competition",
  data() {
    return {
      competitions: []
    };
  },
  async mounted() {
    const competitions = await axios.get(
      "http://api.football-data.org/v2/competitions?plan=TIER_ONE&areas=" +
        this.$route.params.areaId,
      {
        headers: { "X-Auth-Token": "de41491bcce54e58a400640d7fe71ec0" }
      }
    );
    this.competitions = competitions.data.competitions;
  }
};
</script>
<style scoped>
</style>