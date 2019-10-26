<template lang="pug">
  .edit-work
    h3.edit-work__title Редактирование работы
    
    form.edit-work__block
      .edit-work__download
        .download-drop-file
          input(type='file' accept='image/jpeg,image/png,image/jpg' name='file')#file.download-drop-file__input
          .download-drop-file__drop
            .download-drop-file__subs
              span.download-drop-file__info Перетащите или загрузите для загрузки изображения
              label(for='file').btn-default Загрузить

      .edit-work__form
        .edit-block
          .edit-block__field
            label.edit-block__label
              span.edit-block__title Название
              input(type='text' name='name' value='Дизайн сайта для авто салона Porsche' placeholder='Название сайта').edit-block__input
          .edit-block__field
            label.edit-block__label
              span.edit-block__title Ссылка
              input(type='link' name='link' value='https://www.porsche-pulkovo.ru' placeholder='https://www.example.com').edit-block__input
          .edit-block__field.edit-block__field--textarea
            label.edit-block__label
              span.edit-block__title Описание
              textarea(name='desk' placeholder='Краткое описание сайта').edit-block__input.edit-block__input--textarea Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
          .edit-block__field
            label.edit-block__label
              span.edit-block__title Добавление тэга
              input(type='text' name='tags' value='HTML5, Vue.js, javascript' placeholder='Добавьте теги (через запятую)').edit-block__input
          .edit-block__tags
            ul.tags
              li.tags__item HTML5
                button(type='button').tags__delete
              li.tags__item Vue.js
                button(type='button').tags__delete
              li.tags__item javascript
                button(type='button').tags__delete
          .edit-block__btns
            button(type='button').btn-zero Отмена
            button(type='submit').btn-default Сохранить
</template>



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
/* edit block */
.edit-block__field {
  margin-bottom: 10px;
  &--textarea {
    border: none;
  }
}
.edit-block__label {
  font-weight: 600;
}
.edit-block__title {
  opacity: 0.5;
}
.edit-block__input {
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
  background-color: #dee4ed;
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