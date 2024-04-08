<template>
  <div
    class="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19"
  >
    <div class="col-md-8 col-lg-6 position-relative">
      <div
        class="shape bg-line red rounded-circle rellax w-18 h-18"
        data-rellax-speed="1"
        style="top: -2.2rem; left: -2.4rem"
      ></div>
      <div
        class="shape rounded bg-soft-primary rellax d-md-block"
        data-rellax-speed="0"
        style="bottom: -1.8rem; right: -1.5rem; width: 85%; height: 90%"
      ></div>
      <figure class="rounded">
        <nuxt-img
          src="/assets/img/photos/about9.jpg"
          srcset="/assets/img/photos/about9@2x.jpg 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-5 col-xl-4 offset-lg-1">
      <h2 class="display-4 mb-3">How It Works?</h2>
      <p class="lead fs-lg mb-6">
        So here are three working steps why our valued customers choose us.
      </p>
      <div
        v-for="(item, index) in process1"
        class="d-flex flex-row mb-6"
        :key="index"
      >
        <div>
          <span class="icon btn btn-circle btn-primary pe-none me-5">
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
