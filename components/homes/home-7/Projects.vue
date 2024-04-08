<template>
  <div class="overflow-hidden mt-18">
    <div class="container pb-9 pb-md-14">
      <div class="row">
        <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
          <h3 class="display-4 mb-8">Our Recent Projects</h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="swiper-container grid-view nav-bottom nav-color mb-14">
        <Swiper
          :space-between="30"
          :pagination="{ el: '.pbutton10', clickable: true }"
          :modules="[Pagination, Navigation]"
          :navigation="{
            prevEl: '.snpb2',
            nextEl: '.snnb2',
          }"
          :breakpoints="{
            500: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
          }"
          class="overflow-visible"
        >
          <SwiperSlide v-for="(slide, i) in projects8" :key="i">
            <div class="swiper-slide">
              <figure class="rounded">
                <nuxt-img :src="slide.imageSrc" alt="photo" /><nuxt-link
                  class="item-link"
                  to="/single-project"
                  ><i class="uil uil-link"></i
                ></nuxt-link>
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-controls">
          <div class="swiper-navigation">
            <div class="swiper-button swiper-button-prev snpb2"></div>
            <div class="swiper-button swiper-button-next snnb2"></div>
          </div>
        </div>

        <!--/.swiper -->
      </div>
      <!-- /.swiper-container -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script setup>
import { projects8 } from "~/data/projects";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
