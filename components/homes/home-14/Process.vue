<template>
  <div class="row mb-8 text-center">
    <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
      <h2 class="fs-16 text-uppercase text-primary mb-3">Company Strategy</h2>
      <h3 class="display-4">
        Just sit and relax while we take care of your business needs.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
    <div class="col-lg-6 position-relative">
      <div
        class="shape bg-dot leaf rellax w-17 h-18"
        data-rellax-speed="1"
        style="bottom: -2rem; left: -0.7rem"
      ></div>
      <figure class="rounded">
        <nuxt-img
          src="/assets/img/photos/about20.jpg"
          srcset="/assets/img/photos/about20@2x.jpg 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-6 col-xxl-5">
      <h3 class="display-6 mb-7">Our Working Process</h3>
      <div
        v-for="(item, index) in process1"
        class="d-flex flex-row mb-6"
        :key="index"
      >
        <div>
          <span class="icon btn btn-circle btn-soft-primary pe-none me-5">
            <span class="number fs-18">{{ item.number }}</span>
          </span>
        </div>
        <div>
          <h4 class="mb-1">{{ item.title }}</h4>
          <p class="mb-0">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { process1 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
