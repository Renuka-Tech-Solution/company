<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
    <div class="col-lg-6 position-relative order-lg-2">
      <div
        class="shape bg-dot primary rellax w-16 h-20"
        data-rellax-speed="1"
        style="top: 3rem; left: 5.5rem"
      ></div>
      <div class="overlap-grid overlap-grid-2">
        <div class="item">
          <figure class="rounded shadow">
            <nuxt-img
              src="/assets/img/photos/about2.jpg"
              srcset="/assets/img/photos/about2@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <div class="item">
          <figure class="rounded shadow">
            <nuxt-img
              src="/assets/img/photos/about3.jpg"
              srcset="/assets/img/photos/about3@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
      </div>
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <nuxt-img
        src="/assets/img/icons/lineal/megaphone.svg"
        class="icon-svg icon-svg-md mb-4"
        alt="photo"
      />
      <h2 class="display-4 mb-3">Who Are We?</h2>
      <p class="lead fs-lg">
        We are a digital and branding company that believes in the power of
        creative strategy and along with great design.
      </p>
      <p class="mb-6">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
        et.
      </p>
      <div class="row gy-3 gx-xl-8">
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
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { checklistItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
