<template>
  <section class="wrapper overflow-hidden">
    <div class="container pt-16 pt-md-18 text-center position-relative">
      <div
        class="position-absolute"
        style="top: -7%; left: 50%; transform: translateX(-50%)"
      >
        <nuxt-img src="/assets/img/photos/blurry.png" alt="photo" />
      </div>
      <div class="row position-relative mb-9 mb-md-11">
        <div class="col-lg-10 col-xl-9 col-xxl-7 mx-auto">
          <div>
            <nuxt-img
              src="/assets/img/demos/icon-grape.png"
              srcset="/assets/img/demos/icon-grape@2x.png 2x"
              alt="photo"
            />
            <h1 class="display-1 fs-64 mt-5 mb-5">
              Think unique and make a difference with Sandbox.
            </h1>
            <p class="lead fs-24 mb-8 px-lg-12 px-xl-14 px-xxl-10">
              We are trusted by thousands of clients. Join them now and easily
              create your stunning website in no time.
            </p>
          </div>
          <div class="d-flex justify-content-center">
            <span
              ><a
                href="https://themeforest.net/item/sandbox-modern-multipurpose-vue-nuxtjs-3-template/51057440"
                target="_blank"
                class="btn btn-lg btn-primary btn-icon btn-icon-end rounded-xl"
                >Buy Sandbox <i class="uil uil-arrow-up-right"></i></a
            ></span>
          </div>
          <!-- /div -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="container text-center">
      <nuxt-img
        class="img-fluid position-relative"
        style="z-index: 2"
        src="/assets/img/demos/f1.png"
        srcset="/assets/img/demos/f1@2x.png 2x"
        alt="photo"
      />
    </div>
  </section>
  <CommonScrolltop />
</template>

<script setup></script>

<style lang="scss" scoped></style>
