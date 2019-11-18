export default {
  namespaced: true,
  state: {
    comments: [],
    message: {}
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
    },
    SHOW_MESSAGE(state, mess) {
      setTimeout(() => state.message = {}, 4000)
      state.message = {
        show: true,
        className: mess.className,
        text: mess.text
      }
    }
  },
  actions: {
    async getComments({ commit, rootState }) {
      try {
        const userID = rootState.user.user.id;
        const { data } =  await this.$axios.get(`/reviews/${userID}`);
        commit('SET_COMMENTS', data);
      } catch (error) {
        commit('SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        })
      }
    },
    async removeComment({ commit }, id) {
      try {
        await this.$axios.delete(`/reviews/${id}`);
        commit('DELETE_COMMENT', id);
        commit('SHOW_MESSAGE', {
          className: 'warn',
          text: 'коммент удален'
        })
      } catch (error) {
        commit('SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        })
      }
    },
    async saveComment({ commit }, comment) {
      try {
        const { data } = await this.$axios.post('/reviews', comment);
        commit('SAVE_COMMENT', data);
        commit('SHOW_MESSAGE', {
          className: 'ok',
          text: 'коммент добавлен'
        })
      } catch (error) {
        commit('SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        })
      }
    },
    async updateComment({ commit }, editComment) {
      try {
        const { data } = await this.$axios.post(`/reviews/${editComment[0]}`, editComment[1]);
        commit('UPDATE_COMMENT', data);
        commit('SHOW_MESSAGE', {
          className: 'ok',
          text: 'коммент сохранен'
        })
      } catch (error) {
        commit('SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        })
      }
    }
  }
}