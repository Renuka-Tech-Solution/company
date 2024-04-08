<template>
  <h2 class="display-4 mb-3 mt-15">How We Do It?</h2>
  <p class="lead fs-lg mb-8">
    We make your spending <span class="underline">stress-free</span> for you to
    have the perfect control.
  </p>
  <div class="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
    <div v-for="(item, index) in steps" class="col-md-6 col-lg-3" :key="index">
      <span
        :class="[
          'icon',
          'btn',
          'btn-circle',
          'btn-lg',
          item.number != 2 ? 'btn-soft-primary' : 'btn-primary',
          'pe-none',
          'mb-4',
        ]"
      >
        <span class="number">{{ item.number }}</span>
      </span>
      <h4 class="mb-1">{{ item.title }}</h4>
      <p class="mb-0">{{ item.description }}</p>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { steps } from "~/data/process";
</script>

<style lang="scss" scoped></style>
