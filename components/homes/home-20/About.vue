<template>
  <section class="wrapper bg-light">
    <div class="container pt-15 pt-md-17">
      <div
        class="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-15 mb-md-17"
      >
        <div class="col-lg-6 position-relative">
          <div
            @click="
              () => {
                modalOpen = true;
              }
            "
            class="btn btn-circle btn-white btn-play ripple mx-auto mb-5 position-absolute curspr-pointer"
            style="
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 3;
            "
          >
            <i class="icn-caret-right"></i>
          </div>
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/about12.jpg"
              srcset="/assets/img/photos/about12@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="fs-16 text-uppercase text-muted mb-3">
            What Makes Us Different?
          </h2>
          <h3 class="display-3 mb-8">
            We make spending stress free so you have the perfect control.
          </h3>
          <div class="row gy-6">
            <div v-for="item in features" :key="item.title" class="col-md-6">
              <div class="d-flex flex-row">
                <div>
                  <nuxt-img
                    :src="item.icon"
                    class="icon-svg icon-svg-xs solid-mono"
                    :class="item.textColor"
                    alt="photo"
                  />
                </div>
                <div>
                  <h4 class="mb-1">{{ item.title }}</h4>
                  <p class="mb-0">{{ item.description }}</p>
                </div>
              </div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row text-center mb-7">
        <div class="col-lg-11 col-xl-10 col-xxl-9 mx-auto">
          <h2 class="fs-16 text-uppercase text-muted mb-3">
            Join Our Community
          </h2>
          <h3 class="display-3 px-lg-12 px-xxl-14">
            We are trusted by over 5000+ clients. Join them now and grow your
            business.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row mb-6">
        <div class="col-md-10 col-lg-9 col-xl-7 mx-auto">
          <div class="row align-items-center counter-wrapper gy-4 gy-md-0">
            <div class="col-md-4 text-center">
              <h3 class="counter counter-lg text-primary">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="1000"
                  :time="1500"
                />+
              </h3>
              <p>Completed Projects</p>
            </div>
            <!--/column -->
            <div class="col-md-4 text-center">
              <h3 class="counter counter-lg text-primary">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="50"
                  :time="1200"
                />K+
              </h3>
              <p>Happy Customers</p>
            </div>
            <!--/column -->
            <div class="col-md-4 text-center">
              <h3 class="counter counter-lg text-primary">
                <CommonCounter parentClass="" :min="0" :max="4" :time="1000" />x
              </h3>
              <p>Revenue Growth</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <figure>
        <nuxt-img
          src="/assets/img/photos/about26.png"
          srcset="/assets/img/photos/about26@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!-- /.container -->
  </section>
  <CommonModalVideo :modalOpen="modalOpen" @modalClose="modalClose" />
</template>

<script setup>
import { features } from "~/data/features";

const modalOpen = ref(false);
const modalClose = () => {
  modalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
