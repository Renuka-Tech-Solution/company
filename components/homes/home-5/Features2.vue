<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center mb-14 mb-md-18">
    <div class="col-lg-6 position-relative order-lg-2">
      <div
        class="shape rounded bg-pale-green rellax d-block"
        data-rellax-speed="0"
        style="
          top: 50%;
          left: 50%;
          width: 50%;
          height: 60%;
          transform: translate(-50%, -50%);
          z-index: 0;
        "
      ></div>
      <div class="row gx-md-5 gy-5 position-relative">
        <div class="col-5">
          <nuxt-img
            class="img-fluid rounded shadow-lg my-5 d-flex ms-auto"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/sa9.jpg"
            srcset="/assets/img/photos/sa9@2x.jpg 2x"
            alt="photo"
          />
          <nuxt-img
            class="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/sa10.jpg"
            srcset="/assets/img/photos/sa10@2x.jpg 2x"
            alt="photo"
          />
        </div>
        <!-- /column -->
        <div class="col-7">
          <nuxt-img
            class="img-fluid rounded shadow-lg mb-5"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/sa11.jpg"
            srcset="/assets/img/photos/sa11@2x.jpg 2x"
            alt="photo"
          />
          <nuxt-img
            class="img-fluid rounded shadow-lg d-flex col-11"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/sa12.jpg"
            srcset="/assets/img/photos/sa12@2x.jpg 2x"
            alt="photo"
          />
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <h3 class="display-4 mb-5">
        We make spending stress free so you have the perfect control.
      </h3>
      <p class="mb-5">
        Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla
        non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros. Fusce dapibus, tellus ac cursus commodo.
      </p>
      <div class="row gy-3">
        <div class="col-xl-6">
          <ul class="icon-list bullet-bg bullet-soft-green mb-0">
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
          <ul class="icon-list bullet-bg bullet-soft-green mb-0">
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
</template>

<script setup>
import { checklistItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
