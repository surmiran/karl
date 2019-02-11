import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";
import Toasted from "vue-toasted";

Vue.config.productionTip = false;
Vue.use(Toasted);

new Vue({
	store,
	render: h => h(App)
}).$mount("#app");
