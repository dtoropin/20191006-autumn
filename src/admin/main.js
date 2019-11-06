import Vue from 'vue';
import App from './App.vue'
import store from './store';
import axios from './helpers/request';

store.$axios = axios;

import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);

new Vue({
  el: "#app-root",
  store,
  render: h => h(App)
});