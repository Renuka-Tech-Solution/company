<template>
  <div class="row gx-lg-8 gx-xl-12 gy-8">
    <div v-for="item in features7" :key="item.id" class="col-md-6 col-lg-4">
      <div class="d-flex flex-row">
        <div>
          <nuxt-img
            :src="item.iconSrc"
            class="icon-svg icon-svg-sm text-primary me-4"
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
</template>

<script setup>
import { features7 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
