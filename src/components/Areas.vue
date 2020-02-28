<template>
  <div class="container">
    <h1>Select Club By Country :</h1>
    <ul>
      <li v-for="area in areas" :key="area.id">
        <router-link :to="{ name: 'competition', params: {areaId: area.id } }">
          <div class="linkStyle">{{area.name}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Areas",
  data() {
    return {
      areas: []
    };
  },
  async mounted() {
    const areas = await axios.get("http://api.football-data.org/v2/areas", {
      headers: { "X-Auth-Token": "de41491bcce54e58a400640d7fe71ec0" }
    });
    this.areas = areas.data.areas;
    
    // console.log(areas.data.areas);
  }
};
</script>
<style scoped>

</style>