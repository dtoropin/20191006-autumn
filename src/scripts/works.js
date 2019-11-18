import Vue from 'vue';
import axios from "axios";
axios.defaults.baseURL = "https://webdev-api.loftschool.com/";

const control = {
  template: '#control'
}

const preview = {
  template: '#preview',
  props: ['slides', 'idx']
}

const tags = {
  template: '#tags',
  props: ['tags']
}

new Vue({
  el: '#works__content',
  template: '#slider',
  data() {
    return {
      slides: [],
      slideIdx: 0,
      currentSlide: {}
    }
  },
  computed: {
    slidesSlice() {
      return [...this.slides].slice(0, 3);
    }
  },
  components: { control, preview, tags },
  watch: {
    slideIdx(val) {
      if (val < 0) {
        this.slideIdx = 0;
        const lastSlide = this.slides[this.slides.length - 1];
        this.slides.unshift(lastSlide);
        this.slides.pop();
      }
      if (val > this.slidesSlice.length - 1) {
        this.slideIdx = this.slidesSlice.length - 1;
        this.slides.push(this.slides[0]);
        this.slides.shift();
      }
      this.slides = this.makeArrIdx(this.slides);
      this.currentSlide = this.slides[val];
    }
  },
  methods: {
    makeArrPhotoLink(data) {
      return data.map((item, index) => {
        const imgLink = `https://webdev-api.loftschool.com/${item.photo}`;
        item.photo = imgLink;
        item.techs = item.techs.split(', ');
        item.index = index;
        return item;
      })
    },
    makeArrIdx(data) {
      return data.map((item, idx) => {
        item.idx = idx;
        return item;
      })
    },
    changeSlide(direction) {
      if (direction === 'next') this.slideIdx++;
      if (direction === 'prev') this.slideIdx--;
    },
    handleSlide(id) {
      this.slideIdx = id;
    }
  },
  created() {
    axios
      .get("/works/193")
      .then(response => {
        this.slides = this.makeArrPhotoLink(response.data);
        this.slides = this.makeArrIdx(this.slides);
        this.currentSlide = this.slides[0];
      })
      .catch(error => {
        console.error(error);
      });
  }
})