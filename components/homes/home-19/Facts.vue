<template>
  <section class="wrapper bg-gray">
    <div class="container py-15 py-md-17 pb-md-19">
      <div class="row align-items-center gy-8 mb-13">
        <div class="col-lg-7 text-center text-lg-start">
          <h2 class="fs-16 text-uppercase text-muted mb-3">
            Save Time and Money
          </h2>
          <h3 class="display-3 mb-0 pe-xl-10 pe-xxl-15">
            Save your time and money by choosing our
            <span class="underline-3 style-2 yellow">professional</span> team.
          </h3>
        </div>
        <!-- /column -->
        <div class="col-lg-5">
          <div class="row gy-6 text-center">
            <div
              class="col-lg-5"
              v-for="(item, index) in progressBars"
              :key="index"
            >
              <div class="col-md-6">
                <div class="progressbar semi-circle" :class="item.color">
                  <CommonCircleProgressbar :max="item.value" />
                </div>
                <h4 class="mb-0">{{ item.label }}</h4>
              </div>
              <!-- /column -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
const progressBars = [
  {
    value: 95,
    color: "fuchsia",
    label: "Customer Satisfaction",
  },
  {
    value: 80,
    color: "orange",
    label: "Increased Revenue",
  },
];
</script>

<style lang="scss" scoped></style>
