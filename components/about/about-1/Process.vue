<template>
  <section class="wrapper bg-light angled upper-end lower-end">
    <div class="container pt-12 pt-md-13 pb-13 pb-md-15">
      <div class="row mb-5">
        <div class="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
          <nuxt-img
            src="/assets/img/icons/lineal/list.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="photo"
          />
          <h2 class="display-4 mb-4 px-lg-14">
            Here are 3 working steps to organize our business projects.
          </h2>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
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
          <h2 class="display-6 mb-3">How It Works?</h2>
          <p class="lead fs-lg pe-lg-5">
            Find out everything you need to know and more about how we create
            our business process models.
          </p>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis ornare.
          </p>
          <p class="mb-6">
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
            ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
            consectetur. Sed posuere consectetur est at lobortis. Vestibulum id
            ligula porta felis.
          </p>
          <a href="#" class="btn btn-primary rounded-pill mb-0">Learn More</a>
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
import { steps4 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
