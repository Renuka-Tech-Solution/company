<template>
  <div class="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-19">
    <div v-for="item in featureItems" :key="item.id" class="col-lg-4">
      <div class="d-flex flex-row">
        <div>
          <div class="icon btn btn-circle pe-none btn-primary me-4">
            <i :class="item.icon"></i>
          </div>
        </div>
        <div>
          <h4>{{ item.title }}</h4>
          <p class="mb-2">{{ item.description }}</p>
          <a :href="item.link" class="more hover">Learn More</a>
        </div>
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { featureItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
