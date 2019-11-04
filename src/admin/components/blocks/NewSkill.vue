<template lang="pug">
  form(@submit.prevent='saveSkill').skills__footer.edit
    .skills__field
      input(
        type='text' 
        placeholder='Новый навык'
        v-model='newSkill'
      ).skills__input
      span(v-if='errorSkill').skills__error {{ errorSkill }}
    .skills__field
      input(
        type='text'
        v-model='newPercent'
      ).skills__input.skills__input--percent
      span(v-if='errorPercent').skills__error {{ errorPercent }}
      span.skills__percent %
    button.skills__plus
      .plus.plus--bg
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
    category: Number
  },
  data: () => ({
    newSkill: "",
    newPercent: 0 | Number
  }),
  computed: {
    errorSkill() {
      return this.validation.firstError("newSkill");
    },
    errorPercent() {
      return this.validation.firstError("newPercent");
    }
  },
  methods: {
    saveSkill() {
      this.$validate().then(success => {
        if (success) {
          axios
            .post("/skills", {
              title: this.newSkill,
              percent: this.newPercent,
              category: this.category
            })
            .then(response => {
              this.validation.reset();
              this.newSkill = "";
              this.newPercent = 0;
              this.$emit("updateSkill");
            })
            .catch(error => {
              console.error(error.response.data.error);
            });
        }
      });
    }
  },
  validators: {
    newSkill: function(value) {
      return Validator.value(value).required("Заполните поле");
    },
    newPercent: function(value) {
      return Validator.value(value)
        .digit("Только числа")
        .maxLength(2, "от 0 до 99");
    }
  }
};
</script>