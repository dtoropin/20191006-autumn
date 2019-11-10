export default {
  namespaced: true,
  state: {
    categories: [],
    isNew: false
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, category) {
      state.categories.unshift(category);
    },
    DELETE_CATEGORY(state, id) {
      state.categories = state.categories.filter(cat => {
        if (cat.id !== id) return cat;
      })
    },
    CHANGE_ISNEW(state, bool) {
      state.isNew = bool;
    },
    ADD_SKILL(state, newSkill) {
      state.categories = state.categories.map(cat => {
        if (cat.id === newSkill.category) {
          cat.skills.push(newSkill);
        }
        return cat;
      })
    },
    REMOVE_SKILL(state, delSkill) {
      const removeSkill = category => {
        category.skills = category.skills.filter(
          skill => skill.id !== delSkill.id
        );
      };
      const findCategory = category => {
        if (category.id === delSkill.category) {
          removeSkill(category);
        }
        return category;
      };
      state.categories = state.categories.map(findCategory);
    },
    UPDATE_SKILL(state, updSkill) {
      const updateSkill = category => {
        category.skills = category.skills.map(skill =>
          skill.id === updSkill.id ? updSkill : skill
        )
      }
      const findCategory = category => {
        if (category.id === updSkill.category) {
          updateSkill(category);
        }
        return category;
      };
      state.categories = state.categories.map(findCategory);
    }
  },
  actions: {
    async getCategories({ commit }) {
      try {
        const { data } = await this.$axios.get('/categories/193');
        commit('SET_CATEGORIES', data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async addCategory({ commit }, title) {
      try {
        const { data } = await this.$axios.post('/categories', { title });
        commit('ADD_CATEGORY', data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async deleteCategory({ commit }, id) {
      try {
        const { data } = await this.$axios.delete(`/categories/${id}`);
        commit('DELETE_CATEGORY', id);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    changeIsNew({ commit }, bool) {
      commit('CHANGE_ISNEW', bool);
    }
  }
}