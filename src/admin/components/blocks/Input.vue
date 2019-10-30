<template lang="pug">
  label.field
    span(v-if='error').field__error {{ error }}
    span.field__label {{ label }}
    textarea(
      v-if='type === "textarea"'
      :type='type' 
      :value='value'
      @input='$emit("input", $event.target.value)'
    ).field__input.field__input--textarea
    input(
      v-else
      :type='type' 
      :value='value'
      @input='$emit("input", $event.target.value)'
    ).field__input
</template>

<script>
export default {
  props: {
    label: String,
    error: String,
    type: {
      type: String,
      default: 'text'
    },
    value: String
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.field {
  display: block;
  position: relative;
  font-weight: 600;
}
.field__error {
  position: absolute;
  font-size: 13px;
  font-weight: 300;
  color: #fff;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  padding: 1px 10px;
  background: #cd1515;
  border-radius: 3px;
  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 11px 8px 11px;
    border-color: transparent transparent #cd1515 transparent;
  }
}
.field__label {
  opacity: 0.5;
}
.field__input {
  display: block;
  width: 100%;
  font-size: 16px;
  margin-top: 20px;
  padding-bottom: 20px;
  outline: none;
  border: none;
  opacity: 1;
  border-bottom: 1px solid rgba(#414c63, 0.3);
  transition: .3s border ease;
  &--textarea {
    font-family: inherit;
    font-size: inherit;
    resize: none;
    height: 145px;
    padding: 10px 80px 10px 20px;
    line-height: 1.7;
    border: solid 1px rgba(#414c63, 0.3);
    @include desktop {
      padding: 10px;
    }
    &:focus {
      border: solid 1px rgba(#ea7400, 0.3);
    }
    &:invalid {
      border: solid 1px rgba(#fb0000, 0.3);
    }
  }
  &:focus {
    border-bottom: 1px solid rgba(#ea7400, 0.3);
  }
  &:invalid {
    border-bottom: 1px solid rgba(#fb0000, 0.3);
  }
}
</style>