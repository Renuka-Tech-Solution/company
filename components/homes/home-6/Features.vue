<template>
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-17">
      <div class="row text-center mt-xl-12">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-15 text-uppercase text-muted mb-3">App Features</h2>
          <h3 class="display-4 mb-9 px-xxl-11">
            Sandbox is the only app you need to track your goals for better
            health.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div
        class="row gx-lg-8 gx-xl-12 gy-8 mb-14 mb-md-17"
        data-aos="fade"
        data-aos-once="true"
        data-aos-delay=""
      >
        <div v-for="item in features9" :key="item.id" class="col-md-6 col-lg-4">
          <div class="d-flex flex-row">
            <div>
              <nuxt-img
                :src="item.icon"
                class="icon-svg icon-svg-sm"
                :class="item.iconClass"
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
      <div class="row gx-lg-8 gx-xl-10 mb-lg-19 mb-xl-22 align-items-center">
        <div class="col-lg-6">
          <figure>
            <nuxt-img
              src="/assets/img/photos/device.png"
              srcset="/assets/img/photos/device@2x.png 2x"
              data-aos="fade"
              data-aos-once="true"
              data-aos-delay=""
            />
          </figure>
        </div>
        <!-- /column -->
        <div class="col-lg-6">
          <h2 class="fs-15 text-uppercase text-muted mb-3">How It Works</h2>
          <h3 class="display-4 mb-5">
            Download the app, create your profile and voilà, you're all set!
          </h3>
          <p class="mb-8">
            Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
            consectetur purus sit amet fermentum. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Nulla vitae elit libero.
            Etiam porta sem malesuada magna mollis euismod. Fusce dapibus,
            tellus ac cursus commodo.
          </p>
          <div
            class="row gy-6 gx-xxl-8 process-wrapper"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay=""
          >
            <div v-for="(item, index) in steps2" class="col-md-4" :key="index">
              <nuxt-img
                :src="item.iconSrc"
                class="icon-svg icon-svg-sm"
                :class="['text-' + item.iconColor, 'mb-3']"
                alt="photo"
              />
              <h4 class="mb-1">{{ item.title }}</h4>
              <p class="mb-0">{{ item.description }}</p>
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
  </section>
</template>

<script setup>
import { features9 } from "~/data/features";
import { steps2 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
