<template>
  <section class="wrapper bg-light scrollSpysection" id="testimonials">
    <div
      class="wrapper image-wrapper bg-image bg-overlay mb-12 mb-md-14"
      style="background-image: url(&quot;/assets/img/photos/bg35.jpg&quot;)"
    >
      <div class="container py-15 py-md-17">
        <h2 class="display-5 mb-4 text-center text-white">Happy Customers</h2>
        <div class="swiper-container dots-closer dots-light dots-light-75">
          <Swiper
            :pagination="{ el: '.spb16', clickable: true }"
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
                <div class="card border-0 bg-white-900">
                  <div class="card-body">
                    <span class="ratings five mb-3"></span>
                    <blockquote class="border-0 mb-0">
                      <p>{{ elm.quote }}</p>
                      <div class="blockquote-details">
                        <div class="info p-0">
                          <h5 class="mb-0">{{ elm.name }}</h5>
                          <p class="mb-0">{{ elm.role }}</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <!-- /.card-body -->
                </div>
                <!-- /.card -->
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-controls">
            <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb16"
            ></div>
          </div>

          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { testimonials2 } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
