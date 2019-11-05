<template lang="pug">
  form(
    @submit.prevent
    :class='{edit: isEdit}'
  ).item
    .item__field
      input(
        type='text'
        v-model='editTitle'
        ref='input'
      ).item__input
      span(v-if='errorTitle').item__error {{ errorTitle }}
    .item__field
      input(
        type='text'
        v-model='editPercent'
      ).item__input.item__input--percent
      span(v-if='errorPercent').item__error {{ errorPercent }}
      span.item__percent %
    .item__btns(v-if='isEdit')
      button(type='submit' @click='updateSkill').btn.btn--edit
      button(type='button' @click='cancelEdit').btn.btn--delete
    .item__btns(v-else)
      button(type='button' @click='editSkill').btn.btn--edit
      button(type='button' @click='deleteSkill').btn.btn--delete
</template>

<script>
import { Validator } from "simple-vue-validator";
export default {
  props: {
    title: String,
    percent: Number,
    skillId: Number,
    category: Number
  },
  data: () => ({
    isEdit: false,
    editTitle: '',
    editPercent: 0
  }),
  computed: {
    errorTitle() {
      return this.validation.firstError("editTitle");
    },
    errorPercent() {
      return this.validation.firstError("editPercent");
    }
  },
  methods: {
    editSkill() {
      this.isEdit = true;
      this.$refs.input.focus();
    },
    cancelEdit() {
      this.validation.reset();
      this.isEdit = false;
      this.editTitle = this.title;
      this.editPercent = this.percent;
    },
    deleteSkill() {
      if (confirm(`Удалить skill "${this.title}"?`)) {
        this.$emit('deleteSkill', this.skillId);
      }
    },
    updateSkill() {
      this.isEdit = false;
      this.$refs.input.blur();
      if (this.editTitle === this.title && this.editPercent === this.percent) {
        return false;
      }
      this.$validate().then(success => {
        if (success) {
          const data = {
            title: this.editTitle,
            percent: this.editPercent,
            category: this.category
          };
          this.$emit('updateSkill', {id: this.skillId, data: data});
        }
      })
    }
  },
  created() {
    this.editPercent = this.percent;
    this.editTitle = this.title;
  },
  validators: {
    editTitle: function(value) {
      return Validator.value(value).required('Заполните поле');
    },
    editPercent: function(value) {
      return Validator.value(value)
        .digit("Только числа")
        .maxLength(2, "от 0 до 99");
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
/* item */
.item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 55px 50px;
  grid-column-gap: 20px;
  align-items: center;
  margin-bottom: 16px;
}
.item.edit {
  & .item__input {
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
.item__input {
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
.item__field {
  position: relative;
}
.item__error {
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
.item__percent {
  position: absolute;
  bottom: 20%;
  right: 5px;
}
.item__btns {
  justify-self: end;
  display: inline-flex;
  & .btn:first-child {
    margin-right: 19px;
  }
}
</style>