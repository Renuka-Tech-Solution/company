<template>
  <section class="wrapper bg-light">
    <div class="overflow-hidden">
      <div class="container py-14 py-md-16">
        <div class="row">
          <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
            <i class="icn-flower text-leaf fs-30 opacity-25"></i>
            <h2 class="display-5 text-center mt-2 mb-10">
              Some of wonderful love stories <br class="d-none d-md-block" />
              I witnessed and had the chance to capture
            </h2>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
        <div
          class="swiper-container grid-view nav-bottom nav-color mb-14 text-center"
        >
          <Swiper
            class="swiper overflow-visible pb-1"
            :space-between="30"
            :navigation="{
              prevEl: '.sbp1',
              nextEl: '.sbn1',
            }"
            :modules="[Navigation]"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }"
          >
            <SwiperSlide v-for="(card, i) in cards" :key="i">
              <div class="card shadow-lg">
                <figure class="card-img-top overlay overlay-1">
                  <a :href="card.link">
                    <nuxt-img
                      :class="'img-fluid'"
                      :src="card.imageSrc"
                      :srcset="`${card.imageSrc} 2x`"
                      alt="photo"
                    />
                    <span class="bg"></span>
                  </a>
                  <figcaption>
                    <h5 class="from-top mb-0">View Gallery</h5>
                  </figcaption>
                </figure>
                <div class="card-body p-6">
                  <h3 class="fs-21 mb-1">{{ card.title }}</h3>
                  <ul class="post-meta fs-16 mb-0">
                    <li>{{ card.photos }} Photos</li>
                    <li>{{ card.category }}</li>
                  </ul>
                </div>
                <!--/.card-body -->
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-controls">
            <div class="swiper-navigation">
              <div class="swiper-button swiper-button-prev sbp1"></div>
              <div class="swiper-button swiper-button-next sbn1"></div>
            </div>
          </div>

          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.overflow-hidden -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
const cards = ref([
  {
    link: "#",
    imageSrc: "/assets/img/photos/fc1.jpg",
    title: "Lucy & David",
    photos: 5,
    category: "Wedding",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/fc2.jpg",
    title: "Stacy & Thomas",
    photos: 8,
    category: "Wedding",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/fc3.jpg",
    title: "Katherine & Jack",
    photos: 7,
    category: "Couples",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/fc4.jpg",
    title: "Jolene & William",
    photos: 9,
    category: "Wedding",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/fc5.jpg",
    title: "Jenn & Richard",
    photos: 6,
    category: "Engagement",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/fc6.jpg",
    title: "Gloria & Leo",
    photos: 8,
    category: "Wedding",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/fc7.jpg",
    title: "Grace & Finn",
    photos: 7,
    category: "Engagement",
  },
]);
</script>

<style lang="scss" scoped></style>
