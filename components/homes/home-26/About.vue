<template>
  <div class="row text-center">
    <div class="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
      <h2 class="fs-16 text-uppercase text-primary mb-3">What We Do?</h2>
      <h3 class="display-4 mb-9">
        The full service we are offering is specifically designed to meet your
        business needs.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row gx-md-8 gy-8 mb-15 mb-md-17 text-center">
    <div
      v-for="(service, index) in services7"
      :key="index"
      class="col-md-6 col-lg-3"
    >
      <div class="px-md-3 px-lg-0 px-xl-3">
        <nuxt-img
          :src="service.icon"
          class="icon-svg icon-svg-md solid-mono text-grape mb-5"
          alt="photo"
        />
        <h4>{{ service.title }}</h4>
        <p class="mb-2">{{ service.description }}</p>
        <a href="#" class="more hover">Learn More</a>
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { services7 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
