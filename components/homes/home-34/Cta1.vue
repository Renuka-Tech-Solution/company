<template>
  <section class="wrapper bg-light">
    <div class="container pt-lg-20 pb-18 pb-xxl-20 position-relative">
      <nuxt-img
        class="position-lg-absolute col-12 col-lg-12 mt-xxl-n3 mb-3 mb-md-10 mb-lg-0"
        src="/assets/img/demos/devices.png"
        srcset="/assets/img/demos/devices@2x.png 2x"
        alt="photo"
        style="top: 0; left: -23%"
      />
      <div
        class="row gx-lg-8 gx-xl-12 mt-lg-n16 mt-xl-n12 mt-xxl-0 align-items-xxl-center"
      >
        <div
          class="col-md-10 offset-md-1 col-lg-6 offset-lg-6 text-center text-lg-start"
        >
          <div class="ps-xl-1 ps-xxl-5 pe-xxl-10">
            <h2 class="fs-15 ls-xl text-uppercase text-muted mb-3">
              Fully Responsive
            </h2>
            <h3 class="display-3 mb-5">
              Responsive images & texts no matter the screen size.
            </h3>
            <p class="lead mb-8">
              Sandbox is responsive so the layout will adapt to different screen
              sizes that will make your website compatible with any device such
              as smart phones, tablets and computers.
            </p>
            <nuxt-img
              src="/assets/img/demos/qrcode.jpg"
              srcset="/assets/img/demos/qrcode@2x.jpg 2x"
              class="shadow-lg rounded"
              alt="photo"
            />
          </div>
          <!--/div -->
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
