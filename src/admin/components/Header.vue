<template lang="pug">
  header.header
    .header__container.container
      .header__user
        User(
          photo='DSCN0377.JPG',
          name='Денис Торопин'
        )

      .header__title
        span.header__text Панель администрирования

      .header__btn
        a(href='index.html').header__link Выйти
</template>

<script>
import User from './User';

export default {
  components: {
    User
  }
}
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
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
  @include tablets {
    grid-template-columns: 250px 60px;
    justify-content: space-between;
  }
}
.header__title {
  @include tablets {
    display: none;
  }
}
.header__text {
  font-size: 14px;
  opacity: 0.5;
}
.header__link {
  border-bottom: 1px solid #fff;
  &:hover {
    opacity: 0.8;
  }
}
</style>