<template>
  <div class="item col-md-6 col-lg-4">
    <figure
      class="itooltip itooltip-dark hover-scale rounded"
      title='<h5 class="mb-1">Some Title</h5><p class="mb-0">Quam Sit Ornare</p>'
      v-tippy="{
        content: `<h5 class='mb-0 py-2 px-2 bg-dark text-white rounded'>Quam Sit Ornare</h5>`,
        allowHTML: true,
        followCursor: true,
      }"
    >
      <a href="#">
        <nuxt-img
          src="/assets/img/photos/p1.jpg"
          srcset="/assets/img/photos/p1@2x.jpg 2x"
          alt="photo"
      /></a>
    </figure>
  </div>
  <!--/column -->
  <div class="item col-md-6 col-lg-4">
    <figure
      class="itooltip itooltip-light hover-scale rounded"
      v-tippy="{
        content: `<h5 class='mb-0 py-2 px-2 bg-light rounded'>Quam Sit Ornare</h5>`,
        allowHTML: true,
        followCursor: true,
      }"
    >
      <a href="#">
        <nuxt-img
          src="/assets/img/photos/p2.jpg"
          srcset="/assets/img/photos/p2@2x.jpg 2x"
          alt="photo"
      /></a>
    </figure>
  </div>
  <!--/column -->
  <div class="item col-md-6 col-lg-4">
    <figure
      class="itooltip itooltip-primary hover-scale rounded"
      v-tippy="{
        content: `<h5 class='mb-0 py-2 px-2 bg-primary text-white rounded'>Quam Sit Ornare</h5>`,
        allowHTML: true,
        followCursor: true,
      }"
    >
      <a href="#">
        <nuxt-img
          src="/assets/img/photos/p3.jpg"
          srcset="/assets/img/photos/p3@2x.jpg 2x"
          alt="photo"
      /></a>
    </figure>
  </div>
</template>

<script setup>
import { directive as VTippy } from "vue-tippy";
</script>

<style lang="scss" scoped></style>
