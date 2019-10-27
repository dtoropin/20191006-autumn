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
        //- SkillsCard

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
    SkillsCard: () => import('../blocks/SkillsCard')
  }
}
</script>

<style lang="postcss" scoped>
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
</style>