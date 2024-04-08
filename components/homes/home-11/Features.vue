<template>
  <div class="row text-center">
    <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
      <h2 class="fs-15 text-uppercase text-primary mb-3">What We Do?</h2>
      <h3 class="display-4 mb-10 px-xl-10">
        The service we offer is specifically designed to meet your needs.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="position-relative mb-14 mb-md-17">
    <div
      class="shape rounded-circle bg-soft-primary rellax w-16 h-16"
      data-rellax-speed="1"
      style="bottom: -0.5rem; right: -2.5rem; z-index: 0"
    ></div>
    <div
      class="shape bg-dot primary rellax w-16 h-17"
      data-rellax-speed="1"
      style="top: -0.5rem; left: -2.5rem; z-index: 0"
    ></div>
    <div class="row gx-md-5 gy-5 text-center">
      <div
        v-for="feature in features5"
        :key="feature.id"
        class="col-md-6 col-xl-3"
      >
        <div class="card">
          <div class="card-body">
            <div class="icon btn btn-circle btn-lg btn-primary pe-none mb-3">
              <i :class="feature.icon"></i>
            </div>
            <h4>{{ feature.title }}</h4>
            <p class="mb-2">{{ feature.description }}</p>
            <a href="#" class="more hover link-primary">Learn More</a>
          </div>
          <!--/.card-body -->
        </div>
        <!--/.card -->
      </div>
      <!--/column -->

      <!--/column -->
    </div>
    <!--/.row -->
  </div>
</template>

<script setup>
import { features5 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
