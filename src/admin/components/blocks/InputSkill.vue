<template lang="pug">
  form(
    @submit.prevent
    :class='{edit: isEdit}'
  ).skills__item
    .skills__field
      input(
        type='text'
        v-model='editValue'
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
import { Validator } from 'simple-vue-validator';

export default {
  props: {
    value: String,
    percent: Number
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
  created() {
    this.editValue = this.value;
    this.editPercent = this.percent;
  },
  validators: {
    'editValue': function(value) {
      return Validator.value(value).required();
    },
    'editPercent': function(value) {
      return Validator.value(value).digit('Только числа').maxLength(2, 'от 0 до 99');
    }
  }
}
</script>