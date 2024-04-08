<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
    <div class="col-lg-7">
      <figure>
        <nuxt-img
          class="w-auto"
          src="/assets/img/illustrations/i8.png"
          srcset="/assets/img/illustrations/i8@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-5">
      <h3 class="display-4 mb-7">
        Our three process steps on creating awesome projects.
      </h3>
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
