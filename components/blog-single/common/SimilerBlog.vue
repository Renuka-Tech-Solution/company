<template>
  <h3 class="mb-6">You Might Also Like</h3>
  <div class="swiper-container blog grid-view mb-16">
    <Swiper
      :space-between="30"
      :pagination="{ el: '.pagi2', clickable: true }"
      :modules="[Pagination]"
      :breakpoints="{
        500: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
        1200: { slidesPerView: 2 },
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
            <div class="post-category text-line">
              <a href="#" class="hover" rel="category">{{ elm.category }}</a>
            </div>
            <!-- /.post-category -->
            <h2 class="post-title h3 mt-1 mb-3">
              <nuxt-link class="link-dark" to="/blog-post">{{
                elm.postTitle
              }}</nuxt-link>
            </h2>
          </div>
          <!-- /.post-header -->
          <div class="post-footer">
            <ul class="post-meta mb-0">
              <li class="post-date">
                <i class="uil uil-calendar-alt"></i
                ><span>{{ elm.postDate }}</span>
              </li>
              <li class="post-comments">
                <a href="#"
                  ><i class="uil uil-comment"></i>{{ elm.comments }}</a
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
        class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagi2"
      ></div>
    </div>
    <!-- /.swiper -->
  </div>
</template>

<script setup>
import { blogs1 } from "~/data/blogs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
