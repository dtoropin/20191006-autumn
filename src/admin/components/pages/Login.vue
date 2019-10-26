<template lang="pug">
  .login
    .login__block
      a(href='index.html').login__close
      .login__content
        .login__title Авторизация
        form.login-form
          .login-form__row
            label.login-form__label
              span.login-form__title Логин
              .login-form__field
                input(type="text" name="login" required).login-form__input
                span.login-form__icon.login-form__icon--user
                span.login-form__error

          .login-form__row
            label.login-form__label
              span.login-form__title Пароль
              .login-form__field
                input(type="password" name="pass" required).login-form__input
                span.login-form__icon.login-form__icon--key
                span.login-form__error

          .login-form__row
            button(type='submit').login-form__btn Отправить
</template>



<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

/* login modal */
.login {
  display: none;
  /* display: flex; */
  position: fixed;
  top: 0;
  height: 100%;
  left: 0;
  right: 0;
  background: url('../../../images/background/TrainBridge.jpg') no-repeat center / cover;
  justify-content: center;
  align-items: center;
  z-index: 100;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(#2d3c4e, .9);
  }
}
.login__block {
  position: relative;
  background: #fff;
  z-index: 10;
  padding: 60px 75px;
  max-width: 565px;
  @include phones {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
.login__close {
  position: absolute;
  top: 30px;
  right: 30px;
  display: block;
  width: 19px;
  height: 19px;
  background: svg-load("cross.svg", fill=#2d3c4e, width=100%, height=100%) no-repeat;
  &:hover {
    background: svg-load("cross.svg", fill=#ea7400, width=100%, height=100%) no-repeat;
  }
}
.login__title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
}
/* login-form */
.login-form__title {
  display: block;
  font-weight: 600;
  opacity: 0.3;
  margin-bottom: 25px;
}
.login-form__field {
  position: relative;
  margin-bottom: 40px;
}
.login-form__input {
  width: 100%;
  padding: 8px 5px 20px 45px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid rgba(#2d3c4e, .3);
  &:focus {
    border-bottom: 1px solid rgba(#ea7400, .3);
    & + .login-form__icon--user {
      background: svg-load("user.svg", fill=#ea7400, width=100%, height=100%) no-repeat;
    }
    & + .login-form__icon--key {
      background: svg-load("key.svg", fill=#ea7400, width=100%, height=100%) no-repeat;
    }
  }
  &:invalid {
    border-bottom: 1px solid rgba(#fb0000, .3);
    & + .login-form__icon--user {
      background: svg-load("user.svg", fill=#fb0000, width=100%, height=100%) no-repeat;
    }
    & + .login-form__icon--key {
      background: svg-load("key.svg", fill=#fb0000, width=100%, height=100%) no-repeat;
    }
  }
}
.login-form__icon {
  position: absolute;
  top: 5px;
  left: 0;
  display: block;
  width: 26px;
  height: 30px;
  margin-right: 20px;
  opacity: 0.3;
  &--user {
    background: svg-load("user.svg", fill=#2d3c4e, width=100%, height=100%) no-repeat;
  }
  &--key {
    background: svg-load("key.svg", fill=#2d3c4e, width=100%, height=100%) no-repeat;
  }
}
.login-form__btn {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 33px 120px;
  display: block;
  margin: 0 auto;
  background-image: linear-gradient(to top, #f29400, #ea7400);
  border-radius: 35px 0;
  &:hover {
    background-image: linear-gradient(to bottom, #f29400, #ea7400);
  }
  &:active {
    box-shadow: inset 0 0 7px rgba(#fff, .7);
  }
}
</style>