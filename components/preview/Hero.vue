<template>
  <section class="wrapper overflow-hidden">
    <div
      class="container pt-19 pt-md-21 pb-16 pb-md-18 text-center position-relative"
    >
      <div
        class="position-absolute"
        style="top: -12%; left: 50%; transform: translateX(-50%)"
        data-aos="fade"
        data-aos-once="true"
        data-aos-delay=""
      >
        <nuxt-img src="/assets/img/photos/blurry.png" alt="photo" />
      </div>
      <div class="row position-relative">
        <div class="col-lg-8 col-xxl-7 mx-auto position-relative">
          <div
            class="position-absolute shape grape w-5 d-none d-lg-block"
            style="top: -5%; left: -15%"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay="600"
          >
            <nuxt-img
              src="/assets/img/svg/pie.svg"
              class="icon-svg w-100 h-100"
              alt="photo"
            />
          </div>
          <div
            class="position-absolute shape violet w-10 d-none d-lg-block"
            style="bottom: 30%; left: -20%"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay="900"
          >
            <nuxt-img
              src="/assets/img/svg/scribble.svg"
              class="icon-svg w-100 h-100"
              alt="photo"
            />
          </div>
          <div
            class="position-absolute shape fuchsia w-6 d-none d-lg-block"
            style="top: 0%; right: -25%; transform: rotate(70deg)"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay="900"
          >
            <nuxt-img
              src="/assets/img/svg/tri.svg"
              class="icon-svg w-100 h-100"
              alt="photo"
            />
          </div>
          <div
            class="position-absolute shape yellow w-6 d-none d-lg-block"
            style="bottom: 25%; right: -17%"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay="900"
          >
            <nuxt-img
              src="/assets/img/svg/circle.svg"
              class="icon-svg w-100 h-100"
              alt="photo"
            />
          </div>
          <div>
            <h1
              class="display-1 fs-64 mb-5 mx-md-10 mx-lg-0"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay=""
            >
              Create a powerful but effortless website for <br /><span
                class="rotator-fade text-primary"
              >
                <span
                  v-if="animatedText"
                  class="animate__animated animate__fadeInDown"
                  style="display: inline-block"
                  >{{ currentStr }}</span
                >
                <span
                  v-else="animatedText"
                  class="animate__animated animate__fadeInDown"
                  style="display: inline-block; visibility: hidden"
                  >{{ currentStr }}</span
                >
              </span>
            </h1>
            <p
              class="lead fs-24 mb-8"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay=""
            >
              You can create your website in minutes with the help of countless
              amazing features of Sandbox.
            </p>
          </div>
          <div
            class="d-md-flex justify-content-center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
          >
            <span
              ><a
                href="#demos"
                class="btn btn-lg btn-primary btn-icon btn-icon-end rounded-xl mx-md-1 mb-2 mb-md-0 scroll"
                >See Demo Pages <i class="uil uil-arrow-down-right"></i></a
            ></span>
            <span
              ><a
                href="https://themeforest.net/item/sandbox-modern-multipurpose-vue-nuxtjs-3-template/51057440"
                class="btn btn-lg btn-fuchsia btn-icon btn-icon-end rounded-xl mx-md-1"
                target="_blank"
                >Purchase Sandbox <i class="uil uil-arrow-up-right"></i></a
            ></span>
          </div>
          <!-- /div -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <div class="swiper-container swiper-auto swiper-auto-xs mb-8">
      <Swiper
        :space-between="40"
        class="swiper overflow-visible pe-none ticker"
        :modules="[Autoplay]"
        :grab-cursor="true"
        slides-per-view="auto"
        :autoplay="{
          delay: 0,
        }"
        :speed="5000"
        :resize-observer="false"
        effect="slide"
        :loop="true"
        :autoplay-time="1"
        :centered-slides="true"
      >
        <SwiperSlide v-for="(elm, i) in photoSlides.slice(8, 14)" :key="i">
          <figure class="rounded-xl shadow-xl">
            <nuxt-img :src="elm.src" alt="photo" />
          </figure>
        </SwiperSlide>
      </Swiper>

      <!-- /.swiper -->
    </div>
    <!-- /.swiper-container -->
    <div class="swiper-container swiper-auto swiper-auto-xs">
      <Swiper
        :space-between="40"
        class="swiper overflow-visible pe-none ticker"
        :modules="[Autoplay]"
        :grab-cursor="true"
        slides-per-view="auto"
        :autoplay="{
          delay: 0,
          reverseDirection: true,
        }"
        :speed="5000"
        :resize-observer="false"
        effect="slide"
        :loop="true"
        :autoplay-time="1"
        :centered-slides="true"
      >
        <SwiperSlide v-for="(elm, i) in photoSlides.slice(0, 7)" :key="i">
          <figure class="rounded-xl shadow-xl">
            <nuxt-img :src="elm.src" alt="photo" />
          </figure>
        </SwiperSlide>
      </Swiper>
      <!-- /.swiper -->
    </div>
  </section>
</template>

<script setup>
const strings = [
  "your business.",
  "your portfolio.",
  "your startup.",
  "digital marketing.",
];

const currentStr = ref("mobile design");
const animatedText = ref(true);
const changeText = ref();
onMounted(() => {
  changeText.value = setInterval(() => {
    animatedText.value = false;
    setTimeout(() => {
      animatedText.value = true;
    }, 200);
    if (currentStr.value == strings[0]) {
      currentStr.value = strings[1];
    } else if (currentStr.value == strings[1]) {
      currentStr.value = strings[2];
    } else {
      currentStr.value = strings[0];
    }
  }, 2000);
});
onUnmounted(() => {
  clearInterval(changeText?.value);
});

const photoSlides = ref([
  { id: 1, src: "/assets/img/photos/ma1.jpg" },
  { id: 2, src: "/assets/img/photos/ma2.jpg" },
  { id: 3, src: "/assets/img/photos/ma3.jpg" },
  { id: 4, src: "/assets/img/photos/ma4.jpg" },
  { id: 5, src: "/assets/img/photos/ma5.jpg" },
  { id: 6, src: "/assets/img/photos/ma6.jpg" },
  { id: 7, src: "/assets/img/photos/ma7.jpg" },
  { id: 8, src: "/assets/img/photos/ma8.jpg" },
  { id: 9, src: "/assets/img/photos/ma9.jpg" },
  { id: 10, src: "/assets/img/photos/ma10.jpg" },
  { id: 11, src: "/assets/img/photos/ma11.jpg" },
  { id: 12, src: "/assets/img/photos/ma12.jpg" },
  { id: 13, src: "/assets/img/photos/ma13.jpg" },
  { id: 14, src: "/assets/img/photos/ma14.jpg" },
]);

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
