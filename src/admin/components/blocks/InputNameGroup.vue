<template lang="pug">
  .skills__header
    form(
      @submit.prevent='saveGroup'
      :class='{edit: isEdit}'
    ).skills__title
      input(
        type='text' 
        placeholder='Название группы'
        v-model='newNameGroup'
      ).skills__input.skills__input--title
      .skills__btns(v-if='!isEdit')
        button(type='button' @click='editNameGroup').btn.btn--edit
        button(type='button' @click='deleteGroup').btn.btn--delete
      .skills__btns(v-else)
        button.btn.btn--edit
        button(type='button' @click='cancelEditGroup').btn.btn--delete
</template>

<script>
import { Validator } from 'simple-vue-validator';

export default {
  props: {
    groupName: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    isEdit: false,
    newNameGroup: ''
  }),
  methods: {
    editNameGroup() {
      this.isEdit = true;
    },
    cancelEditGroup() {
      this.isEdit = false;
    },
    saveGroup() {
      
      this.$validate()
        .then(function (success) {
          if (success) {
            console.log("save Group", success);
          }
        });
    },
    deleteGroup() {
      if (confirm('Удалить Group?')) {
        console.log('delete Group');
      }
    }
  },
  created() {
    if(this.groupName != '') {
      this.newNameGroup = this.groupName;
    }
  },
  validators: {
    'newNameGroup': function(value) {
      return Validator.value(value).required();
    }
  }
}
</script>