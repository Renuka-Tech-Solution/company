<template>
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-17">
      <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div
            v-for="(item, index) in steps4"
            class="card"
            :class="{
              'me-lg-6': index === 0,
              'ms-lg-13': index === 1,
              'mx-lg-6': index === 2,
              'mt-6': index > 0,
            }"
            :key="index"
          >
            <div class="card-body p-6">
              <div class="d-flex flex-row">
                <div>
                  <span
                    class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4"
                  >
                    <span class="number">{{ item.number }}</span>
                  </span>
                </div>
                <div>
                  <h4 class="mb-1">{{ item.title }}</h4>
                  <p class="mb-0">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <!--/.card -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="fs-16 text-uppercase text-primary mb-3">Our Strategy</h2>
          <h3 class="display-3 mb-4">
            Here are 3 working steps to organize our projects.
          </h3>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis.
          </p>
          <p class="mb-6">
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
            ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
            consectetur.
          </p>
          <a href="#" class="btn btn-primary rounded-pill mb-0">Learn More</a>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { steps4 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
