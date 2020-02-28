<template>
  <div class="container">
    <div>
      <span class="active" @click="goBack(-4)">Country</span> >
      <span class="active" @click="goBack(-3)">Competition</span>
      >
      <span class="active" @click="goBack(-2)">Clubs</span>
      >
      <span class="active" @click="goBack(-1)">{{this.$route.params.clubName}}</span>
      >
      <span>{{player.name}}</span>
    </div>
    <br />
    <!-- <div class="columns">
      <div class="column is-one-fifth">
        <img :src="clubData.crestUrl" />
      </div>
      <div class="column">
        <h2>{{clubData.name}}</h2>
        <p class="weblink" @click="goToWebsite">{{clubData.website}}</p>
        <br />
        <p>{{clubData.venue}}</p>
        <p>{{clubData.address}}</p>
        <p>{{clubData.phone}}</p>
      </div>
    </div>-->

    <table class="table table is-hoverable" >
      <tr>
        <th style="width:40%">Player Name</th>
        <td style="width:60%">{{player.name}}</td>
      </tr>
      <tr>
        <th style="width:40%">Birth</th>
        <td style="width:60%">{{player.dateOfBirth}}</td>
      </tr>
      <tr>
        <th style="width:40%">Nationality</th>
        <td style="width:60%">{{player.nationality}}</td>
      </tr>
      <tr>
        <th style="width:40%">Position</th>
        <td style="width:60%">{{player.position}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Clubs",
  data() {
    return {
      player: []
    };
  },
  methods: {
    goBack: function(n) {
      this.$router.go(n);
    }
  },
  async mounted() {
    const player = await axios.get(
      "http://api.football-data.org/v2/players/" + this.$route.params.playerId,
      {
        headers: { "X-Auth-Token": "de41491bcce54e58a400640d7fe71ec0" }
      }
    );
    this.player = player.data;
  }
};
</script>
<style scoped>
</style>