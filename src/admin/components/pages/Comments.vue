<template lang="pug">
  section.comments
    .container
      .comments__header
        h2.section-title Блок «Отзывы»
      
      //- блок редактирования отзыва
      .comments__block(v-if='isEdit')
        h3.comments__title Новый отзыв
        CommentEdit(
          @cancelEdit='cancelEdit'
          :editComment='comment'
        )

      .comments__show
        .comments__card
          NewCard(
            info='Добавить отзыв'
            @addNewCard='editorComment'
          )

        //- карточки отзывов
        .comments__card(
          v-for='comment in comments'
          :key='comment.id'
        )
          Comment(
            :comment='comment'
            @editComment='editComment'
          )
    Popup(:message='message')
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data: () => ({
    comment: {},
    isEdit: false
  }),
  computed: {
    ...mapState('comments', {
      comments: state => state.comments,
      message: state => state.message
    })
  },
  components: {
    NewCard: () => import('../blocks/NewCard'),
    CommentEdit: () => import('../blocks/CommentEdit'),
    Comment: () => import('../blocks/Comment'),
    Popup: () => import('../blocks/Popup')
  },
  methods: {
    ...mapActions('comments', ['getComments']),
    editorComment() {
      this.isEdit = true;
    },
    cancelEdit() {
      this.comment = {};
      this.isEdit = false;
    },
    editComment(id) {
      this.comment = this.comments.filter(comment => comment.id === id)[0];
      this.isEdit = true;
    }
  },
  created() {
    this.getComments();
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

/* comments */
.comments {
  padding-top: 50px;
}
.comments__header {
  margin-bottom: 50px;
}
.comments__show {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding-top: 30px;
  padding-bottom: 50px;
  @include tablets {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 30px;
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
.comments__block {
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.1);
  padding: 30px 19px;
}
.comments__title {
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(#000, 0.1);
  margin-bottom: 45px;
}
</style>