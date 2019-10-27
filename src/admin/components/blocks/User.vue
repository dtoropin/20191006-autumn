<template lang="pug">
  .user(:class='{review: isReview}')
    .user__img
      img(:src='src' :alt='name')
    .user__info
      h4.user__title {{ name }}
      span.user__position {{ position }}
</template>

<script>
export default {
  props: {
    isReview: {
      type: Boolean,
      default: false
    },
    photo: {
      type: String,
      default: 'user-default.jpg'
    },
    name: String,
    position: String
  },
  computed: {
    src() {
      return require(`../../../images/content/${this.photo}`);
    }
  }
}
</script>

<style lang="postcss" scoped>
/* user */
.user {
  display: flex;
  align-items: center;
  &.review {
    align-items: flex-start;
    & .user__title {
      margin-bottom: 9px;
    }
    & .user__position {
      display: block;
    }
  }
}
.user__img {
  flex-shrink: 0;
  width: 50PX;
  height: 50PX;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}
.user__title {
  font-size: 18px;
  font-weight: bold;
}
.user__position {
  display: none;
  font-weight: 600;
  opacity: 0.5;
}
</style>