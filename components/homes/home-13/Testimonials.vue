<template>
  <section
    class="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white"
    style="background-image: url(/assets/img/photos/bg2.jpg)"
  >
    <div class="container py-14 py-md-17">
      <h2 class="display-4 mb-5 text-white text-center">Happy Customers</h2>
      <div class="row">
        <div
          class="col-md-10 col-lg-8 mx-auto"
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay=""
        >
          <div class="swiper-container dots-light dots-closer text-center mb-6">
            <Swiper
              :space-between="30"
              :pagination="{ el: '.spb12', clickable: true }"
              :modules="[Pagination]"
              :grab-cursor="true"
              :breakpoints="{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1200: { slidesPerView: 1 },
              }"
            >
              <SwiperSlide v-for="(elm, i) in testimonials5" :key="i">
                <blockquote class="border-0 fs-lg">
                  <p>
                    {{ elm.quote }}
                  </p>
                  <div class="blockquote-details justify-content-center">
                    <nuxt-img
                      class="rounded-circle w-12"
                      :src="elm.avatarSrc"
                      alt="photo"
                    />
                    <div class="info">
                      <h5 class="mb-1 text-white">{{ elm.name }}</h5>
                      <p class="mb-0">{{ elm.role }}</p>
                    </div>
                  </div>
                </blockquote>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-controls">
              <div
                class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb12"
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
import { testimonials5 } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
