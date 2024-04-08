<template>
  <section class="wrapper bg-soft-primary">
    <div class="container py-14 pt-md-17 pb-md-21">
      <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-2 align-items-end">
        <div class="col-lg-4">
          <h2 class="fs-16 text-uppercase text-line text-primary mb-3">
            Company Facts
          </h2>
          <h3 class="display-4 mb-0 pe-xxl-15">We are proud of our works</h3>
        </div>
        <!-- /column -->
        <div class="col-lg-8 mt-lg-2">
          <div class="row align-items-center counter-wrapper gy-6 text-center">
            <div v-for="item in counters3" :key="item.id" class="col-md-4">
              <h3 class="counter counter-lg">
                <CommonCounter
                  parentClass=""
                  :min="20"
                  :max="item.value"
                  :time="1500"
                />+
              </h3>
              <p>{{ item.label }}</p>
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
import { counters3 } from "~/data/count";
</script>

<style lang="scss" scoped></style>
