<template>
  <section class="wrapper bg-dark text-inverse">
    <div class="container py-14 py-md-16">
      <figure
        class="rounded mt-md-n21 mt-lg-n23 mb-14"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="900"
      >
        <nuxt-img
          src="/assets/img/photos/about15.jpg"
          srcset="/assets/img/photos/about15@2x.jpg 2x"
          alt="photo"
        />
      </figure>
      <div class="row">
        <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
          <h3 class="display-4 text-white mb-10">
            The service we offer is specifically designed to meet your needs.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div
        class="row gx-md-8 gy-8 text-center"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay=""
        data-group="services"
      >
        <!--/column -->
        <div
          v-for="feature in serviceFeatures"
          :key="feature.id"
          class="col-md-6 col-lg-3"
        >
          <div class="icon btn btn-circle btn-lg btn-primary pe-none mb-5">
            <i :class="feature.icon"></i>
          </div>
          <h4 class="text-white">{{ feature.title }}</h4>
          <p class="mb-3">
            {{ feature.description }}
          </p>
        </div>

        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { serviceFeatures } from "~/data/features";
</script>

<style lang="scss" scoped></style>
