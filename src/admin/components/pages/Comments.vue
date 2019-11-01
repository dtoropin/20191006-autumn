<template lang="pug">
  section.comments
    .container
      .comments__header
        h2.section-title Блок «Отзывы»
      
      //- блок редактирования отзыва
      .comments__block
        h3.comments__title Новый отзыв
        form(@submit.prevent='saveComment').edit-comment
          .download-file
            input(
              type='file' 
              accept='image/jpeg,image/png,image/jpg'
              @change='handleFile'
            )#photo.download-file__input
            label(for='photo').download-file__label
              .download-file__img
                img(v-if='filePreview' :src='filePreview' alt='avatar')
                img(v-else src='../../../images/content/user-default.jpg' alt='avatar')
              span.download-file__text Изменить фото
          
          .edit-comment__form
            .edit-comment__row
              .edit-comment__field
                Input(
                  v-model='editComment.name'
                  :value='editComment.name'
                  :error='validation.firstError("editComment.name")'
                  label='Имя автора'
                )
              .edit-comment__field
                Input(
                  v-model='editComment.pos'
                  :value='editComment.pos'
                  :error='validation.firstError("editComment.pos")'
                  label='Титул автора'
                )

            .edit-comment__field
              Input(
                v-model='editComment.text'
                :value='editComment.text'
                :error='validation.firstError("editComment.text")'
                label='Отзыв'
                type='textarea'
              )

            .edit-comment__btns
              button(type='button' @click='cancelEdit').btn-zero Отмена
              button.btn-default Сохранить

      .comments__show
        .comments__card
          NewCard(
            info='Добавить отзыв'
            @addNewBlock='addNewBlock'
          )

        //- карточки отзывов
        .comments__card(
          v-for='comment in comments'
          :key='comment.id'
        )
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
              button(type='button' @click='editThisComment').btn-card.btn-card--edit Править
              button(type='button' @click='deleteComment').btn-card.btn-card--delete Удалить
</template>

<script>
import { Validator } from "simple-vue-validator";

export default {
  data: () => ({
    comments: [],
    editComment: {
      name: "",
      pos: "",
      text: "",
      photo: ""
    },
    filePreview: ""
  }),
  created() {
    this.comments = require("../../../data/comments.json");
  },
  methods: {
    handleFile(e) {
      const photoFile = this.fileFromForm(e);
      this.editComment.photo = photoFile;
      this.renderFile(photoFile).then(f => {
        this.filePreview = f;
      });
    },
    fileFromForm(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) throw new Error("Нет файла");
      return files[0];
    },
    renderFile(file) {
      const reader = new FileReader();
      return new Promise((resolve) => {
        try {
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            resolve(reader.result);
          };
        } catch (error) {
          throw new Error("Ошибка при чтении файла");
        }
      });
    },
    cancelEdit() {
      this.validation.reset();
      this.filePreview = '';
      console.log("cancel edit comment");
    },
    saveComment() {
      this.$validate().then((success) => {
        if (success) {
          console.log("save comment", success);
        }
      });
    },
    addNewBlock() {
      console.log("add new comment");
    },
    editThisComment() {
      console.log("edit comment");
    },
    deleteComment() {
      if (confirm("Удалить отзыв?")) {
        console.log("delete comment");
      }
    }
  },
  validators: {
    "editComment.name": function(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "editComment.pos": function(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "editComment.text": function(value) {
      return Validator.value(value).required("Заполните поле");
    }
  },
  components: {
    Input: () => import("../blocks/Input"),
    NewCard: () => import("../blocks/NewCard"),
    User: () => import("../blocks/User")
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

/* edit comment */
.edit-comment {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 30px;
  padding-top: 30px;
  margin-bottom: 30px;
  @include tablets {
    grid-template-columns: 1fr;
  }
}
.edit-comment__form {
  max-width: 620px;
  @include tablets {
    width: 80%;
    justify-self: center;
  }
  @include phones {
    width: 100%;
  }
}
.edit-comment__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @include phones {
    grid-template-columns: 1fr;
  }
}
.edit-comment__field {
  margin-bottom: 23px;
}
.edit-comment__btns {
  display: flex;
  justify-content: flex-end;
  @include phones {
    justify-content: center;
  }
}
/* download-file */
.download-file {
  position: relative;
  text-align: center;
}
.download-file__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.download-file__label {
  cursor: pointer;
  &:hover {
    & .download-file__img {
      box-shadow: 0 0 10px rgba(#ea7400, 0.8);
    }
    & .download-file__text {
      opacity: 0.7;
    }
  }
}
.download-file__img {
  width: 187px;
  height: 187px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 25px;
  transition: 0.3s box-shadow ease;
  @include tablets {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
}
.download-file__text {
  font-weight: 600;
  color: #ea7400;
  transition: 0.3s color ease, 0.3s opacity ease;
}

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