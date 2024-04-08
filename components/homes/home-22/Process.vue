<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 mb-15 mb-md-17 align-items-center">
    <div class="col-lg-7">
      <figure>
        <nuxt-img
          class="w-auto"
          src="/assets/img/illustrations/i9.png"
          srcset="/assets/img/illustrations/i9@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-5">
      <h3 class="fs-16 text-uppercase text-muted mb-3">How It Works?</h3>
      <h3 class="display-4 mb-6">
        Find out everything about creating a business model.
      </h3>
      <div class="row gy-4">
        <div v-for="(item, index) in steps6" class="col-md-6" :key="index">
          <h4>
            <span class="text-primary">{{ item.number }}.</span>
            {{ item.title }}
          </h4>
          <p class="mb-0">{{ item.description }}</p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { steps6 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
