export default {
  namespaced: true,
  state: {
    comments: []
  },
  mutations: {
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    }
  },
  actions: {
    getComments({ commit }) {
      this.$axios
        .get('/reviews/193')
        .then(response => {
          commit('SET_COMMENTS', response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}