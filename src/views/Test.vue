<template>
  <div>
    <div class="swiper-container bg-yellow-400" ref="swiperContainer">
      <div class="swiper-wrapper bg-rose-500">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <!-- ... -->
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Navigation -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <!-- Add Scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
// Import Swiper
import Swiper from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Add autoplay import

export default {
  mounted() {
    if (this.$refs.swiperContainer) {
      // Initialize Swiper when the component is mounted
      this.swiper = new Swiper(this.$refs.swiperContainer, {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        on: {
          init: this.onSwiper,
          slideChange: this.onSlideChange,
        },
      });
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
};
</script>

