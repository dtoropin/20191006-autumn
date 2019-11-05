<template lang="pug">
  section.about
    .container
      .about__header
        h2.section-title Блок «Обо мне»
        button(type='button' @click='addNewGroup').add
          .add__plus
            .plus.plus--bg
          .add__text Добавить группу

      .about__block
        Skills(
          v-if='isNew'
          :class='{new: isNew}'
          @deleteComponent='deleteComponent'
          @saveGroup='saveGroup'
        )
        Skills(
          v-for='cat in categories'
          :key='cat.id'
          :cat='cat'
          @deleteComponent='deleteComponent'
          @saveGroup='saveGroup'
          @deleteSkill='deleteSkill'
          @updateSkill='updateSkill'
          @saveSkill='saveSkill'
        )
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "https://webdev-api.loftschool.com/";
const token = localStorage.getItem("token") || "";
axios.defaults.headers["Authorization"] = `Bearer ${token}`;
// user.id = 193

export default {
  data: () => ({
    isNew: false,
    categories: []
  }),
  components: {
    Skills: () => import("../blocks/Skills")
  },
  methods: {
    addNewGroup() {
      this.isNew = true;
    },
    deleteComponent(id) {
      if (id === 0) this.isNew = false;
      else {
        axios
          .delete("/categories/" + id)
          .then(response => {
            this.getCategories();
          })
          .catch(error => {
            console.error(error.response.data.error);
          });
      }
    },
    saveGroup(event) {
      const eidtId = event.id !== 0 ? `/${event.id}` : '';
      axios
        .post("/categories" + eidtId, { title: event.title })
        .then(response => {
          this.getCategories();
        })
        .catch(error => {
          console.error(error.response.data.error);
        });
    },
    getCategories() {
      axios
        .get("/categories/193")
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.error(error.response.data.error);
        });
    },
    deleteSkill(skillId) {
      axios
        .delete(`/skills/${skillId}`)
        .then(response => {
          this.getCategories();
        })
        .catch(error => {
          console.error(error.response.data.error);
        });
    },
    updateSkill(event) {
      axios
        .post(`/skills/${event.id}`, event.data)
        .then(response => {
          this.getCategories();
        })
        .catch(error => {
          console.error(error.response.data.error);
        });
    },
    saveSkill(event) {
      axios
        .post("/skills", event)
        .then(response => {
          this.getCategories();
        })
        .catch(error => {
          console.error(error.response.data.error);
        });
    }
  },
  created() {
    this.getCategories();
  }
};
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";
/* about */
.about {
  padding-top: 50px;
  padding-bottom: 30px;
}
.about__header {
  margin-bottom: 50px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
  @include phones {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;
  }
}
.about__block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @include tablets {
    grid-template-columns: 1fr;
  }
}

/* add */
.add {
  display: flex;
  align-items: center;
  outline: none;
  color: #ea7400;
  transition: 0.3s color ease;
  &:hover {
    color: rgba(#ea7400, 0.7);
    & .plus {
      background-image: linear-gradient(to bottom, #f29400, #ea7400);
    }
  }
}
.add__plus {
  width: 22px;
  height: 22px;
  margin-right: 13px;
  font-size: 18px;
}
.add__text {
  font-weight: 600;
}
</style>