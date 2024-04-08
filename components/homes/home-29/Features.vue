<template>
  <div class="row text-center">
    <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto position-relative">
      <nuxt-img
        src="/assets/img/svg/doodle3.svg"
        class="h-11 position-absolute d-none d-lg-block"
        style="top: -45%; left: 23%"
        alt="photo"
      />
      <nuxt-img
        src="/assets/img/svg/doodle4.svg"
        class="h-8 position-absolute d-none d-lg-block"
        style="top: 6%; right: 2%"
        alt="photo"
      />
      <h2 class="fs-16 text-uppercase text-muted mb-3">App Features</h2>
      <h3 class="display-3 mb-11 px-lg-5 px-xl-0 px-xxl-6">
        Sandbox makes your spending
        <span class="text-gradient gradient-7">stress-free</span> for you to
        have the perfect control.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row mb-20">
    <div class="col-xxl-11 mx-auto">
      <div class="row gx-md-8 gy-10 text-center">
        <div v-for="(elm, i) in features6" :key="i" class="col-md-6 col-lg-3">
          <div :class="`svg-bg svg-bg-lg ${elm.bgColor} rounded-xl mb-4`">
            <nuxt-img
              :src="elm.icon"
              class="icon-svg solid text-navy"
              alt="photo"
            />
          </div>
          <h4 class="fs-20">{{ elm.title }}</h4>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /column -->
  </div>
</template>

<script setup>
import { features6 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
