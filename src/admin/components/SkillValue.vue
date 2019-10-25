<template lang="pug">
  .skills__item
    span.skills__value {{ value }}
    span.skills__value.skills__value--percent {{ percent }}
    span.skills__percent %
    .skills__btns
      button(type='button' @click.self='$emit("showInput", id)').btn.btn--edit
      button(type='button').btn.btn--delete
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