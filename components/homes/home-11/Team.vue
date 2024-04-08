<template>
  <div class="row mb-3">
    <div class="col-md-10 col-lg-12 col-xl-10 col-xxl-9 mx-auto text-center">
      <h2 class="fs-15 text-uppercase text-primary mb-3">Our Team</h2>
      <h3 class="display-4 mb-7 px-lg-19 px-xl-18">
        Think unique and be innovative. Make a difference with Sandbox.
      </h3>
    </div>
    <!--/column -->
  </div>
  <!--/.row -->
  <div class="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 mb-md-20">
    <div
      v-for="(item, index) in teamMembers"
      class="col-md-6 col-lg-3"
      :key="index"
    >
      <div class="position-relative">
        <div
          class="shape rounded rellax"
          :class="['bg-soft-' + item.color, 'd-md-block']"
          :style="{
            bottom: '-0.75rem',
            right: '-0.75rem',
            width: '98%',
            height: '98%',
            zIndex: 0,
          }"
        ></div>
        <div class="card">
          <figure class="card-img-top">
            <nuxt-img class="img-fluid" :src="item.avatarSrc" alt="photo" />
          </figure>
          <div class="card-body px-6 py-5">
            <h4 class="mb-1">{{ item.name }}</h4>
            <p class="mb-0">{{ item.position }}</p>
          </div>
        </div>
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { teamMembers } from "~/data/team";
</script>

<style lang="scss" scoped></style>
