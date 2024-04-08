<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11">
    <div class="col-lg-4 text-center text-lg-start">
      <h2 class="fs-16 text-uppercase text-primary mb-3">Company Facts</h2>
      <h3 class="display-3 mb-4 pe-xxl-5">We are proud of our design team</h3>
      <p class="mb-0 pe-xxl-11">
        Just sit back and relax while we take care of your business needs for
        you.
      </p>
    </div>
    <!-- /column -->
    <div class="col-lg-8 mt-lg-2">
      <div class="row align-items-center counter-wrapper gy-6 text-center">
        <div class="col-md-4">
          <div class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4">
            <i class="uil uil-presentation-check"></i>
          </div>
          <h3 class="counter">
            <CommonCounter parentClass="" :min="50" :max="1000" :time="1500" />+
          </h3>
          <p>Completed Projects</p>
        </div>
        <!--/column -->
        <div class="col-md-4">
          <div class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4">
            <i class="uil uil-user-check"></i>
          </div>
          <h3 class="counter">
            <CommonCounter parentClass="" :min="0" :max="50" :time="1200" />K+
          </h3>
          <p>Happy Customers</p>
        </div>
        <!--/column -->
        <div class="col-md-4">
          <div class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4">
            <i class="uil uil-trophy"></i>
          </div>
          <h3 class="counter">
            <CommonCounter parentClass="" :min="0" :max="20" :time="1400" />+
          </h3>
          <p>Awards Won</p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /column -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
