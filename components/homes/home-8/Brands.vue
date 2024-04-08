<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-13 mb-md-17">
    <div class="col-lg-4">
      <h2 class="display-4 mb-3 pe-xxl-5">Trusted by over 25000+ clients</h2>
      <p class="lead fs-lg mb-0 pe-xxl-5">
        We <span class="underline">bring solutions</span> to make life easier
        for our customers.
      </p>
    </div>
    <!-- /column -->
    <div class="col-lg-8">
      <div
        class="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-11 mt-n10"
      >
        <div v-for="(elm, i) in clients1.slice(0, 8)" :key="i" class="col">
          <figure class="px-4 px-lg-3 px-xxl-5">
            <nuxt-img :src="elm.src" alt="photo" />
          </figure>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /column -->
  </div>
</template>

<script setup>
import { clients1 } from "~/data/clients";
</script>

<style lang="scss" scoped></style>
