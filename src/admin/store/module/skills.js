export default {
  namespaced: true,
  actions: {
    async addSkill({ commit }, skill) {
      try {
        const { data } = await this.$axios.post('/skills', skill);
        commit('categories/ADD_SKILL', data, { root: true });
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeSkill({ commit }, skill) {
      try {
        await this.$axios.delete(`/skills/${skill.id}`);
        commit('categories/REMOVE_SKILL', skill, { root: true });
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editThisSkill({ commit }, skill) {
      try {
        const { data } = await this.$axios.post(`/skills/${skill.id}`, skill);
        commit('categories/UPDATE_SKILL', data.skill, { root: true });
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
}