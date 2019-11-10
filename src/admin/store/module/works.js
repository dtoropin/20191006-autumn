export default {
  namespaced: true,
  state: {
    works: []
  },
  mutations: {
    SET_WORKS(state, works) {
      state.works = works;
    }
  },
  actions: {
    getWorks({ commit }) {
      this.$axios
        .get('/works/193')
        .then(response => {
          commit('SET_WORKS', response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}