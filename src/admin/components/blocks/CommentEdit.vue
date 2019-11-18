<template lang="pug">
  form(@submit.prevent='savedComment').edit-comment
    .download-file
      input(
        type='file' 
        accept='image/jpeg,image/png,image/jpg'
        @change='handleFile'
      )#photo.download-file__input
      label(for='photo').download-file__label
        .download-file__img
          img(v-if='filePreview' :src='filePreview' alt='avatar')
          img(v-else-if='comment.photo' :src='"https://webdev-api.loftschool.com/" + comment.photo' alt='avatar')
          img(v-else src='../../../images/content/user-default.jpg' alt='avatar')
        span.download-file__text Изменить фото
        span(v-if='errorFile').download-file__error {{ errorFile }}
    
    .edit-comment__form
      .edit-comment__row
        .edit-comment__field
          Input(
            v-model='comment.author'
            label='Имя автора'
            :error='errorAuthor'
          )
        .edit-comment__field
          Input(
            v-model='comment.occ'
            label='Титул автора'
            :error='errorOcc'
          )

      .edit-comment__field
        Input(
          v-model='comment.text'
          label='Отзыв'
          type='textarea'
          :error='errorText'
        )

      .edit-comment__btns
        button(type='button' @click='cancelEdit').btn-zero Отмена
        button.btn-default Сохранить
</template>

<script>
import { mapActions } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  props: {
    editComment: Object
  },
  data: () => ({
    comment: {
      photo: "",
      author: "",
      occ: "",
      text: ""
    },
    filePreview: ""
  }),
  computed: {
    errorFile() {
      return this.validation.firstError("comment.photo");
    },
    errorAuthor() {
      return this.validation.firstError("comment.author");
    },
    errorOcc() {
      return this.validation.firstError("comment.occ");
    },
    errorText() {
      return this.validation.firstError("comment.text");
    }
  },
  methods: {
    ...mapActions("comments", ["saveComment", "updateComment"]),
    handleFile(e) {
      const photoFile = this.fileFromForm(e);
      this.comment.photo = photoFile;
      this.renderFile(photoFile).then(f => (this.filePreview = f));
    },
    fileFromForm(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) throw new Error("Нет файла");
      return files[0];
    },
    renderFile(file) {
      const reader = new FileReader();
      return new Promise(resolve => {
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
      this.$emit("cancelEdit");
    },
    async savedComment() {
      try {
        if (await this.$validate()) {
          let data = new FormData();
          if (typeof this.comment.photo !== "string") {
            data.append("photo", this.comment.photo);
          }
          data.append("author", this.comment.author);
          data.append("occ", this.comment.occ);
          data.append("text", this.comment.text);
          if (!this.comment.id) this.saveComment(data);
          else this.updateComment([this.comment.id, data]);
          this.cancelEdit();
        }
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  },
  components: {
    Input: () => import("../blocks/Input")
  },
  validators: {
    "comment.photo": function(value) {
      return Validator.value(value).required("Добавьте фото");
    },
    "comment.author": function(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "comment.occ": function(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "comment.text": function(value) {
      return Validator.value(value).required("Заполните поле");
    }
  },
  created() {
    if (this.editComment.id) {
      this.comment = { ...this.editComment };
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
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
  position: relative;
  display: block;
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
.download-file__error {
  position: absolute;
  font-size: 13px;
  font-weight: 300;
  color: #fff;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  padding: 1px 10px;
  background: #cd1515;
  border-radius: 3px;
  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 11px 8px 11px;
    border-color: transparent transparent #cd1515 transparent;
  }
}
</style>