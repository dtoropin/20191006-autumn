<template lang="pug">
  .skills
    .skills__header
      SkillsGroupName(
        :groupName='cat.category'
        :id='cat.id'
      )

    .skills__block
      ul.skills__list
        li(
          v-for='skill in cat.skills'
          :key='skill.id'
        )
          SkillsItem(
            :skill='skill'
          )

    .skills__footer
      SkillsAddItem(
        :category='cat.id'
      )
</template>

<script>
export default {
  props: {
    cat: {
      type: Object,
      default() {
        return {
          category: '',
          id: 0
        }
      }
    }
  },
  components: {
    SkillsGroupName: () => import('./SkillsGroupName'),
    SkillsItem: () => import('./SkillsItem'),
    SkillsAddItem: () => import('./SkillsAddItem')
  }
}
</script>

<style lang="postcss">
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
.skills.new {
  & .skills__footer,
  & .skills__block {
    display: none;
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
.skills__list {
  padding-top: 16px;
}
</style>