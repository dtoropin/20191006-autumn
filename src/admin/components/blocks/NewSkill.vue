<template lang="pug">
  form(@submit.prevent='saveSkill').skills__footer.edit
    input(
      type='text' 
      placeholder='Новый навык'
      v-model='newSkill'
    ).skills__input
    input(
      type='text'
      v-model='newPercent'
    ).skills__input.skills__input--percent
    span.skills__percent %
    button.skills__plus
      .plus.plus--bg
</template>

<script>
import { Validator } from 'simple-vue-validator';

export default {
  data: () => ({
    newSkill: '',
    newPercent: '0'
  }),
  methods: {
    saveSkill() {
      this.$validate()
        .then(function (success) {
          if (success) {
            console.log("save Skill", success);
          }
        });
    }
  },
  validators: {
    'newSkill': function(value) {
      return Validator.value(value).required();
    },
    'newPercent': function(value) {
      return Validator.value(value).required();
    }
  }
}
</script>