<template>
  <div class="projects-tiles">
    <div class="project grid grid-view">
      <div
        class="row gx-md-8 gx-xl-12 gy-10 gy-md-12 isotope"
        ref="isotopeContainer"
      >
        <div class="item col-md-6 mt-md-7 mt-lg-15">
          <div
            class="project-details d-flex justify-content-center align-self-end flex-column ps-0 pb-0"
          >
            <div class="post-header">
              <h2 class="display-4 mb-4 pe-xxl-15">
                Check out some of our recent projects below.
              </h2>
              <p class="lead fs-lg mb-0">
                We love to turn ideas into beautiful things.
              </p>
            </div>
            <!-- /.post-header -->
          </div>
          <!-- /.project-details -->
        </div>
        <!-- /.item -->
        <div
          v-for="(item, i) in projects2"
          :key="item.id"
          class="item px-7 py-1 col-md-6"
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
