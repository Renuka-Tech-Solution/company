<template>
  <div class="row text-center">
    <div class="col-md-10 col-lg-9 col-xxl-7 mx-auto mb-12">
      <h2 class="fs-16 text-uppercase text-muted mb-3">Our Services</h2>
      <h3 class="display-2 ls-sm px-xxl-10">
        The service we offer is
        <span class="underline-3 style-1 primary"><em>designed</em></span> to
        meet your business needs.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row gy-10 align-items-center mb-15 mb-md-17">
    <div class="col-lg-7">
      <figure>
        <nuxt-img
          class="img-fluid"
          src="/assets/img/illustrations/i29.png"
          srcset="/assets/img/illustrations/i29@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!-- /column -->
    <div class="col-lg-4 ms-auto">
      <div class="svg-bg bg-pale-primary rounded mb-5">
        <nuxt-img
          src="/assets/img/icons/solid/like.svg"
          class="icon-svg solid text-primary"
          alt="photo"
        />
      </div>
      <h3 class="h1 post-title ls-sm mb-3">Social Media Marketing</h3>
      <p>
        Maecenas faucibus mollis interdum sed posuere consectetur est at
        lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
        dapibus tellus.
      </p>
      <ul class="icon-list bullet-bg bullet-soft-primary">
        <li
          v-for="(item, index) in checklistItems.slice(0, 3)"
          :key="index"
          :class="{ 'mt-3': index > 0 }"
        >
          <span><i class="uil uil-check"></i></span>
          <span>{{ item.text }}</span>
        </li>
      </ul>
      <a href="#" class="more hover link-primary">Learn More</a>
    </div>
    <!-- /column -->
  </div>
  <div class="row gy-10 align-items-center mb-15 mb-md-17">
    <div class="col-lg-7 order-lg-2">
      <figure>
        <nuxt-img
          class="img-fluid"
          src="/assets/img/illustrations/i30.png"
          srcset="/assets/img/illustrations/i30@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!-- /column -->
    <div class="col-lg-4 me-auto">
      <div class="svg-bg bg-pale-green rounded mb-5">
        <nuxt-img
          src="/assets/img/icons/solid/layout-2.svg"
          class="icon-svg solid text-green"
          alt="photo"
        />
      </div>
      <h3 class="h1 post-title ls-sm mb-3">Web Design & Development</h3>
      <p>
        Maecenas faucibus mollis interdum sed posuere consectetur est at
        lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
        dapibus tellus.
      </p>
      <ul class="icon-list bullet-bg bullet-soft-green">
        <li
          v-for="(item, index) in checklistItems.slice(0, 3)"
          :key="index"
          :class="{ 'mt-3': index > 0 }"
        >
          <span><i class="uil uil-check"></i></span>
          <span>{{ item.text }}</span>
        </li>
      </ul>
      <a href="#" class="more hover link-green">Learn More</a>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row gy-10 align-items-center">
    <div class="col-lg-7">
      <figure>
        <nuxt-img
          class="img-fluid"
          src="/assets/img/illustrations/i31.png"
          srcset="/assets/img/illustrations/i31@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!-- /column -->
    <div class="col-lg-4 ms-auto">
      <div class="svg-bg bg-pale-fuchsia rounded mb-5">
        <nuxt-img
          src="/assets/img/icons/solid/bullhorn.svg"
          class="icon-svg solid text-fuchsia"
          alt="photo"
        />
      </div>
      <h3 class="h1 post-title ls-sm mb-3">Content Marketing Services</h3>
      <p>
        Maecenas faucibus mollis interdum sed posuere consectetur est at
        lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
        dapibus tellus.
      </p>
      <ul class="icon-list bullet-bg bullet-soft-fuchsia">
        <li
          v-for="(item, index) in checklistItems.slice(0, 3)"
          :key="index"
          :class="{ 'mt-3': index > 0 }"
        >
          <span><i class="uil uil-check"></i></span>
          <span>{{ item.text }}</span>
        </li>
      </ul>
      <a href="#" class="more hover link-fuchsia">Learn More</a>
    </div>
    <!-- /column -->
  </div>
</template>

<script setup>
import { checklistItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
