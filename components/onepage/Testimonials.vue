<template>
  <section id="testimonials" class="scrollSpysection">
    <div class="wrapper bg-gray">
      <div class="container py-14 py-md-17">
        <div class="row gx-lg-8 gx-xl-12 gy-6 mb-15 align-items-center">
          <div class="col-lg-7 order-lg-2">
            <figure>
              <nuxt-img
                class="w-auto"
                src="/assets/img/illustrations/i4.png"
                srcset="/assets/img/illustrations/i4@2x.png 2x"
                alt="photo"
              />
            </figure>
          </div>
          <!--/column -->
          <div class="col-lg-5 mt-lg-12">
            <div class="swiper-container dots-closer mb-6">
              <Swiper
                :pagination="{ el: '.spb6', clickable: true }"
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
                  class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb6"
                ></div>
              </div>
              <!-- /.swiper -->
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

            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /div -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { testimonials3 } from "~/data/testimonials";
import { clients1 } from "~/data/clients";
</script>

<style lang="scss" scoped></style>
