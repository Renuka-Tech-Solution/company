<template>
  <div class="row gx-lg-8 gx-xl-12 gy-12 align-items-center mb-10 mb-md-13">
    <div class="col-lg-6 position-relative">
      <div
        class="btn btn-circle btn-primary pe-none position-absolute counter-wrapper flex-column d-none d-md-flex"
        style="
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 170px;
          height: 170px;
        "
      >
        <h3 class="text-white mb-1 mt-n2">
          <span class="counter counter-lg"
            ><CommonCounter
              parentClass=""
              :min="0"
              :max="20"
              :time="1500"
            />+</span
          >
        </h3>
        <p>Year Experience</p>
      </div>
      <div class="row gx-md-5 gy-5 align-items-center">
        <div class="col-md-6">
          <div class="row gx-md-5 gy-5">
            <div class="col-md-10 offset-md-2">
              <figure class="rounded">
                <nuxt-img
                  src="/assets/img/photos/ab1.jpg"
                  srcset="/assets/img/photos/ab1@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-12">
              <figure class="rounded">
                <nuxt-img
                  src="/assets/img/photos/ab2.jpg"
                  srcset="/assets/img/photos/ab2@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-md-6">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/ab3.jpg"
              srcset="/assets/img/photos/ab3@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <h3 class="display-4 mb-5">
        We bring solutions to make life easier for our customers.
      </h3>
      <p class="mb-7">
        Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla
        sed consectetur. Integer posuere erat a ante venenatis dapibus posuere
        velit aliquet. Vestibulum id ligula porta felis euismod semper.
        Vestibulum id ligula.
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
</template>

<script setup>
import { checklistItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
