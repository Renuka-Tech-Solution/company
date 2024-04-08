<template>
  <section class="wrapper bg-light">
    <div class="container pb-23 pb-md-25">
      <div class="row mb-14">
        <div class="col-12 mt-n18 mt-md-n20 mt-lg-n21 position-relative">
          <div
            class="shape bg-dot red rellax w-16 h-18"
            data-rellax-speed="1"
            style="top: 1rem; left: -3.2rem"
          ></div>
          <div
            class="shape pale-primary w-19 h-19 rellax"
            data-rellax-speed="1"
            style="bottom: 2rem; right: -3rem"
          >
            <nuxt-img
              src="/assets/img/svg/hex.svg"
              class="icon-svg w-100 h-100"
              alt="photo"
            />
          </div>
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/about18.jpg"
              srcset="/assets/img/photos/about18@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-8">
        <div
          class="col-md-6 col-lg-4"
          v-for="item in jobBenefits"
          :key="item.id"
        >
          <div class="d-flex flex-row">
            <div>
              <nuxt-img
                :src="item.imagePath"
                class="icon-svg icon-svg-sm solid-mono text-primary me-4"
                alt="photo"
              />
            </div>
            <div>
              <h4 class="mb-1">{{ item.title }}</h4>
              <p class="mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="text-center mt-10">
        <a href="#" class="btn btn-primary rounded-pill">Join Our Team</a>
      </div>
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { jobBenefits } from "~/data/job";
</script>

<style lang="scss" scoped></style>
