<template>
  <div class="row gx-3 gy-10 mb-15 mb-md-18 align-items-center">
    <div class="col-lg-5 offset-lg-1">
      <figure>
        <nuxt-img
          class="w-auto"
          src="/assets/img/illustrations/3d2.png"
          srcset="/assets/img/illustrations/3d2@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-5 offset-lg-1">
      <h2 class="fs-16 text-uppercase text-gradient gradient-1 mb-3">
        Have Perfect Control
      </h2>
      <h3 class="display-4 mb-4">
        We bring solutions to make life easier for our customers.
      </h3>
      <p class="mb-6">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
        et. Vivamus sagittis lacus vel augue rutrum.
      </p>
      <div class="row gy-3">
        <div class="col-xl-6">
          <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
            <li
              v-for="(item, index) in checklistItems.slice(0, 2)"
              :key="index"
              :class="{ 'mt-3': index > 0 }"
            >
              <span><i class="uil uil-check"></i></span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>
        <!--/column -->
        <div class="col-xl-6">
          <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
            <li
              v-for="(item, index) in checklistItems.slice(0, 2)"
              :key="index"
              :class="{ 'mt-3': index > 0 }"
            >
              <span><i class="uil uil-check"></i></span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { checklistItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
