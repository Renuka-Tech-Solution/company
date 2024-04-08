<template>
  <div class="row text-center mb-7">
    <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
      <h2 class="fs-16 text-uppercase text-muted mb-3">Join Our Community</h2>
      <h3 class="display-2 ls-sm">
        We are
        <span class="underline-3 style-1 primary"><em>trusted</em></span> by
        over 50000+ clients. Join them now and grow your business.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row mb-8">
    <div class="col-md-10 col-lg-9 col-xl-7 mx-auto">
      <div class="row align-items-center counter-wrapper gy-4 gy-md-0">
        <div class="col-md-4 text-center">
          <h3 class="counter counter-lg text-primary">
            <CommonCounter parentClass="" :min="0" :max="1000" :time="1500" />+
          </h3>
          <p>Completed Projects</p>
        </div>
        <!--/column -->
        <div class="col-md-4 text-center">
          <h3 class="counter counter-lg text-primary">
            <CommonCounter parentClass="" :min="0" :max="50" :time="1200" />K+
          </h3>
          <p>Happy Customers</p>
        </div>
        <!--/column -->
        <div class="col-md-4 text-center">
          <h3 class="counter counter-lg text-primary">
            <CommonCounter parentClass="" :min="0" :max="4" :time="700" />x
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
  <div class="row position-relative" style="z-index: 1">
    <div class="col-lg-10 col-xl-9 mx-auto mt-11 mb-sm-n20 mb-md-n22">
      <figure>
        <nuxt-img
          class="img-fluid"
          src="/assets/img/illustrations/i32.png"
          srcset="/assets/img/illustrations/i32@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!-- /column -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
