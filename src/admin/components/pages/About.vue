<template lang="pug">
  section.about
    .container
      .about__header
        h2.section-title Блок «Обо мне»
        a(href='#').add
          .add__plus
            .plus.plus--bg
          .add__text Добавить группу

      .about__block
        //- карточка новой группы
        .skills
          InputNameGroup
          .skills__block
          NewSkill

        //- карточки групп умений
        .skills(
          v-for='skill in skills'
          :key='skill.group'
        )
          InputNameGroup(
            :groupName='skill.group'
          )
            
          .skills__block
            ul.skills__list
              li(
                v-for='(percent, value, idx) in skill.skills'
                :key='idx'
              )
                InputSkill(
                  :value='value'
                  :percent='percent'
                )

          NewSkill
</template>

<script>
import { Validator } from 'simple-vue-validator';

export default {
  data: () => ({
    skills: []
  }),
  created() {
    this.skills = require("../../../data/skills.json");
  },
  components: {
    InputSkill: () => import("../blocks/InputSkill"),
    NewSkill: () => import("../blocks/NewSkill"),
    InputNameGroup: () => import("../blocks/InputNameGroup")
  }
};
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";
/* about */
.about {
  padding-top: 50px;
  padding-bottom: 30px;
}
.about__header {
  margin-bottom: 50px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
  @include phones {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;
  }
}
.about__block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @include tablets {
    grid-template-columns: 1fr;
  }
}

/* add */
.add {
  display: flex;
  align-items: center;
  outline: none;
  color: #ea7400;
  transition: 0.3s color ease;
  &:hover {
    color: rgba(#ea7400, 0.7);
    & .plus {
      background-image: linear-gradient(to bottom, #f29400, #ea7400);
    }
  }
}
.add__plus {
  width: 22px;
  height: 22px;
  margin-right: 13px;
  font-size: 18px;
}
.add__text {
  font-weight: 600;
}

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
  position: relative;
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
.skills__label {
  position: relative;
}
.skills__title.edit,
.skills__item.edit,
.skills__footer.edit {
  & .skills__input {
    border-bottom: 1px solid #ccc;
    pointer-events: auto;
    &:focus {
      border-bottom: 1px solid rgba(#ea7400, 0.5);
    }
    &.invalid {
      border-bottom: 1px solid #ff0101;
    }
  }
  & .btn--edit {
    background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%)
      no-repeat;
  }
  & .btn--delete {
    background: svg-load("cross.svg", fill=#ff0101, width=100%, height=100%)
      no-repeat;
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
.skills__field {
  position: relative;
}
.skills__error {
  position: absolute;
  font-size: 13px;
  font-weight: 300;
  color: #fff;
  top: 100%;
  display: block;
  padding: 1px 10px;
  background: rgba(#cd1515, .8);
  border-radius: 3px;
  z-index: 10;
  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 5px 10px;
    border-color: transparent transparent rgba(#cd1515, .8) transparent;
  }
}
.skills__percent {
  position: absolute;
  bottom: 20%;
  right: 5px;
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