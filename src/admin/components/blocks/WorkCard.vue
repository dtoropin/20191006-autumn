<template lang="pug">
  .work-card
    .work-card__img
      img(:src='src' :alt='work.title')
      .work-card__tags
        ul.tags.tags--right
          li.tags__item(
            v-for='(tag, idx) in tags'
            :key='idx'
          )
            span {{ tag }}
    .work-card__info
      h3.work-card__title {{ work.title }}
      .work-card__text
        p {{ work.subs }}
      a(:href='work.link' target='_blank').work-card__link {{ work.link }}
      .work-card__buttons
        button(type='button').btn-card.btn-card--edit Править
        button(type='button').btn-card.btn-card--delete Удалить
</template>

<script>
export default {
  props: {
    work: Object
  },
  computed: {
    src() {
      return require(`../../../images/content/${this.work.photo}`);
    },
    tags() {
      return this.work.tags.split(', ');
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

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