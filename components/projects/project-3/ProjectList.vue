<template>
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="grid grid-view projects-masonry">
        <div class="isotope-filter filter mb-10">
          <p>Filter:</p>
          <ul>
            <li
              v-for="(elm, i) in filters"
              :key="i"
              @click="
                () => {
                  currentCategory = elm.value;
                  updateCategory(elm.value);
                }
              "
            >
              <a
                :class="`filter-item ${
                  elm.value == currentCategory ? 'active' : ''
                }`"
                data-filter="*"
                >{{ elm.label }}</a
              >
            </li>
          </ul>
        </div>
        <div class="row gx-md-10 gy-10 gy-md-13 isotope" ref="isotopeContainer">
          <div
            v-for="(project, index) in projects12"
            :key="index"
            :class="['project', 'item', `col-md-6`, project.category]"
          >
            <figure class="lift rounded mb-6">
              <nuxt-link to="/single-project">
                <nuxt-img :src="project.imageSrc" alt="photo"
              /></nuxt-link>
            </figure>
            <div
              class="project-details d-flex justify-content-center flex-column"
            >
              <div class="post-header">
                <div
                  class="post-category text-line mb-2"
                  :class="`text-${project.categoryColor}`"
                >
                  {{ project.categoryText }}
                </div>
                <h3 class="post-title">{{ project.title }}</h3>
              </div>
              <!-- /.post-header -->
            </div>
            <!-- /.project-details -->
          </div>
          <!-- /.project -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { projects12 } from "~/data/projects";
import imagesLoaded from "imagesloaded";
const currentCategory = ref("*");
const filters = ref([
  { label: "All", value: "*" },
  { label: "Concept", value: ".concept" },
  { label: "Product", value: ".product" },
  { label: "Workshop", value: ".workshop" },
  { label: "Still Life", value: ".still-life" },
]);
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
const updateCategory = (val) => {
  isotope.value.arrange({
    filter: val.split(" ").join("-"),
  });
  //   isotope.value.layout();
};

onMounted(() => {
  initIsotop();
});
</script>

<style lang="scss" scoped></style>
