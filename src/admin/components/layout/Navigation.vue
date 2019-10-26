<template lang="pug">
  nav.nav
    ul.nav__list.container
      li.nav__item(:class='{active: this.page === "About"}')
        a(href='#' @click.prevent='$emit("changePage", "About")').nav__link Обо мне
      li.nav__item(:class='{active: this.page === "Works"}')
        a(href='#' @click.prevent='$emit("changePage", "Works")').nav__link Работы
      li.nav__item(:class='{active: this.page === "Comments"}')
        a(href='#' @click.prevent='$emit("changePage", "Comments")').nav__link Отзывы
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: 'About'
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
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
  @include phones {
    width: 113px;
  }
}
</style>