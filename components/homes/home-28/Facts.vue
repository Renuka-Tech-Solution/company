<template>
  <section class="wrapper bg-gradient-blend">
    <div class="container pt-15 pt-md-17 pb-12 pb-md-18">
      <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
        <div class="col-lg-4 text-center text-lg-start">
          <h3 class="display-3 mb-3 pe-xxl-15">
            I am <em>proud</em> of my results
          </h3>
          <p class="lead fs-lg mb-0 pe-xxl-10">
            I bring solutions to make life easier for our customers.
          </p>
        </div>
        <!-- /column -->
        <div class="col-lg-8 mt-lg-2">
          <div class="row align-items-center counter-wrapper gy-6 text-center">
            <div class="col-md-4">
              <nuxt-img
                src="/assets/img/icons/solid/target.svg"
                class="icon-svg icon-svg-sm solid-duo text-purple-aqua mb-3"
                alt="photo"
              />
              <h3 class="counter">
                <CommonCounter
                  parentClass=""
                  :min="20"
                  :max="1000"
                  :time="1500"
                />+
              </h3>
              <p class="mb-0">Completed Projects</p>
            </div>
            <!--/column -->
            <div class="col-md-4">
              <nuxt-img
                src="/assets/img/icons/solid/medal.svg"
                class="icon-svg icon-svg-sm solid-duo text-purple-aqua mb-3"
                alt="photo"
              />
              <h3 class="counter">
                <CommonCounter parentClass="" :min="0" :max="12" :time="1200" />
              </h3>
              <p class="mb-0">Awards Won</p>
            </div>
            <!--/column -->
            <div class="col-md-4">
              <nuxt-img
                src="/assets/img/icons/solid/employees.svg"
                class="icon-svg icon-svg-sm solid-duo text-purple-aqua mb-3"
                alt="photo"
              />
              <h3 class="counter">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="99.7"
                  :time="1200"
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
    </div>
    <div class="overflow-hidden">
      <div class="divider text-light mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
          <path
            fill="currentColor"
            d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
