import Vue from 'vue';
import axios from "axios";
axios.defaults.baseURL = "https://webdev-api.loftschool.com/";

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
        nextEl: '.comments__arrow--right',
        prevEl: '.comments__arrow--left',
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
        const imgLink = 'https://webdev-api.loftschool.com/' + item.photo;
        item.photo = imgLink;
        return item;
      })
    }
  },
  created() {
    axios
      .get("/reviews/193")
      .then(response => {
        this.comments = this.makeArrPhotoLink(response.data);
      })
      .catch(error => {
        console.error(error.response.data.error);
      });
  }
})