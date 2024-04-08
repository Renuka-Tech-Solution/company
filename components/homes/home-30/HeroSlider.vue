<template>
  <div class="container-fluid px-xl-0 pt-16 pt-md-18 pb-18 pb-md-20">
    <div
      class="swiper-container swiper-auto nav-color nav-bottom nav-far"
      style="max-width: 70%; margin: 0px auto"
    >
      <Swiper
        :space-between="40"
        :navigation="{
          prevEl: '.h30spb',
          nextEl: '.h30snb',
        }"
        :loop="true"
        :initial-slide="2"
        :modules="[Navigation]"
        :grab-cursor="true"
        class="swiper overflow-visible"
      >
        <SwiperSlide v-for="item in photoItems" :key="item.id">
          <figure class="rounded-xl shadow-xl">
            <nuxt-img :src="item.src" :alt="item.alt" :id="item.id" /><nuxt-link
              to="/single-project"
              class="item-link"
              ><i class="uil uil-arrow-up-right"></i
            ></nuxt-link>
          </figure>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-controls">
        <div class="swiper-navigation">
          <div class="swiper-button swiper-button-prev h30spb"></div>
          <div class="swiper-button swiper-button-next h30snb"></div>
        </div>
      </div>

      <!-- /.swiper -->
    </div>
    <!-- /.swiper-container -->
  </div>
</template>

<script setup>
const photoItems = ref([
  {
    id: "image1",
    src: "/assets/img/photos/bp1.jpg",
    alt: "Alt Text 1",
  },
  {
    id: "image2",
    src: "/assets/img/photos/bp2.jpg",
    alt: "Alt Text 2",
  },
  {
    id: "image3",
    src: "/assets/img/photos/bp3.jpg",
    alt: "Alt Text 3",
  },
  {
    id: "image4",
    src: "/assets/img/photos/bp4.jpg",
    alt: "Alt Text 4",
  },
  {
    id: "image5",
    src: "/assets/img/photos/bp5.jpg",
    alt: "Alt Text 5",
  },
  {
    id: "image6",
    src: "/assets/img/photos/bp6.jpg",
    alt: "Alt Text 6",
  },
]);

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
