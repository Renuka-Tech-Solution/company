<template>
  <div class="card bg-soft-primary rounded-4 mt-2 mb-13 mb-md-17">
    <div class="card-body p-md-10 py-xl-11 px-xl-15">
      <div class="row gx-lg-8 gx-xl-0 gy-10 align-items-center">
        <div class="col-lg-6 order-lg-2 d-flex position-relative">
          <nuxt-img
            class="img-fluid ms-auto mx-auto me-lg-8"
            src="/assets/img/photos/co3.png"
            srcset="/assets/img/photos/co3@2x.png 2x"
            alt="photo"
          />
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="">
            <div
              class="card shadow-lg position-absolute"
              style="bottom: 10%; right: -3%"
            >
              <div class="card-body py-4 px-5">
                <div class="d-flex flex-row align-items-center">
                  <div>
                    <div
                      class="icon btn btn-circle btn-md btn-soft-primary pe-none mx-auto me-3"
                    >
                      <i class="uil uil-users-alt"></i>
                    </div>
                  </div>
                  <div>
                    <h3 class="counter mb-0 text-nowrap">
                      <CommonCounter
                        parentClass=""
                        :min="30"
                        :max="25000"
                        :time="1500"
                      />+
                    </h3>
                    <p class="fs-14 lh-sm mb-0 text-nowrap">Happy Clients</p>
                  </div>
                </div>
              </div>
              <!--/.card-body -->
            </div>
            <!--/.card -->
          </div>
          <!--/div -->
        </div>
        <!--/column -->
        <div class="col-lg-6 text-center text-lg-start">
          <h1
            class="display-2 mb-5"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
          >
            Crafting project specific solutions with expertise.
          </h1>
          <p
            class="lead fs-lg lh-sm mb-7 pe-xl-10"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          >
            We're a company that focuses on establishing long-term relationships
            with customers.
          </p>
          <div
            class="d-flex justify-content-center justify-content-lg-start"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <span
              ><nuxt-link
                to="/projects"
                class="btn btn-lg btn-primary rounded-pill me-2"
                >Explore Now</nuxt-link
              ></span
            >
            <span
              ><nuxt-link
                to="/contact"
                class="btn btn-lg btn-outline-primary rounded-pill"
                >Contact Us</nuxt-link
              ></span
            >
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/.card-body -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
