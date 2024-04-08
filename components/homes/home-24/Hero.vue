<template>
  <section id="home" class="scrollSpysection">
    <div class="wrapper bg-gray" style="width: 90%; margin: 0px auto">
      <div class="container-fluid px-xl-0 pt-6 pb-10">
        <div class="swiper-container swiper-auto swiper-container-0">
          <Swiper
            :space-between="30"
            :pagination="{ el: '.spbh24', clickable: true }"
            :modules="[Pagination, Navigation]"
            :navigation="{
              prevEl: '.sbph24',
              nextEl: '.sbnh24',
            }"
            class="swiper overflow-visible"
            style="max-width: 75%; margin: 0px auto"
            :grab-cursor="true"
            :initial-slide="2"
            :loop="true"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
              1200: { slidesPerView: 1 },
            }"
          >
            <SwiperSlide v-for="(image, index) in imagePaths" :key="index">
              <figure class="rounded">
                <nuxt-img :src="image" alt="photo" />
                <div
                  class="item-link cursor-pointer"
                  @click="() => setActiveLightBox(true, index)"
                >
                  <i class="uil uil-focus-add"></i>
                </div>
              </figure>
            </SwiperSlide>
          </Swiper>

          <div class="swiper-controls">
            <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spbh24"
            ></div>
            <div class="swiper-navigation">
              <div class="swiper-button swiper-button-prev sbph24"></div>
              <div class="swiper-button swiper-button-next sbnh24"></div>
            </div>
          </div>

          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.cotnainer -->
    </div>
    <!-- /.overflow-hidden -->
  </section>
  <CommonLightbox
    :images="imagePaths"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
const imagePaths = [
  "/assets/img/photos/cf1.jpg",
  "/assets/img/photos/cf2.jpg",
  "/assets/img/photos/cf3.jpg",
  "/assets/img/photos/cf4.jpg",
  "/assets/img/photos/cf5.jpg",
  "/assets/img/photos/cf6.jpg",
];
const activeLightBox = ref(false);
const currentSlideIndex = ref();

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};
</script>

<style lang="scss" scoped></style>
