<template>
  <div class="row gx-md-8 gx-xl-12 gy-6 align-items-center">
    <div class="col-md-8 col-lg-6 order-lg-2 mx-auto">
      <div class="img-mask mask-2 px-xxl-8">
        <nuxt-img
          src="/assets/img/photos/about28.jpg"
          srcset="/assets/img/photos/about28@2x.jpg 2x"
          alt="photo"
        />
      </div>
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <h2 class="display-3 mb-3">More <em>about</em> me</h2>
      <p class="lead fs-lg">
        I'm Julia Sandbox, a corporate brand designer based in New York City.
        I’m very passionate about the work that I do.
      </p>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo,
        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula.
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
      <h2 class="display-3 mb-3">My <em>working</em> process</h2>
      <p>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Fusce dapibus, tellus ac cursus. Aenean eu leo quam.
      </p>
    </div>
    <!-- /column -->
    <div class="col-lg-8">
      <div class="row gy-8 gx-md-8 gx-xl-12">
        <div v-for="step in steps2" :key="step.id" class="col-md-6">
          <div class="d-flex flex-row">
            <div>
              <nuxt-img
                :src="step.icon"
                class="icon-svg icon-svg-sm solid-duo text-purple-aqua mt-1 me-4"
                :alt="step.alt"
              />
            </div>
            <div>
              <h3 class="mb-1">{{ step.title }}</h3>
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
</template>

<script setup>
import { steps2 } from "~/data/steps";
</script>

<style lang="scss" scoped></style>
