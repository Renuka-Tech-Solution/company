<template>
  <section class="wrapper bg-soft-primary">
    <div class="container py-14 pt-md-17 pb-md-20">
      <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
        <div class="col-lg-4 text-center text-lg-start">
          <h3 class="display-4 mb-3 pe-xl-15">We are proud of our works</h3>
          <p class="lead fs-lg mb-0 pe-xxl-10">
            We bring solutions to make life easier for our customers.
          </p>
        </div>
        <!-- /column -->
        <div class="col-lg-8 mt-lg-2">
          <div class="row align-items-center counter-wrapper gy-6 text-center">
            <div
              class="col-md-4"
              v-for="item in facts2.slice(0, 3)"
              :key="item.id"
            >
              <nuxt-img
                :src="item.iconSrc"
                class="icon-svg icon-svg-lg text-primary mb-3"
                alt="photo"
              />
              <h3 class="counter">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="item.counter"
                  :time="1500"
                />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
              </h3>
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
import { facts2 } from "~/data/facts";
</script>

<style lang="scss" scoped></style>
