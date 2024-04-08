<template>
  <section class="wrapper bg-light wrapper-border">
    <div class="container pb-14 pb-md-16">
      <article>
        <div class="post-slider mb-8 mb-md-12">
          <div class="swiper-container dots-over">
            <!-- /.swiper -->

            <Swiper
              :space-between="5"
              :pagination="{ el: '.spps2', clickable: true }"
              :modules="[Pagination, Navigation]"
              :navigation="{
                prevEl: '.snbpsp1',
                nextEl: '.snbpsn1',
              }"
              :auto-height="true"
              :slide-per-view="1"
            >
              <SwiperSlide v-for="(slide, index) in swiperSlides" :key="index">
                <div class="swiper-slide rounded">
                  <nuxt-img :src="slide.imageSrc" alt="photo" />
                  <div class="caption-wrapper p-12">
                    <div
                      :class="[
                        'caption',
                        'bg-white',
                        'rounded',
                        'px-4',
                        'py-3',
                        slide.captionPosition,
                        slide.captionAnimation,
                      ]"
                    >
                      <h5 class="mb-0">{{ slide.captionText }}</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-controls">
              <div
                class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spps2"
              ></div>
              <div class="swiper-navigation">
                <div class="swiper-button swiper-button-prev snbpsp1"></div>
                <div class="swiper-button swiper-button-next snbpsn1"></div>
              </div>
            </div>
          </div>
          <!-- /.swiper-container -->
        </div>
        <!-- /.post-slider -->
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <h2 class="display-6 mb-4">About the Project</h2>
            <div class="row gx-0">
              <div class="col-md-9 text-justify">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Integer posuere
                  erat a ante venenatis. Etiam porta sem malesuada magna mollis
                  euismod. Aenean lacinia bibendum.
                </p>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Cras mattis
                  consectetur purus sit amet fermentum. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur et. Donec sed odio
                  dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Sed posuere consectetur est at lobortis.
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor.
                </p>
              </div>
              <!--/column -->
              <div class="col-md-2 ms-auto">
                <ul class="list-unstyled">
                  <li>
                    <h5 class="mb-1">Date</h5>
                    <p>17 May 2018</p>
                  </li>
                  <li>
                    <h5 class="mb-1">Client Name</h5>
                    <p>Cool House</p>
                  </li>
                </ul>

                <nuxt-link to="/single-project" class="more hover"
                  >See Project</nuxt-link
                >
              </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
          <!-- /column -->
        </div>
        <!--/.row -->
      </article>
      <!-- /.project -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
const swiperSlides = [
  {
    id: 1,
    imageSrc: "/assets/img/photos/pp7.jpg",
    captionText: "Vivamus sagittis lacus augue",
    captionPosition: "ms-auto mt-auto",
    captionAnimation:
      "animate__animated animate__slideInDown animate__delay-1s",
  },
  {
    id: 2,
    imageSrc: "/assets/img/photos/pp8.jpg",
    captionText: "Vivamus sagittis lacus augue",
    captionPosition: "mx-auto mt-auto",
    captionAnimation:
      "animate__animated animate__slideInDown animate__delay-1s",
  },
  {
    id: 3,
    imageSrc: "/assets/img/photos/pp9.jpg",
    captionText: "Vivamus sagittis lacus augue",
    captionPosition: "mt-auto",
    captionAnimation:
      "animate__animated animate__slideInDown animate__delay-1s",
  },
];
</script>

<style lang="scss" scoped></style>
