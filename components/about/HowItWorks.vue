<template>
  <section class="wrapper bg-light">
    <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-16 align-items-center">
      <div class="col-lg-7">
        <figure>
          <nuxt-img
            class="w-auto"
            src="/assets/img/illustrations/about-i3.webp"
            srcset="/assets/img/illustrations/about-i3.webp"
            alt="photo"
          />
        </figure>
      </div>
      <div class="col-lg-5">
        <h2 class="fs-15 text-uppercase text-line text-primary mb-3">How It Works?</h2>
        <h3 class="display-5 mb-7 pe-xxl-5">
          Everything you need on creating a business process.
        </h3>
        <div
          v-for="(item, index) in aboutWorks"
          :class="`d-flex flex-row ${index != 2 ? 'mb-4' : ''}`"
          :key="index"
        >
          <div>
            <nuxt-img
              :src="item.iconSrc"
              class="icon-svg icon-svg-sm"
              :class="['text-' + item.iconColor, 'me-4']"
              alt="photo"
            />
          </div>
          <div>
            <h4 class="mb-1">{{ item.title }}</h4>
            <p class="mb-1">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { aboutWorks } from "~/data/process";
</script>

<style lang="scss" scoped></style>
