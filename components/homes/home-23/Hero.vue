<template>
  <section class="wrapper bg-dark">
    <div
      class="swiper-container swiper-thumbs-container swiper-fullscreen nav-dark"
    >
      <Swiper
        :space-between="0"
        :pagination="{ el: '.pagihero1', clickable: true }"
        :modules="[Autoplay, Navigation]"
        :navigation="{
          prevEl: '.snbp13',
          nextEl: '.snbn13',
        }"
        @swiper="onSwiper"
        @slideChange="handleSlideChange"
        :grab-cursor="true"
        :autoplay="{
          delay: 7000,
        }"
        :breakpoints="{
          500: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
          1200: { slidesPerView: 1 },
        }"
      >
        <SwiperSlide v-for="(elm, i) in slides" :key="i">
          <div
            :class="[
              'swiper-slide',
              'bg-overlay',
              'bg-overlay-400',
              'bg-dark',
              'bg-image',
            ]"
            :style="{ backgroundImage: `url(${elm.imageSrc})` }"
          ></div>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-controls">
        <div class="swiper-navigation">
          <div class="swiper-button swiper-button-prev snbp13"></div>
          <div class="swiper-button swiper-button-next snbn13"></div>
        </div>
      </div>

      <!-- /.swiper -->
      <div class="swiper swiper-thumbs">
        <div class="swiper-wrapper">
          <div
            v-for="(elm, i) in pagination"
            :key="i"
            :class="`swiper-slide mx-1 ${
              currentSlideIndex == i
                ? 'swiper-slide-next swiper-slide-thumb-active'
                : ''
            }`"
            @click="
              () => {
                handlePaginationClick(i);
              }
            "
          >
            <nuxt-img :src="elm" alt="photo" />
          </div>
        </div>
        <!--/.swiper-wrapper -->
      </div>
      <!-- /.swiper -->
      <div class="swiper-static">
        <div
          class="container h-100 d-flex align-items-center justify-content-center"
        >
          <div class="row">
            <div class="col-lg-8 mx-auto mt-n10 text-center">
              <h1
                class="fs-19 text-uppercase ls-xl text-white mb-3 animate__animated animate__zoomIn animate__delay-1s"
              >
                I'm Julia Sandbox
              </h1>
              <h2
                class="display-1 fs-60 text-white mb-0 animate__animated animate__zoomIn animate__delay-2s"
              >
                couples & wedding photographer
              </h2>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.swiper-static -->
    </div>
    <!-- /.swiper-container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const swiperRef = ref(null);
const currentSlideIndex = ref(0);

const handlePaginationClick = (index) => {
  currentSlideIndex.value = index;
  if (swiperRef.value) {
    swiperRef.value.slideTo(index);
  }
};

const handleSlideChange = (swiper) => {
  currentSlideIndex.value = swiper.activeIndex;

  if (swiper.activeIndex >= 5) {
    currentSlideIndex.value = swiper.activeIndex - 5;
  }
};
const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
onMounted(() => {
  if (swiperRef.value) {
    swiperRef.value.slideTo(0); // Set the initial slide to index 0
  }
});
const slides = ref([
  {
    id: 1,
    imageSrc: "/assets/img/photos/bg28.jpg",
  },
  {
    id: 2,
    imageSrc: "/assets/img/photos/bg29.jpg",
  },
  {
    id: 3,
    imageSrc: "/assets/img/photos/bg30.jpg",
  },
  {
    id: 4,
    imageSrc: "/assets/img/photos/bg31.jpg",
  },
]);
const pagination = [
  "/assets/img/photos/bg28-th.jpg",
  "/assets/img/photos/bg29-th.jpg",
  "/assets/img/photos/bg30-th.jpg",
  "/assets/img/photos/bg31-th.jpg",
];
</script>

<style lang="scss" scoped></style>
