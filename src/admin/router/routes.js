export default [
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
  },
  {
    path: '/login',
    component: () => import('../components/pages/Login.vue'),
    name: 'Login',
    meta: {
      public: true
    }
  }
]