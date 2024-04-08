<template>
  <div class="row gy-10 gx-lg-8 gx-xl-12 align-items-center">
    <div class="col-lg-7 position-relative">
      <div class="row gx-md-5 gy-5">
        <div class="col-md-6">
          <figure
            class="rounded mt-md-10 position-relative"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <nuxt-img
              src="/assets/img/photos/g5.jpg"
              srcset="/assets/img/photos/g5@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-md-6">
          <div class="row gx-md-5 gy-5">
            <div class="col-md-12 order-md-2">
              <figure
                class="rounded"
                data-aos="fade"
                data-aos-once="true"
                data-aos-delay="800"
              >
                <nuxt-img
                  src="/assets/img/photos/g6.jpg"
                  srcset="/assets/img/photos/g6@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-10">
              <div
                class="card bg-pale-primary text-center"
                data-aos="fade"
                data-aos-once="true"
                data-aos-delay="800"
              >
                <div class="card-body py-11 counter-wrapper">
                  <h3 class="counter text-nowrap">
                    <CommonCounter
                      parentClass=""
                      :min="50"
                      :max="5000"
                      :time="1500"
                    />+
                  </h3>
                  <p class="mb-0">Satisfied Customers</p>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.card -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
    <div class="col-lg-5">
      <h2 class="display-4 mb-3">Let’s Talk</h2>
      <p class="lead fs-lg">
        Let’s make something great together. We are
        <span class="underline">trusted by</span> over 5000+ clients. Join them
        by using our services and grow your business.
      </p>
      <p>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac
        cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
        sit amet risus.
      </p>
      <nuxt-link to="/signup" class="btn btn-primary rounded-pill mt-2"
        >Join Us</nuxt-link
      >
    </div>
    <!--/column -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
