<template lang="pug">
  form(@submit.prevent='saveSkill').adding
    .adding__field
      input(
        type='text' 
        placeholder='Новый навык'
        v-model='newTitle'
      ).adding__input
      span(v-if='errorTitle').adding__error {{ errorTitle }}
    .adding__field
      input(
        type='text'
        v-model='newPercent'
      ).adding__input.adding__input--percent
      span(v-if='errorPercent').adding__error {{ errorPercent }}
      span.adding__percent %
    button.adding__plus
      .plus.plus--bg
</template>

<script>
import { mapActions } from 'vuex';
import { Validator } from "simple-vue-validator";
export default {
  props: {
    category: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    newTitle: '',
    newPercent: 0
  }),
  computed: {
    errorTitle() {
      return this.validation.firstError("newTitle");
    },
    errorPercent() {
      return this.validation.firstError("newPercent");
    }
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    async saveSkill() {
      try {
        if (await this.$validate()) {
          const skill = {
            title: this.newTitle,
            percent: this.newPercent,
            category: this.category
          }
          this.addSkill(skill);
          this.validation.reset();
          this.newTitle = '';
          this.newPercent = 0;
        }
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    onBlur() {
      this.validation.reset();
    }
  },
  validators: {
    newTitle: function(value) {
      return Validator.value(value).required("Заполните поле");
    },
    newPercent: function(value) {
      return Validator.value(value)
        .digit("Только числа")
        .maxLength(2, "от 0 до 99");
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
/* add new skill */
.adding {
  position: relative;
  width: 80%;
  display: grid;
  margin-left: auto;
  grid-template-columns: 1fr 55px 50px;
  grid-column-gap: 20px;
  align-items: center;
  @include phones {
    width: 100%;
  }
}
.adding__field {
  position: relative;
}
.adding__input {
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 7px;
  border-bottom: 1px solid #ccc;
  transition: 0.3s border ease;
  &--percent {
    padding-right: 17px;
  }
  &:focus {
    border-bottom: 1px solid rgba(#ea7400, 0.5);
  }
}
.adding__field {
  position: relative;
}
.adding__error {
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
.adding__percent {
  position: absolute;
  bottom: 20%;
  right: 5px;
}
.adding__plus {
  & .plus {
    width: 40px;
    height: 40px;
    font-size: 30px;
  }
  &:hover .plus {
    background-image: linear-gradient(to bottom, #f29400, #ea7400);
  }
}
</style>