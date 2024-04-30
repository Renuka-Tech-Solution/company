<template>
  <section class="wrapper bg-light">
    <div class="container pt-6 pt-md-6 pb-md-10 pt-lg-8 pb-lg-12">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/shopify-i8.webp"
              srcset="/assets/img/illustrations/shopify-i8.webp"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h3 class="display-5 mb-6 pe-xxl-6">
            Delivering swift solutions to simplify Shopify experiences for our customers' convenience.
          </h3>
          <ul class="progress-list mt-3">
            <li v-for="(item, index) in skills" :key="index">
              <p>{{ item.title }}</p>
              <div :class="`progressbar line ${item.color}`">
                <LineProgressbar :max="item.value" />
                <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
              </div>
            </li>
          </ul>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import LineProgressbar from "~/components/common/LineProgressbar.vue";

import { skills } from "~/data/skils";
</script>

<style lang="scss" scoped></style>
