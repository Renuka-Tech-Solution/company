<template>
  <section id="snippet-2" class="wrapper bg-light">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-lg-8 col-xl-7 col-xxl-6">
          <h2 class="fs-16 text-uppercase text-line text-primary mb-3">
            What We Do?
          </h2>
          <h3 class="display-4 mb-9">
            The service we offer is specifically designed to meet your needs.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-md-8 gy-8">
        <div
          v-for="feature in features5"
          :key="feature.id"
          class="col-md-6 col-lg-3"
        >
          <div
            :class="`icon btn btn-block btn-lg btn-soft-primary pe-none mb-6`"
          >
            <i :class="feature.icon"></i>
          </div>
          <h4>{{ feature.title }}</h4>
          <p class="mb-3">{{ feature.description }}</p>
          <a href="#" class="more hover link-primary">Learn More</a>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { features5 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
