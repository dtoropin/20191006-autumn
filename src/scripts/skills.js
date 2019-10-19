import Vue from 'vue';

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
    this.skills = require('../data/skills.json');
  }
})