<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-16 pb-14 pb-md-0">
      <div class="row gx-lg-8 gx-xl-0 align-items-center">
        <div
          class="col-lg-5 col-xl-4 offset-xl-1 d-none d-lg-flex position-relative"
        >
          <div
            class="shape rounded-circle bg-pale-primary rellax w-21 h-21 d-md-none d-lg-block"
            data-rellax-speed="1"
            style="top: 7rem; left: 1rem"
          ></div>
          <figure>
            <nuxt-img
              src="/assets/img/photos/co1.png"
              srcset="/assets/img/photos/co1@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-6 col-xl-6 col-xxl-5 offset-xl-1">
          <div class="swiper-container dots-start dots-closer mt-6 mb-6">
            <Swiper
              :space-between="30"
              :pagination="{ el: '.spb9', clickable: true }"
              :modules="[Pagination]"
              :grab-cursor="true"
              :breakpoints="{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1200: { slidesPerView: 1 },
              }"
            >
              <SwiperSlide v-for="(elm, i) in testimonials3" :key="i">
                <blockquote class="icon fs-lg">
                  <p>{{ elm.quote }}</p>
                  <div class="blockquote-details">
                    <div class="info ps-0">
                      <h5 class="mb-1">{{ elm.name }}</h5>
                      <p class="mb-0">{{ elm.role }}</p>
                    </div>
                  </div>
                </blockquote>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-controls">
              <div
                class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb9"
              ></div>
            </div>

            <!-- /.swiper -->
          </div>
          <!-- /.swiper-container -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { testimonials3 } from "~/data/testimonials";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
