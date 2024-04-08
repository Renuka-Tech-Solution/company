<template>
  <div class="row mb-8">
    <div class="col-12 mt-n20">
      <figure class="rounded">
        <nuxt-img
          src="/assets/img/photos/about5.jpg"
          srcset="/assets/img/photos/about5@2x.jpg 2x"
          alt="photo"
        />
      </figure>
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div
            class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 text-white mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top"
            style="background-image: url(/assets/img/photos/bg3.jpg)"
          >
            <div class="card-body p-9 p-xl-10">
              <div
                class="row align-items-center counter-wrapper gy-4 text-center"
              >
                <div
                  v-for="(counter, index) in counters2"
                  :key="index"
                  class="col-6 col-lg-3"
                >
                  <h3 class="counter counter-lg text-white">
                    <Counter
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
      <!-- /.row -->
    </div>
    <!-- /column -->
  </div>
</template>

<script setup>
import Counter from "~/components/common/Counter.vue";
import { counters2 } from "~/data/count";
</script>

<style lang="scss" scoped></style>
