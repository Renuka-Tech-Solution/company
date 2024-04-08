<template>
  <div class="swiper-container blog grid-view mb-16">
    <Swiper
      :space-between="30"
      :pagination="{ el: '.spnh25', clickable: true }"
      :modules="[Pagination]"
      :grab-cursor="true"
      :breakpoints="{
        500: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1200: { slidesPerView: 2 },
      }"
    >
      <SwiperSlide v-for="(elm, i) in slides" :key="i">
        <figure class="overlay caption caption-overlay rounded mb-0">
          <a href="#"> <nuxt-img :src="elm.imageSrc" alt="photo" /></a>
          <figcaption>
            <span class="badge badge-lg bg-white text-uppercase mb-3">{{
              elm.category
            }}</span>
            <h2 class="post-title h3 mt-1 mb-3">
              <nuxt-link to="/blog-post">{{ elm.postTitle }}</nuxt-link>
            </h2>
            <ul class="post-meta text-white mb-0">
              <li class="post-date">
                <i class="uil uil-calendar-alt"></i
                ><span>{{ elm.postDate }}</span>
              </li>
              <li class="post-author">
                <a href="#"
                  ><i class="uil uil-user"></i
                  ><span>By {{ elm.author }}</span></a
                >
              </li>
              <li class="post-comments">
                <a href="#"
                  ><i class="uil uil-comment"></i>{{ elm.comments
                  }}<span> Comments</span></a
                >
              </li>
            </ul>
            <!-- /.post-meta -->
          </figcaption>
          <!-- /figcaption -->
        </figure></SwiperSlide
      >
    </Swiper>
    <div class="swiper-controls">
      <div
        class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spnh25"
      ></div>
    </div>

    <!-- /.swiper -->
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
const slides = [
  {
    imageSrc: "/assets/img/photos/tb1.jpg",
    imageAlt: "The Best Moments in Venice",

    category: "Places",
    postTitle: "The Best Moments in Venice",

    postDate: "8 Aug 2022",
    author: "Sandbox",
    comments: 3,
  },
  {
    imageSrc: "/assets/img/photos/tb2.jpg",
    imageAlt: "10 Great Places in Belgium",

    category: "Restaurants",
    postTitle: "10 Great Places in Belgium",

    postDate: "5 Jul 2022",
    author: "Sandbox",
    comments: 5,
  },
  {
    imageSrc: "/assets/img/photos/tb3.jpg",
    imageAlt: "A Dreamy Roadtrip in Australia",

    category: "Roadtrip",
    postTitle: "A Dreamy Roadtrip in Australia",

    postDate: "23 Jun 2022",
    author: "Sandbox",
    comments: 8,
  },
  {
    imageSrc: "/assets/img/photos/tb4.jpg",
    imageAlt: "My Love Affair with Cappadocia",

    category: "Historic",
    postTitle: "My Love Affair with Cappadocia",

    postDate: "15 Apr 2022",
    author: "Sandbox",
    comments: 9,
  },
  {
    imageSrc: "/assets/img/photos/tb5.jpg",
    imageAlt: "24 Hours in a Village of Valencia",

    category: "Nature",
    postTitle: "24 Hours in a Village of Valencia",

    postDate: "14 Feb 2022",
    author: "Sandbox",
    comments: 11,
  },
  {
    imageSrc: "/assets/img/photos/tb6.jpg",
    imageAlt: "The Largest Train Station in Europe",

    category: "Architecture",
    postTitle: "The Largest Train Station in Europe",

    postDate: "22 Jan 2022",
    author: "Sandbox",
    comments: 8,
  },
  {
    imageSrc: "/assets/img/photos/tb7.jpg",
    imageAlt: "The Natural Places in Brazil",

    category: "Nature",
    postTitle: "The Natural Places in Brazil",

    postDate: "2 Jan 2022",
    author: "Sandbox",
    comments: 14,
  },
];
</script>

<style lang="scss" scoped></style>
