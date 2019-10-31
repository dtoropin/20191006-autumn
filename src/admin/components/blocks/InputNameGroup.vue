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
  computed: {
    error() {
      return this.validation.firstError("newNameGroup");
    }
  },
  methods: {
    editNameGroup() {
      this.isEdit = true;
      console.log('edit Name Group')
    },
    cancelEditGroup() {
      this.validation.reset();
      this.isEdit = false;
      console.log('cancel Edit Group')
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
      return Validator.value(value).required('Заполните поле');
    }
  }
}
</script>