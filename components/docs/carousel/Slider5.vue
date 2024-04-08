<template>
  <div class="card">
    <div class="card-body">
      <div class="swiper-container swiper-thumbs-container dots-over">
        <Swiper
          :space-between="10"
          :navigation="{ prevEl: '.spnvp', nextEl: '.spnvn' }"
          :modules="[Navigation, Thumbs]"
          :grab-cursor="true"
          :thumbs="{ swiper: thumbsSwiper }"
        >
          <swiper-slide v-for="(image, index) in productImages" :key="index">
            <figure class="rounded">
              <nuxt-img :src="image.src" :srcset="image.srcset" alt="photo" />
              <div
                class="item-link cursor-pointer"
                @click="() => setActiveLightBox(true, index)"
              >
                <i class="uil uil-focus-add"></i>
              </div>
            </figure>
          </swiper-slide>
        </Swiper>
        <div class="swiper-controls">
          <div class="swiper-navigation">
            <div class="swiper-button swiper-button-prev spnvp"></div>
            <div class="swiper-button swiper-button-next spnvn"></div>
          </div>
        </div>

        <!-- /.swiper -->
        <div class="swiper swiper-thumbs">
          <Swiper
            :space-between="10"
            :slides-per-view="5"
            :modules="[Thumbs]"
            @swiper="setThumbsSwiper"
            :grab-cursor="true"
          >
            <swiper-slide v-for="(image, index) in productImages" :key="index">
              <figure class="rounded">
                <nuxt-img
                  :src="image.src"
                  :srcset="image.srcset"
                  alt="photo"
                  class="rounded"
                />
              </figure>
            </swiper-slide>
          </Swiper>

          <!--/.swiper-wrapper -->
        </div>
      </div>
    </div>
  </div>
  <CommonLightbox
    :images="images"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
</template>

<script setup>
const productImages = ref([
  {
    src: "/assets/img/photos/shs1.jpg",
    srcset: "/assets/img/photos/shs1@2x.jpg 2x",
    link: "/assets/img/photos/shs1@2x.jpg",
  },
  {
    src: "/assets/img/photos/shs2.jpg",
    srcset: "/assets/img/photos/shs2@2x.jpg 2x",
    link: "/assets/img/photos/shs2@2x.jpg",
  },
  {
    src: "/assets/img/photos/shs3.jpg",
    srcset: "/assets/img/photos/shs3@2x.jpg 2x",
    link: "/assets/img/photos/shs3@2x.jpg",
  },
  {
    src: "/assets/img/photos/shs4.jpg",
    srcset: "/assets/img/photos/shs4@2x.jpg 2x",
    link: "/assets/img/photos/shs4@2x.jpg",
  },
]);
const images = productImages.value.map((elm) => elm.src);
const activeLightBox = ref(false);
const currentSlideIndex = ref();

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs } from "swiper/modules";

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<style lang="scss" scoped></style>
