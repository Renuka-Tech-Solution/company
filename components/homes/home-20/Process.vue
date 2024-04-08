<template>
  <section class="wrapper bg-light">
    <div class="container py-15 py-md-17">
      <div class="row text-center">
        <div class="col-lg-10 mx-auto position-relative">
          <div class="position-relative">
            <div
              class="shape pale-pink rellax w-18 h-18"
              data-rellax-speed="1"
              style="top: 1rem; left: -4.2rem"
            >
              <nuxt-img
                src="/assets/img/svg/hex.svg"
                class="icon-svg w-100 h-100"
                alt="photo"
              />
            </div>
            <div
              class="shape pale-primary rellax w-18 h-18"
              data-rellax-speed="1"
              style="bottom: 2rem; right: -3.5rem"
            >
              <nuxt-img
                src="/assets/img/svg/circle.svg"
                class="icon-svg w-100 h-100"
                alt="photo"
              />
            </div>
            <CommonVideoPlayer />
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row text-center mt-12">
        <div class="col-lg-10 mx-auto">
          <h2 class="fs-16 text-uppercase text-muted mb-3">
            Our Working Process
          </h2>
          <h3 class="display-3 text-center px-xl-10 px-xxl-15 mb-10">
            Find out everything you need to know about creating a business
            process model
          </h3>
          <div class="row gx-lg-8 gx-xl-12 process-wrapper arrow text-center">
            <div
              v-for="(item, index) in steps"
              :key="index"
              :id="`step-${item.id}`"
              class="col-md-4"
            >
              <nuxt-img
                :src="item.icon"
                class="icon-svg icon-svg-sm solid-duo text-purple-pink mb-4"
                alt="photo"
              />
              <h3 class="fs-22">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
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
  </section>
</template>

<script setup>
const steps = ref([
  {
    id: 1,
    icon: "/assets/img/icons/solid/bulb.svg",
    title: "1. Collect Ideas",
    description:
      "Etiam porta malesuada magna mollis euismod consectetur leo elit.",
  },
  {
    id: 2,
    icon: "/assets/img/icons/solid/compare.svg",
    title: "2. Data Analysis",
    description:
      "Etiam porta malesuada magna mollis euismod consectetur leo elit.",
  },
  {
    id: 3,
    icon: "/assets/img/icons/solid/delivery-box.svg",
    title: "3. Finalize Product",
    description:
      "Etiam porta malesuada magna mollis euismod consectetur leo elit.",
  },
]);
</script>

<style lang="scss" scoped></style>
