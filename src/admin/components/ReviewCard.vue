<template lang="pug">
  .review-card(:class='{edited: isEdited}')
    .review-card__user
      User(
        isReview=true,
        :name='name',
        :position='position',
        :photo='photo'
      )
    
    .review-card__text
      p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах

    .review-card__btns
      button(type='button').btn-card.btn-card--edit Править
      button(type='button').btn-card.btn-card--delete Удалить
</template>

<script>
import User from './User';

export default {
  props: {
    isEdited: {
      type: Boolean,
      default: false
    },
    photo: {
      type: String,
      default: 'user-default.jpg'
    },
    name: '',
    position: ''
  },
  components: {
    User
  }
}
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

/* review-card */
.review-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.1);
  &.edited {
    opacity: 0.4;
  }  
}
.review-card__user {
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(#000, 0.1);
}
.review-card__text {
  flex-grow: 1;
  padding: 30px 10px;
  font-weight: 600;
  opacity: 0.7;
}
.review-card__btns {
  display: flex;
  justify-content: space-between;
}
</style>