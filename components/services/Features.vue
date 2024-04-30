<template>
  <section id="snippet-3" class="wrapper bg-light">
    <div class="container pt-5 pt-md-5 pb-5 pb-md-15 text-center">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-25 text-uppercase text-muted mb-3">What We Do?</h2>
          <h3 class="display-4 mb-4 px-xl-10">
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
          class="shape bg-dot blue rellax w-16 h-17"
          data-rellax-speed="1"
          style="top: -0.5rem; left: -2.5rem; z-index: 0"
        ></div>

        <div class="row gx-md-5 text-center mb-3" 
        v-for="(services, rowIndex ) in  chunk( servicesPage, 3)"             
        :key="rowIndex">
          <div
            v-for="(service, rowCardIndex ) in  services"
            :key="rowCardIndex"
            class="col-md-4 col-xl-4 mb-3"
          >

            <div class="card service shadow-lg h-100">
              <div class="card-body px-3 py-5">
                <nuxt-img
                  :src="service.iconSrc"
                  class="icon-svg icon-svg-md mb-4"
                  :class="service.iconColorClass"
                  alt="photo"
                />
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
import { servicesPage } from "~/data/features";

import chunk from "~/utlis/chunk"


</script>

<style lang="scss" scoped></style>


