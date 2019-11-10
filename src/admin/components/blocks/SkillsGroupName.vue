<template lang="pug">
  form(
    @submit.prevent
    :class='{edit: isEdit}'
  ).group
    .group__field
      input(
        type='text' 
        placeholder='Название группы'
        v-model='editGroupName'
        ref='input'
      ).group__input.group__input--title
      span(v-if='error').group__error {{ error }}
    .group__btns(v-if='isEdit')
      button(type='submit' @click='saveGroup').btn.btn--edit
      button(type='button' @click='cancelEdit').btn.btn--delete
    .group__btns(v-else)
      button(type='button' @click='editGroup').btn.btn--edit
      button(type='button' @click='deleteGroup').btn.btn--delete
</template>

<script>
import { Validator } from "simple-vue-validator";
import { mapActions } from 'vuex';
export default {
  data: () => ({
    isEdit: false,
    editGroupName: ''
  }),
  props: {
    groupName: String,
    id: {
      type: Number,
      default: 0
    }
  },
  computed: {
    error() {
      return this.validation.firstError('editGroupName');
    }
  },
  methods: {
    ...mapActions('categories', [
      'addCategory',
      'deleteCategory',
      'changeIsNew'
    ]),
    deleteGroup() {
      const title = this.groupName !== '' ? this.groupName : 'Группу';
      if (confirm(`Удалить "${this.groupName}"?`)) {
        this.changeIsNew(false);
        if (this.id !== 0) this.deleteCategory(this.id);
      }
    },
    editGroup() {
      this.isEdit = true;
      this.$refs.input.focus();
    },
    cancelEdit() {
      this.validation.reset();
      this.isEdit = false;
      this.editGroupName = this.groupName;
    },
    async saveGroup() {
      try {
        if (await this.$validate()) {
          this.changeIsNew(false);
          if (this.editGroupName === this.groupName) {
            this.isEdit = false;
            return false;
          } else {
            this.id !== 0 
              ? console.log(this.id) 
              : this.addCategory(this.editGroupName)
          }
        }
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  },
  created() {
    if (this.groupName !== '') {
      this.editGroupName = this.groupName;
    }
  },
  validators: {
    editGroupName: function(value) {
      return Validator.value(value).required("Заполните поле");
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
/* group */
.group {
  position: relative;
  display: grid;
  grid-template-columns: 82% 15%;
  grid-column-gap: 3%;
  align-items: center;
}
.group.edit {
  & .group__input {
    border-bottom: 1px solid #ccc;
    pointer-events: auto;
    &:focus {
      border-bottom: 1px solid rgba(#ea7400, 0.5);
    }
  }
  & .btn--edit {
    background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%)
      no-repeat;
  }
  & .btn--delete {
    background: svg-load("cross.svg", fill=#ff0101, width=100%, height=100%)
      no-repeat;
  }
}
.group__input {
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 7px;
  border-bottom: 1px solid transparent;
  pointer-events: none;
  transition: 0.3s border ease;
  &--title {
    font-size: 18px;
    font-weight: 700;
  }
  &--percent {
    padding-right: 17px;
  }
}
.group__field {
  position: relative;
}
.group__error {
  position: absolute;
  font-size: 13px;
  font-weight: 300;
  color: #fff;
  top: 100%;
  display: block;
  padding: 1px 10px;
  background: rgba(#cd1515, 0.8);
  border-radius: 3px;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 5px 10px;
    border-color: transparent transparent rgba(#cd1515, 0.8) transparent;
  }
}
.group__percent {
  position: absolute;
  bottom: 20%;
  right: 5px;
}
.group__btns {
  justify-self: end;
  display: inline-flex;
  & .btn:first-child {
    margin-right: 19px;
  }
}
</style>