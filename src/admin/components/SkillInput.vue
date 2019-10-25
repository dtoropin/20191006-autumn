<template lang="pug">
  .skills__item
    input(type='text' name='skill' :value='value').skills__input
    input(type='text' name='percent' :value='percent').skills__input.skills__input--percent
    span.skills__percent %
    .skills__btns
      button(type='button').btn.btn--edit--ok
      button(type='button').btn.btn--edit--delete
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    percent: {
      type: Number,
      default: 0
    },
    id: ''
  }
}
</script>