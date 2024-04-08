<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-12 align-items-center">
    <div class="col-lg-6 order-lg-2">
      <div class="row gx-md-5 gy-5 align-items-center">
        <div class="col-md-6">
          <div class="row gx-md-5 gy-5">
            <div
              class="col-md-10 offset-md-2"
              data-aos="fade"
              data-aos-once="true"
              data-aos-delay="300"
            >
              <figure class="rounded">
                <nuxt-img
                  src="/assets/img/photos/ab1.jpg"
                  srcset="/assets/img/photos/ab1@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div
              class="col-md-12"
              data-aos="fade"
              data-aos-once="true"
              data-aos-delay="900"
            >
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
        <div
          class="col-md-6"
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay="600"
        >
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
