<template>
  <div class="row gx-lg-0 gy-10 align-items-center text-inverse">
    <div class="col-lg-6">
      <figure>
        <nuxt-img
          class="img-auto"
          src="/assets/img/illustrations/ui4.png"
          srcset="/assets/img/illustrations/ui4@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-5 ms-lg-auto">
      <h2 class="display-2 mb-3 text-white">Our Solutions</h2>
      <p class="lead fs-lg pe-lg-5">
        We carefully consider our solutions to support each and every stage of
        your growth.
      </p>
      <p class="mb-6">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Praesent commodo cursus maecenas sed.
      </p>
      <div class="row align-items-center counter-wrapper gy-6">
        <div class="col-md-6">
          <h3 class="counter counter-lg mb-1 text-white">
            <CommonCounter parentClass="" :min="0" :max="99.7" :time="1500" />%
          </h3>
          <h5 class="mb-1 text-white">Customer Satisfaction</h5>
          <span class="ratings five text-red"></span>
        </div>
        <!--/column -->
        <div class="col-md-6">
          <h3 class="counter counter-lg mb-1 text-white">
            <CommonCounter parentClass="" :min="0" :max="4" :time="700" />x
          </h3>
          <h5 class="mb-1 text-white">New Visitors</h5>
          <span class="ratings five"></span>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
