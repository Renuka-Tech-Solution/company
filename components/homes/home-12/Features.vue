<template>
  <div class="row gx-md-5 gy-5 mt-n18 mt-md-n21 mb-14 mb-md-17">
    <div
      v-for="(item, index) in services2"
      :key="index"
      class="col-md-6 col-xl-3"
    >
      <div :class="'card shadow-lg card-border-bottom border-' + item.color">
        <div class="card-body">
          <nuxt-img
            :src="item.icon"
            :class="`icon-svg icon-svg-md mb-3 text-${item.iconColor}`"
            alt="photo"
          />
          <h4>{{ item.title }}</h4>
          <p class="mb-2">{{ item.description }}</p>
          <a href="#" :class="'more hover link-' + item.iconColor"
            >Learn More</a
          >
        </div>
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { services2 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
