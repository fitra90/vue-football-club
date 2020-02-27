<template>
  <div>
      club profile
    <ul>
      <!-- <li v-for="area in areas" :key="area.id">
        <button v-on:click="getClubList">{{area.name}}</button>
      </li> -->
    </ul>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "ClubProfile",
  data() {
    return {
        clubProfile: []
    };
  },
//   async mounted() {
//     const clubProfile = await axios.get("http://api.football-data.org/v2/areas", {
//       headers: { "X-Auth-Token": "de41491bcce54e58a400640d7fe71ec0" }
//     });
//     this.clubProfile = clubProfile.data.areas;
    // console.log(areas.data);
//   }
};
</script>
<style scoped>
</style>