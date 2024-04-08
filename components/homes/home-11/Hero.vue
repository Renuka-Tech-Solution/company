<template>
  <section
    class="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-content text-white"
    style="background-image: url(/assets/img/photos/bg4.jpg)"
  >
    <div class="container pt-18 pb-16" style="z-index: 5; position: relative">
      <div class="row gx-0 gy-12 align-items-center">
        <div
          class="col-md-10 offset-md-1 offset-lg-0 col-lg-6 content text-center text-lg-start"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="600"
        >
          <h1 class="display-2 mb-5 text-white">
            Crafting project specific solutions with expertise.
          </h1>
          <p class="lead fs-lg lh-sm mb-7 pe-xl-10">
            We’re a creative company that focuses on establishing long-term
            relationships with customers.
          </p>
          <div
            class="d-flex justify-content-center justify-content-lg-start"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="900"
          >
            <span
              ><nuxt-link
                to="/projects"
                class="btn btn-lg btn-white rounded-pill me-2"
                >Explore Now</nuxt-link
              ></span
            >
            <span
              ><nuxt-link
                to="/contact"
                class="btn btn-lg btn-outline-white rounded-pill"
                >Contact Us</nuxt-link
              ></span
            >
          </div>
        </div>
        <!--/column -->
        <div class="col-lg-5 offset-lg-1">
          <div
            class="swiper-container dots-over shadow-lg"
            data-margin="5"
            data-nav="true"
            data-dots="true"
          >
            <Swiper
              :space-between="5"
              :pagination="{ el: '.pagi1h', clickable: true }"
              :modules="[Pagination, Navigation]"
              :navigation="{
                prevEl: '.snbhp1',
                nextEl: '.snbhn1',
              }"
              :grab-cursor="true"
              :breakpoints="{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1200: { slidesPerView: 1 },
              }"
            >
              <SwiperSlide class="swiper-slide">
                <nuxt-img
                  src="/assets/img/photos/about21.jpg"
                  srcset="/assets/img/photos/about21@2x.jpg 2x"
                  class="rounded"
                  alt="photo"
                />
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div
                  class="btn btn-circle btn-white btn-play ripple mx-auto mb-5 position-absolute cursor-pointer"
                  style="
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 3;
                  "
                  @click="
                    () => {
                      modalOpen = true;
                    }
                  "
                >
                  <i class="icn-caret-right"></i>
                </div>
                <nuxt-img
                  src="/assets/img/photos/about22.jpg"
                  srcset="/assets/img/photos/about22@2x.jpg 2x"
                  class="rounded"
                  alt="photo"
                />
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <nuxt-img
                  src="/assets/img/photos/about23.jpg"
                  srcset="/assets/img/photos/about23@2x.jpg 2x"
                  class="rounded"
                  alt="photo"
                />
              </SwiperSlide>
            </Swiper>
            <div class="swiper-controls">
              <div
                class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagi1h"
              ></div>
              <div class="swiper-navigation">
                <div class="swiper-button swiper-button-prev snbhp1"></div>
                <div class="swiper-button swiper-button-next snbhn1"></div>
              </div>
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
  <CommonModalVideo @modalClose="modalClose" :modalOpen="modalOpen" />
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
const modalOpen = ref(false);
const modalClose = () => {
  modalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
