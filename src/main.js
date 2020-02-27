import Vue from "vue";
import VueRouter from "vue-router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import App from "./App.vue";
import Areas from "./components/Areas.vue";
import Clubs from "./components/Clubs.vue";
import ClubProfile from "./components/ClubProfile.vue";
import PlayerProfile from "./components/PlayerProfile.vue";

const routes = [
  { path: "/", component: Areas },
  { path: "/clubs", component: Clubs },
  { path: "/club-profile", component: ClubProfile },
  { path: "/player-profile", component: PlayerProfile },
];

const router = new VueRouter({
  routes
})
Vue.config.productionTip = false;
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
