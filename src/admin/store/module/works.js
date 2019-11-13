export default {
  namespaced: true,
  state: {
    works: [],
    message: {}
  },
  mutations: {
    SET_WORKS(state, works) {
      state.works = works;
    },
    DELETE_WORK(state, workId) {
      state.works = state.works.filter(
        work => work.id !== workId
      )
    },
    SAVE_WORK(state, work) {
      state.works.push(work);
    },
    UPDATE_WORK(state, { work }) {
      state.works = state.works.map(item => 
        item.id === work.id ? work : item
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
    async getWorks({ commit }) {
      try {
        const { data } =  await this.$axios.get('/works/193');
        commit('SET_WORKS', data);
      } catch (error) {
        commit('SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        })
      }
    },
    async removeWork({ commit }, workId) {
      try {
        await this.$axios.delete(`/works/${workId}`);
        commit('DELETE_WORK', workId);
        commit('SHOW_MESSAGE', {
          className: 'warn',
          text: 'работа удалена'
        })
      } catch (error) {
        commit('SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        })
      }
    },
    async saveWork({ commit }, work) {
      try {
        const { data } = await this.$axios.post('/works', work);
        commit('SAVE_WORK', data);
        commit('SHOW_MESSAGE', {
          className: 'ok',
          text: 'работа добавлена'
        })
      } catch (error) {
        commit('SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        })
      }
    },
    async updateWork({ commit }, editWork) {
      try {
        const { data } = await this.$axios.post(`/works/${editWork[0]}`, editWork[1]);
        commit('UPDATE_WORK', data);
        commit('SHOW_MESSAGE', {
          className: 'ok',
          text: 'работа сохранена'
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