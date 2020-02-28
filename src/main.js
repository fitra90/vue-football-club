import Vue from "vue";
import VueRouter from "vue-router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import App from "./App.vue";
import Areas from "./components/Areas.vue";
import Clubs from "./components/Clubs.vue";
import ClubProfile from "./components/ClubProfile.vue";
import PlayerProfile from "./components/PlayerProfile.vue";
import Competition from "./components/Competition.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithub);

const routes = [
  { path: "/", component: Areas },
  { path: "/competition/:areaId", name: "competition", component: Competition },
  { path: "/clubs/:competitionId", name: "clubs", component: Clubs },
  {
    path: "/club-profile/:clubId",
    name: "club-profile",
    component: ClubProfile
  },
  {
    path: "/player-profile/:clubName/:playerId/",
    name: "player-profile",
    component: PlayerProfile
  }
];

const router = new VueRouter({
  routes
});
Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Buefy, {
  // ...
});
Vue.use(VueRouter, {
  // ...
});
new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
