<template>
  <div class="row text-center">
    <div class="col-lg-9 col-xl-8 mx-auto">
      <h2 class="fs-16 text-uppercase text-muted mb-3">What We Do?</h2>
      <h3 class="display-4 mb-10 px-xxl-10">
        The full service we are offering is specifically designed to meet your
        needs.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row">
    <div class="col-xxl-11 mx-auto">
      <div
        class="row gx-lg-8 gx-xl-12 gy-11 text-center d-flex align-items-end"
      >
        <div
          v-for="item in services6"
          :key="item.id"
          class="col-sm-8 col-md-6 col-lg-4 mx-auto"
        >
          <div class="px-md-3 px-lg-0 px-xl-3">
            <div
              :class="[
                'icon',
                'btn',
                'btn-block',
                'btn-lg',
                `btn-soft-${item.color}`,
                'pe-none',
                'mb-5',
              ]"
            >
              <i :class="`uil ${item.icon}`"></i>
            </div>
            <h3 class="fs-22">{{ item.title }}</h3>
            <p class="mb-2">{{ item.description }}</p>
            <a
              :href="item.link"
              class="more hover"
              :class="`link-${item.linkColor}`"
              >Learn More</a
            >
          </div>
          <!--/.px -->
        </div>

        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <hr class="dark my-14 my-md-17" />
</template>

<script setup>
import { services6 } from "@/data/features";
</script>

<style lang="scss" scoped></style>
