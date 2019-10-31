<template lang="pug">
  section.works
    .container
      .works__header
        h2.section-title Блок «Работы»

      //- блок редактирования работы
      .edit-work
        h3.edit-work__title Редактирование работы
        
        form(@submit.prevent='saveWork').edit-work__block
          .edit-work__download
            .download-drop-file
              input(
                type='file' 
                accept='image/jpeg,image/png,image/jpg'
                @change='handleFile'
              )#file.download-drop-file__input
              .download-drop-file__drop(
                :style='"backgroundImage: url(" + filePreview + ")"'
              )
                .download-drop-file__subs
                  span(v-show='!filePreview').download-drop-file__info Перетащите или загрузите для загрузки изображения
                  label(for='file').btn-default Загрузить

          .edit-work__form
            .edit-block
              .edit-block__field
                Input(
                  v-model='editWork.title'
                  label='Название'
                  :value='editWork.title'
                  :error='validation.firstError("editWork.title")'
                )
              .edit-block__field
                Input(
                  v-model='editWork.link'
                  label='Ссылка'
                  :value='editWork.link'
                  :error='validation.firstError("editWork.link")'
                )
              .edit-block__field.edit-block__field--textarea
                Input(
                  v-model='editWork.subs'
                  label='Описание'
                  type='textarea'
                  :value='editWork.subs'
                  :error='validation.firstError("editWork.subs")'
                )
              .edit-block__field
                Input(
                  v-model='editWork.tags'
                  label='Теги'
                  :value='editWork.tags'
                  :error='validation.firstError("editWork.tags")'
                )
              .edit-block__tags
                ul.tags
                  li.tags__item(v-for='tag in tagsList') {{ tag }}
                    button(type='button' @click='deleteTag').tags__delete
              .edit-block__btns
                button(type='button' @click='cancelEdit').btn-zero Отмена
                button.btn-default Сохранить

      .works__show
        .works__card
          NewCard(
            info='Добавить работу'
            @addNewBlock='addNewBlock'
          )

        //- карточки работ
        .works__card(
          v-for='work in works'
          :key='work.id'
        )
          .work-card
            .work-card__img
              img(:src='work.photo' :alt='work.title')
              .work-card__tags
                ul.tags.tags--right
                  li.tags__item(
                    v-for='(tag, idx) in work.tags'
                    :key='idx'
                  )
                    span {{ tag }}
            .work-card__info
              h3.work-card__title {{ work.title }}
              .work-card__text
                p {{ work.subs }}
              a(:href='work.link' target='_blank').work-card__link {{ work.link }}
            .work-card__buttons
              button(type='button' @click='editedWork').btn-card.btn-card--edit Править
              button(type='button' @click='deleteWork').btn-card.btn-card--delete Удалить
</template>

<script>
import { Validator } from 'simple-vue-validator';

export default {
  data: () => ({
    works: [],
    editWork: {
      title: '',
      link: '',
      subs: '',
      tags: '',
      photo: ''
    },
    filePreview: ''
  }),
  computed: {
    tagsList() {
      if(this.editWork.tags && this.editWork.tags !== '') return this.editWork.tags.split(', ');
    }
  },
  methods: {
    addNewBlock() {
      console.log('add new work');
    },
    editedWork() {
      console.log('редактирование работы');
    },
    deleteWork() {
      if(confirm('Удалить работу?')) {
        console.log('delete work');
      }
    },
    deleteTag(e) {
      const el = new RegExp(`${e.target.parentElement.innerText},?\ ?`);
      // удаляем элемент
      const str = this.editWork.tags.replace(el, '');
      // удаляем запятую в конце строки
      this.editWork.tags = str.replace(/,\s*$/, '');
    },
    cancelEdit() {
      this.validation.reset();
      this.filePreview = '';
      console.log('Отмена редактирования');
    },
    saveWork() {
      this.$validate()
        .then(function (success) {
          if (success) {
            console.log('save work', success);
          }
        });
    },
    makeArrTagsAndPhotoLink(data) {
      return data.map(item => {
        const tags = item.tags.split(', ');
        item.tags = tags;
        const imgLink = require(`../../../images/content/${item.photo}`);
        item.photo = imgLink;
        return item;
      })
    },
    handleFile(e) {
      const photoFile = this.fileFromForm(e);
      this.editWork.photo = photoFile;
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
  created() {
    const data = require('../../../data/works.json');
    this.works = this.makeArrTagsAndPhotoLink(data);
  },
  components: {
    Input: () => import('../blocks/Input'),
    NewCard: () => import('../blocks/NewCard')
  },
  validators: {
    'editWork.title': function(value) {
      return Validator.value(value).required('Заполните поле');
    },
    'editWork.link': function(value) {
      return Validator.value(value).required('Заполните поле').regex(/^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/, 'Неверный формат url');
    },
    'editWork.subs': function(value) {
      return Validator.value(value).required('Заполните поле');
    },
    'editWork.tags': function(value) {
      return Validator.value(value).required('Заполните поле');
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
/* works */
.works {
  padding-top: 50px;
}
.works__header {
  margin-bottom: 50px;
}
.works__show {
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
.works__card {
  min-height: 556px;
  height: 100%;
  &:first-child {
    @include phones {
      min-height: 100px;
    }
  }
}

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
/* download-drop-file */
.download-drop-file {
  position: relative;
  min-height: 275px;
  @include phones {
    min-height: 201px;
  }
}
.download-drop-file__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.download-drop-file__drop {
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
.download-drop-file__subs {
  max-width: 225px;
  text-align: center;
}
.download-drop-file__info {
  display: block;
  font-weight: 600;
  opacity: 0.5;
  margin-bottom: 25px;
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

/* work card */
.work-card {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.1);
  &.edited {
    opacity: 0.4;
    & .work-card__tags {
      display: block;
    }
  }
}
.work-card__img {
  position: relative;
}
.work-card__tags {
  position: absolute;
  bottom: 7px;
  right: 7px;
}
.work-card__info {
  padding: 40px 20px;
}
.work-card__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 25px;
}
.work-card__text {
  font-weight: 600;
  line-height: 1.7;
  opacity: 0.7;
  margin-bottom: 30px;
}
.work-card__link {
  font-weight: 600;
  color: #ea7400;
  margin-bottom: 45px;
  &:hover {
    opacity: 0.8;
  }
}
.work-card__buttons {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

/* tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  &--right {
    justify-content: flex-end;
  }
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