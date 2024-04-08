<template>
  <div class="container-card">
    <div
      class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 pb-15"
      style="background-image: url(/assets/img/photos/bg22.png)"
    >
      <div class="card-body py-14 px-0">
        <div class="container">
          <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
            <div class="col-lg-4 text-center text-lg-start">
              <h3 class="display-4 mb-3 pe-xxl-15">
                We are proud of our works
              </h3>
              <p class="lead fs-lg mb-0 pe-xxl-10">
                We bring solutions to make life easier for our customers.
              </p>
            </div>
            <!-- /column -->
            <div class="col-lg-8 mt-lg-2">
              <div
                class="row align-items-center counter-wrapper gy-6 text-center"
              >
                <div class="col-md-4">
                  <nuxt-img
                    src="/assets/img/icons/solid/target.svg"
                    class="icon-svg icon-svg-sm solid-duo text-grape-fuchsia mb-3"
                    alt="photo"
                  />
                  <h3 class="counter">
                    <CommonCounter
                      parentClass=""
                      :min="40"
                      :max="1000"
                      :time="1500"
                    />+
                  </h3>
                  <p class="mb-0">Completed Projects</p>
                </div>
                <!--/column -->
                <div class="col-md-4">
                  <nuxt-img
                    src="/assets/img/icons/solid/bar-chart.svg"
                    class="icon-svg icon-svg-sm solid-duo text-grape-fuchsia mb-3"
                    alt="photo"
                  />
                  <h3 class="counter">
                    <CommonCounter
                      parentClass=""
                      :min="0"
                      :max="4"
                      :time="1000"
                    />x
                  </h3>
                  <p class="mb-0">Revenue Growth</p>
                </div>
                <!--/column -->
                <div class="col-md-4">
                  <nuxt-img
                    src="/assets/img/icons/solid/employees.svg"
                    class="icon-svg icon-svg-sm solid-duo text-grape-fuchsia mb-3"
                    alt="photo"
                  />
                  <h3 class="counter">
                    <CommonCounter
                      parentClass=""
                      :min="0"
                      :max="99.7"
                      :time="1500"
                    />%
                  </h3>
                  <p class="mb-0">Customer Satisfaction</p>
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>
      <!--/.card-body -->
    </div>
    <!--/.card -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
