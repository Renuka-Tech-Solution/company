<template>
  <div class="row text-center">
    <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
      <h2 class="fs-16 text-uppercase text-gradient gradient-1 mb-3">
        Our Features
      </h2>
      <h3 class="display-4 mb-9 px-xl-11">
        The service we offer is specifically designed to meet your needs.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row gy-8 mb-17">
    <div
      class="col-md-6 col-lg-4"
      v-for="service in services3"
      :key="service.id"
    >
      <div class="d-flex flex-row">
        <div>
          <nuxt-img
            :src="service.icon"
            class="icon-svg icon-svg-sm solid-duo text-grape-fuchsia me-4"
            alt="photo"
          />
        </div>
        <div>
          <h3 class="fs-22 mb-1">{{ service.title }}</h3>
          <p class="mb-0">{{ service.description }}</p>
        </div>
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { services3 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
