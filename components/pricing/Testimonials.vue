<template>
  <h2 class="display-4 mb-3 text-center">Happy Customers</h2>
  <p class="lead text-center mb-6 px-md-16 px-lg-0">
    Customer satisfaction is our major goal. See what our customers are saying
    about us.
  </p>
  <div class="position-relative">
    <div
      class="shape rounded-circle bg-soft-yellow rellax w-16 h-16"
      data-rellax-speed="1"
      style="bottom: 0.5rem; right: -1.7rem"
    ></div>
    <div
      class="shape bg-dot primary rellax w-16 h-16"
      data-rellax-speed="1"
      style="top: -1rem; left: -1.7rem"
    ></div>
    <div class="swiper-container dots-closer mb-6">
      <Swiper
        :pagination="{ el: '.spb7', clickable: true }"
        :modules="[Pagination]"
        :grab-cursor="true"
        :breakpoints="{
          500: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 3 },
        }"
      >
        <SwiperSlide v-for="(elm, i) in testimonials2" :key="i">
          <div class="item-inner">
            <div class="card">
              <div class="card-body">
                <blockquote class="icon mb-0">
                  <p>
                    {{ elm.quote }}
                  </p>
                  <div class="blockquote-details">
                    <nuxt-img
                      class="rounded-circle w-12"
                      :src="elm.avatarSrc"
                      alt="photo"
                    />
                    <div class="info">
                      <h5 class="mb-1">{{ elm.name }}</h5>
                      <p class="mb-0">{{ elm.role }}</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div></SwiperSlide
        >
      </Swiper>
      <div class="swiper-controls">
        <div
          class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb7"
        ></div>
      </div>
      <!-- /.swiper -->
    </div>
    <!-- /.swiper-container -->
  </div>
</template>

<script setup>
import { testimonials2 } from "~/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
