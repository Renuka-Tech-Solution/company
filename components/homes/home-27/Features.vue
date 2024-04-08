<template>
  <div
    class="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12"
  >
    <div class="col-lg-6">
      <div class="row gx-md-5 gy-5">
        <div class="col-md-6">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/g14.jpg"
              srcset="/assets/img/photos/g14@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-md-6 align-self-end">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/g15.jpg"
              srcset="/assets/img/photos/g15@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-12">
          <figure class="rounded mx-md-5">
            <nuxt-img
              src="/assets/img/photos/g16.jpg"
              srcset="/assets/img/photos/g16@2x.jpg 2x"
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
      <h2 class="fs-15 text-uppercase text-muted mb-3">Who Are We?</h2>
      <h3 class="display-3 ls-sm mb-5">
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
          <ul class="icon-list bullet-primary mb-0">
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
          <ul class="icon-list bullet-primary mb-0">
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

  <div class="row gx-lg-8 gx-xl-12 gy-6 mb-15 mb-md-18">
    <div v-for="item in features12" :key="item.id" class="col-lg-4">
      <div class="d-flex flex-row">
        <div>
          <nuxt-img
            :src="item.icon"
            class="icon-svg icon-svg-md text-blue me-5"
            alt="photo"
          />
        </div>
        <div>
          <h4 class="fs-20 ls-sm">{{ item.title }}</h4>
          <p class="mb-2">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { checklistItems, features12 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
