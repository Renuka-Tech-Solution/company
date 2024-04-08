<template>
  <div class="row">
    <div class="col-lg-10 col-xl-8 mx-auto text-center">
      <h2 class="fs-16 text-uppercase text-muted mb-3">Latest Projects</h2>
      <h3 class="display-4 mb-10 px-xxl-10">
        Check out some of our awesome projects with creative ideas and great
        design.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="swiper-container grid-view mb-19">
    <Swiper
      :space-between="30"
      :pagination="{ el: '.pbutton2', clickable: true }"
      :modules="[Pagination]"
      :grab-cursor="true"
      :breakpoints="{
        500: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
      }"
    >
      <SwiperSlide v-for="(elm, i) in projects" :key="i">
        <figure class="rounded mb-6">
          <nuxt-img :src="elm.imgSrc" :srcset="elm.imgSrcset" alt="photo" />
          <div
            class="item-link cursor-pointer"
            @click="
              () => {
                setActiveLightBox(true, i);
              }
            "
          >
            <i class="uil uil-focus-add"></i>
          </div>
        </figure>
        <div class="project-details d-flex justify-content-center flex-column">
          <div class="post-header">
            <h2 class="post-title h3">
              <nuxt-link to="/single-project" class="link-dark">{{
                elm.title
              }}</nuxt-link>
            </h2>
            <div class="post-category text-ash">{{ elm.category }}</div>
          </div>
          <!-- /.post-header -->
        </div></SwiperSlide
      >
    </Swiper>
    <div class="swiper-controls">
      <div
        class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pbutton2"
      ></div>
    </div>
    <!-- /.swiper -->
  </div>
  <!-- /.swiper-container -->
  <hr class="dark my-14 my-md-17" />
  <Lightbox
    :images="images"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
</template>

<script setup>
import { projects } from "~/data/projects";
const activeLightBox = ref(false);
const currentSlideIndex = ref();
const images = ref([]);
onMounted(() => {
  images.value = projects.map((elm) => elm.imgSrc);
});

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};
import Lightbox from "~/components/common/Lightbox.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
