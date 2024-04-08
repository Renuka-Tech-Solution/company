<template>
  <section class="wrapper bg-light">
    <div class="container py-15 py-md-17">
      <div class="row text-center">
        <div class="col-md-10 col-lg-9 col-xxl-8 mx-auto">
          <h2 class="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
          <h3 class="display-3 ls-sm mb-9 px-xl-11">
            The service we offer is specifically designed to meet your needs.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-8">
        <div
          v-for="service in services8"
          :key="service.id"
          class="col-md-6 col-lg-4"
        >
          <div class="d-flex flex-row">
            <div>
              <nuxt-img
                :src="service.icon"
                class="icon-svg icon-svg-md text-blue me-5 mt-1"
                alt="photo"
              />
            </div>
            <div>
              <h4 class="fs-20 ls-sm">{{ service.title }}</h4>
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
import { services8 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
