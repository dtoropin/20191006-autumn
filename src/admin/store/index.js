import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import categories from './module/categories';
import skills from './module/skills';
import works from './module/works';
import comments from './module/comments';
import user from './module/user';

export default new Vuex.Store({
  modules: {
    categories,
    skills,
    works,
    comments,
    user
  }
})