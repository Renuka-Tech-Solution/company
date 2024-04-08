<template>
  <section class="wrapper bg-light">
    <div class="overflow-hidden">
      <div class="container pb-13 pb-md-15">
        <div class="row">
          <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
            <h2 class="fs-16 text-uppercase text-primary mb-3">
              Latest Projects
            </h2>
            <h3 class="display-3 mb-10">
              Check out some of our awesome projects with creative ideas and
              great design.
            </h3>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <div
          class="swiper-container grid-view nav-bottom nav-color mb-14"
          data-margin="30"
          data-dots="false"
          data-nav="true"
          data-items-md="2"
          data-items-xs="1"
        >
          <Swiper
            :space-between="30"
            :pagination="{ el: '.pbutton10', clickable: true }"
            :modules="[Pagination, Navigation]"
            :navigation="{
              prevEl: '.snpb2',
              nextEl: '.snnb2',
            }"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }"
            class="overflow-visible"
          >
            <SwiperSlide v-for="(slide, i) in projects5" :key="i">
              <figure class="rounded mb-7">
                <nuxt-link to="/single-project3">
                  <nuxt-img :src="slide.image.src" alt="photo" />
                </nuxt-link>
              </figure>
              <div
                class="project-details d-flex justify-content-center flex-column"
              >
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a :href="slide.link" class="link-dark">{{
                      slide.title
                    }}</a>
                  </h2>
                  <div class="post-category text-ash">{{ slide.category }}</div>
                </div>
                <!-- /.post-header -->
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-controls">
            <div class="swiper-navigation">
              <div class="swiper-button swiper-button-prev snpb2"></div>
              <div class="swiper-button swiper-button-next snnb2"></div>
            </div>
          </div>

          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.overflow-hidden -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { projects5 } from "~/data/projects";
</script>

<style lang="scss" scoped></style>
