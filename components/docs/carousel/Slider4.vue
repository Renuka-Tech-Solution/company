<template>
  <Swiper
    :space-between="30"
    :pagination="{ el: '.docssp4', clickable: true }"
    :modules="[Pagination, Navigation]"
    :grab-cursor="true"
    :breakpoints="{
      500: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    }"
    :navigation="{
      prevEl: '.docss4nbp',
      nextEl: '.docss4nbn',
    }"
  >
    <SwiperSlide>
      <div class="swiper-slide bg-overlay bg-overlay-400 rounded">
        <nuxt-img src="/assets/img/photos/is1.jpg" alt="photo" />
        <div class="caption-wrapper p-12">
          <div
            class="caption bg-white rounded px-4 py-3 mt-auto animate__animated animate__slideInDown animate__delay-1s"
          >
            <h5 class="mb-0">Vivamus sagittis lacus augue</h5>
          </div>
          <!--/.caption -->
        </div>
        <!--/.caption-wrapper -->
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="rounded">
        <nuxt-img src="/assets/img/photos/is2.jpg" alt="photo" />
        <div class="caption-wrapper p-12">
          <div
            class="caption bg-white rounded px-4 py-3 mx-auto mt-auto animate__animated animate__slideInDown animate__delay-1s"
          >
            <h5 class="mb-0">Vivamus sagittis lacus augue</h5>
          </div>
          <!--/.caption -->
        </div>
        <!--/.caption-wrapper -->
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="">
        <nuxt-img src="/assets/img/photos/is3.jpg" class="rounded" alt="photo" />
      </div>
    </SwiperSlide>
  </Swiper>
  <div class="swiper-controls">
    <div
      class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal docssp4"
    ></div>
    <div class="swiper-navigation">
      <div class="swiper-button swiper-button-prev docss4nbp"></div>
      <div class="swiper-button swiper-button-next docss4nbn"></div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
