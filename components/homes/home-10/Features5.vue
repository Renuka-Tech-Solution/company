<template>
  <div class="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-18">
    <div v-for="(item, index) in infoItems" :key="index" class="col-lg-4">
      <div class="d-flex flex-row">
        <div>
          <div class="icon btn btn-circle pe-none btn-soft-primary me-4">
            <span class="number fs-18">{{ item.number }}</span>
          </div>
        </div>
        <div>
          <h4>{{ item.title }}</h4>
          <p class="mb-2">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { infoItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
