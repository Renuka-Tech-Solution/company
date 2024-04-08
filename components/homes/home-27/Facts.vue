<template>
  <section
    class="wrapper bg-gray position-relative min-vh-60 d-lg-flex align-items-center"
  >
    <div
      class="col-lg-6 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100"
      style="background-image: url(/assets/img/photos/bg39.jpg)"
    >
      <div class="divider text-gray divider-v-start d-none d-lg-block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 1200">
          <g />
          <g>
            <g>
              <polygon
                fill="currentColor"
                points="6 0 0 0 0 1200 6 1200 54 0 6 0"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
    <!--/column -->
    <div class="container">
      <div class="row gx-0">
        <div class="col-lg-6">
          <div class="pt-13 pb-15 pb-md-17 py-lg-16 pe-lg-15">
            <h2 class="fs-16 text-uppercase text-muted mb-3">Our Solutions</h2>
            <h3 class="display-3 ls-sm mb-5">
              Just sit & relax while we take care of your business needs.
            </h3>
            <p class="mb-6">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus. Maecenas sed diam eget
              risus varius blandit sit amet non magna. Praesent commodo cursus
              magna.
            </p>
            <div class="row align-items-center counter-wrapper gy-6">
              <div class="col-md-6">
                <h3 class="counter counter-lg mb-1">
                  <CommonCounter
                    parentClass=""
                    :min="0"
                    :max="99.7"
                    :time="1500"
                  />%
                </h3>
                <h6 class="fs-17 ls-sm mb-1">Customer Satisfaction</h6>
                <span class="ratings five"></span>
              </div>
              <!--/column -->
              <div class="col-md-6">
                <h3 class="counter counter-lg mb-1">
                  <CommonCounter
                    parentClass=""
                    :min="0"
                    :max="4"
                    :time="800"
                  />x
                </h3>
                <h6 class="fs-17 ls-sm mb-1">New Visitors</h6>
                <span class="ratings five"></span>
              </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
