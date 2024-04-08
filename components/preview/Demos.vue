<template>
  <section class="wrapper bg-soft-primary overflow-hidden" id="demos">
    <div class="container pt-16 pt-mb-18">
      <div class="row mb-10">
        <div class="col-md-9 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
          <div class="counter-wrapper">
            <h3 class="fs-70 mb-3 text-primary text-center counter">
              <CommonCounter parentClass="" :min="0" :max="34" :time="1000" />
            </h3>
          </div>
          <h2 class="display-2 mb-3 text-center mb-0 px-xxl-8">
            Functional, impressive and rich demos to start with
          </h2>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="demos-wrapper text-center mb-16 mb-md-18">
        <h2 class="fs-17 text-uppercase text-muted mb-6">All Demos</h2>
        <div class="row mb-10 gx-md-8 gy-12">
          <div v-for="(elm, i) in demos" :key="i" class="col-md-6 col-lg-4">
            <figure class="lift rounded-xl mb-6">
              <nuxt-link :to="elm.url" target="_blank"
                ><nuxt-img class="shadow-xl" :src="elm.imageSrc" alt="photo"
              /></nuxt-link>
            </figure>
            <h2 class="fs-22 mb-0">
              <nuxt-link :to="elm.url" class="link-dark">{{
                elm.title
              }}</nuxt-link>
            </h2>
          </div>

          <!-- /column -->

          <!-- /column -->
        </div>
        <!-- /.row -->

        <!-- /.row -->
      </div>
      <!-- /.demos-wrapper -->
      <div class="row mb-8 text-center">
        <div class="col-md-11 col-lg-10 col-xl-8 col-xxl-7 mx-auto">
          <h2 class="display-2 mt-3 mb-3 mb-0 px-lg-10 px-xl-0">
            Save your time and money by choosing Sandbox for your website.
          </h2>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row mb-12 mb-md-14">
        <div class="col-lg-10 col-xl-8 col-xxl-7 mx-auto">
          <div class="row align-items-center counter-wrapper gy-6 text-center">
            <div v-for="item in counterItems" :key="item.id" class="col-md-4">
              <h3 class="counter fs-50 text-primary mb-1">
                <CommonCounter
                  :parentClass="item.parentClass"
                  :min="item.min"
                  :max="item.max"
                  :time="item.time"
                />+
              </h3>
              <p class="fs-18 mb-0">{{ item.label }}</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-lg-0 gy-10 align-items-center mb-16 mb-md-18">
        <div class="col-lg-7 position-relative">
          <div
            class="position-absolute"
            style="
              top: 50%;
              left: 50%;
              width: 140%;
              height: auto;
              transform: translate(-50%, -50%);
              z-index: 0;
            "
          >
            <nuxt-img
              class="w-100"
              src="/assets/img/photos/blurry.png"
              alt="photo"
            />
          </div>
          <figure class="position-relative" style="z-index: 2">
            <nuxt-img
              src="/assets/img/photos/mi1.png"
              srcset="/assets/img/photos/mi1@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-4 ms-auto">
          <div
            v-for="feature in features2"
            :key="feature.id"
            class="d-flex flex-row mb-6"
          >
            <div>
              <div class="svg-bg bg-white rounded-xl shadow-xl me-5">
                <nuxt-img
                  :src="feature.iconSrc"
                  class="icon-svg solid-duo text-grape-fuchsia"
                  alt="photo"
                />
              </div>
            </div>
            <div>
              <h4 class="mb-1">{{ feature.title }}</h4>
              <p class="mb-0">{{ feature.description }}</p>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-0 gy-10 align-items-center">
        <div class="col-lg-7 position-relative order-lg-2">
          <div
            class="position-absolute"
            style="
              top: 50%;
              left: 50%;
              width: 140%;
              height: auto;
              transform: translate(-50%, -50%);
              z-index: 0;
            "
          >
            <nuxt-img
              class="w-100"
              src="/assets/img/photos/blurry.png"
              alt="photo"
            />
          </div>
          <figure class="position-relative" style="z-index: 2">
            <nuxt-img
              src="/assets/img/photos/mi2.png"
              srcset="/assets/img/photos/mi2@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-4 me-auto">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="d-flex flex-row mb-6"
          >
            <div>
              <div class="svg-bg bg-white rounded-xl shadow-xl me-5">
                <nuxt-img
                  :src="feature.iconSrc"
                  class="icon-svg solid-duo text-grape-fuchsia"
                  alt="photo"
                />
              </div>
            </div>
            <div>
              <h4 class="mb-1">{{ feature.title }}</h4>
              <p class="mb-0">{{ feature.description }}</p>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row mb-8 text-center mt-17 mt-md-19 mb-9 mb-md-11">
        <div class="col-md-11 col-lg-10 col-xl-8 col-xxl-7 mx-auto">
          <h2 class="display-2 mb-0 px-lg-10 px-xl-0">
            Build your website using the powerful features of Sandbox
          </h2>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="container-fluid px-xl-0 pb-16 pb-md-18">
      <div class="swiper-container swiper-auto nav-color nav-bottom nav-far">
        <Swiper
          :space-between="40"
          :loop="true"
          :slides-per-view="2"
          :centered-slides="true"
          :initial-slide="2"
          :grab-cursor="true"
          class="swiper overflow-visible"
        >
          <SwiperSlide v-for="item in photoItems" :key="item.id">
            <figure class="rounded-xl shadow-xl">
              <nuxt-img :src="item.src" :alt="item.alt" :id="item.id" />
            </figure>
          </SwiperSlide>
        </Swiper>

        <!-- /.swiper -->
      </div>
      <!-- /.swiper-container -->
    </div>
    <!-- /.container -->
    <div class="container pb-6 pb-md-8">
      <div
        class="row row-cols-2 row-cols-md-4 row-cols-lg-5 gx-md-8 gy-10 text-center justify-content-center pb-16 pb-md-18"
      >
        <div v-for="feature in features3" :key="feature.id" class="col">
          <nuxt-img
            class="mb-4"
            :src="feature.imgSrc"
            :srcset="feature.imgSrcSet"
            alt="photo"
          />
          <h4 v-html="feature.title"></h4>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7 position-relative">
          <div
            class="position-absolute"
            style="
              top: 50%;
              left: 50%;
              width: 130%;
              height: auto;
              transform: translate(-50%, -50%);
              z-index: 0;
            "
          >
            <nuxt-img
              class="w-100"
              src="/assets/img/photos/blurry.png"
              alt="photo"
            />
          </div>
          <div class="row gx-md-5 gy-5">
            <div
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              :class="testimonial.columnClasses"
            >
              <div class="card shadow-xl rounded-xl">
                <div class="card-body">
                  <blockquote class="icon mb-0">
                    <p>{{ testimonial.quote }}</p>
                    <div class="blockquote-details">
                      <div class="info p-0">
                        <h5 class="mb-0">{{ testimonial.author }}</h5>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.card -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-4">
          <h2 class="display-2 mb-4 mt-lg-n6">
            Our top priority is ensuring customer satisfaction.
          </h2>
          <p class="lead fs-22 mb-6">
            Don't take our word for it. Hear from customers about Sandbox.
          </p>
          <a
            href="https://themeforest.net/item/sandbox-modern-multipurpose-vue-nuxtjs-3-template/51057440/reviews"
            class="btn btn-lg btn-primary btn-icon btn-icon-end rounded-xl"
            target="_blank"
            >All Reviews <i class="uil uil-arrow-up-right"></i
          ></a>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/.container -->
  </section>
</template>

<script setup>
import {
  demos,
  photoItems,
  testimonials,
  features,
  features2,
  features3,
  counterItems,
} from "~/data/preview";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
