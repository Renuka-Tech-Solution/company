<template>
  <section class="wrapper bg-gradient-primary">
    <div class="container pt-7 pt-md-10 pb-14 pb-md-17">
      <div class="row mb-8 text-center">
        <div class="col-md-11 col-lg-10 col-xl-8 col-xxl-7 mx-auto">
          <nuxt-img
            src="/assets/img/demos/icon.png"
            srcset="/assets/img/demos/icon@2x.png 2x"
            alt="photo"
          />
          <h2 class="display-3 mt-3 mb-3 mb-0 px-lg-10 px-xl-0">
            Save your time and money by choosing Sandbox for your website.
          </h2>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-xl-8 col-xxl-7 mx-auto">
          <div class="row align-items-center counter-wrapper gy-6 text-center">
            <div
              v-for="(item, index) in counters4"
              :key="index"
              class="col-md-4"
            >
              <h3 class="counter fs-50 text-primary mb-1">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="item.value"
                  :time="1500"
                />+
              </h3>
              <p class="fs-18 mb-0">{{ item.label }}</p>
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
import { counters4 } from "~/data/count";
</script>

<style lang="scss" scoped></style>
