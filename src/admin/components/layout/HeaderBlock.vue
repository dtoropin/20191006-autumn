<template lang="pug">
  header.header
    .header__container.container
      .header__user
        User(
          :photo='photo',
          :name='name'
        )

      .header__title
        span.header__text Панель администрирования

      .header__btn
        a(href='#' @click.prevent='logout').header__link Выйти
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    photo() {
      return this.user.id === 193 ? "DSCN0377.JPG" : "user-default.jpg";
    },
    name() {
      return this.user.id === 193 ? "Денис Торопин" : this.user.name;
    }
  },
  components: {
    User: () => import("../blocks/User")
  },
  methods: {
    logout() {
      if (confirm("Выйти из Admin?")) {
        localStorage.clear();
        document.location.href = "index.html";
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
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
  color: #fff;
  border-bottom: 1px solid #fff;
  &:hover {
    opacity: 0.8;
  }
}
</style>