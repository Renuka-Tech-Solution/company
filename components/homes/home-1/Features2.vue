<template>
  <section id="snippet-3" class="wrapper bg-light">
    <div class="container pt-10 pt-sm-10 pt-md-2 pt-lg-17 pb-13 pb-md-15 text-center">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
          <h3 class="display-4 mb-2 px-xl-10">
            The service we offer is specifically designed to meet client's needs.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="position-relative">
        <div
          class="shape rounded-circle bg-soft-blue rellax w-16 h-16"
          data-rellax-speed="1"
          style="bottom: -0.5rem; right: -2.2rem; z-index: 0"
        ></div>
        <div
          class="shape bg-dot yellow rellax w-16 h-17"
          data-rellax-speed="1"
          style="top: -0.5rem; left: -2.5rem; z-index: 0"
        ></div>
        <div class="row gx-md-5 text-center">
          <div
            v-for="service in services"
            :key="service.id"
            class="col-md-6 col-xl-4"
          >
            <div class="card shadow-lg">
              <div class="card-body">
                <nuxt-img
                  :src="service.iconSrc"
                  class="icon-svg icon-svg-md mb-4"
                  :class="service.iconColorClass"
                  alt="photo"
                />
                <h4>{{ service.title }}</h4>
                <p class="mb-2">{{ service.description }}</p>
                <!-- Skipping link property -->
                <!-- <a href="#" :class="['more', 'hover', service.linkColorClass]"
                  >Learn More</a
                > -->
              </div>
              <!--/.card-body -->
            </div>
            <!--/.card -->
          </div>
          <!--/column -->
          <nuxt-link to="/services" class="btn btn-sm btn-primary rounded-pill w-20 m-auto">More Services</nuxt-link>
        </div>
        <!--/.row -->
      </div>
      <!-- /.position-relative -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { services } from "~/data/features";
</script>

<style lang="scss" scoped></style>
