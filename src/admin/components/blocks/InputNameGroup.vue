<template lang="pug">
  .skills__header
    form(
      @submit.prevent
      :class='{edit: isEdit}'
    ).skills__title
      .skills__field
        input(
          type='text' 
          placeholder='Название группы'
          v-model='newNameGroup'
          ref='input'
        ).skills__input.skills__input--title
        span(v-if='error').skills__error {{ validation.firstError("newNameGroup") }}
      .skills__btns(v-if='!isEdit')
        button(type='button' @click='editNameGroup').btn.btn--edit
        button(type='button' @click='deleteGroup').btn.btn--delete
      .skills__btns(v-else)
        button(type='submit' @click='saveGroup').btn.btn--edit
        button(type='button' @click='cancelEditGroup').btn.btn--delete
</template>

<script>
import { Validator } from "simple-vue-validator";
import axios from "axios";
axios.defaults.baseURL = "https://webdev-api.loftschool.com/";
const token = localStorage.getItem("token") || "";
axios.defaults.headers["Authorization"] = `Bearer ${token}`;
// user.id = 193

export default {
  props: {
    groupName: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    isEdit: false,
    newNameGroup: ""
  }),
  computed: {
    error() {
      return this.validation.firstError("newNameGroup");
    }
  },
  methods: {
    editNameGroup() {
      this.isEdit = true;
      this.$refs.input.focus();
    },
    cancelEditGroup() {
      this.validation.reset();
      this.newNameGroup = this.groupName;
      this.isEdit = false;
    },
    saveGroup() {
      this.$validate().then(success => {
        if (success) {
          const id = this.id !== 0 ? `/${this.id}` : "";
          axios
            .post("/categories" + id, { title: this.newNameGroup })
            .then(response => {
              this.isEdit = false;
              const cat = id !== "" ? false : response.data;
              this.$emit("updateCategories", cat);
            })
            .catch(error => {
              console.error(error.response.data.error);
            });
        }
      });
    },
    deleteGroup() {
      if (this.id !== 0 && confirm(`Удалить "${this.newNameGroup}"?`)) {
        axios
          .delete("/categories/" + this.id)
          .then(response => {
            this.isEdit = false;
            this.$emit("deleteGroup", this.id);
          })
          .catch(error => {
            console.error(error.response.data.error);
          });
      } else {
        this.$emit("deleteGroup", false);
      }
    }
  },
  created() {
    if (this.groupName !== "") {
      this.newNameGroup = this.groupName;
    }
  },
  validators: {
    newNameGroup: function(value) {
      return Validator.value(value).required("Заполните поле");
    }
  }
};
</script>