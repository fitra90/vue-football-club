<template>
  <div>
    {{player.name}}
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