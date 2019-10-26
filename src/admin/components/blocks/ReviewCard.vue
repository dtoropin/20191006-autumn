<template lang="pug">
  .review-card
    .review-card__user
      User(
        isReview=true,
        :name='comment.name',
        :position='comment.pos',
        :photo='comment.photo'
      )
    
    .review-card__text
      p {{ comment.text }}

    .review-card__btns
      button(type='button').btn-card.btn-card--edit Править
      button(type='button').btn-card.btn-card--delete Удалить
</template>

<script>
export default {
  props: {
    comment: {}
  },
  components: {
    User: () => import('./User')
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

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