import Vue from 'vue';
import App from './App.vue'
import store from './store';
import axios from './helpers/request';
import router from './router';

store.$axios = axios;

import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});