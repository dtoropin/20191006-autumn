<template lang="pug">
  section.works
    .container
      .works__header
        h2.section-title Блок «Работы»

      //- блок редактирования работы
      WorkEdit(
        v-if='isEdit'
        @cancelEdit='cancelEdit'
        @saveWork='saveWork'
        :title='title'
        :techs='techs'
        :photo='photo'
        :link='link'
        :description='description'
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
            @deleteWork='deleteWork'
            @editWork='editWork'
          )
</template>

<script>
import { mapActions, mapState } from 'vuex';
import axios from "axios";
axios.defaults.baseURL = "https://webdev-api.loftschool.com/";
const token = localStorage.getItem("token") || "";
axios.defaults.headers["Authorization"] = `Bearer ${token}`;

export default {
  data: () => ({
    title: '',
    techs: '',
    photo: '',
    link: '',
    description: '',
    id: 0,
    isEdit: false,
    isUpdate: false
  }),
  computed: {
    ...mapState('works', {
      works: state => state.works
    })
  },
  methods: {
    ...mapActions('works', ['getWorks']),
    editorWork() {
      this.isEdit = true;
    },
    cancelEdit() {
      this.title = '';
      this.techs = '';
      this.photo = '';
      this.link = '';
      this.description = '';
      this.id = 0;
      this.isUpdate = false;
      this.isEdit = false;
    },
    editWork(id) {
      const work = this.works.filter(work => work.id === id)[0];
      this.title = work.title;
      this.techs = work.techs;
      this.photo = work.photo;
      this.link = work.link;
      this.description = work.description;
      this.id = work.id;
      this.isEdit = true;
      this.isUpdate = true;
    },
    saveWork(data) {
      const id = !this.isUpdate ? '' : `/${this.id}`;
      axios
        .post('/works' + id, data)
        .then(response => {
          this.getWorks();
        })
        .catch(error => {
          console.error(error.response);
        });
    },
    deleteWork(id) {
      axios
        .delete(`/works/${id}`)
        .then(response => {
          this.getWorks();
        })
        .catch(error => {
          console.error(error.response);
        });
    }
  },
  components: {
    WorkEdit: () => import('../blocks/WorkEdit'),
    NewCard: () => import('../blocks/NewCard'),
    Work: () => import('../blocks/Work')
  },
  created() {
    this.getWorks();
  }
}
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