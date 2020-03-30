import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// import "./registerServiceWorker";
import Toasted from "vue-toasted";
import Popover  from 'vue-js-popover'

Vue.config.productionTip = false;
Vue.use(Toasted);

Vue.use(Popover);

new Vue({
	store,
	render: h => h(App)
}).$mount("#app");
