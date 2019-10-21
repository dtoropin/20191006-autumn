<template lang="pug">
  .content
    header.header
      .header__container.container
        .header__user
          .user
            img(src='../images/content/DSCN0377.JPG' alt='D.Toropin').user__img
            h2.user__title Денис Торопин

        .header__title
          span.head-text Панель администрирования

        .header__btn
          a(href='#').btn Выйти

    nav.nav
      ul.nav__list.container
        li.nav__item.active
          a(href='#').nav__link Обо мне
        li.nav__item
          a(href='#').nav__link Работы
        li.nav__item
          a(href='#').nav__link Отзывы

    section.about
      .container
        .about__header
          h2.section-title Блок «Обо мне»
          a(href='#').add
            .add__plus
              .plus
            .add__text Добавить группу

        .about__block
          //- карточка
          .add-card
            .add-card__header
              .add-card__title
                input(type='text' placeholder='Название новой группы').add-card__input.add-card__input--title
                .add-card__btns
                  button(type='button').btn.btn--edited--ok
                  button(type='button').btn.btn--edited--delete
              
            .add-card__block
              
            .add-card__footer
              input(type='text' name='newTitle' placeholder='Новый навык').add-card__input
              input(type='text' name='newPercent').add-card__input.add-card__input--percent
              span.add-card__percent %
              button(type='button').add-card__plus
                .plus

          //- карточка
          .add-card
            .add-card__header
              .add-card__title
                span.add-card__value.add-card__value--title Workflow
                .add-card__btns
                  button(type='button').btn.btn--ok
                  button(type='button').btn.btn--delete
              
            .add-card__block
              ul.add-card__list
                li.add-card__item
                  input(type='text' name='skill' value='Git').add-card__input
                  input(type='text' name='percent' value='90').add-card__input.add-card__input--percent
                  span.add-card__percent %
                  .add-card__btns
                    button(type='button').btn.btn--edited--ok
                    button(type='button').btn.btn--edited--delete
                li.add-card__item
                  span.add-card__value Terminal
                  span.add-card__value.add-card__value--percent 100
                  span.add-card__percent %
                  .add-card__btns
                    button(type='button').btn.btn--ok
                    button(type='button').btn.btn--delete
                li.add-card__item
                  span.add-card__value Gulp
                  span.add-card__value.add-card__value--percent 95
                  span.add-card__percent %
                  .add-card__btns
                    button(type='button').btn.btn--ok
                    button(type='button').btn.btn--delete

            .add-card__footer
              input(type='text' name='newTitle' placeholder='Новый навык').add-card__input
              input(type='text' name='newPercent').add-card__input.add-card__input--percent
              span.add-card__percent %
              button(type='button').add-card__plus
                .plus

    section.works
      .container
        .works__header
          h2.section-title Блок «Работы»

        .edit-work
          h3.edit-work__title Редактирование работы
          
          form.edit-work__block
            .edit-work__download
              .box-file
                input(type='file' name='file')#file.box-file__input
                .box-file__drop
                  .box-file__subs
                    span.box-file__info Перетащите или загрузите для загрузки изображения
                    label(for='file').btn-default Загрузить

            .edit-work__form
              .edit-block
                .edit-block__field
                  label.edit-block__label
                    span.edit-block__title Название
                    input(type='text' name='name' value='Дизайн сайта для авто салона Porsche').edit-block__input
                .edit-block__field
                  label.edit-block__label
                    span.edit-block__title Ссылка
                    input(type='link' name='link' value='https://www.porsche-pulkovo.ru').edit-block__input
                .edit-block__field.edit-block__field--textarea
                  label.edit-block__label
                    span.edit-block__title Описание
                    textarea(name='desk').edit-block__input.edit-block__input--textarea Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
                .edit-block__field
                  label.edit-block__label
                    span.edit-block__title Добавление тэга
                    input(type='text' name='tags' value='Jquery, Vue.js, HTML5').edit-block__input
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
                  button(type='button').btn-default Сохранить

        .works__show
          .works__add
            .works__center
              button(type='button').works__btn
                .works__plus
              span.works__info Добавить работу

          .works__card
            .work-card.edited
              .work-card__img
                img(src='../images/content/1.jpg' alt='work 1')
                .work-card__tags
                  ul.tags
                    li.tags__item HTML5
                    li.tags__item Vue.js
                    li.tags__item javascript
              .work-card__info
                h3.work-card__title Сайт школы образования
                .work-card__text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work-card__link http://loftschool.ru
                .work-card__buttons
                  button(type='button').work-card__btn.work-card__btn--edit Править
                  button(type='button').work-card__btn.work-card__btn--delete Удалить

          .work-card
            .work-card__img
              img(src='../images/content/2.jpg' alt='work 2')
              .work-card__tags
                ul.tags
                  li.tags__item HTML5
                  li.tags__item CSS3
                  li.tags__item javascript
            .work-card__info
              h3.work-card__title Сайт школы образования
              .work-card__text
                p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a(href='#').work-card__link http://loftschool.ru
              .work-card__buttons
                button(type='button').work-card__btn.work-card__btn--edit Править
                button(type='button').work-card__btn.work-card__btn--delete Удалить

    section
</template>



<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
/* reset */
* {
  box-sizing: border-box;
}
ul {
  list-style: none;
}
h1,
h2,
h3,
h4 {
  font-weight: normal;
}
body,
h1,
h2,
h3,
h4,
p,
ul,
li {
  margin: 0;
  padding: 0;
}
body {
  min-height: 100vh;
  min-width: 340px;
  font-family: "Open Sans", Helvetica, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: default;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  user-select: none;
}
a {
  display: inline-block;
  color: inherit;
  outline: none;
  text-decoration: none;
}
img {
  max-width: 100%;
  display: block;
}
button[type="button"] {
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
}
/* base */
.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
}
.section-title {
  font-size: 21px;
  font-weight: bold;
  color: #414c63;
}
/* header */
.header {
  background-image: linear-gradient(to top, #ea7400, #f29400);
  padding-top: 16px;
  padding-bottom: 19px;
  color: #fff;
}
.header__container {
  display: grid;
  grid-template-columns: 250px 1fr 60px;
  grid-column-gap: 20px;
  align-items: center;
}
/* user */
.user {
  display: flex;
  align-items: center;
}
.user__img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}
.user__title {
  font-size: 18px;
  font-weight: 600;
}
/* head */
.head-text {
  font-size: 14px;
  opacity: 0.5;
}
/* button */
.btn {
  opacity: 1;
  border-bottom: 1px solid #fff;
  transition: 0.3s opacity ease;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &--ok,
  &--edited--ok,
  &--delete,
  &--edited--delete {
    width: 14px;
    height: 14px;
  }
  &--ok {
    background: url(../images/admin/pencil.png) no-repeat center / cover;
  }
  &--edited--ok {
    background: url(../images/admin/tick.png) no-repeat center / cover;
  }
  &--delete {
    background: url(../images/admin/trash.png) no-repeat center / cover;
  }
  &--edited--delete {
    background: url(../images/admin/cross.png) no-repeat center / cover;
  }
  &-default,
  &-zero {
    display: inline-block;
    line-height: 1;
    padding: 15px 40px;
    border-radius: 25px;
    transition: 0.3s ease;
  }
  &-default {
    text-transform: uppercase;
    color: #fff;
    background-image: linear-gradient(to top, #f29400, #ea7400);
    &:hover {
      background-image: linear-gradient(to bottom, #f29400, #ea7400);
      color: rgba(#fff, 0.8);
    }
    &:active {
      box-shadow: inset 0 0 3px rgba(255, 255, 255, 0.8);
    }
  }
  &-zero {
    color: #ea7400;
    margin-right: 5px;
    &:hover {
      background: rgba(#ea7400, 0.1);
      color: rgba(#ea7400, 0.8);
    }
    &:active {
      box-shadow: inset 0 0 3px rgba(234, 117, 0, 0.8);
    }
  }
}
/* navigation */
.nav__list {
  display: flex;
}
.nav__item {
  border-bottom: solid 3px transparent;
  transition: 0.3s border ease;
  &:hover {
    border-bottom: solid 3px rgba(#ea7400, 0.6);
    & > .nav__link {
      color: rgba(#ea7400, 0.8);
    }
  }
  &.active {
    border-bottom: solid 3px #ea7400;
    & > .nav__link {
      pointer-events: none;
      color: #ea7400;
    }
  }
}
.nav__link {
  width: 125px;
  text-align: center;
  font-weight: 600;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #414c63;
  transition: 0.3s color ease;
}
/* about */
.about {
  padding-top: 60px;
  margin-bottom: 30px;
}
.about__header {
  margin-bottom: 60px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
}
.about__block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
/* add */
.add {
  display: flex;
  align-items: center;
  outline: none;
  color: #ea7400;
  transition: 0.3s color ease;
  &:hover {
    color: rgba(#ea7400, 0.7);
    & .plus {
      background-image: linear-gradient(to bottom, #f29400, #ea7400);
    }
  }
}
.add__plus {
  width: 22px;
  height: 22px;
  margin-right: 13px;
  font-size: 18px;
}
.add__text {
  font-weight: 600;
}
/* plus */
.plus {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, #f29400, #ea7400);
  border-radius: 50%;
  overflow: hidden;
  transition: 0.3s ease;
  &::after {
    content: "+";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
}
/* add-card */
.add-card {
  min-height: 387px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.15);
  /* margin-bottom: 30px; */
}
.add-card__header {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(#000, 0.1);
}
.add-card__block {
  flex-grow: 1;
  margin-bottom: 60px;
}
.add-card__title {
  display: grid;
  grid-template-columns: 82% 15%;
  grid-column-gap: 3%;
  align-items: center;
}
.add-card__item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 60px 50px;
  grid-column-gap: 20px;
  align-items: center;
  padding-top: 16px;
}
.add-card__value,
.add-card__input {
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  border-bottom: 1px solid transparent;
  &--title {
    font-size: 18px;
    font-weight: 700;
  }
  &--percent {
    padding-right: 17px;
  }
}
.add-card__value {
  padding: 7px;
}
.add-card__input {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  transition: 0.3s border ease;
  &:focus {
    border-bottom: 1px solid #ea7400;
  }
}
.add-card__percent {
  position: absolute;
  bottom: 16%;
  right: 75px;
}
.add-card__btns {
  justify-self: end;
  display: inline-flex;
  & .btn:first-child {
    margin-right: 19px;
  }
}
.add-card__footer {
  position: relative;
  width: 80%;
  display: grid;
  margin-left: auto;
  grid-template-columns: 1fr 60px 50px;
  grid-column-gap: 20px;
  align-items: center;
}
.add-card__plus {
  & .plus {
    width: 40px;
    height: 40px;
    font-size: 30px;
  }
  &:hover .plus {
    background-image: linear-gradient(to bottom, #f29400, #ea7400);
  }
}
/* works */
.works {
  padding-top: 60px;
  margin-bottom: 30px;
}
.works__header {
  margin-bottom: 60px;
}
.works__show {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding-top: 30px;
  margin-bottom: 30px;
}
.works__add,
.works__card {
  min-height: 556px;
}
.works__add {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #f29400, #ea7400);
}
.works__center {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.works__btn {
  display: inline-block;
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  padding: 0;
  transition: .3s opacity ease;
  &:hover {
    opacity: 0.8;
  }
}
.works__plus {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #fff;
  &::before {
    content: '+';
    font-size: 72px;
    position: absolute;
    line-height: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
}
.works__info {
  width: 95px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
/* edit work */
.edit-work {
  min-height: 775px;
  padding: 30px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.15);
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
  grid-column-gap: 30px;
  padding-right: 12px;
  padding-left: 12px;
}
/* box-file */
.box-file {
  position: relative;
  min-height: 275px;
}
.box-file__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.box-file__drop {
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
.box-file__subs {
  max-width: 225px;
  text-align: center;
}
.box-file__info {
  display: block;
  font-weight: 600;
  opacity: 0.5;
  margin-bottom: 25px;
}
/* edit block */
.edit-block__field {
  border-bottom: 1px solid rgba(#414c63, 0.3);
  margin-bottom: 30px;
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
  outline: none;
  border: none;
  opacity: 1;
  &--textarea {
    font-family: inherit;
    font-size: inherit;
    resize: none;
    height: 145px;
    padding: 10px 80px 10px 20px;
    line-height: 1.7;
    border: solid 1px rgba(#414c63, 0.3);
    @media screen and (max-width: 1200px) {
      padding: 10px;
    }
  }
}
.edit-block__tags {
  margin-bottom: 40px;
}
/* tags */
.tags {
  display: flex;
}
.tags__item {
  display: flex;
  font-size: 13px;
  padding: 5px 15px;
  border-radius: 15px;
  background-color: #ececec;
  & ~ .tags__item {
    margin-left: 9px;
  }
}
.tags__delete {
  display: block;
  position: relative;
  width: 10px;
  height: 10px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    display: block;
    width: 100%;
    height: 2px;
    background: #414c63;
    border-radius: 2px;
    transition: .3s background-color ease;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
  &:hover::before,
  &:hover::after {
    background: #ea7400;
  }
}
/* work card */
.work-card {
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
  display: none;
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
  display: flex;
  justify-content: space-between;
}
.work-card__btn {
  display: flex;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
  &:hover::after {
    color: rgba(65, 76, 99, 0.9);
    opacity: 0.7;
  }
  &--edit::after {
    content: '';
    width: 17px;
    height: 17px;
    display: block;
    margin-left: 10px;
    background: url(../images/admin/pencil-edit.png) no-repeat center / cover;
  }
  &--delete::after {
    content: '';
    width: 14px;
    height: 14px;
    display: block;
    margin-left: 10px;
    background: url(../images/admin/cancel.png) no-repeat center / cover;
  }
}
</style>