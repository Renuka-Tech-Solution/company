<template>
  <section class="wrapper bg-light">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div
          class="col-md-11 col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center position-relative"
        >
          <nuxt-img
            src="/assets/img/svg/doodle1.svg"
            class="h-9 position-absolute d-none d-lg-block"
            style="top: 2%; left: 9%"
            alt="photo"
          />
          <nuxt-img
            src="/assets/img/svg/doodle10.svg"
            class="h-7 position-absolute d-none d-lg-block"
            style="top: -45%; left: -17%"
            alt="photo"
          />
          <nuxt-img
            src="/assets/img/svg/doodle11.svg"
            class="h-13 position-absolute d-none d-lg-block"
            style="top: -40%; right: -15%"
            alt="photo"
          />
          <h2 class="fs-16 text-uppercase text-muted mb-3">Happy Customers</h2>
          <h3 class="display-3 mb-11 px-xl-10 px-xxl-13">
            Don't take our word for it. See what
            <span class="text-gradient gradient-7">customers</span> are saying
            about us.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="grid">
        <div ref="isotopeContainer" class="row isotope gy-6">
          <div
            v-for="(elm, i) in testimonials4"
            :key="i"
            class="item col-md-6 col-xl-4"
          >
            <div :class="`card shadow-none rounded-xl ${elm.bg}`">
              <div class="card-body">
                <blockquote class="icon mb-0">
                  <p>
                    {{ elm.quote }}
                  </p>
                  <div class="blockquote-details">
                    <div class="info ps-0">
                      <h5 class="mb-1">{{ elm.name }}</h5>
                      <p class="mb-0">{{ elm.role }}</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!--/column -->

          <!--/column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid-view -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import imagesLoaded from "imagesloaded";
import { testimonials4 } from "~/data/testimonials";
const isotopeContainer = ref();
const isotope = ref();
const initIsotop = async () => {
  const Isotope = (await import("isotope-layout")).default;
  // Initialize Isotope in the mounted hook
  isotope.value = new Isotope(isotopeContainer.value, {
    itemSelector: ".item",
    layoutMode: "masonry", // or 'fitRows', depending on your layout needs
  });
  imagesLoaded(isotopeContainer.value).on(
    "progress",
    function (instance, image) {
      // Trigger Isotope layout
      isotope.value.layout();
    }
  );
};

onMounted(() => {
  initIsotop();
});
</script>

<style lang="scss" scoped></style>
