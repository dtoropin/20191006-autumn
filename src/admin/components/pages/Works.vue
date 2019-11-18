<template lang="pug">
  section.works
    .container
      .works__header
        h2.section-title Блок «Работы»

      //- блок редактирования работы
      WorkEdit(
        v-if='isEdit'
        @cancelEdit='cancelEdit'
        :editWork='work'
      )

      .works__show
        .works__card
          NewCard(
            info='Добавить работу'
            @addNewCard='editorWork'
          )

        //- карточки работ
        .works__card(
          v-for='work in works'
          :key='work.id'
        )
          Work(
            :work='work'
            @editWork='editWork'
          )
    Popup(:message='message')
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    work: {},
    isEdit: false
  }),
  computed: {
    ...mapState("works", {
      works: state => state.works,
      message: state => state.message
    })
  },
  methods: {
    ...mapActions("works", ["getWorks"]),
    editorWork() {
      this.isEdit = true;
    },
    cancelEdit() {
      this.isEdit = false;
      this.work = {};
    },
    editWork(id) {
      this.work = this.works.filter(work => work.id === id)[0];
      this.isEdit = true;
    }
  },
  components: {
    WorkEdit: () => import("../blocks/WorkEdit"),
    NewCard: () => import("../blocks/NewCard"),
    Work: () => import("../blocks/Work"),
    Popup: () => import("../blocks/Popup")
  },
  mounted() {
    this.getWorks();
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
/* works */
.works {
  padding-top: 50px;
}
.works__header {
  margin-bottom: 50px;
}
.works__show {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding-top: 30px;
  padding-bottom: 50px;
  @include tablets {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 30px;
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