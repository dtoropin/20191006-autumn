<template lang="pug">
  .skills
    .skills__header
      .skills__title
        span.skills__value.skills__value--title {{ skill.group }}
        .skills__btns
          button(type='button').btn.btn--ok
          button(type='button').btn.btn--delete
      
    .skills__block
      ul.skills__list
        li.skills__item(
          v-for='(value, key) in skill.skills'
          :key='key'
        )
          span.skills__value {{ key }}
          span.skills__value.skills__value--percent {{ value }}
          span.skills__percent %
          .skills__btns
            button(type='button').btn.btn--ok
            button(type='button').btn.btn--delete

    .skills__footer
      input(type='text' name='newTitle' placeholder='Новый навык').skills__input
      input(type='text' name='newPercent').skills__input.skills__input--percent
      span.skills__percent %
      button(type='button').skills__plus
        .plus.plus--bg
</template>

<script>
export default {
  props: {
    skill: {}
  }
}
</script>

<style lang="postcss">
@import "../../styles/mixins.pcss";

/* skills */
.skills {
  min-height: 387px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.15);
  @include tablets {
    width: 90%;
    margin: 0 auto;
  }
  @include phones {
    width: 100%;
    margin: 0;
    padding: 20px 10px;
  }
}
.skills__header {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(#000, 0.1);
}
.skills__block {
  flex-grow: 1;
  margin-bottom: 60px;
}
.skills__title {
  display: grid;
  grid-template-columns: 82% 15%;
  grid-column-gap: 3%;
  align-items: center;
}
.skills__item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 60px 50px;
  grid-column-gap: 20px;
  align-items: center;
  padding-top: 16px;
}
.skills__value,
.skills__input {
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  border-bottom: 1px solid transparent;
  &--title {
    font-size: 18px;
    font-weight: 700;
  }
  &--percent {
    padding-right: 17px;
  }
}
.skills__value {
  padding: 7px;
  &--title {
    text-transform: capitalize;
  }
}
.skills__input {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  transition: 0.3s border ease;
  &:focus {
    border-bottom: 1px solid #ea7400;
  }
}
.skills__percent {
  position: absolute;
  bottom: 16%;
  right: 75px;
}
.skills__btns {
  justify-self: end;
  display: inline-flex;
  & .btn:first-child {
    margin-right: 19px;
  }
}
.skills__footer {
  position: relative;
  width: 80%;
  display: grid;
  margin-left: auto;
  grid-template-columns: 1fr 60px 50px;
  grid-column-gap: 20px;
  align-items: center;
  @include phones {
    width: 100%;
  }
}
.skills__plus {
  & .plus {
    width: 40px;
    height: 40px;
    font-size: 30px;
  }
  &:hover .plus {
    background-image: linear-gradient(to bottom, #f29400, #ea7400);
  }
}
</style>