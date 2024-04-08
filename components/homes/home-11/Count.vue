<template>
  <div class="row mt-md-n50p mb-14 mb-md-7">
    <div class="col-xl-10 mx-auto">
      <div
        class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400"
        style="background-image: url(/assets/img/photos/bg2.jpg)"
      >
        <div class="card-body p-9 p-xl-11">
          <div
            class="row align-items-center counter-wrapper gy-8 text-center text-white"
          >
            <div
              v-for="(counter, index) in counters2"
              :key="index"
              class="col-6 col-lg-3"
            >
              <h3 class="counter counter-lg text-white">
                <CommonCounter
                  parentClass=""
                  :min="50"
                  :max="counter.count"
                  :time="500"
                />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
              </h3>

              <p>{{ counter.label }}</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </div>
    <!-- /column -->
  </div>
</template>

<script setup>
import { counters2 } from "~/data/count";
</script>

<style lang="scss" scoped></style>
