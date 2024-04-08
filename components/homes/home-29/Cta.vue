<template>
  <section
    class="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 mt-15"
    style="background-image: url(/assets/img/photos/bg23.png)"
  >
    <div class="overflow-hidden" style="z-index: 1">
      <div class="divider divider-alt text-light mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <g fill="currentColor">
            <polygon points="1440 100 0 15 0 0 1440 0 1440 100" />
          </g>
        </svg>
      </div>
    </div>
    <!-- /.overflow-hidden -->
    <div
      class="container pt-10 pt-lg-10 pt-md-13 pb-8 pb-md-10 text-center text-lg-start"
    >
      <div class="row gx-0 gy-10">
        <div
          class="col-md-10 offset-md-1 offset-lg-0 col-lg-6 col-xl-5 position-relative"
        >
          <nuxt-img
            src="/assets/img/svg/doodle2.svg"
            class="h-15 position-absolute d-none d-lg-block"
            style="bottom: 36%; right: -25%"
            alt="photo"
          />
          <nuxt-img
            src="/assets/img/svg/doodle6.svg"
            class="h-14 position-absolute d-none d-lg-block"
            data-delay="1800"
            style="top: -20%; left: -25%"
            alt="photo"
          />
          <h2 class="display-3 mb-4">
            Manage all your bills, accounts & budgets in
            <span class="text-gradient gradient-7">one place.</span>
          </h2>
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
        <div class="col-lg-6 ms-auto mt-lg-n15 mt-xl-n20">
          <figure>
            <nuxt-img
              src="/assets/img/photos/devices6.png"
              srcset="/assets/img/photos/devices6@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
