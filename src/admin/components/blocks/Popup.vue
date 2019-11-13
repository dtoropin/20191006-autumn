<template lang="pug">
  .popup(
    v-if='message.show'
    :class='message.className'
  ) {{ message.text }}
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: {
        text: 'success',
        className: 'ok'
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.popup {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 50%;
  background-color: rgba(#2d3c4e, .9);
  z-index: 100;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  font-size: 21px;
  font-weight: 600;
  color: #fff;
  padding: 10px 30px;
  min-width: 200px;
  max-width: 90%;
  box-shadow: 0 0 10px #000;
  &.ok {
    background-color: #4bb133;
  }
  &.warn {
    background-color: #b18333;
  }
  &.error {
    background-color: #b13333;
  }
}
</style>