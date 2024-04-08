<template>
  <div class="row gx-md-5 gy-5 mt-n18 mt-md-n19">
    <div
      class="col-md-6 col-xl-3"
      v-for="item in jobBenefits.slice(0, 4)"
      :key="item.id"
    >
      <div class="card lift">
        <div class="card-body">
          <nuxt-img
            :src="item.imagePath"
            class="icon-svg icon-svg-sm solid-mono text-primary mb-3"
            alt="photo"
          />
          <h4>{{ item.title }}</h4>
          <p class="mb-0">{{ item.description }}</p>
        </div>
        <!--/.card-body -->
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { jobBenefits } from "~/data/job";
</script>

<style lang="scss" scoped></style>
