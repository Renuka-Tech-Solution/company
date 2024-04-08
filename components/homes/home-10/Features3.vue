<template>
  <section class="wrapper bg-dark text-inverse">
    <div class="container py-14 pt-md-17 pb-md-21">
      <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-2 align-items-center">
        <div class="col-lg-4">
          <h3 class="display-4 text-white mb-3 pe-xxl-15">
            We are proud of our projects
          </h3>
          <p class="lead fs-lg mb-0 pe-xxl-10">
            We bring solutions to make life easier for our customers.
          </p>
        </div>
        <!-- /column -->
        <div class="col-lg-8 mt-lg-2">
          <div class="row align-items-center counter-wrapper gy-6 text-center">
            <div v-for="(elm, i) in counters3" :key="i" class="col-md-4">
              <h3 class="counter counter-lg text-white">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="elm.value"
                  :time="1500"
                />+
              </h3>
              <p>{{ elm.label }}</p>
            </div>
            <!--/column -->

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
import { counters3 } from "~/data/count";
</script>

<style lang="scss" scoped></style>
