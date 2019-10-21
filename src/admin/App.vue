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
          .add-card
            .add-card__header
              .add-card__title
                span.add-card__input.add-card__input--title Workflow
                .add-card__btns
                  button(type='button').btn.btn--ok
                  button(type='button').btn.btn--delete
              
            .add-card__block
              ul.add-card__list
                li.add-card__item.edited
                  input(type='text' name='skill' value='Git').add-card__input
                  input(type='text' name='percent' value='90').add-card__input.add-card__input--percent
                  .add-card__btns
                    button(type='button').btn.btn--ok
                    button(type='button').btn.btn--delete
                li.add-card__item
                  span.add-card__input Terminal
                  span.add-card__input.add-card__input--percent 100
                  .add-card__btns
                    button(type='button').btn.btn--ok
                    button(type='button').btn.btn--delete
                li.add-card__item
                  span.add-card__input Gulp
                  span.add-card__input.add-card__input--percent 95
                  .add-card__btns
                    button(type='button').btn.btn--ok
                    button(type='button').btn.btn--delete

            .add-card__footer
              input(type='text' name='newTitle').add-card__input.add-card__input--title
              input(type='text' name='newPercent').add-card__input.add-card__input--percent
              button(type='button').add-card__plus
                .plus

</template>



<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
/* reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}
ul {
  padding: 0;
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
}
body {
  min-height: 100vh;
  font-family: "Open Sans", Helvetica, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: default;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
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
/* ... */
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
  &--ok {
    width: 14px;
    height: 14px;
    background: url(../images/admin/pencil.png) no-repeat center / cover;
  }
  &--delete {
    width: 14px;
    height: 14px;
    background: url(../images/admin/trash.png) no-repeat center / cover;
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
  padding: 30px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
}
.add-card__header {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(#000, 0.1);
}
.add-card__title {
  display: grid;
  grid-template-columns: 82% 15%;
  grid-column-gap: 3%;
  align-items: center;
}
.add-card__item {
  display: grid;
  grid-template-columns: 64% 15% 15%;
  grid-column-gap: 3%;
  align-items: center;
  padding-top: 30px;
  &.edited {
    & > .add-card__input {
      border-bottom: 1px solid #ccc;
    }
    & > .add-card__btns > .btn--ok {
      background: url(../images/admin/tick.png) no-repeat center / cover;
    }
    & > .add-card__btns > .btn--delete {
      background: url(../images/admin/cross.png) no-repeat center / cover;
    }
  }
}
.add-card__input {
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 10px;
  border-bottom: 1px solid transparent;
  &--title {
    font-size: 18px;
    font-weight: 700;
  }
  &--percent {
    position: relative;
    &::after {
      content: '%';
      opacity: 0.7;
      position: absolute;
      top: 20%;
      right: 0;
    }
  }
}
.add-card__btns {
  justify-self: end;
  display: inline-flex;
  & .btn:first-child {
    margin-right: 19px;
  }
}
.add-card__footer {
  display: grid;
  grid-template-columns: 64% 15% 15%;
  grid-column-gap: 3%;
  align-items: center;
  padding-top: 30px;
}
.add-card__plus {
  width: 90%;
  height: 100%;
}
</style>