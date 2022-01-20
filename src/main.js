import Vue from "vue";
import App from "./App.vue";
import "./assets/css/global.less";
import router from './router'
import Vuex from 'vuex'
import 'es6-promise/auto'
import {store} from './store/store'
import VueMask from 'v-mask'

Vue.use(Vuex);
Vue.use(VueMask);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
