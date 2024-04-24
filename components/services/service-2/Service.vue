`
<template>
  <section class="wrapper bg-light">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/i8.png"
              srcset="/assets/img/illustrations/i8@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h3 class="display-4 mb-6 pe-xxl-6">
            We bring rapid solutions to make the life of our customers easier.
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
          <!-- /.progress-list -->
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
