<template>
  <section
    class="wrapper image-wrapper bg-image bg-overlay text-white"
    style="background-image: url(/assets/img/photos/bg32.jpg)"
  >
    <div class="container py-14 py-md-17 text-center">
      <i class="icn-flower text-white fs-30 opacity-50"></i>
      <div class="row mt-3">
        <div class="col-xl-9 col-xxl-8 mx-auto">
          <div class="swiper-container dots-light dots-closer mb-6">
            <Swiper
              :space-between="30"
              :pagination="{ el: '.spb14', clickable: true }"
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
                <blockquote class="border-0 fs-24 mb-0">
                  <p>
                    {{ elm.quote }}
                  </p>
                  <div class="blockquote-details justify-content-center">
                    <div class="info p-0">
                      <h6 class="mb-0 text-white">{{ elm.name }}</h6>
                    </div>
                  </div>
                </blockquote>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-controls">
              <div
                class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb14"
              ></div>
            </div>
            <!--/.swiper -->
          </div>
          <!-- /.swiper-container -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { testimonials3 } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
