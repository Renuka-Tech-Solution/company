<template>
  <div
    class="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12"
  >
    <div class="col-lg-6">
      <div class="row gx-md-5 gy-5">
        <div class="col-md-6">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/g12.jpg"
              srcset="/assets/img/photos/g12@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-md-6 align-self-end">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/g13.jpg"
              srcset="/assets/img/photos/g13@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-12">
          <figure class="rounded mx-md-5">
            <nuxt-img
              src="/assets/img/photos/g11.jpg"
              srcset="/assets/img/photos/g11@2x.jpg 2x"
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
      <h2 class="fs-16 text-uppercase text-gradient gradient-1 mb-3">
        Who Are We?
      </h2>
      <h3 class="display-4 mb-4">
        Company that believes in the power of creative strategy.
      </h3>
      <p class="mb-6">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
        et. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Aenean lacinia bibendum nulla sed.
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
  <div class="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-17">
    <div v-for="(elm, i) in features4" :key="i" class="col-lg-4">
      <div class="d-flex flex-row">
        <div>
          <div class="icon btn btn-circle pe-none btn-soft-primary me-4">
            <span class="number fs-18">{{ i + 1 }}</span>
          </div>
        </div>
        <div>
          <h4>{{ elm.title }}</h4>
          <p class="mb-2">{{ elm.description }}</p>
        </div>
      </div>
    </div>

    <!--/column -->
  </div>
</template>

<script setup>
import { checklistItems, features4 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
