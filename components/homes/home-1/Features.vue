<template>
  <section class="wrapper bg-light">
    <div class="container">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7 order-lg-2">
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
          <h2 class="fs-16 text-uppercase text-muted mb-3">Our Solutions</h2>
          <h3 class="display-4 mb-5">
            We make your spending stress-free for you to have the perfect
            control.
          </h3>
          <p class="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus.
          </p>
          <div class="row gy-3">
            <div class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 2)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
            </div>
            <!--/column -->
            <div class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                <li
                  v-for="(item, index) in checklistItems.slice(2, 4)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { checklistItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
