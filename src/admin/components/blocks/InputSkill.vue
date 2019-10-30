<template lang="pug">
  form(
    @submit.prevent='saveField'
    :class='{edit: isEdit}'
  ).skills__item
    input(type='text' :value='value').skills__input
    input(type='text' :value='percent').skills__input.skills__input--percent
    span.skills__percent %
    .skills__btns(v-if='!isEdit')
      button(type='button' @click='editField').btn.btn--edit
      button(type='button' @click='deleteField').btn.btn--delete
    .skills__btns(v-else)
      button.btn.btn--edit
      button(type='button' @click='cancelEditField').btn.btn--delete
</template>

<script>
import { Validator } from 'simple-vue-validator';

export default {
  props: {
    value: String,
    percent: String | Number
  },
  data: () => ({
    editValue: String,
    editPercent: String | Number,
    isEdit: false
  }),
  methods: {
    editField() {
      this.isEdit = true;
      console.log('edit skill');
    },
    cancelEditField() {
      this.isEdit = false;
      console.log('cancel edit skill');
    },
    saveField() {
      this.$validate()
        .then(function (success) {
          if (success) {
            console.log("save skill", success);
          }
        });
    },
    deleteField() {
      if (confirm('Удалить skill?')) {
        console.log('delete skill');
      }
    }
  },
  validators: {
    // 'editWork.title': function(value) {
    //   return Validator.value(value).required();
    // }
  }
}
</script>