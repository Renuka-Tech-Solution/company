<template>
  <div class="card shadow-lg mt-n21 mt-md-n23">
    <div class="row gx-0">
      <div
        class="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start"
        style="background-image: url(/assets/img/photos/tm2.jpg)"
      ></div>
      <!--/column -->
      <div class="col-lg-6">
        <div class="p-10 p-md-11 px-lg-13 py-lg-14">
          <div class="swiper-container dots-closer mb-6">
            <Swiper
              :space-between="30"
              :pagination="{ el: '.spb11', clickable: true }"
              :modules="[Pagination]"
              :grab-cursor="true"
              :breakpoints="{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1200: { slidesPerView: 1 },
              }"
            >
              <SwiperSlide
                v-for="(elm, i) in testimonials3"
                :key="i"
                class="text-center"
              >
                <span class="ratings five mt-4 mb-3"></span>
                <blockquote class="border-0 fs-lg mb-2">
                  <p>
                    {{ elm.quote }}
                  </p>
                  <div
                    class="blockquote-details justify-content-center text-center"
                  >
                    <div class="info ps-0">
                      <h5 class="mb-1">{{ elm.name }}</h5>
                      <p class="mb-0">{{ elm.role }}</p>
                    </div>
                  </div>
                </blockquote></SwiperSlide
              >
            </Swiper>
            <div class="swiper-controls">
              <div
                class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb11"
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
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { testimonials3 } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
