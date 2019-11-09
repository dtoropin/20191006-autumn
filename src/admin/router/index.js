import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from '../components/pages/About.vue';
import Works from '../components/pages/Works.vue';
import Comments from '../components/pages/Comments.vue';

const routes = [
  {
    path: '/',
    component: About
  },
  {
    path: '/works',
    component: Works
  },
  {
    path: '/comments',
    component: Comments
  }
];

export default new VueRouter({ routes });