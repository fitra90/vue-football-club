<template>
  <div class="container">
    <div>
      <span class="active" @click="goBack(-3)">Country</span> >
      <span class="active" @click="goBack(-2)">Competition</span>
      >
      <span class="active" @click="goBack(-1)">Clubs</span>
      >
      <span>{{clubData.name}}</span>
    </div>
    <br />
    <div class="columns">
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
    </div>

    <table class="table table is-hoverable">
      <thead>
        <tr>
          <th style="width:80%">Player Name</th>
          <th style="width:20%">Position</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in clubSquad" :key="player.id">
          <td>
            <router-link
              :to="{ name: 'player-profile', params: {playerId: player.id, clubName:clubData.name } }"
            >{{player.name}}</router-link>
          </td>
          <td v-if="player.position == null">
            <i>
              Coach
            </i>
          </td>
          <td v-else> 
            {{player.position}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ClubProfile",
  methods: {
    goBack: function(n) {
      this.$router.go(n);
    },
    goToWebsite: function() {
      location.href = this.clubData.website;
    }
  },
  data() {
    return {
      clubData: [],
      clubSquad: []
    };
  },
  async mounted() {
    const clubs = await axios.get(
      "http://api.football-data.org/v2/teams/" + this.$route.params.clubId,
      {
        headers: { "X-Auth-Token": "de41491bcce54e58a400640d7fe71ec0" }
      }
    );
    this.clubData = clubs.data;
    this.clubSquad = clubs.data.squad;
  }
};
</script>
<style scoped>
img {
  width: 200px;
}
h2 {
  font-size: 40px;
  font-weight: bold;
}

.is-one-fifth {
  text-align: center;
}

td a:hover {
  font-weight: bold;
}

.weblink {
  cursor: pointer;
  color:blue
}
</style>