<template lang="pug">
  .edit-work
    h3.edit-work__title Редактирование работы
    form(@submit.prevent='saveWork').edit-work__block
      .edit-work__download
        .edit-work__file
          input(
            type='file' 
            accept='image/jpeg,image/png,image/jpg'
            @change='handleFile'
          )#file.edit-work__input
          span.edit-work__error(v-if='errorPhoto') {{ errorPhoto }}
          .edit-work__drop(
            v-if='filePreview'
            :style='"backgroundImage: url(" + filePreview + ")"'
          )
            .edit-work__subs
              span.edit-work__info(
                v-if='!filePreview'
              ) Перетащите или загрузите для загрузки изображения
              label(for='file').btn-default Загрузить
          .edit-work__drop(
            v-else
            :style='"backgroundImage: url(" + srcPhoto + ")"'
          )
            .edit-work__subs
              span.edit-work__info(
                v-if='!srcPhoto'
              ) Перетащите или загрузите для загрузки изображения
              label(for='file').btn-default Загрузить

      .edit-work__form
        .edit-block
          .edit-block__field
            Input(
              label='Название'
              v-model='editTitle'
              :error='errorTitle'
            )
          .edit-block__field
            Input(
              label='Ссылка'
              v-model='editLink'
              :error='errorLink'
            )
          .edit-block__field.edit-block__field--textarea
            Input(
              label='Описание'
              type='textarea'
              v-model='editDescription'
              :error='errorDescription'
            )
          .edit-block__field
            Input(
              label='Теги'
              v-model='editTechs'
              :error='errorTechs'
            )
          .edit-block__tags
            ul.tags
              li.tags__item(v-for='tag in tagsList') {{ tag }}
                button(type='button' @click='deleteTag').tags__delete
          .edit-block__btns
            button(type='button' @click='cancelEdit').btn-zero Отмена
            button.btn-default Сохранить
</template>

<script>
import { Validator } from "simple-vue-validator";
export default {
  props: {
    title: '',
    techs: '',
    photo: '',
    link: '',
    description: ''
  },
  data: () => ({
    editTitle: '',
    editTechs: '',
    editPhoto: '',
    editLink: '',
    editDescription: '',
    filePreview: ''
  }),
  computed: {
    tagsList() {
      if(this.editTechs && this.editTechs !== '') return this.editTechs.split(', ');
    },
    srcPhoto() {
      if (this.photo) {
        return 'https://webdev-api.loftschool.com/' + this.photo;
      }
    },
    errorPhoto() {
      return this.validation.firstError('editPhoto');
    },
    errorTitle() {
      return this.validation.firstError('editTitle');
    },
    errorLink() {
      return this.validation.firstError('editLink');
    },
    errorDescription() {
      return this.validation.firstError('editDescription');
    },
    errorTechs() {
      return this.validation.firstError('editTechs');
    }
  },
  methods: {
    cancelEdit() {
      this.validation.reset();
      this.$emit('cancelEdit');
    },
    deleteTag(e) {
      const el = new RegExp(`${e.target.parentElement.innerText},?\ ?`);
      // удаляем элемент
      const str = this.editTechs.replace(el, '');
      // удаляем запятую в конце строки
      this.editTechs = str.replace(/,\s*$/, '');
    },
    saveWork() {
      this.$validate()
        .then((success) => {
          if (success) {
            if (
              this.photo === this.editPhoto &&
              this.title === this.editTitle &&
              this.techs === this.editTechs &&
              this.link === this.editLink &&
              this.description === this.editDescription
            ) {
              this.cancelEdit();
              return false;
            } else {
              let data = new FormData();
              if (typeof(this.editPhoto) !== 'string') {
                data.append('photo', this.editPhoto);
              }
              data.append('title', this.editTitle);
              data.append('link', this.editLink);
              data.append('description', this.editDescription);
              data.append('techs', this.editTechs);
              this.$emit('saveWork', data);
              this.cancelEdit();
            }
          }
        });
    },
    handleFile(e) {
      const photoFile = this.fileFromForm(e);
      this.editPhoto = photoFile;
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
    }
  },
  components: {
    Input: () => import('../blocks/Input')
  },
  validators: {
    'editPhoto': function(value) {
      return Validator.value(value).required('Добавьте фото');
    },
    'editTitle': function(value) {
      return Validator.value(value).required('Заполните поле');
    },
    'editLink': function(value) {
      return Validator.value(value).required('Заполните поле').url('Неверный формат url');
    },
    'editDescription': function(value) {
      return Validator.value(value).required('Заполните поле');
    },
    'editTechs': function(value) {
      return Validator.value(value).required('Заполните поле');
    }
  },
  created() {
    this.editTitle = this.title;
    this.editTechs = this.techs;
    this.editPhoto = this.photo;
    this.editLink = this.link;
    this.editDescription = this.description;
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
/* edit work */
.edit-work {
  min-height: 775px;
  padding: 30px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.15);
  @include phones {
    padding: 20px 0;
  }
}
.edit-work__title {
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(#000, 0.1);
  margin-bottom: 45px;
}
.edit-work__block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  padding-right: 12px;
  padding-left: 12px;
  @include tablets {
    grid-template-columns: 1fr;
  }
}
.edit-work__download,
.edit-work__form {
  @include tablets {
    width: 80%;
    margin: 0 auto;
  }
  @include phones {
    width: 100%;
    margin: 0;
  }
}
.edit-work__file {
  position: relative;
  min-height: 275px;
  @include phones {
    min-height: 201px;
  }
}
.edit-work__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.edit-work__error {
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
  z-index: 10;
  &::before {
    content: '';
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
.edit-work__drop {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border: 2px dashed #a1a1a1;
  background: no-repeat center / cover,  #dee4ed;
}
.edit-work__subs {
  max-width: 225px;
  text-align: center;
}
.edit-work__info {
  display: block;
  font-weight: 600;
  opacity: 0.5;
  margin-bottom: 25px;
}
/* edit block */
.edit-block__field {
  margin-bottom: 23px;
  &--textarea {
    border: none;
  }
}
.edit-block__tags {
  margin-bottom: 40px;
}
.edit-block__btns {
  @include tablets {
    text-align: center;
  }
}
/* tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  min-height: 40px;
}
.tags__item {
  display: flex;
  align-items: center;
  font-size: 13px;
  padding: 5px 15px;
  border-radius: 15px;
  background-color: #ececec;
  margin-bottom: 9px;
  & ~ .tags__item {
    margin-left: 9px;
  }
}
.tags__delete {
  display: block;
  width: 10px;
  height: 10px;
  margin-left: 9px;
  margin-right: -3px;
  background: svg-load("cross.svg", fill=#414c63, width=100%, height=100%) no-repeat;
  transition: .3s background ease;
  &:hover {
    background: svg-load("cross.svg", fill=#ea7400, width=100%, height=100%) no-repeat;
  }
}
</style>