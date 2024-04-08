<template>
  <div class="card bg-soft-primary rounded-4 mb-16 mb-md-18">
    <div class="card-body py-14 px-lg-0">
      <div class="row text-center">
        <div class="col-lg-9 col-xl-8 mx-auto">
          <h2 class="fs-16 text-uppercase text-muted mb-3">Happy Customers</h2>
          <h3 class="display-2 ls-sm mb-10 px-xxl-10">
            Don't take our word for it. See what our
            <span class="underline-3 style-1 primary"><em>customers</em></span>
            are saying about us.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-lg-8 gx-xl-12 align-items-center">
        <div class="col-lg-5 ms-auto col-xl-4 d-none d-lg-flex">
          <div class="img-mask mask-3">
            <nuxt-img
              src="/assets/img/photos/about13.jpg"
              srcset="/assets/img/photos/about13@2x.jpg 2x"
              alt="photo"
            />
          </div>
        </div>
        <!--/column -->
        <div class="col-lg-6 col-xl-6 col-xxl-5 me-auto">
          <div class="swiper-container dots-start dots-closer mb-6">
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
              <SwiperSlide v-for="(elm, i) in testimonials3" :key="i">
                <span class="ratings five mb-3"></span>
                <blockquote class="border-0 fs-lg mb-2">
                  <p>
                    {{ elm.quote }}
                  </p>
                  <div class="blockquote-details">
                    <div class="">
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
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/.card-body -->
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { testimonials3 } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
