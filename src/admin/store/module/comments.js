export default {
  namespaced: true,
  state: {
    comments: []
  },
  mutations: {
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
    DELETE_COMMENT(state, id) {
      state.comments = state.comments.filter(
        comment => comment.id !== id
      )
    },
    SAVE_COMMENT(state, comment) {
      state.comments.push(comment);
    },
    UPDATE_COMMENT(state, { review }) {
      state.comments = state.comments.map(item => 
        item.id === review.id ? review : item
      );
    }
  },
  actions: {
    async getComments({ commit }) {
      try {
        const { data } =  await this.$axios.get('/reviews/193');
        commit('SET_COMMENTS', data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeComment({ commit }, id) {
      try {
        await this.$axios.delete(`/reviews/${id}`);
        commit('DELETE_COMMENT', id);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async saveComment({ commit }, comment) {
      try {
        const { data } = await this.$axios.post('/reviews', comment);
        commit('SAVE_COMMENT', data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async updateComment({ commit }, editComment) {
      try {
        const { data } = await this.$axios.post(`/reviews/${editComment[0]}`, editComment[1]);
        commit('UPDATE_COMMENT', data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
}