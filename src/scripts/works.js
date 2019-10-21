import Vue from 'vue';

const control = {
  template: '#control'
}

const preview = {
  template: '#preview',
  props: ['slides', 'currentSlide']
}

const tags = {
  template: '#tags',
  props: ['tags']
}

new Vue({
  el: '#works__content',
  template: '#slider',
  data: () => ({
    slides: [],
    slideIdx: 0
  }),
  components: { control, preview, tags },
  computed: {
    tags() {
      return this.currentSlide.tags.split(', ');
    },
    currentSlide() {
      return this.slides[this.slideIdx];
    }
  },
  watch: {
    slideIdx(val) {
      if (val < 0) this.slideIdx = this.slides.length - 1;
      if (val > this.slides.length - 1) this.slideIdx = 0;
    }
  },
  methods: {
    makeArrPhotoLink(data) {
      return data.map(item => {
        const imgLink = require(`../images/content/${item.photo}`);
        item.photo = imgLink;
        return item;
      })
    },
    changeSlide(direction) {
      if (direction === 'next') this.slideIdx++;
      if (direction === 'prev') this.slideIdx--;
    },
    handleSlide(id) {
      this.slideIdx = id - 1;
    }
  },
  created() {
    const data = require('../data/works.json');
    this.slides = this.makeArrPhotoLink(data);
  }
})