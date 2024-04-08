<template>
  <section class="wrapper bg-light">
    <div class="container pb-11 pb-md-14">
      <div class="row gx-lg-8 gx-xl-0 gy-10 align-items-center mb-14 mb-md-16">
        <div class="col-lg-6 position-relative">
          <div
            class="shape rounded bg-soft-primary rellax d-block"
            data-rellax-speed="0"
            style="
              top: 50%;
              left: 50%;
              width: 50%;
              height: 60%;
              transform: translate(-50%, -50%);
              z-index: 0;
            "
          ></div>
          <div class="row gx-md-5 gy-5 position-relative">
            <div class="col-6">
              <nuxt-img
                class="img-fluid rounded shadow-lg mb-5"
                src="/assets/img/demos/fe1.jpg"
                srcset="/assets/img/demos/fe1@2x.jpg 2x"
                alt="photo"
              />
              <nuxt-img
                class="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                src="/assets/img/demos/fe2.jpg"
                srcset="/assets/img/demos/fe2@2x.jpg 2x"
                alt="photo"
              />
            </div>
            <!-- /column -->
            <div class="col-6">
              <nuxt-img
                class="img-fluid rounded shadow-lg my-5"
                src="/assets/img/demos/fe3.jpg"
                srcset="/assets/img/demos/fe3@2x.jpg 2x"
                alt="photo"
              />
              <nuxt-img
                class="img-fluid rounded shadow-lg d-flex col-10"
                src="/assets/img/demos/fe4.jpg"
                srcset="/assets/img/demos/fe4@2x.jpg 2x"
                alt="photo"
              />
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!--/column -->
        <div class="col-lg-6 col-xl-5 col-xxl-4 offset-xl-1">
          <div
            v-for="item in featureItems2"
            :key="item.id"
            :id="item.id"
            class="d-flex flex-row mb-7"
          >
            <div>
              <div
                class="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4"
              >
                <i :class="item.iconClass"></i>
              </div>
            </div>
            <div>
              <h4 class="mb-1">{{ item.title }}</h4>
              <p class="mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-0 gy-10 align-items-center mb-16 mb-md-22">
        <div class="col-lg-6 offset-xl-1 position-relative order-lg-2">
          <div
            class="shape rounded bg-soft-primary rellax d-block"
            data-rellax-speed="0"
            style="
              top: 50%;
              left: 50%;
              width: 50%;
              height: 60%;
              transform: translate(-50%, -50%);
              z-index: 0;
            "
          ></div>
          <div class="row gx-md-5 gy-5 position-relative">
            <div class="col-5">
              <nuxt-img
                class="img-fluid rounded shadow-lg my-5 d-flex ms-auto"
                src="/assets/img/demos/fe5.jpg"
                srcset="/assets/img/demos/fe5@2x.jpg 2x"
                alt="photo"
              />
              <nuxt-img
                class="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                src="/assets/img/demos/fe6.jpg"
                srcset="/assets/img/demos/fe6@2x.jpg 2x"
                alt="photo"
              />
            </div>
            <!-- /column -->
            <div class="col-7">
              <nuxt-img
                class="img-fluid rounded shadow-lg mb-5"
                src="/assets/img/demos/fe7.jpg"
                srcset="/assets/img/demos/fe7@2x.jpg 2x"
                alt="photo"
              />
              <nuxt-img
                class="img-fluid rounded shadow-lg d-flex col-11"
                src="/assets/img/demos/fe8.jpg"
                srcset="/assets/img/demos/fe8@2x.jpg 2x"
                alt="photo"
              />
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!--/column -->
        <div class="col-lg-6 col-xl-5 col-xxl-4 offset-xxl-1">
          <div
            v-for="item in featureItems3"
            :key="item.id"
            :id="item.id"
            class="d-flex flex-row mb-7"
          >
            <div>
              <div
                class="icon btn btn-circle pe-none btn-soft-primary mt-1 me-4"
              >
                <i :class="item.iconClass"></i>
              </div>
            </div>
            <div>
              <h4 class="mb-1">{{ item.title }}</h4>
              <p class="mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
    <div class="overflow-hidden">
      <div class="divider text-soft-primary mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="currentColor"
            d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
          />
        </svg>
      </div>
    </div>
    <!-- /.overflow-hidden -->
  </section>
</template>

<script setup>
import { featureItems3, featureItems2 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
