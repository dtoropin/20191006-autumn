<template lang="pug">
  .skills
    .skills__header
      .skills__title
        input(type='text' placeholder='Название группы' :value='skill.group').skills__input.skills__input--title
        .skills__btns
          button(type='button' @click='editField').btn.btn--edit
          button(type='button' @click='deleteField').btn.btn--delete
      
    .skills__block
      ul.skills__list
        li(
          v-for='(percent, value, idx) in skill.skills'
          :key='idx'
        )
          .skills__item
            input(type='text' :value='value').skills__input
            input(type='text' :value='percent').skills__input.skills__input--percent
            span.skills__percent %
            .skills__btns
              button(type='button' @click='editField').btn.btn--edit
              button(type='button' @click='deleteField').btn.btn--delete

    .skills__footer.edit
      input(type='text' placeholder='Новый навык').skills__input
      input(type='text' value='0').skills__input.skills__input--percent
      span.skills__percent %
      button(type='button' @click='saveField').skills__plus
        .plus.plus--bg
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      default: {}
    }
  },
  methods: {
    editField(e) {
      const item = e.target.parentElement.parentElement;
      if (item.classList.contains('edit')) {
        console.log('save skill');
      }
      item.classList.toggle('edit');
    },
    deleteField(e) {
      const item = e.target.parentElement.parentElement;
      if (item.classList.contains('edit')) {
        item.classList.remove('edit');
        console.log('cancel edit');
      } else if (confirm('Удалить skill?')){
        console.warn('delete skill');
      }
    },
    saveField(e) {
      console.log('save skill');
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

/* skills */
.skills {
  min-height: 387px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.15);
  @include tablets {
    width: 80%;
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
.skills__list {
  padding-top: 16px;
}
.skills__item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 60px 50px;
  grid-column-gap: 20px;
  align-items: center;
  margin-bottom: 16px;
}
.skills__title.edit,
.skills__item.edit,
.skills__footer.edit {
  & .skills__input {
    border-bottom: 1px solid #ccc;
    pointer-events: auto;
    &:focus {
      border-bottom: 1px solid rgba(#ea7400, .5);
    }
    &.invalid {
      border-bottom: 1px solid #ff0101;
    }
  }
  & .btn--edit {
    background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%) no-repeat;
  }
  & .btn--delete {
    background: svg-load("cross.svg", fill=#ff0101, width=100%, height=100%) no-repeat;
  }
}
.skills__input {
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 7px;
  border-bottom: 1px solid transparent;
  pointer-events: none;
  transition: 0.3s border ease;
  &--title {
    font-size: 18px;
    font-weight: 700;
  }
  &--percent {
    padding-right: 17px;
  }
}
.skills__percent {
  position: absolute;
  bottom: 20%;
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