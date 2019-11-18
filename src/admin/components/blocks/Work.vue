<template lang="pug">
  .work
    .work__img
      img(:src='srcPhoto' :alt='work.title')
      .work__tags
        ul.tags.tags--right
          li.tags__item(
            v-for='(tag, ind) in tags'
            :key='ind'
          )
            span {{ tag }}
    .work__info
      h3.work__title {{ work.title }}
      .work__text
        p {{ work.description }}
      a(:href='work.link' target='_blank').work__link {{ work.link }}
    .work__buttons
      button(type='button' @click='editWork').btn-card.btn-card--edit Править
      button(type='button' @click='deleteWork').btn-card.btn-card--delete Удалить
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    work: Object
  },
  computed: {
    tags() {
      return this.work.techs.split(", ");
    },
    srcPhoto() {
      return "https://webdev-api.loftschool.com/" + this.work.photo;
    }
  },
  methods: {
    ...mapActions("works", ["removeWork"]),
    deleteWork() {
      if (confirm(`Удалить работу "${this.work.title}"?`)) {
        this.removeWork(this.work.id);
      }
    },
    editWork() {
      this.$emit("editWork", this.work.id);
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
/* work card */
.work {
  position: relative;
  height: 100%;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.1);
  &.edited {
    opacity: 0.4;
    & .work__tags {
      display: block;
    }
  }
}
.work__img {
  position: relative;
}
.work__tags {
  position: absolute;
  bottom: 7px;
  right: 7px;
}
.work__info {
  padding: 40px 20px;
}
.work__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 25px;
}
.work__text {
  font-weight: 600;
  line-height: 1.7;
  opacity: 0.7;
  margin-bottom: 30px;
}
.work__link {
  font-weight: 600;
  color: #ea7400;
  margin-bottom: 45px;
  &:hover {
    opacity: 0.8;
  }
}
.work__buttons {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
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
  background: svg-load("cross.svg", fill=#414c63, width=100%, height=100%)
    no-repeat;
  transition: 0.3s background ease;
  &:hover {
    background: svg-load("cross.svg", fill=#ea7400, width=100%, height=100%)
      no-repeat;
  }
}
</style>