<template>
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div
          class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center"
        >
          <h2 class="fs-15 text-uppercase text-muted mb-3">Happy Customers</h2>
          <h3 class="display-4 mb-6 px-xl-10 px-xxl-15">
            Don't take our word for it. See what customers are saying about us.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div data-aos="fade" data-aos-once="true" data-aos-delay="">
        <div
          class="swiper-container dots-closer mb-6"
          data-margin="0"
          data-dots="true"
          data-items-xl="3"
          data-items-md="2"
          data-items-xs="1"
        >
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
                    <span class="ratings five mb-3"></span>
                    <blockquote class="icon mb-0">
                      <p>{{ elm.quote }}</p>
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
      <!-- /div -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { testimonials2 } from "~/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
