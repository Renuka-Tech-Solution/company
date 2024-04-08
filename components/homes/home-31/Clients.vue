<template>
  <h2 class="fs-16 text-uppercase text-muted mb-8 text-center">
    Trusted by over 5000 clients
  </h2>
  <div class="swiper-container clients mb-19">
    <Swiper
      :space-between="30"
      :modules="[Autoplay]"
      :grab-cursor="true"
      :autoplay="{
        delay: 0,
      }"
      :loop="true"
      :speed="5000"
      class="swiper pe-none ticker"
      :breakpoints="{
        500: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
        1400: { slidesPerView: 7 },
      }"
    >
      <SwiperSlide v-for="(elm, i) in clients1" :key="i">
        <div class="swiper-slide px-5">
          <nuxt-img :src="elm.src" alt="photo" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { clients1 } from "~/data/clients";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
</script>

<style lang="scss"></style>
