export default {
  namespaced: true,
  actions: {
    async addSkill({ commit }, skill) {
      try {
        const { data } = await this.$axios.post('/skills', skill);
        commit('categories/ADD_SKILL', data, { root: true });
        commit('categories/SHOW_MESSAGE', {
          className: 'ok',
          text: 'skill добавлен'
        }, { root: true })
      } catch (error) {
        commit('categories/SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        }, { root: true })
      }
    },
    async removeSkill({ commit }, skill) {
      try {
        await this.$axios.delete(`/skills/${skill.id}`);
        commit('categories/REMOVE_SKILL', skill, { root: true });
        commit('categories/SHOW_MESSAGE', {
          className: 'warn',
          text: 'skill удален'
        }, { root: true })
      } catch (error) {
        commit('categories/SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        }, { root: true })
      }
    },
    async editThisSkill({ commit }, skill) {
      try {
        const { data } = await this.$axios.post(`/skills/${skill.id}`, skill);
        commit('categories/UPDATE_SKILL', data.skill, { root: true });
        commit('categories/SHOW_MESSAGE', {
          className: 'ok',
          text: 'skill сохранен'
        }, { root: true })
      } catch (error) {
        commit('categories/SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        }, { root: true })
      }
    }
  }
}