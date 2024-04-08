<template>
  <Swiper
    :space-between="30"
    :pagination="{ el: '.docss1p', clickable: true }"
    :modules="[Pagination, Navigation]"
    :navigation="{
      prevEl: '.docss1nbp',
      nextEl: '.docss1nbn',
    }"
    :grab-cursor="true"
    :breakpoints="{
      500: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
    }"
  >
    <SwiperSlide v-for="(photo, index) in photoList" :key="index">
      <figure class="overlay overlay-1 hover-scale rounded mb-0">
        <a href="#">
          <nuxt-img :src="photo.src" :srcset="photo.srcset" alt="photo" />
          <span class="bg"></span>
        </a>
        <figcaption>
          <h5 class="from-top mb-0">Read More</h5>
        </figcaption>
      </figure></SwiperSlide
    >
  </Swiper>
  <div class="swiper-controls">
    <div
      class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal docss1p"
    ></div>
    <div class="swiper-navigation">
      <div class="swiper-button swiper-button-prev docss1nbp"></div>
      <div class="swiper-button swiper-button-next docss1nbn"></div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
const photoList = [
  {
    id: 1,
    src: "/assets/img/photos/p1.jpg",
    srcset: "/assets/img/photos/p1@2x.jpg 2x",
  },
  {
    id: 2,
    src: "/assets/img/photos/p2.jpg",
    srcset: "/assets/img/photos/p2@2x.jpg 2x",
  },
  {
    id: 3,
    src: "/assets/img/photos/p3.jpg",
    srcset: "/assets/img/photos/p3@2x.jpg 2x",
  },
  {
    id: 4,
    src: "/assets/img/photos/p4.jpg",
    srcset: "/assets/img/photos/p4@2x.jpg 2x",
  },
  {
    id: 5,
    src: "/assets/img/photos/p5.jpg",
    srcset: "/assets/img/photos/p5@2x.jpg 2x",
  },
  // Add more photos as needed
];
</script>

<style lang="scss" scoped></style>
