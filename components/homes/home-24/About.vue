<template>
  <section class="wrapper bg-light scrollSpysection" id="about">
    <div class="container pt-7 pt-md-9 pb-13 pb-md-15">
      <div class="row gx-md-8 gx-xl-12 gy-6 align-items-center">
        <div class="col-md-8 col-lg-6 order-lg-2 mx-auto">
          <div class="img-mask mask-2">
            <nuxt-img
              src="/assets/img/photos/about30.jpg"
              :width="1000"
              :height="850"
              alt="photo"
            />
          </div>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-5 mb-3">About Me</h2>
          <p class="lead fs-lg">
            I'm Caitlyn Sandbox, a photographer specializing in food, drink and
            product photography.
          </p>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo
            sit amet risus. Etiam porta sem malesuada magna mollis euismod.
            Vestibulum id ligula.
          </p>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Aenean lacinia bibendum nulla sed consectetur. Curabitur
            blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur.
          </p>
          <a href="#" class="btn btn-primary rounded-pill mt-2">Learn More</a>
        </div>
        <!--/column -->
      </div>
      <!-- /.row -->
      <div class="row gx-md-8 gx-xl-12 mt-10 mt-md-13">
        <div class="col-lg-4">
          <h2 class="display-5 mb-3">My Working Process</h2>
          <p>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Fusce dapibus, tellus ac cursus. Aenean eu leo quam.
          </p>
        </div>
        <!-- /column -->
        <div class="col-lg-8">
          <div class="row gy-6 gx-md-8 gx-xl-12">
            <div v-for="(step, index) in steps" :key="index" class="col-md-6">
              <div class="d-flex flex-row">
                <div>
                  <span :class="step.iconClass"
                    ><span class="number fs-18">{{ step.number }}</span></span
                  >
                </div>
                <div>
                  <h4 class="mb-1">{{ step.title }}</h4>
                  <p class="mb-0">{{ step.description }}</p>
                </div>
              </div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { steps } from "~/data/steps";
</script>

<style lang="scss" scoped></style>
