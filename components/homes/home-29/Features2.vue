<template>
  <section class="wrapper bg-light">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row text-center">
        <div
          class="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative"
        >
          <nuxt-img
            :width="85"
            :height="82"
            src="/assets/img/svg/doodle3.svg"
            class="h-11 position-absolute d-none d-lg-block"
            style="top: -20%; right: -12%"
            alt="image"
          />
          <nuxt-img
            width="206"
            height="214"
            src="/assets/img/svg/doodle9.svg"
            class="h-17 position-absolute d-none d-lg-block"
            style="bottom: 5%; left: -17%"
            alt="image"
          />
          <h2 class="fs-16 text-uppercase text-muted mb-3 text-center">
            Why Choose Sandbox?
          </h2>
          <h3 class="display-3 mb-12 text-center">
            Here are a few
            <span class="text-gradient gradient-7">reasons why</span> our
            customers choose the Sandbox app.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row d-flex align-items-start">
        <div class="col-lg-6 position-lg-sticky" style="top: 8rem">
          <figure>
            <nuxt-img
              src="/assets/img/photos/devices5.png"
              srcset="/assets/img/photos/devices5@2x.png 2x"
              alt="image"
            />
          </figure>
        </div>
        <!-- /column -->
        <div class="col-lg-5 ms-auto">
          <div
            v-for="(feature, index) in features3"
            :key="index"
            class="d-flex flex-row mb-8"
          >
            <div>
              <div :class="feature.svgBgClass">
                <nuxt-img
                  :width="256"
                  :height="256"
                  :src="feature.icon"
                  class="icon-svg solid text-navy"
                  alt="photo"
                />
              </div>
            </div>
            <div>
              <h4 class="fs-20">{{ feature.title }}</h4>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { features3 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
