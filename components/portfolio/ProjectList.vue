<template>
  <section class="wrapper bg-light">
    <div class="container py-4 py-md-6 py-lg-10">
      <div class="row mt-6">
        <div class="col-xl-10 mx-auto">
          <div class="projects-tiles">
            <div class="project grid grid-view">
              <div class="row g-6 isotope" ref="isotopeContainer1">
                <div class="item col-md-6">
                  <div class="project-details d-flex justify-content-center flex-column">
                    <div class="post-header">
                      <!-- <div class="post-category text-red mb-3">Ideas</div> -->
                      <h2 class="post-title display-1 mb-3">Bloom-s</h2>
                    </div>
                    <!-- /.post-header -->
                    <div class="post-content">
                      <nuxt-link
                        to="https://bloom-s.de/"
                        class="display-6 hover link-black"
                        >Visit Website</nuxt-link
                      >
                    </div>
                    <!-- /.post-content -->
                  </div>
                  <!-- /.project-details -->
                </div>
                <!-- /.item -->
                <div
                  v-for="(item, index) in ieadsProjects"
                  :key="item.id"
                  class="item col-md-6"
                >
                  <figure
                    class="itooltip itooltip-light hover-scale rounded"
                    v-tippy="{
                      content: `<h5 class='mb-0 py-2 px-2 bg-white rounded'>${item.title}</h5>`,
                      allowHTML: true,
                      followCursor: true,
                    }"
                  >
                    <div
                      @click="() => setActiveLightBox(true, index, ieadsProjects)"
                      class="cursor-pointer"
                    >
                      <nuxt-img :src="item.imageUrl" alt="photo" />
                    </div>
                  </figure>
                </div>
                <!-- /.item -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /.project -->
            <div class="project grid grid-view">
              <div class="row g-6 isotope" ref="isotopeContainer2">
                <div class="item col-md-6">
                  <div class="project-details d-flex justify-content-center flex-column">
                    <div class="post-header">
                      <!-- <div class="post-category text-yellow mb-3"></div> -->
                      <h2 class="post-title display-1 mb-3">Farola Learning</h2>
                    </div>
                    <!-- /.post-header -->
                    <div class="post-content">
                      <nuxt-link to="/single-project" class="hover link-yellow display-6"
                        >Visit Website</nuxt-link
                      >
                    </div>
                    <!-- /.post-content -->
                  </div>
                  <!-- /.project-details -->
                </div>
                <!-- /.item -->
                <div
                  v-for="(item, index) in conceptProjects"
                  :key="item.id"
                  class="item col-md-6"
                >
                  <figure
                    class="itooltip itooltip-light hover-scale rounded"
                    v-tippy="{
                      content: `<h5 class='mb-0 py-2 px-2 bg-white rounded'>${item.title}</h5>`,
                      allowHTML: true,
                      followCursor: true,
                    }"
                  >
                    <div
                      @click="() => setActiveLightBox(true, index, conceptProjects)"
                      class="cursor-pointer"
                    >
                      <nuxt-img :src="item.imageUrl" alt="photo" />
                    </div>
                  </figure>
                </div>
                <!-- /.item -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /.project -->
            <div class="project grid grid-view">
              <div class="row g-6 isotope" ref="isotopeContainer3">
                <div class="item col-md-6">
                  <div class="project-details d-flex justify-content-center flex-column">
                    <div class="post-header">
                      <!-- <div class="post-category text-green mb-3">
                        Still Life
                      </div> -->
                      <h2 class="post-title mb-3 display-1">Lohatk</h2>
                    </div>
                    <!-- /.post-header -->
                    <div class="post-content">
                      <nuxt-link to="/single-project" class="hover link-green display-6"
                        >Visit website</nuxt-link
                      >
                    </div>
                    <!-- /.post-content -->
                  </div>
                  <!-- /.project-details -->
                </div>
                <!-- /.item -->
                <div
                  v-for="(item, index) in stillLifeProjects"
                  :key="item.id"
                  class="item col-md-6"
                >
                  <figure
                    class="itooltip itooltip-light hover-scale rounded"
                    v-tippy="{
                      content: `<h5 class='mb-0 py-2 px-2 bg-white rounded'>${item.title}</h5>`,
                      allowHTML: true,
                      followCursor: true,
                    }"
                  >
                    <div
                      @click="() => setActiveLightBox(true, index, stillLifeProjects)"
                      class="cursor-pointer"
                    >
                      <nuxt-img :src="item.imageUrl" alt="photo" />
                    </div>
                  </figure>
                </div>
                <!-- /.item -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /.project -->
            <div class="project grid grid-view">
              <div class="row g-6 isotope" ref="isotopeContainer4">
                <div class="item col-md-6">
                  <div class="project-details d-flex justify-content-center flex-column">
                    <div class="post-header">
                      <!-- <div class="post-category text-leaf mb-3">Workshop</div> -->
                      <h2 class="post-title mb-3 display-1">Vanika Jewels</h2>
                    </div>
                    <!-- /.post-header -->
                    <div class="post-content">
                      <nuxt-link to="/single-project" class="hover link-red display-6"
                        >Visit Website</nuxt-link
                      >
                    </div>
                    <!-- /.post-content -->
                  </div>
                  <!-- /.project-details -->
                </div>
                <div
                  v-for="(item, index) in workshopProjects"
                  :key="item.id"
                  class="item col-md-6"
                >
                  <figure
                    class="itooltip itooltip-light hover-scale rounded"
                    v-tippy="{
                      content: `<h5 class='mb-0 py-2 px-2 bg-white rounded'>${item.title}</h5>`,
                      allowHTML: true,
                      followCursor: true,
                    }"
                  >
                    <div
                      @click="() => setActiveLightBox(true, index, workshopProjects)"
                      class="cursor-pointer"
                    >
                      <nuxt-img :src="item.imageUrl" alt="photo" />
                    </div>
                  </figure>
                </div>
                <!-- /.item -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /.project -->
            <div class="project grid grid-view">
              <div class="row g-6 isotope" ref="isotopeContainer5">
                <div class="item col-md-6">
                  <div class="project-details d-flex justify-content-center flex-column">
                    <div class="post-header">
                      <!-- <div class="post-category text-orange mb-3">
                        Tools & Toys
                      </div> -->
                      <h2 class="post-title mb-3 display-1">Jiya Watches</h2>
                    </div>
                    <!-- /.post-header -->
                    <div class="post-content">
                      <nuxt-link to="/single-project" class="display-6 hover link-orange"
                        >Visit Website</nuxt-link
                      >
                    </div>
                    <!-- /.post-content -->
                  </div>
                  <!-- /.project-details -->
                </div>
                <!-- /.item -->
                <div
                  v-for="(item, index) in toysProjects"
                  :key="item.id"
                  class="item col-md-6"
                >
                  <figure
                    class="itooltip itooltip-light hover-scale rounded"
                    v-tippy="{
                      content: `<h5 class='mb-0 py-2 px-2 bg-white rounded'>${item.title}</h5>`,
                      allowHTML: true,
                      followCursor: true,
                    }"
                  >
                    <div
                      @click="() => setActiveLightBox(true, index, toysProjects)"
                      class="cursor-pointer"
                    >
                      <nuxt-img :src="item.imageUrl" alt="photo" />
                    </div>
                  </figure>
                </div>
                <!-- /.item -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /.project -->
          </div>
          <!-- /.projects-tiles -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <CommonLightbox
    :images="images"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
</template>

<script setup>
import { directive as VTippy } from "vue-tippy";
import {
  ieadsProjects,
  conceptProjects,
  stillLifeProjects,
  workshopProjects,
  toysProjects,
} from "~/data/projects";
const activeLightBox = ref(false);
const currentSlideIndex = ref();

const images = ref([]);
const setActiveLightBox = (val, i, items) => {
  if (i != undefined) {
    currentSlideIndex.value = i;
  }
  if (items) {
    images.value = items.map((elm) => elm.imageUrlFull);
  }
  activeLightBox.value = val;
};
import imagesLoaded from "imagesloaded";
const isotopeContainer1 = ref();
const isotopeContainer2 = ref();
const isotopeContainer3 = ref();
const isotopeContainer4 = ref();
const isotopeContainer5 = ref();
const isotope = ref([]);
const initIsotop = async (container) => {
  const Isotope = (await import("isotope-layout")).default;
  // Initialize Isotope in the mounted hook
  const isotop = new Isotope(
    container,

    {
      itemSelector: ".item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    }
  );

  imagesLoaded(container).on("progress", function (instance, image) {
    // Trigger Isotope layout
    isotop.layout();
  });
};

const initAllIsotop = () => {
  initIsotop(isotopeContainer1.value);
  initIsotop(isotopeContainer2.value);
  initIsotop(isotopeContainer3.value);
  initIsotop(isotopeContainer4.value);
  initIsotop(isotopeContainer5.value);
};

onMounted(() => {
  initAllIsotop();
});
</script>

<style lang="scss" scoped></style>
