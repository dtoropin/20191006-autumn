<template lang="pug">
  .comments__block
    h3.comments__title Новый отзыв
    form.edit-comment
      .download-file
        input(type='file' accept='image/jpeg,image/png,image/jpg' name='photo')#photo.download-file__input
        label(for='photo').download-file__label
          .download-file__img
            img(:src='src' alt='avatar')
          span.download-file__text Изменить фото
      
      .edit-comment__form
        .edit-comment__row
          .edit-comment__field
            label.edit-comment__label
              span.edit-comment__title Имя автора
              input(type='text' name='name' value='Ковальчук Дмитрий').edit-comment__input
          .edit-comment__field
            label.edit-comment__label
              span.edit-comment__title Титул автора
              input(type='text' name='position' value='Основатель LoftSchool').edit-comment__input

        .edit-comment__field
          label.edit-comment__label
            span.edit-comment__title Отзыв
            textarea(type='text' name='desk').edit-comment__input.edit-comment__input--textarea Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!

        .edit-comment__btns
          button(type='button').btn-zero Отмена
          button(type='submit').btn-default Сохранить
</template>

<script>
export default {
  props: {
    photo: {
      type: String,
      default: 'user-default.jpg'
    }
  },
  computed: {
    src() {
      return require(`../../images/content/${this.photo}`);
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

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
.edit-comment__title {
  display: block;
  font-weight: 600;
  opacity: 0.5;
  margin-bottom: 15px;
}
.edit-comment__input {
  display: block;
  width: 100%;
  font-size: 16px;
  margin-bottom: 18px;
  margin-top: 20px;
  padding-bottom: 20px;
  outline: none;
  border: none;
  opacity: 1;
  border-bottom: 1px solid rgba(#414c63, 0.3);
  transition: .3s border ease;
  &--textarea {
    font-family: inherit;
    font-size: inherit;
    resize: none;
    height: 145px;
    padding: 10px 80px 10px 20px;
    line-height: 1.7;
    border: solid 1px rgba(#414c63, 0.3);
    @include desktop {
      padding: 10px;
    }
    &:focus {
      border: solid 1px rgba(#ea7400, 0.3);
    }
  }
  &:focus {
    border-bottom: 1px solid rgba(#ea7400, 0.3);
  }
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
      box-shadow: 0 0 10px rgba(#ea7400, .8);
    }
    & .download-file__text {
      opacity: 0.7;
    }
  }
}
.download-file__img {
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 25px;
  transition: .3s box-shadow ease;
  @include tablets {
    width: 150px;
    margin: 0 auto;
  }
}
.download-file__text {
  font-weight: 600;
  color: #ea7400;
  transition: .3s color ease, .3s opacity ease;
}
</style>