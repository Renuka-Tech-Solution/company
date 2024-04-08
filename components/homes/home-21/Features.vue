<template>
  <section class="wrapper bg-gradient-primary">
    <div class="container pt-12 pt-lg-8 pb-14 pb-md-17">
      <div class="row text-center">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-16 text-uppercase text-primary mb-3">What We Do?</h2>
          <h3 class="display-3 mb-10 px-xxl-10">
            The service we offer is specifically designed to meet your needs.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div
        class="row gx-lg-8 gx-xl-12 gy-11 px-xxl-5 text-center d-flex align-items-end"
      >
        <div v-for="(item, index) in services5" :key="index" class="col-lg-4">
          <div class="px-md-15 px-lg-3">
            <figure class="mb-6">
              <nuxt-img
                class="img-fluid"
                :src="item.imageSrc"
                :srcset="`${item.imageSrcSet} 2x`"
                alt="photo"
              />
            </figure>
            <h3>{{ item.title }}</h3>
            <p class="mb-2">{{ item.description }}</p>
            <a href="#" class="more hover">Learn More</a>
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
import { services5 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
