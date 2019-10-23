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
          a(href='index.html').header__link Выйти

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
              .plus.plus--bg
            .add__text Добавить группу

        .about__block
          //- карточка
          .add-card
            .add-card__header
              .add-card__title
                input(type='text' placeholder='Название новой группы').add-card__input.add-card__input--title
                .add-card__btns
                  button(type='button').btn.btn--edit--ok
                  button(type='button').btn.btn--edit--delete
              
            .add-card__block
              
            .add-card__footer
              input(type='text' name='newTitle' placeholder='Новый навык').add-card__input
              input(type='text' name='newPercent').add-card__input.add-card__input--percent
              span.add-card__percent %
              button(type='button').add-card__plus
                .plus.plus--bg

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
                    button(type='button').btn.btn--edit--ok
                    button(type='button').btn.btn--edit--delete
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
                .plus.plus--bg

    section.works
      .container
        .works__header
          h2.section-title Блок «Работы»

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
                    input(type='text' name='tags' value='Jquery, Vue.js, HTML5' placeholder='Добавьте теги (через запятую)').edit-block__input
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

        .works__show
          .works__add
            .new-card
              .new-card__center
                .new-card__link
                  button(type='button').new-card__btn
                    .new-card__plus
                      .plus
                span.new-card__info Добавить работу

          .works__card
            .work-card.edited
              .work-card__img
                img(src='../images/content/1.jpg' alt='work 1')
                .work-card__tags
                  ul.tags.tags--right
                    li.tags__item HTML5
                    li.tags__item Vue.js
                    li.tags__item javascript
              .work-card__info
                h3.work-card__title Сайт школы образования
                .work-card__text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work-card__link http://loftschool.ru
                .work-card__buttons
                  button(type='button').btn-card.btn-card--edit Править
                  button(type='button').btn-card.btn-card--delete Удалить

          .works__card
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
                  button(type='button').btn-card.btn-card--edit Править
                  button(type='button').btn-card.btn-card--delete Удалить

    section.comments
      .container
        .comments__header
          h2.section-title Блок «Отзывы»
        
        .comments__block
          h3.comments__title Новый отзыв

          form.edit-comment__block
            .download-file
              input(type='file' accept='image/jpeg,image/png,image/jpg' name='photo')#photo.download-file__input
              label(for='photo').download-file__label
                .download-file__img
                  img(src='../images/admin/user-default.jpg' alt='photo')
              span.download-file__text Добавить фото
            
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

        .comments__show
          .comments__add
            .new-card
              .new-card__center
                .new-card__link
                  button(type='button').new-card__btn
                    .new-card__plus
                      .plus
                span.new-card__info Добавить отзыв

          .comments__card
            .review-card.edited
              .review-card__user
                .review-card__img
                  img(src='../images/content/user1.jpg' alt='user1')
                .review-card__info
                  h4.review-card__name Ковальчук Дмитрий
                  span.review-card__position Основатель Loftschool
              
              .review-card__text
                p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах

              .review-card__btns
                button(type='button').btn-card.btn-card--edit Править
                button(type='button').btn-card.btn-card--delete Удалить

          .comments__card
            .review-card
              .review-card__user
                .review-card__img
                  img(src='../images/content/user2.jpg' alt='user2')
                .review-card__info
                  h4.review-card__name Владимир Сабанцев
                  span.review-card__position Преподаватель
              
              .review-card__text
                p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах

              .review-card__btns
                button(type='button').btn-card.btn-card--edit Править
                button(type='button').btn-card.btn-card--delete Удалить

    .login
      .login__block
        a(href='index.html').login__close
        .login__content
          .login__title Авторизация
          form.login-form
            .login-form__row
              label.login-form__label
                span.login-form__title Логин
                .login-form__field
                  input(type="text" name="login" required).login-form__input
                  span.login-form__icon.login-form__icon--user
                  span.login-form__error

            .login-form__row
              label.login-form__label
                span.login-form__title Пароль
                .login-form__field
                  input(type="password" name="pass" required).login-form__input
                  span.login-form__icon.login-form__icon--key
                  span.login-form__error

            .login-form__row
              button(type='submit').login-form__btn Отправить

</template>



<style lang="postcss">
@import "../styles/mixins.pcss";
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
  color: $text-color;
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
button {
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
}
@-webkit-keyframes autofill {
  to {
    color: inherit;
    background: transparent;
  }
}
input:-webkit-autofill {
  -webkit-animation-name: autofill;
  -webkit-animation-fill-mode: both;
}
:not(output):-moz-ui-invalid {
  box-shadow: 0 0 1.5px 1px transparent;
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
.header__link {
  border-bottom: 1px solid #fff;
  &:hover {
    opacity: 0.8;
  }
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
  @include tablets {
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
/* add-card */
.add-card {
  min-height: 387px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.15);
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
/* comments */
.comments {
  padding-top: 60px;
  margin-bottom: 30px;
}
.comments__header {
  margin-bottom: 60px;
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
.comments__show {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding-top: 30px;
  margin-bottom: 30px;
}
.comments__add,
.comments__card {
  min-height: 380px;
  height: 100%;
}
.comments__add {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #f29400, #ea7400);;
}
.comments__btn {
  margin-bottom: 30px;
}
.comments__info {
  display: block;
  width: 95px;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
/* edit comment */
.edit-comment__block {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 30px;
  padding-top: 30px;
  margin-bottom: 30px;
}
.edit-comment__form {
  max-width: 620px;
}
.edit-comment__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
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
  display: flex;
  align-items: flex-start;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(#000, 0.1);
}
.review-card__img {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}
.review-card__name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 9px;
}
.review-card__position {
  font-weight: 600;
  opacity: 0.5;
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
/* login modal */
.login {
  display: none;
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  right: 0;
  background: url('../images/background/TrainBridge.jpg') no-repeat center / cover;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(#2d3c4e, .9);
  }
}
.login__block {
  position: relative;
  background: #fff;
  z-index: 10;
  padding: 60px 75px;
  max-width: 565px;
  @include phones {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
.login__close {
  position: absolute;
  top: 30px;
  right: 30px;
  display: block;
  width: 19px;
  height: 19px;
  background: svg-load("cross.svg", fill=#2d3c4e, width=100%, height=100%) no-repeat;
  &:hover {
    background: svg-load("cross.svg", fill=#ea7400, width=100%, height=100%) no-repeat;
  }
}
.login__title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
}
/* login-form */
.login-form__title {
  display: block;
  font-weight: 600;
  opacity: 0.3;
  margin-bottom: 25px;
}
.login-form__field {
  position: relative;
  margin-bottom: 40px;
}
.login-form__input {
  width: 100%;
  padding: 8px 5px 20px 45px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid rgba(#2d3c4e, .3);
  &:focus {
    border-bottom: 1px solid rgba(#ea7400, .3);
    & + .login-form__icon--user {
      background: svg-load("user.svg", fill=#ea7400, width=100%, height=100%) no-repeat;
    }
    & + .login-form__icon--key {
      background: svg-load("key.svg", fill=#ea7400, width=100%, height=100%) no-repeat;
    }
  }
  &:invalid {
    border-bottom: 1px solid rgba(#fb0000, .3);
    & + .login-form__icon--user {
      background: svg-load("user.svg", fill=#fb0000, width=100%, height=100%) no-repeat;
    }
    & + .login-form__icon--key {
      background: svg-load("key.svg", fill=#fb0000, width=100%, height=100%) no-repeat;
    }
  }
}
.login-form__icon {
  position: absolute;
  top: 5px;
  left: 0;
  display: block;
  width: 26px;
  height: 30px;
  margin-right: 20px;
  opacity: 0.3;
  &--user {
    background: svg-load("user.svg", fill=#2d3c4e, width=100%, height=100%) no-repeat;
  }
  &--key {
    background: svg-load("key.svg", fill=#2d3c4e, width=100%, height=100%) no-repeat;
  }
}
.login-form__btn {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 33px 120px;
  display: block;
  margin: 0 auto;
  background-image: linear-gradient(to top, #f29400, #ea7400);
  border-radius: 35px 0;
  &:hover {
    background-image: linear-gradient(to bottom, #f29400, #ea7400);
  }
  &:active {
    box-shadow: inset 0 0 7px rgba(#fff, .7);
  }
}
/************* components **************/
/************* components **************/
/* plus */
.plus {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    width: 40%;
    height: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: svg-load("cross.svg", fill=#fff, width=100%, height=100%) no-repeat;
    transition: .2s transform ease;
  }
  &--bg {
    background-image: linear-gradient(to top, #f29400, #ea7400);
    &:hover {
      background-image: linear-gradient(to bottom, #f29400, #ea7400);
    }
  }
  &:hover::after {
    transform: translate(-50%, -50%) rotate(45deg) scale(1.1);
  }
}
/* new-card */
.new-card {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.new-card__center {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.new-card__link {
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
}
.new-card__btn {
  width: 100%;
  height: 100%;
  padding: 0;
  transition: 0.3s opacity ease;
  &:hover {
    opacity: 0.8;
  }
}
.new-card__plus {
  position: relative;
  width: 100%;
  height: 100%;
  & .plus {
    border: 2px solid #fff;
    background: transparent;
  }
}
.new-card__info {
  width: 95px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
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
}
.download-file__img {
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 25px;
  transition: .3s ease;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 7px rgba(#ea7400, .5);
  }
}
.download-file__text {
  font-weight: 600;
  color: #ea7400;
  transition: .3s color ease;
}
/* download-drop-file */
.download-drop-file {
  position: relative;
  min-height: 275px;
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
/* button */
.btn {
  opacity: 1;
  transition: 0.3s opacity ease;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &--ok,
  &--edit--ok,
  &--delete,
  &--edit--delete {
    width: 14px;
    height: 14px;
  }
  &--ok {
    background: svg-load("pencil.svg", fill=#414c63, width=100%, height=100%) no-repeat;
  }
  &--edit--ok {
    background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%) no-repeat;
  }
  &--delete {
    background: svg-load("trash.svg", fill=#414c63, width=100%, height=100%) no-repeat;
  }
  &--edit--delete {
    background: svg-load("cross.svg", fill=#bf2929, width=100%, height=100%) no-repeat;
  }
  &-default,
  &-zero {
    display: inline-block;
    cursor: pointer;
    line-height: 1;
    padding: 15px 40px;
    border-radius: 25px;
    transition-property: color, background;
    transition-duration: .3s;
    transition-timing-function: ease;
    &:active {
      box-shadow: inset 0 0 4px rgba(255, 255, 255, 0.9);
    }
  }
  &-default {
    text-transform: uppercase;
    color: #fff;
    background-image: linear-gradient(to top, #f29400, #ea7400);
    &:hover {
      background-image: linear-gradient(to bottom, #f29400, #ea7400);
      color: rgba(#fff, 0.8);
    }
  }
  &-zero {
    color: #ea7400;
    margin-right: 5px;
    &:hover {
      background: rgba(#ea7400, 0.2);
      color: rgba(#ea7400, 0.8);
    }
  }
  &-card {
    display: flex;
    font-weight: 600;
    color: rgba(65, 76, 99, 0.5);
    &:hover::after {
      color: rgba(65, 76, 99, 0.9);
      opacity: 0.7;
    }
    &--edit::after {
      content: "";
      width: 17px;
      height: 17px;
      display: block;
      margin-left: 10px;
      background: svg-load("pencil.svg", fill=#ea7400, width=100%, height=100%) no-repeat;
    }
    &--delete::after {
      content: "";
      width: 14px;
      height: 14px;
      display: block;
      margin-left: 10px;
      background: svg-load("cross.svg", fill=red, width=100%, height=100%) no-repeat;
    }
  }
}
</style>