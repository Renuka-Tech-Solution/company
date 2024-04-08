<template>
  <div class="row gx-3 gy-10 mb-14 mb-md-16 align-items-center">
    <div class="col-lg-6">
      <figure>
        <nuxt-img
          class="w-auto"
          src="/assets/img/illustrations/3d8.png"
          srcset="/assets/img/illustrations/3d8@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-5 ms-auto">
      <h2 class="fs-16 text-uppercase text-grape mb-3">Why Choose Us?</h2>
      <h3 class="display-4 mb-8">
        So here a few reasons why our valued customers choose us.
      </h3>
      <div class="row gy-6">
        <div v-for="(elm, i) in features" :key="i" class="col-md-6">
          <div class="d-flex flex-row">
            <div>
              <nuxt-img
                :src="elm.icon"
                class="icon-svg icon-svg-xs solid-mono text-grape me-4"
                alt="photo"
              />
            </div>
            <div>
              <h4 class="mb-1">{{ elm.title }}</h4>
              <p class="mb-0">
                {{ elm.description }}
              </p>
            </div>
          </div>
        </div>
        <!--/column -->

        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { features } from "~/data/features";
</script>

<style lang="scss" scoped></style>
