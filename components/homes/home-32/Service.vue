<template>
  <section class="wrapper bg-dark text-inverse">
    <div class="container py-15 py-md-17">
      <div class="row text-center">
        <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
          <h2 class="fs-16 text-uppercase text-white mb-3">Our Services</h2>
          <h3 class="display-3 text-white mb-10">
            The full service we are offering is specifically designed to meet
            your business needs.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-9">
        <div
          v-for="(service, index) in services10"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <div class="d-flex flex-row">
            <div>
              <nuxt-img :src="service.image" class="w-13 me-5" alt="photo" />
            </div>
            <div>
              <h3 class="mb-2 text-white">{{ service.title }}</h3>
              <p class="mb-0">{{ service.description }}</p>
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
import { services10 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
