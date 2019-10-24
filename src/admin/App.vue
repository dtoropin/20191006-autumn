<template lang="pug">
  .content
    //- Login
    Header
    Navigation

    section.about
      .container
        .about__header
          h2.section-title Блок «Обо мне»
          a(href='#').add
            .add__plus
              .plus.plus--bg
            .add__text Добавить группу

        .about__block
          //- карточка новой группы
          NewGroupSkills
          //- карточки групп умений
          SkillCard(
            v-for='skill in skills'
            :key='skill.group'
            :skill='skill'
          )

    section.works
      .container
        .works__header
          h2.section-title Блок «Работы»
        //- блок редактирования работы
        EditWork
        .works__show
          .works__card
            NewCard(info='Добавить работу')
          //- карточки работ
          .works__card(
            v-for='work in works'
            :key='work.id'
          )
            WorkCard(:work='work')

    section.comments
      .container
        .comments__header
          h2.section-title Блок «Отзывы»
        //- блок редактирования отзыва
        EditComment
        .comments__show
          .comments__card
            NewCard(info='Добавить отзыв')
          //- карточки отзывов
          .comments__card(
            v-for='comment in comments'
            :key='comment.id'
          )
            ReviewCard(:comment='comment')
</template>

<script>
import Header from './components/Header';
import Navigation from './components/Navigation';
import Login from './components/Login';
import EditWork from './components/EditWork';
import WorkCard from './components/WorkCard';
import NewCard from './components/NewCard';
import EditComment from './components/EditComment';
import ReviewCard from './components/ReviewCard';
import SkillCard from './components/SkillCard';
import NewGroupSkills from './components/NewGroupSkills';

export default {
  components: {
    Header,
    Navigation,
    Login,
    EditWork,
    WorkCard,
    NewCard,
    EditComment,
    ReviewCard,
    SkillCard,
    NewGroupSkills
  },
  data: () => ({
    skills: [],
    comments: [],
    works: []
  }),
  created() {
    this.skills = require('../data/skills.json');
    this.comments = require('../data/comments.json');
    this.works = require('../data/works.json');
  }
}
</script>

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
html {
  min-width: 340px;
  font-size: 16px;
  @include desktop {
    font-size: 15px;
  }
  @include tablets {
    font-size: 14px;
  }
}
body {
  min-height: 100vh;
  font-family: "Open Sans", Helvetica, sans-serif;
  color: $text-color;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: default;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  user-select: none;
  &.noscroll {
    overflow: hidden;
  }
}
a {
  display: inline-block;
  color: inherit;
  outline: none;
  text-decoration: none;
}
img {
  max-width: 100%;
  max-height: 100%;
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
  &:hover::after {
    transform: translate(-50%, -50%) rotate(45deg) scale(1.1);
  }
  &--bg {
    background-image: linear-gradient(to top, #f29400, #ea7400);
    &:hover {
      background-image: linear-gradient(to bottom, #f29400, #ea7400);
    }
  }
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
  grid-gap: 60px;
  @include phones {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;
  }
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
  @include tablets {
    grid-template-columns: 1fr 1fr;
  }
  @include phones {
    grid-template-columns: 1fr;
  }
}
.works__card {
  min-height: 556px;
  &:first-child {
    @include phones {
      min-height: 100px;
    }
  }
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
  @include tablets {
    grid-template-columns: 1fr 1fr;
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