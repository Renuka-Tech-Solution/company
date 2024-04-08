<template>
  <section
    class="wrapper bg-gray position-relative min-vh-60 d-lg-flex align-items-center"
  >
    <div
      class="col-lg-6 position-lg-absolute top-0 start-0 image-wrapper bg-image bg-cover h-100"
      style="background-image: url(/assets/img/photos/bg38.jpg)"
    >
      <div class="divider text-gray divider-v-end d-none d-lg-block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 1200">
          <g />
          <g>
            <g>
              <polygon
                fill="currentColor"
                points="48 0 0 0 48 1200 54 1200 54 0 48 0"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
    <!--/column -->
    <div class="container">
      <div class="row gx-0">
        <div class="col-lg-6 ms-auto">
          <div class="pt-13 pb-15 pb-md-17 py-lg-16 ps-lg-15 pe-xxl-16">
            <h2 class="fs-15 text-uppercase text-muted mb-3">How It Works?</h2>
            <h3 class="display-3 ls-sm mb-7">
              Here are the 3 working steps on success.
            </h3>
            <div
              v-for="(elm, i) in steps7"
              :key="i"
              class="d-flex flex-row mb-5"
            >
              <div>
                <nuxt-img
                  :src="elm.iconSrc"
                  class="icon-svg icon-svg-md text-blue me-5 mt-1"
                  alt="photo"
                />
              </div>
              <div>
                <h4 class="fs-20 ls-sm">{{ elm.title }}</h4>
                <p class="mb-0">
                  {{ elm.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { steps7 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
