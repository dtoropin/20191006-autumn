<template lang="pug">
  section.comments
    .container
      .comments__header
        h2.section-title Блок «Отзывы»
      
      //- блок редактирования отзыва
      EditComment

      .comments__show
        .comments__card
          NewCard(info='Добавить отзыв')

        //- карточки отзывов
        .comments__card(
          v-for='comment in data'
          :key='comment.id'
        )
          ReviewCard(:comment='comment')
</template>

<script>
export default {
  props: {
    data: Array
  },
  components: {
    EditComment: () => import('../blocks/EditComment'),
    NewCard: () => import('../blocks/NewCard'),
    ReviewCard: () => import('../blocks/ReviewCard')
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

/* comments */
.comments {
  padding-top: 60px;
  margin-bottom: 30px;
}
.comments__header {
  margin-bottom: 60px;
}
.comments__show {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding-top: 30px;
  margin-bottom: 30px;
  @include tablets {
    grid-template-columns: 1fr 1fr;
  }
  @include phones {
    grid-template-columns: 1fr;
  }
}
.comments__card {
  min-height: 380px;
  height: 100%;
  &:first-child {
  @include phones {
      min-height: 100px;
    }
  }
}
</style>