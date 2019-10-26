<template lang="pug">
  section.works
    .container
      .works__header
        h2.section-title Блок «Работы»

      //- блок редактирования работы
      EditWork

      .works__show
        .works__card
          NewCard(info='Добавить работу')

        //- карточки работ
        .works__card(
          v-for='work in data'
          :key='work.id'
        )
          WorkCard(:work='work')
</template>

<script>
export default {
  props: {
    data: Array
  },
  components: {
    EditWork: () => import('../blocks/EditWork'),
    NewCard: () => import('../blocks/NewCard'),
    WorkCard: () => import('../blocks/WorkCard')
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
/* works */
.works {
  padding-top: 60px;
  margin-bottom: 30px;
}
.works__header {
  margin-bottom: 60px;
}
.works__show {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding-top: 30px;
  margin-bottom: 30px;
  @include tablets {
    grid-template-columns: 1fr 1fr;
  }
  @include phones {
    grid-template-columns: 1fr;
  }
}
.works__card {
  min-height: 556px;
  height: 100%;
  &:first-child {
    @include phones {
      min-height: 100px;
    }
  }
}
</style>