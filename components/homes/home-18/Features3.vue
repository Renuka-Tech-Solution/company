<template>
  <div class="row gx-md-8 gy-10 align-items-center">
    <div class="col-lg-6 offset-lg-1 order-lg-2 position-relative">
      <figure class="rounded">
        <nuxt-img
          class="img-fluid"
          src="/assets/img/photos/about27.jpg"
          srcset="/assets/img/photos/about27@2x.jpg 2x"
          alt="photo"
        />
      </figure>
      <div
        class="card shadow-lg position-absolute d-none d-md-block"
        style="top: 15%; left: -7%"
      >
        <div class="card-body py-4 px-5">
          <div class="d-flex flex-row align-items-center">
            <div>
              <nuxt-img
                src="/assets/img/icons/solid/cloud-group.svg"
                class="icon-svg icon-svg-sm solid-duo text-grape-fuchsia me-3"
                alt="photo"
              />
            </div>
            <div>
              <h3 class="fs-25 counter mb-0 text-nowrap">
                <CommonCounter
                  parentClass=""
                  :min="50"
                  :max="25000"
                  :time="1500"
                />+
              </h3>
              <p class="fs-16 lh-sm mb-0 text-nowrap">Happy Clients</p>
            </div>
          </div>
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
      <div
        class="card shadow-lg position-absolute text-center d-none d-md-block"
        style="bottom: 10%; left: -10%"
      >
        <div class="card-body p-6">
          <div class="progressbar semi-circle fuchsia mb-3">
            <CommonCircleProgressbar :max="80" />
          </div>
          <h4 class="mb-0">Time Saved</h4>
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </div>
    <!--/column -->
    <div class="col-lg-5">
      <h2 class="fs-16 text-uppercase text-gradient gradient-1 mb-3">
        What Makes Us Different?
      </h2>
      <h3 class="display-4 mb-4 me-lg-n5">
        We make spending stress free so you have the perfect control.
      </h3>
      <p class="mb-6">
        Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla
        non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros. Fusce dapibus, tellus ac cursus. Integer posuere
        erat a ante venenatis dapibus posuere velit.
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
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { checklistItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
