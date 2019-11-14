<template lang="pug">
  nav.nav
    ul.nav__list.container
      li.nav__item
        router-link(
          to='/'
          class='nav__link'
        ) Обо мне
      li.nav__item
        router-link(
          to='/works'
          class='nav__link'
        ) Работы
      li.nav__item
        router-link(
          to='/comments'
          class='nav__link'
        ) Отзывы
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: "About"
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
/* navigation */
.nav__list {
  display: flex;
}
.nav__link {
  width: 125px;
  text-align: center;
  font-weight: 600;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #414c63;
  border-bottom: solid 3px transparent;
  transition: 0.3s all ease;
  @include phones {
    width: 113px;
  }
  &:hover {
    border-bottom: solid 3px rgba(#ea7400, 0.6);
    color: rgba(#ea7400, 0.8);
  }
  &.router-link-exact-active {
    border-bottom: solid 3px #ea7400;
    pointer-events: none;
    color: #ea7400;
  }
}
</style>