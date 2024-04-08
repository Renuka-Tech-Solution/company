<template>
  <section class="wrapper bg-soft-primary">
    <div class="container py-14 pt-md-16 pt-lg-0 pb-md-16">
      <div class="row text-center">
        <div class="col-lg-10 mx-auto">
          <div class="mt-lg-n20 mt-xl-n22 position-relative">
            <div
              class="shape bg-dot red rellax w-16 h-18"
              data-rellax-speed="1"
              style="
                top: 1rem;
                left: -3.9rem;
                z-index: -1;
                pointer-events: none;
              "
            ></div>
            <div
              class="shape rounded-circle bg-line primary rellax w-18 h-18"
              data-rellax-speed="1"
              style="
                bottom: 2rem;
                right: -3rem;
                z-index: -1;
                pointer-events: none;
              "
            ></div>
            <CommonVideoPlayer />
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row text-center mt-12">
        <div class="col-lg-9 mx-auto">
          <h3 class="display-4 mb-0 text-center px-xl-10 px-xxl-15">
            Find out everything you need to know about creating a business
            process model
          </h3>
          <div
            class="row gx-lg-8 gx-xl-12 process-wrapper text-center mt-9"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
          >
            <div
              v-for="feature in features8"
              :key="feature.id"
              class="col-md-4"
            >
              <nuxt-img
                :src="feature.iconSrc"
                class="icon-svg icon-svg-md"
                :class="feature.iconColorClass"
                alt="photo"
              />
              <h4 class="mb-1">{{ feature.title }}</h4>
              <p>{{ feature.description }}</p>
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
import { features8 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
