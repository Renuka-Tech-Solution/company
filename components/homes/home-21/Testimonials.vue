<template>
  <section class="wrapper bg-gradient-primary">
    <div class="container pt-12 pt-lg-8 pb-14 pb-md-17">
      <div class="row text-center">
        <div class="col-lg-8 offset-lg-2">
          <h2 class="fs-16 text-uppercase text-primary mb-3">
            Happy Customers
          </h2>
          <h3 class="display-3 mb-10 px-xxl-10">
            Don't take our word for it. See what customers are saying about us.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="grid">
        <div class="row isotope gy-6" ref="isotopeContainer">
          <div
            v-for="(elm, i) in testimonials4"
            :key="i"
            class="item col-md-6 col-xl-4"
          >
            <div class="card">
              <div class="card-body">
                <span class="ratings five mb-3"></span>
                <blockquote class="icon mb-0">
                  <p>
                    {{ elm.quote }}
                  </p>
                  <div class="blockquote-details">
                    <nuxt-img
                      class="rounded-circle w-12"
                      :src="elm.avatarSrc"
                      alt="photo"
                    />
                    <div class="info">
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
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid-view -->
    </div>
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
