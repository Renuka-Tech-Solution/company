<template>
  <div class="row text-center">
    <div class="col-md-10 col-lg-7 mx-auto position-relative">
      <nuxt-img
        src="/assets/img/svg/doodle5.svg"
        class="w-15 position-absolute d-none d-lg-block"
        data-delay="1800"
        style="bottom: -60%; right: 10%"
        alt="photo"
      />
      <nuxt-img
        src="/assets/img/svg/doodle6.svg"
        class="h-15 position-absolute d-none d-lg-block"
        data-delay="1800"
        style="top: -40%; left: -5%"
        alt="photo"
      />
      <h2 class="fs-16 text-uppercase text-muted mb-3">How It Works</h2>
      <h3 class="display-3 mb-8 px-xl-6">
        Download the app, create your profile and
        <span class="text-gradient gradient-7">voilà</span>, you're all set!
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row">
    <div class="col-xxl-11 mx-auto">
      <div class="row gy-10 gy-lg-0 text-center d-flex align-items-center">
        <div class="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
          <figure class="mx-auto">
            <nuxt-img
              src="/assets/img/photos/devices4.png"
              srcset="/assets/img/photos/devices4@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!-- /column -->
        <div class="w-100 d-lg-none"></div>
        <div class="col-md-6 col-lg-4 order-lg-first">
          <div class="mb-8">
            <span class="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7"
              >01</span
            >
            <h4 class="fs-20">Download Application</h4>
            <p class="mb-0 px-xl-7">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus.
            </p>
          </div>
          <!-- /div -->
          <div>
            <span class="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7"
              >02</span
            >
            <h4 class="fs-20">Quick Registration</h4>
            <p class="mb-0 px-xl-7">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus.
            </p>
          </div>
          <!-- /div -->
        </div>
        <!-- /column -->
        <div class="col-md-6 col-lg-4">
          <div class="mb-8">
            <span class="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7"
              >03</span
            >
            <h4 class="fs-20">Track Your Spending</h4>
            <p class="mb-0 px-xl-7">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus.
            </p>
          </div>
          <!-- /div -->
          <div>
            <span class="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7"
              >04</span
            >
            <h4 class="fs-20">Have Total Control</h4>
            <p class="mb-0 px-xl-7">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus.
            </p>
          </div>
          <!-- /div -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
</template>

<script setup></script>

<style lang="scss" scoped></style>
