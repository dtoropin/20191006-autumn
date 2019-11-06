<template lang="pug">
  .comment
    .comment__user
      .comment__img
        img(:src='srcPhoto' :alt='comment.author')
      .comment__info
        h4.comment__author {{ comment.author }}
        span.comment__occ {{ comment.occ }}
    
    .comment__text
      p {{ comment.text }}

    .comment__btns
      button(type='button' @click='editComment').btn-card.btn-card--edit Править
      button(type='button' @click='deleteComment').btn-card.btn-card--delete Удалить
</template>

<script>
export default {
  props: {
    comment: {
      type: Object
    }
  },
  computed: {
    srcPhoto() {
      return 'https://webdev-api.loftschool.com/' + this.comment.photo;
    }
  },
  methods: {
    deleteComment() {
      if (confirm(`Удалить отзыв "${this.comment.author}"?`)) {
        this.$emit('deleteComment', this.comment.id);
      }
    },
    editComment() {
      this.$emit('editComment', this.comment.id);
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
/* comment */
.comment {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.1);
  &.edited {
    opacity: 0.4;
  }
}
.comment__user {
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(#000, 0.1);
  display: flex;
  align-items: flex-start;
}
.comment__img {
  flex-shrink: 0;
  width: 50PX;
  height: 50PX;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}
.comment__author {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 9px;
}
.comment__occ {
  font-weight: 600;
  opacity: 0.5;
}
.comment__text {
  flex-grow: 1;
  padding: 30px 10px;
  font-weight: 600;
  opacity: 0.7;
}
.comment__btns {
  display: flex;
  justify-content: space-between;
}
</style>