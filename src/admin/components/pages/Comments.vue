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
          @saveComment='saveComment'
          :photo='photo'
          :author='author'
          :occ='occ'
          :text='text'
        )

      .comments__show
        .comments__card
          NewCard(
            info='Добавить отзыв'
            @editorComment='editorComment'
          )

        //- карточки отзывов
        .comments__card(
          v-for='comment in comments'
          :key='comment.id'
        )
          Comment(
            :comment='comment'
            @deleteComment='deleteComment'
            @editComment='editComment'
          )
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "https://webdev-api.loftschool.com/";
const token = localStorage.getItem("token") || "";
axios.defaults.headers["Authorization"] = `Bearer ${token}`;

export default {
  data: () => ({
    comments: [],
    photo: '',
    author: '',
    occ: '',
    text: '',
    id: 0,
    isEdit: false,
    isUpdate: false
  }),
  components: {
    NewCard: () => import('../blocks/NewCard'),
    CommentEdit: () => import('../blocks/CommentEdit'),
    Comment: () => import('../blocks/Comment')
  },
  methods: {
    editorComment() {
      this.isEdit = true;
    },
    cancelEdit() {
      this.photo = '';
      this.author = '';
      this.occ = '';
      this.text = '';
      this.id = 0;
      this.isUpdate = false;
      this.isEdit = false;
    },
    saveComment(data) {
      const id = !this.isUpdate ? '' : `/${this.id}`;
      axios
        .post('/reviews' + id, data)
        .then(response => {
          this.getComments();
        })
        .catch(error => {
          console.error(error.response);
        });
    },
    editComment(id) {
      const comment = this.comments.filter(comment => comment.id === id)[0];
      this.photo = comment.photo;
      this.author = comment.author;
      this.occ = comment.occ;
      this.text = comment.text;
      this.id = comment.id;
      this.isEdit = true;
      this.isUpdate = true;
    },
    deleteComment(id) {
      axios
        .delete(`/reviews/${id}`)
        .then(response => {
          this.getComments();
        })
        .catch(error => {
          console.error(error.response);
        });
    },
    getComments() {
      axios
        .get('/reviews/193')
        .then(response => {
          this.comments = response.data;
        })
        .catch(error => {
          console.error(error.response.data.error);
        });
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