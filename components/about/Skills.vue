<template>
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16">
      <div class="row text-center mb-12 mb-md-15">
        <div
          class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-n18 mt-md-n22"
        >
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/about-i8.webp"
              srcset="/assets/img/illustrations/about-i8.webp"
              alt="photo"
            />
          </figure>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center">
        <div class="col-lg-6 order-lg-2">
          <ul class="progress-list">
            <li v-for="(item, index) in skills" :key="index">
              <p>{{ item.title }}</p>
              <div :class="`progressbar line ${item.color}`">
                <CommonLineProgressbar :max="item.value" />
                <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
              </div>
            </li>
          </ul>
          <!-- /.progress-list -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h3 class="display-5 mb-5">
            The full service we are offering is specifically designed to meet
            your business needs and projects.
          </h3>
        </div>
      </div>
      <div class="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
        <div v-for="(elm, i) in aboutSkills" :key="i" class="col-md-6 col-lg-3">
          <nuxt-img
            :src="elm.iconSrc"
            class="icon-svg icon-svg-md text-blue mb-3"
            alt="photo"
          />
          <h4>{{ elm.title }}</h4>
          <p class="mb-2">
            {{ elm.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { aboutSkills } from "~/data/features";
import { skills } from "~/data/skils";
</script>

<style lang="scss" scoped></style>
