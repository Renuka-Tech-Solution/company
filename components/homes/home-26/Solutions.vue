<template>
  <div class="row gx-3 gy-10 gy-lg-0 mb-15 mb-md-17 align-items-center">
    <div class="col-lg-5 mx-auto order-lg-2">
      <figure>
        <nuxt-img
          class="w-auto"
          src="/assets/img/illustrations/3d5.png"
          srcset="/assets/img/illustrations/3d5@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-5 me-auto">
      <h2 class="fs-16 text-uppercase text-grape mb-3">Our Solutions</h2>
      <h3 class="display-4 mb-5 pe-xxl-5">
        Just sit & relax while we take care of your business needs.
      </h3>
      <p class="mb-6">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Praesent commodo cursus. Maecenas sed diam eget risus varius
        blandit sit amet non magna. Praesent commodo cursus magna.
      </p>
      <div class="row align-items-center counter-wrapper gy-6">
        <div class="col-md-6">
          <h3 class="counter counter-lg mb-1">
            <CommonCounter parentClass="" :min="0" :max="99.7" :time="1500" />%
          </h3>
          <h6 class="fs-17 mb-1">Customer Satisfaction</h6>
          <span class="ratings five"></span>
        </div>
        <!--/column -->
        <div class="col-md-6">
          <h3 class="counter counter-lg mb-1">
            <CommonCounter parentClass="" :min="0" :max="4" :time="1000" />x
          </h3>
          <h6 class="fs-17 mb-1">New Visitors</h6>
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
