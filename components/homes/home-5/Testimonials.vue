<template>
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-17">
      <div class="row gx-lg-8 gx-xl-12 gy-6 mb-14 align-items-center">
        <div class="col-lg-7 position-relative">
          <div
            class="shape bg-dot primary rellax w-18 h-18"
            data-rellax-speed="1"
            style="top: 0; left: -1.4rem; z-index: 0"
          ></div>
          <div class="row gx-md-5 gy-5">
            <div
              class="col-md-6"
              data-aos="fade"
              data-aos-once="true"
              data-aos-delay=""
            >
              <figure class="rounded mt-md-10 position-relative">
                <nuxt-img
                  src="/assets/img/photos/g5.jpg"
                  srcset="/assets/img/photos/g5@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6">
              <div class="row gx-md-5 gy-5">
                <div
                  class="col-md-12 order-md-2"
                  data-aos="fade"
                  data-aos-once="true"
                  data-aos-delay="300"
                >
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/g6.jpg"
                      srcset="/assets/img/photos/g6@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
                <!--/column -->
                <div class="col-md-10">
                  <div class="card bg-pale-primary text-center">
                    <div class="card-body py-11 counter-wrapper">
                      <h3 class="counter text-nowrap">
                        <CommonCounter
                          parentClass=""
                          :min="30"
                          :max="5000"
                          :time="1500"
                        />+
                      </h3>
                      <p class="mb-0">Satisfied Customers</p>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.card -->
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-5 mt-5">
          <div
            class="swiper-container dots-closer mb-6"
            data-margin="30"
            data-dots="true"
          >
            <Swiper
              :space-between="30"
              :pagination="{ el: '.spb8', clickable: true }"
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
                </blockquote></SwiperSlide
              >
            </Swiper>
            <div class="swiper-controls">
              <div
                class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb8"
              ></div>
            </div>
            <!--/.swiper -->
          </div>
          <!-- /.swiper-container -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="px-lg-5">
        <div class="row gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center">
          <div
            v-for="(elm, i) in clients1.slice(0, 6)"
            :key="i"
            class="col-4 col-md-2"
          >
            <figure class="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
              <nuxt-img :src="elm.src" alt="photo" />
            </figure>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /div -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { clients1 } from "~/data/clients";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { testimonials3 } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
