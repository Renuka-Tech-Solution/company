<template>
  <section class="wrapper bg-light">
    <div class="container py-15 py-md-17 position-relative">
      <figure class="rounded mt-n21 mt-lg-n23 mb-16 mb-md-18 position-relative">
        <div
          class="btn btn-circle btn-white btn-play ripple mx-auto position-absolute cursor-pointer"
          @click="
            () => {
              modalOpen = true;
            }
          "
          style="
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 300;
          "
          data-glightbox
        >
          <i class="icn-caret-right"></i>
        </div>
        <CommonVideoPlayer
          :options="{
            autoplay: true,
            controls: true,
            sources: [
              {
                src: '/assets/media/movie3.mp4',
                type: 'video/mp4',
              },
            ],
          }"
        />
      </figure>
      <div
        class="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12"
      >
        <div class="col-lg-6">
          <div class="row gx-md-5 gy-5">
            <div class="col-md-6">
              <figure class="rounded">
                <nuxt-img
                  src="/assets/img/photos/g12.jpg"
                  srcset="/assets/img/photos/g12@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6 align-self-end">
              <figure class="rounded">
                <nuxt-img
                  src="/assets/img/photos/g13.jpg"
                  srcset="/assets/img/photos/g13@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-12">
              <figure class="rounded mx-md-5">
                <nuxt-img
                  src="/assets/img/photos/g11.jpg"
                  srcset="/assets/img/photos/g11@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="fs-16 text-uppercase text-primary mb-3">Who Are We?</h2>
          <h3 class="display-3 mb-5">
            Company that believes in the power of creative strategy.
          </h3>
          <p class="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum
            nulla sed.
          </p>
          <div class="row align-items-center counter-wrapper gy-6">
            <div class="col-md-6">
              <h3 class="counter counter-lg mb-1">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="99.7"
                  :time="1400"
                />%
              </h3>
              <h5 class="mb-0">Customer Satisfaction</h5>
            </div>
            <!--/column -->
            <div class="col-md-6">
              <h3 class="counter counter-lg mb-1">
                <CommonCounter parentClass="" :min="0" :max="12" :time="800" />x
              </h3>
              <h5 class="mb-0">Revenue Growth</h5>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-6 mb-7 mb-md-9">
        <div v-for="(elm, i) in infoItems" :key="i" class="col-lg-4">
          <div class="d-flex flex-row">
            <div>
              <div
                class="icon btn btn-block pe-none btn-soft-primary me-4 w-10 h-10"
              >
                <span class="number fs-18">{{ elm.number }}</span>
              </div>
            </div>
            <div>
              <h3>{{ elm.title }}</h3>
              <p class="mb-2">
                {{ elm.description }}
              </p>
            </div>
          </div>
        </div>
        <!--/column -->

        <!--/column -->
      </div>
      <!--/.row -->
      <div class="text-center">
        <a href="#" class="btn btn-primary">More Details</a>
      </div>
    </div>
    <!-- /.container -->
  </section>

  <CommonModalVideo :modalOpen="modalOpen" @modalClose="modalClose" />
</template>

<script setup>
import { infoItems } from "~/data/features";

const modalOpen = ref();
const modalClose = () => {
  modalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
