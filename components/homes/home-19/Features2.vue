<template>
  <div class="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center">
    <div class="col-lg-6">
      <div class="row gx-md-5 gy-5">
        <div class="col-12">
          <figure class="rounded mx-md-5">
            <nuxt-img
              src="/assets/img/photos/g8.jpg"
              srcset="/assets/img/photos/g8@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-md-6">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/g9.jpg"
              srcset="/assets/img/photos/g9@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-md-6">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/g10.jpg"
              srcset="/assets/img/photos/g10@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <h2 class="fs-16 text-uppercase text-muted mb-3">
        What Makes Us Different?
      </h2>
      <h3 class="display-3 mb-8">
        We bring <span class="underline-3 style-2 yellow">solutions</span> to
        make life easier for our customers.
      </h3>
      <div class="row gy-6">
        <div v-for="(elm, i) in features" :key="i" class="col-md-6">
          <div class="d-flex flex-row">
            <div>
              <nuxt-img
                :src="elm.icon"
                class="icon-svg icon-svg-xs solid-mono text-fuchsia me-4"
                alt="photo"
              />
            </div>
            <div>
              <h4 class="mb-1">{{ elm.title }}</h4>
              <p class="mb-0">{{ elm.description }}</p>
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
