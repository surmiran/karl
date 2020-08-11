import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// import "./registerServiceWorker";
import Toasted from "vue-toasted";
import Popover  from 'vue-js-popover'
import VModal from 'vue-js-modal';

Vue.config.productionTip = false;
Vue.use(Toasted);
Vue.use(VModal);

Vue.use(Popover);

new Vue({
	store,
	render: h => h(App)
}).$mount("#app");
