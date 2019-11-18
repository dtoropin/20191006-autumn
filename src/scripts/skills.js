import Vue from 'vue';
import axios from "axios";
axios.defaults.baseURL = "https://webdev-api.loftschool.com/";

const diagramm = {
  template: '#skills-diagramm',
  props: ['name', 'percent'],
  methods: {
    drawPercentCircle() {
      const elem = this.$refs['percent-circle'];
      elem.style.strokeDasharray = this.percent + ', 100';
    }
  },
  mounted() {
    this.drawPercentCircle();
  }
}

const chart = {
  template: '#skills-chart',
  components: { diagramm },
  props: ['skill']
}

new Vue({
  el: '#skills-component',
  template: '#skills-container',
  data: () => ({
    skills: []
  }),
  components: { chart },
  created() {
    axios
      .get("/categories/193")
      .then(response => {
        this.skills = response.data;
      })
      .catch(error => {
        console.error(error.response.data.error);
      });
  }
})