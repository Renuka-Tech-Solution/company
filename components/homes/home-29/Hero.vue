<template>
  <section
    class="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600"
    style="background-image: url(/assets/img/photos/bg23.png)"
  >
    <div class="container pt-16 pt-md-18 pb-9">
      <div class="row gx-0 gy-10 align-items-center text-center text-lg-start">
        <div class="col-lg-6 col-xxl-5 position-relative">
          <nuxt-img
            src="/assets/img/svg/doodle1.svg"
            class="h-9 position-absolute d-none d-lg-block"
            style="top: -9%; left: -6%"
            alt="photo"
          />
          <nuxt-img
            src="/assets/img/svg/doodle2.svg"
            class="h-15 position-absolute d-none d-lg-block"
            style="bottom: 9%; right: -22%"
            alt="photo"
          />
          <h1 class="display-1 fs-50 mb-4">
            Manage all your bills, accounts and budgets in
            <span class="text-gradient gradient-7">one place.</span>
          </h1>
          <p class="lead fs-24 lh-sm mb-7">
            Sandbox is available to download from both App Store and Google Play
            Store.
          </p>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <span
              ><a href="#" class="me-2"
                ><nuxt-img
                  src="/assets/img/photos/button-appstore.svg"
                  class="h-11 rounded-xl"
                  alt="photo" /></a
            ></span>
            <span
              ><a href="#"
                ><nuxt-img
                  src="/assets/img/photos/button-google-play.svg"
                  class="h-11 rounded-xl"
                  alt="photo" /></a
            ></span>
          </div>
        </div>
        <!-- /column -->
        <div class="col-lg-6 ms-auto mb-n20 mb-xxl-n22">
          <figure>
            <nuxt-img
              src="/assets/img/photos/devices3.png"
              srcset="/assets/img/photos/devices3@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="overflow-hidden" style="z-index: 1">
      <div class="divider text-light mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <g fill="currentColor">
            <polygon points="1440 100 0 100 0 85 1440 0 1440 100" />
          </g>
        </svg>
      </div>
    </div>
    <!-- /.overflow-hidden -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
