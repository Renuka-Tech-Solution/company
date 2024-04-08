<template>
  <div class="row">
    <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
      <h2 class="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
      <h3 class="display-4 mb-10">
        The service we offer is specifically designed to meet your needs.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row gx-md-8 gy-8 text-center mb-14 mb-md-17">
    <div v-for="(elm, i) in features5" :key="i" class="col-md-6 col-lg-3">
      <div class="icon btn btn-circle btn-lg btn-primary pe-none mb-5">
        <i :class="elm.icon"></i>
      </div>
      <h4>{{ elm.title }}</h4>
      <p class="mb-3">{{ elm.description }}</p>
      <a href="#" class="more hover">Learn More</a>
    </div>
    <!--/column -->

    <!--/column -->
  </div>
</template>

<script setup>
import { features5 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
