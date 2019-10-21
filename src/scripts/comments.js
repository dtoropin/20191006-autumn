import Vue from 'vue';

import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

const review = {
  template: '#review',
  props: ['item'],
  components: { swiperSlide }
}

new Vue({
  el: '#comments-component',
  template: '#comments',
  data: () => ({
    comments: [],
    swiperOptions: {
      slidesPerView: 2,
      spaceBetween: 70,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.comments__arrow--left',
        prevEl: '.comments__arrow--right',
        disabledClass: 'disabled'
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 1,
          slidesPerGroup: 1
        }
      }
    }
  }),
  components: { review, swiper },
  methods: {
    makeArrPhotoLink(data) {
      return data.map(item => {
        const imgLink = require(`../images/content/${item.photo}`);
        item.photo = imgLink;
        return item;
      })
    }
  },
  created() {
    const data = require('../data/comments.json');
    this.comments = this.makeArrPhotoLink(data);
  }
})