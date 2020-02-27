import Vue from "vue";
import Buefy from "buefy";
import axios from "axios";
import "buefy/dist/buefy.css";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Buefy, {
  // ...
});
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
  mounted() {
    // this.$axios
    //   .get("http://api.football-data.org/v2/areas/")
    //   .then(response => (this.info = response));
    const options = {
      method: "GET",
      headers: { "X-Auth-Token": "de41491bcce54e58a400640d7fe71ec0" },
      url: "http://api.football-data.org/v2/areas",
      dataType: "json"
    };
    this.$axios(options).then(response => console.log(response.status));
  }
}).$mount("#app");
