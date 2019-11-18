export default {
  namespaced: true,
  state: {
    categories: [],
    isNew: false,
    message: {}
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, category) {
      category.skills = [];
      state.categories.unshift(category);
    },
    DELETE_CATEGORY(state, id) {
      state.categories = state.categories.filter(cat => {
        if (cat.id !== id) return cat;
      })
    },
    UPDATE_CATEGORY(state, data) {
      state.categories = state.categories.map(cat => {
        if (cat.id === data.id) {
          cat.category = data.category
        }
        return cat;
      })
    },
    CHANGE_ISNEW(state, bool) {
      state.isNew = bool;
    },
    ADD_SKILL(state, newSkill) {
      state.categories = state.categories.map(cat => {
        if (cat.id === newSkill.category) {
          if (!cat.skills) cat.skills = [];
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
    async getCategories({ commit, rootState }) {
      try {
        const userID = rootState.user.user.id;
        const { data } = await this.$axios.get(`/categories/${userID}`);
        commit('SET_CATEGORIES', data);
      } catch (error) {
        commit('SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        })
      }
    },
    async addCategory({ commit }, title) {
      try {
        const { data } = await this.$axios.post('/categories', { title });
        commit('ADD_CATEGORY', data);
        commit('SHOW_MESSAGE', {
          className: 'ok',
          text: 'категория добавлена'
        })
      } catch (error) {
        commit('SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        })
      }
    },
    async deleteCategory({ commit }, id) {
      try {
        await this.$axios.delete(`/categories/${id}`);
        commit('DELETE_CATEGORY', id);
        commit('SHOW_MESSAGE', {
          className: 'warn',
          text: 'категория удалена'
        })
      } catch (error) {
        commit('SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        })
      }
    },
    async updateCategory({ commit }, cat) {
      try {
        const { data } = await this.$axios.post(`/categories/${cat.id}`, {title: cat.title});
        commit('UPDATE_CATEGORY', data.category);
        commit('SHOW_MESSAGE', {
          className: 'ok',
          text: 'категория сохранена'
        })
      } catch (error) {
        commit('SHOW_MESSAGE', {
          className: 'error',
          text: error.response.data.error || error.response.data.message
        })
      }
    },
    changeIsNew({ commit }, bool) {
      commit('CHANGE_ISNEW', bool);
    }
  }
}