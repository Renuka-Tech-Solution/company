<template>
  <div class="container pt-6">
    <div class="row">
      <div class="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
        <h2 class="display-2 mb-4">The full service we are offering</h2>
        <p class="lead fs-lg mb-11">
          Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida
          at eget metus. Integer posuere ante venenatis.
        </p>
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
    <div class="row gx-md-8 gy-8 text-center mb-14 mb-md-17">
      <div
        v-for="(service, index) in services9"
        :key="index"
        :id="service.id"
        class="col-md-6 col-lg-3"
      >
        <div class="svg-bg svg-bg-lg bg-white rounded-xl shadow-xl mb-6">
          <nuxt-img
            :src="service.iconSrc"
            class="icon-svg solid-duo text-grape-fuchsia"
            alt="photo"
          />
        </div>
        <h3>{{ service.title }}</h3>
        <p class="mb-3">{{ service.description }}</p>
        <a href="#" class="more hover">Learn More</a>
      </div>
      <!--/column -->
    </div>
    <!--/.row -->
  </div>
</template>

<script setup>
import { services9 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
