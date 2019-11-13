<template lang="pug">
  .content
    HeaderBlock(v-if='user.id')
    Navigation(v-if='user.id')
    router-view
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('user', {
      user: state => state.user
    })
  },
  components: {
    HeaderBlock: () => import("./components/layout/HeaderBlock"),
    Navigation: () => import("./components/layout/Navigation"),
    About: () => import("./components/pages/About"),
    Works: () => import("./components/pages/Works"),
    Comments: () => import("./components/pages/Comments"),
    Login: () => import("./components/pages/Login")
  }
};
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
  width: 100%;
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
    background: svg-load("cross.svg", fill=#fff, width=100%, height=100%)
      no-repeat;
    transition: 0.2s transform ease;
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
/* button */
.btn {
  opacity: 1;
  transition: 0.3s opacity ease;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &--edit,
  &--edit--ok,
  &--delete,
  &--edit--delete {
    width: 14px;
    height: 14px;
  }
  &--edit {
    background: svg-load("pencil.svg", fill=#414c63, width=100%, height=100%)
      no-repeat;
  }
  &--delete {
    background: svg-load("trash.svg", fill=#414c63, width=100%, height=100%)
      no-repeat;
  }
  &-default,
  &-zero {
    display: inline-block;
    cursor: pointer;
    line-height: 1;
    padding: 15px 40px;
    border-radius: 25px;
    transition-property: color, background;
    transition-duration: 0.3s;
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
      background: svg-load("pencil.svg", fill=#ea7400, width=100%, height=100%)
        no-repeat;
    }
    &--delete::after {
      content: "";
      width: 14px;
      height: 14px;
      display: block;
      margin-left: 10px;
      background: svg-load("cross.svg", fill=red, width=100%, height=100%)
        no-repeat;
    }
  }
}
</style>