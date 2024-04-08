<template>
  <section class="wrapper bg-gray">
    <div class="container py-12 py-md-14">
      <div class="row gx-lg-8 gx-xl-12 gy-8">
        <div
          class="col-md-6 col-lg-4"
          v-for="(feature, index) in features"
          :key="index"
        >
          <div class="d-flex flex-row">
            <div>
              <nuxt-img
                :src="feature.iconSrc"
                class="icon-svg icon-svg-sm solid-mono text-navy me-4"
                alt="photo"
              />
            </div>
            <div>
              <h4 class="mb-1">{{ feature.title }}</h4>
              <p class="mb-0">{{ feature.description }}</p>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { features } from "~/data/shop";
</script>

<style lang="scss" scoped></style>
