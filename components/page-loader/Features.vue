<template>
  <div class="row gx-lg-8 gy-8 align-items-center">
    <div class="col-lg-6 order-lg-2">
      <div class="row gx-md-5 gy-5">
        <div class="col-md-4 offset-md-2 align-self-end">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/g1.jpg"
              srcset="/assets/img/photos/g1@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-md-6 align-self-end">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/g2.jpg"
              srcset="/assets/img/photos/g2@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-md-6 offset-md-1">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/g3.jpg"
              srcset="/assets/img/photos/g3@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-md-4 align-self-start">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/g4.jpg"
              srcset="/assets/img/photos/g4@2x.jpg 2x"
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
      <h2 class="display-4 mb-3">What We Do?</h2>
      <p class="lead fs-lg mb-8 pe-xxl-2">
        The full service we are offering is
        <span class="underline">specifically</span> designed to meet your
        business needs and projects.
      </p>
      <div class="row gx-xl-10 gy-6">
        <div
          v-for="feature in serviceFeatures"
          :key="feature.id"
          class="col-md-6 col-lg-12 col-xl-6"
        >
          <div class="d-flex flex-row">
            <div>
              <div
                class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-5"
              >
                <i :class="feature.icon"></i>
              </div>
            </div>
            <div>
              <h4 class="mb-1">{{ feature.title }}</h4>
              <p class="mb-0">{{ feature.description }}</p>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { serviceFeatures } from "~/data/features";
</script>

<style lang="scss" scoped></style>
