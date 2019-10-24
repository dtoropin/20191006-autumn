<template lang="pug">
  .work-card(:class='{edited: isEdited}')
    .work-card__img
      img(src='../../images/content/1.jpg' alt='work 1')
      .work-card__tags
        ul.tags.tags--right
          li.tags__item HTML5
          li.tags__item Vue.js
          li.tags__item javascript
    .work-card__info
      h3.work-card__title Сайт школы образования
      .work-card__text
        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
      a(href='#' target='_blank').work-card__link http://loftschool.ru
      .work-card__buttons
        button(type='button').btn-card.btn-card--edit Править
        button(type='button').btn-card.btn-card--delete Удалить
</template>

<script>
export default {
  props: {
    isEdited: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

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
</style>