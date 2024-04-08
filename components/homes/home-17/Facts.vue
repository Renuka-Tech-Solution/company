<template>
  <hr class="my-14 my-md-16" />
  <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11 align-items-end">
    <div class="col-lg-4">
      <h2 class="fs-15 text-uppercase text-muted mb-3">Company Facts</h2>
      <h3 class="display-4 mb-0">We are proud of our works</h3>
    </div>
    <!-- /column -->
    <div class="col-lg-8 mt-lg-2">
      <div class="row align-items-center counter-wrapper gy-6 text-center">
        <div v-for="(elm, i) in counters3" :key="i" class="col-md-4">
          <h3 class="counter counter-lg">
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
</template>

<script setup>
import { counters3 } from "~/data/count";
</script>

<style lang="scss" scoped></style>
