<template>
  <section class="wrapper bg-light">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row align-items-center mb-7">
        <div class="col-md-8 col-lg-8 col-xl-7 col-xxl-6 pe-lg-17">
          <h2 class="display-4 mb-3">Recent Projects</h2>
          <p class="lead fs-lg">We love to turn ideas into beautiful things.</p>
        </div>
        <!--/column -->
      </div>

      <!--/.row -->
      <div class="projects-tiles">
        <div class="project grid grid-view">
          <div ref="isotopeContainer" class="d-flex">
            <div
              v-for="(item, i) in projects2"
              :key="item.id"
              :class="`item p-4 col-md-6 ${i == 1 ? 'mt-md-17' : ''} `"
            >
              <figure class="lift rounded mb-6">
                <nuxt-link to="/single-project3">
                  <nuxt-img :src="item.image.src" alt="photo" />
                </nuxt-link>
              </figure>
              <div :class="['post-category', item.categoryClass]">
                {{ item.category }}
              </div>
              <h3 class="post-title">{{ item.title }}</h3>
            </div>
            <!-- /.item -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.project -->
      </div>
      <!-- /.projects-tiles -->
    </div>

    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import imagesLoaded from "imagesloaded";
import { projects2 } from "~/data/projects";
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
