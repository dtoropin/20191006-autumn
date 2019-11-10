import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../components/pages/About.vue'),
    name: 'About'
  },
  {
    path: '/works',
    component: () => import('../components/pages/Works.vue'),
    name: 'Works'
  },
  {
    path: '/comments',
    component: () => import('../components/pages/Comments.vue'),
    name: 'Comments'
  }
];

export default new VueRouter({ routes });