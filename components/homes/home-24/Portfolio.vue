<template>
  <section class="wrapper bg-light scrollSpysection" id="portfolio">
    <div class="container pt-10 pt-md-12 pb-13 pb-md-15 text-center">
      <div class="row">
        <div class="col-lg-10 col-xl-8 col-xxl-7 mx-auto mb-8">
          <h2 class="display-5 mb-3">My Selected Shots</h2>
          <p class="lead fs-lg">
            Photography is my passion and I love to turn ideas into beautiful
            things.
          </p>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="grid grid-view projects-masonry">
        <div class="isotope-filter filter mb-10">
          <ul>
            <li
              v-for="filter in filters"
              @click="() => updateCategory(filter.value)"
              :key="filter.id"
            >
              <a
                :class="`filter-item ${
                  currentCategory == filter.value ? 'active' : ''
                }`"
                >{{ filter.label }}</a
              >
            </li>
          </ul>
        </div>
        <div class="row gx-md-6 gy-6 isotope" ref="isotopeContainer">
          <div
            v-for="(project, i) in filteredItems"
            :key="project.id"
            :class="[
              'project',
              'item',
              `col-md-6`,
              `col-xl-4`,
              ...project.categories,
            ]"
          >
            <figure class="overlay overlay-1 rounded">
              <div
                class="cursor-pointer"
                @click="() => setActiveLightBox(true, i)"
              >
                <nuxt-img :src="project.image.src" alt="photo" />
                <span class="bg"></span>
              </div>
              <figcaption>
                <h5 class="from-top mb-0">{{ project.title }}</h5>
              </figcaption>
            </figure>
          </div>
          <!-- /.project -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
  <Lightbox
    :images="images"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
  <!-- Component for lightbox image slider  from omponents>common>Lightbox -->
</template>

<script setup>
import imagesLoaded from "imagesloaded";
import { projects7 } from "~/data/projects";
const activeLightBox = ref(false);
const currentSlideIndex = ref();
const images = ref([]);
onMounted(() => {
  images.value = projects7.map((elm) => elm.fullImage);
});

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};
import Lightbox from "~/components/common/Lightbox.vue";
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
const filters = [
  { id: 1, label: "All", value: "*" },
  { id: 2, label: "Foods", value: "foods" },
  { id: 3, label: "Drinks", value: "drinks" },
  { id: 4, label: "Events", value: "events" },
  { id: 5, label: "Pastries", value: "pastries" },
];
const currentCategory = ref("*");
const filteredItems = ref(projects7);
const updateCategory = (val) => {
  if (val == "*") {
    currentCategory.value = "*";
    // filteredItems.value = projects7;
  } else {
    currentCategory.value = val;
    // filteredItems.value = [
    //   ...projects7.filter((elm) => elm.categories.includes(val)),
    // ];
  }

  isotope.value.arrange({
    filter: currentCategory.value == "*" ? "*" : `.${currentCategory.value}`,
  });
  //   isotope.value.layout();
};

const isotopeContainer = ref();

onMounted(() => {
  initIsotop();
});
</script>

<style lang="scss" scoped></style>
