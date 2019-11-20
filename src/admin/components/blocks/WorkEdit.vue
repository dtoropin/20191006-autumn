<template lang="pug">
  .edit-work
    h3.edit-work__title Редактирование работы
    form(@submit.prevent='savedWork').edit-work__block
      .edit-work__download
        .edit-work__file(
          @dragover='dragFile'
          @dragleave='dragLeave'
          @drop='dropFile'
        )
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
              v-model='work.title'
              :error='errorTitle'
            )
          .edit-block__field
            Input(
              label='Ссылка'
              v-model='work.link'
              :error='errorLink'
            )
          .edit-block__field.edit-block__field--textarea
            Input(
              label='Описание'
              type='textarea'
              v-model='work.description'
              :error='errorDescription'
            )
          .edit-block__field
            Input(
              label='Теги'
              v-model='work.techs'
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
import { mapActions } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  props: {
    editWork: Object
  },
  data: () => ({
    work: {
      title: "",
      photo: "",
      link: "",
      techs: "",
      description: ""
    },
    filePreview: ""
  }),
  computed: {
    tagsList() {
      if (this.work.techs && this.work.techs !== "")
        return this.work.techs.split(",").filter(el => el.trim());
    },
    srcPhoto() {
      if (this.work.photo !== "") {
        return "https://webdev-api.loftschool.com/" + this.work.photo;
      }
    },
    errorPhoto() {
      return this.validation.firstError("work.photo");
    },
    errorTitle() {
      return this.validation.firstError("work.title");
    },
    errorLink() {
      return this.validation.firstError("work.link");
    },
    errorDescription() {
      return this.validation.firstError("work.description");
    },
    errorTechs() {
      return this.validation.firstError("work.techs");
    }
  },
  methods: {
    ...mapActions("works", ["saveWork", "updateWork"]),
    cancelEdit() {
      this.validation.reset();
      this.$emit("cancelEdit");
    },
    deleteTag(e) {
      const el = new RegExp(`${e.target.parentElement.innerText},?\ ?`);
      // удаляем элемент
      const str = this.work.techs.replace(el, "");
      // удаляем запятую в конце строки
      this.work.techs = str.replace(/,\s*$/, "");
    },
    async savedWork() {
      try {
        if (await this.$validate()) {
          let formData = new FormData();
          formData.append("photo", this.work.photo);
          formData.append("title", this.work.title);
          formData.append("link", this.work.link);
          formData.append("description", this.work.description);
          formData.append("techs", this.work.techs);
          if (!this.work.id) this.saveWork(formData);
          else this.updateWork([this.work.id, formData]);
          this.cancelEdit();
        }
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    dragFile(e) {
      e.preventDefault();
      const zone = document.querySelector('.edit-work__drop');
      zone.classList.add('active');
    },
    dragLeave(e) {
      const zone = document.querySelector('.edit-work__drop');
      zone.classList.remove('active');
    },
    dropFile(e) {
      e.preventDefault();
      const zone = document.querySelector('.edit-work__drop');
      zone.classList.remove('active');
      this.handleFile(e);
    },
    handleFile(e) {
      const photoFile = this.fileFromForm(e);
      this.work.photo = photoFile;
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
    }
  },
  created() {
    if (this.editWork.id) {
      this.work = { ...this.editWork };
    }
  },
  components: {
    Input: () => import("../blocks/Input")
  },
  validators: {
    "work.photo": function(value) {
      return Validator.value(value).required("Добавьте фото");
    },
    "work.title": function(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "work.link": function(value) {
      return Validator.value(value)
        .required("Заполните поле")
        .url("Неверный формат url");
    },
    "work.description": function(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "work.techs": function(value) {
      return Validator.value(value).required("Заполните поле");
    }
  }
};
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
  background: no-repeat center / cover, #dee4ed;
  &.active {
    border: 2px dashed #ea7400;
  }
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
  background: svg-load("cross.svg", fill=#414c63, width=100%, height=100%)
    no-repeat;
  transition: 0.3s background ease;
  &:hover {
    background: svg-load("cross.svg", fill=#ea7400, width=100%, height=100%)
      no-repeat;
  }
}
</style>