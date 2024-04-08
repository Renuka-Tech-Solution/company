<template>
  <div class="swiper-container swiper-auto swiper-auto-xs mb-8">
    <Swiper
      :space-between="40"
      class="swiper overflow-visible pe-none ticker"
      :modules="[Autoplay]"
      :grab-cursor="true"
      slides-per-view="auto"
      :autoplay="{
        delay: 0,
      }"
      :speed="5000"
      :resize-observer="false"
      effect="slide"
      :loop="true"
      :autoplay-time="1"
      :centered-slides="true"
    >
      <SwiperSlide v-for="(elm, i) in photoSlides.slice(8, 14)" :key="i">
        <figure class="rounded-xl shadow-xl">
          <nuxt-img :src="elm.src" alt="photo" />
        </figure>
      </SwiperSlide>
    </Swiper>

    <!-- /.swiper -->
  </div>
  <!-- /.swiper-container -->
  <div class="swiper-container swiper-auto swiper-auto-xs">
    <Swiper
      :space-between="40"
      class="swiper overflow-visible pe-none ticker"
      :modules="[Autoplay]"
      :grab-cursor="true"
      slides-per-view="auto"
      :autoplay="{
        delay: 0,
        reverseDirection: true,
      }"
      :speed="5000"
      :resize-observer="false"
      effect="slide"
      :loop="true"
      :autoplay-time="1"
      :centered-slides="true"
    >
      <SwiperSlide v-for="(elm, i) in photoSlides.slice(0, 7)" :key="i">
        <figure class="rounded-xl shadow-xl">
          <nuxt-img :src="elm.src" alt="photo" />
        </figure>
      </SwiperSlide>
    </Swiper>
    <!-- /.swiper -->
  </div>
  <div class="text-center mt-8 mb-15 mb-md-18 mb-lg-25">
    <a class="btn btn-lg btn-primary rounded-xl">See Our Projects</a>
  </div>
</template>

<script setup>
const photoSlides = ref([
  { id: 1, src: "/assets/img/photos/ma1.jpg" },
  { id: 2, src: "/assets/img/photos/ma2.jpg" },
  { id: 3, src: "/assets/img/photos/ma3.jpg" },
  { id: 4, src: "/assets/img/photos/ma4.jpg" },
  { id: 5, src: "/assets/img/photos/ma5.jpg" },
  { id: 6, src: "/assets/img/photos/ma6.jpg" },
  { id: 7, src: "/assets/img/photos/ma7.jpg" },
  { id: 8, src: "/assets/img/photos/ma8.jpg" },
  { id: 9, src: "/assets/img/photos/ma9.jpg" },
  { id: 10, src: "/assets/img/photos/ma10.jpg" },
  { id: 11, src: "/assets/img/photos/ma11.jpg" },
  { id: 12, src: "/assets/img/photos/ma12.jpg" },
  { id: 13, src: "/assets/img/photos/ma13.jpg" },
  { id: 14, src: "/assets/img/photos/ma14.jpg" },
]);

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
