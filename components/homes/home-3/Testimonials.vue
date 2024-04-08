<template>
  <div class="position-relative mt-n18 mt-md-n23 mb-16 mb-md-18">
    <div
      class="shape rounded-circle bg-line primary rellax w-18 h-18"
      data-rellax-speed="1"
      style="top: -2rem; right: -2.7rem; z-index: 0"
    ></div>
    <div
      class="shape rounded-circle bg-soft-primary rellax w-18 h-18"
      data-rellax-speed="1"
      style="bottom: -1rem; left: -3rem; z-index: 0"
    ></div>
    <div class="card shadow-lg">
      <div class="row gx-0">
        <div
          class="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start"
          style="background-image: url(/assets/img/photos/tm1.jpg)"
        ></div>
        <!--/column -->
        <div class="col-lg-6">
          <div class="p-10 p-md-11 p-lg-13">
            <div class="swiper-container dots-closer mb-4">
              <Swiper
                :space-between="30"
                :pagination="{ el: '.spb10', clickable: true }"
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
                  <blockquote class="icon icon-top fs-lg text-center">
                    <p>{{ elm.quote }}</p>
                    <div
                      class="blockquote-details justify-content-center text-center"
                    >
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
                  class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb10"
                ></div>
              </div>
              <!-- /.swiper -->
            </div>
            <!-- /.swiper-container -->
          </div>
          <!--/div -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.card -->
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { testimonials3 } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
