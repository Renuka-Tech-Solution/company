<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11">
    <div class="col-lg-4">
      <h3 class="display-4 mb-3 pe-xl-10">We are proud of our creative team</h3>
      <p class="lead fs-lg mb-0 pe-xxl-10">
        Just sit back and relax while we take care of your business needs.
      </p>
    </div>
    <!-- /column -->
    <div class="col-lg-8 mt-lg-2">
      <div class="row align-items-center counter-wrapper gy-6 text-center">
        <div class="col-md-4" v-for="item in facts2.slice(0, 3)" :key="item.id">
          <nuxt-img
            :src="item.iconSrc"
            class="icon-svg icon-svg-lg text-primary mb-3"
            alt="photo"
          />
          <h3 class="counter">
            <CommonCounter
              parentClass=""
              :min="0"
              :max="item.counter"
              :time="1500"
            />
            <!-- Component for counting number with intersetion observer from omponents>common>counter -->
          </h3>
          <p class="mb-0">{{ item.description }}</p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /column -->
  </div>
</template>

<script setup>
import { facts2 } from "~/data/facts";
</script>

<style lang="scss" scoped></style>
