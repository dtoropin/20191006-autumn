<template lang="pug">
  form(
    @submit.prevent
    :class='{edit: isEdit}'
  ).skills__item
    .skills__field
      input(
        type='text'
        v-model='editValue'
        ref='input'
      ).skills__input
      span(v-if='errorValue').skills__error {{ errorValue }}
    .skills__field
      input(
        type='text'
        v-model='editPercent'
      ).skills__input.skills__input--percent
      span(v-if='errorPercent').skills__error {{ errorPercent }}
      span.skills__percent %
    .skills__btns(v-if='!isEdit')
      button(type='button' @click='editField').btn.btn--edit
      button(type='button' @click='deleteField').btn.btn--delete
    .skills__btns(v-else)
      button(type='submit' @click='saveField').btn.btn--edit
      button(type='button' @click='cancelEditField').btn.btn--delete
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
    value: String,
    percent: Number,
    category: Number,
    id: Number
  },
  data: () => ({
    editValue: String,
    editPercent: Number,
    isEdit: false
  }),
  computed: {
    errorValue() {
      return this.validation.firstError("editValue");
    },
    errorPercent() {
      return this.validation.firstError("editPercent");
    }
  },
  methods: {
    editField() {
      this.isEdit = true;
      this.$refs.input.focus();
    },
    cancelEditField() {
      this.isEdit = false;
      this.editValue = this.value;
      this.editPercent = this.percent;
    },
    saveField() {
      this.$validate().then(success => {
        if (success) {
          axios
            .post(`/skills/${this.id}`, {
              title: this.editValue,
              percent: this.editPercent,
              category: this.category
            })
            .then(response => {
              this.isEdit = false;
              this.$emit("updateSkill");
            })
            .catch(error => {
              console.error(error.response.data.error);
            });
        }
      });
    },
    deleteField() {
      if (confirm(`Удалить "${this.value}: ${this.percent}%"?`)) {
        axios
          .delete(`/skills/${this.id}`)
          .then(response => {
            this.$emit("updateSkill");
          })
          .catch(error => {
            console.error(error.response.data.error);
          });
      }
    }
  },
  created() {
    this.editValue = this.value;
    this.editPercent = this.percent;
  },
  validators: {
    editValue: function(value) {
      return Validator.value(value).required();
    },
    editPercent: function(value) {
      return Validator.value(value)
        .digit("Только числа")
        .maxLength(2, "от 0 до 99");
    }
  }
};
</script>