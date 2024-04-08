<template>
  <section class="wrapper bg-light">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-6 mb-10">
        <div class="col-lg-6 order-lg-2">
          <ul class="progress-list">
            <li v-for="item in progressItems" :key="item.id">
              <p>{{ item.title }}</p>
              <div :class="['progressbar', 'line', item.colorClass]">
                <CommonLineProgressbar :max="item.max" />
                <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
              </div>
            </li>
          </ul>
          <!-- /.progress-list -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-4 mb-3">What I Do?</h2>
          <p class="lead fs-20 mb-5">
            Duis mollis est commodo luctus nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare
            vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo
            cursus magna, vel scelerisque nisl.
          </p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-6 text-center">
        <div
          v-for="service in designServices"
          :key="service.id"
          class="col-md-6 col-lg-3"
        >
          <nuxt-img
            :src="service.iconSrc"
            class="icon-svg icon-svg-md mb-4"
            :class="service.iconColorClass"
            alt="photo"
          />
          <h4>{{ service.title }}</h4>
          <p class="mb-2">{{ service.description }}</p>
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
import { designServices, progressItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
