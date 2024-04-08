<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-20 align-items-center">
    <div class="col-md-8 col-lg-6 order-lg-2 position-relative">
      <div
        class="shape bg-soft-primary rounded-circle rellax w-20 h-20"
        data-rellax-speed="1"
        style="top: -2rem; right: -1.9rem"
      ></div>
      <figure class="rounded">
        <nuxt-img
          src="/assets/img/photos/about11.jpg"
          srcset="/assets/img/photos/about11@2x.jpg 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <h2 class="display-4 mb-3">What We Do?</h2>
      <p class="lead fs-lg mb-8 pe-xxl-2">
        The full service we are offering is
        <span class="underline">specifically</span> designed to meet your
        business needs and projects.
      </p>
      <div class="row gx-xl-10 gy-6">
        <div
          v-for="(item, index) in features10"
          :key="index"
          class="col-md-6 col-lg-12 col-xl-6"
        >
          <div class="d-flex flex-row">
            <div>
              <nuxt-img
                :src="item.iconSrc"
                class="icon-svg icon-svg-sm text-primary me-5"
                alt="photo"
              />
            </div>
            <div>
              <h4 class="mb-1">{{ item.title }}</h4>
              <p class="mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { features10 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
