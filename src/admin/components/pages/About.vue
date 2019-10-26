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
        //- NewSkillsGroup

        //- карточки групп умений
        SkillsCard(
          v-for='skill in data'
          :key='skill.group'
          :skill='skill'
        )
</template>

<script>
export default {
  props: {
    data: Array
  },
  components: {
    NewSkillsGroup: () => import('../blocks/NewSkillsGroup'),
    SkillsCard: () => import('../blocks/SkillsCard')
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
/* about */
.about {
  padding-top: 60px;
  margin-bottom: 30px;
}
.about__header {
  margin-bottom: 60px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
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
  padding: 9.5px;
  border-bottom: 1px solid #ccc;
  transition: 0.3s border ease;
  &:focus {
    border-bottom: 1px solid #ea7400;
  }
  &.invalid {
    border-bottom: 1px solid #bf2929;
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