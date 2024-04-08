<template>
  <section class="wrapper bg-white">
    <div class="container py-15 py-md-17">
      <div class="row text-center">
        <div class="col-lg-10 col-xl-7 col-xxl-6 mx-auto">
          <h2 class="fs-15 text-uppercase text-muted mb-3">Case Studies</h2>
          <h3 class="display-3 ls-sm mb-10">
            Our awesome projects with creative ideas and great design.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div
        class="swiper-container blog grid-view mb-10"
        data-margin="30"
        data-dots="true"
        data-items-xl="3"
        data-items-md="2"
        data-items-xs="1"
      >
        <Swiper
          :space-between="30"
          :pagination="{ el: '.pagi1', clickable: true }"
          :modules="[Pagination]"
          :breakpoints="{
            500: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }"
        >
          <SwiperSlide v-for="(elm, i) in blogs1" :key="i">
            <article>
              <figure class="overlay overlay-1 hover-scale rounded mb-5">
                <nuxt-link to="/blog-post">
                  <nuxt-img :src="elm.imageSrc" :alt="elm.imageAlt" />

                  <span class="bg"></span>
                </nuxt-link>
                <figcaption>
                  <h5 class="from-top mb-0">
                    <nuxt-link to="/blog-post">Read More</nuxt-link>
                  </h5>
                </figcaption>
              </figure>
              <div class="post-header">
                <!-- /.post-category -->
                <h2 class="post-title h3 mt-1 mb-3">
                  <nuxt-link class="link-dark" to="/blog-post">{{
                    elm.postTitle
                  }}</nuxt-link>
                </h2>
              </div>
              <!-- /.post-header -->
              <div class="post-footer">
                <ul class="post-meta">
                  <li class="post-date">
                    <i class="uil uil-calendar-alt"></i
                    ><span>{{ elm.postDate }}</span>
                  </li>
                  <li class="post-comments">
                    <a href="#"
                      ><i class="uil uil-file-alt fs-15"></i
                      >{{ elm.category }}</a
                    >
                  </li>
                </ul>
                <!-- /.post-meta -->
              </div>
              <!-- /.post-footer -->
            </article>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-controls">
          <div
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagi1"
          ></div>
        </div>

        <!-- /.swiper -->
      </div>
      <!-- /.swiper-container -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { blogs1 } from "~/data/blogs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
