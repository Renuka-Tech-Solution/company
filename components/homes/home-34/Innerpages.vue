<template>
  <section class="wrapper bg-gradient-reverse-primary">
    <div class="container pb-10 pb-md-13">
      <div class="row mb-8 text-center">
        <div class="col-lg-8 col-xl-7 mx-auto">
          <h2 class="fs-15 ls-xl text-uppercase text-muted">Inner Pages</h2>
          <h2 class="display-3 mt-3 mb-3 mb-0">
            Handcrafted and carefully put together pages to choose from.
          </h2>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="grid grid-view projects-masonry">
        <div class="isotope-filter filter mb-10 text-start text-md-center">
          <p>Filter:</p>
          <ul>
            <li>
              <a
                class="filter-item"
                :class="{ active: activeFilter === '*' }"
                @click="setFilter('*')"
                >All</a
              >
            </li>
            <li v-for="filter in filters" :key="filter.value">
              <a
                class="filter-item"
                :class="{ active: activeFilter === filter.value }"
                @click="setFilter(filter.value)"
              >
                {{ filter.label }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div
            class="row gx-md-8 gx-xl-9 gy-8 gy-xl-9 isotope"
            ref="isotopeContainer"
          >
            <div
              v-for="project in projects10"
              :key="project.id"
              class="project col-md-6 col-xl-4 item"
              :class="project.categories"
            >
              <figure
                class="itooltip itooltip-primary rounded shadow-lg"
                :title="project.tooltip"
              >
                <nuxt-link to="/single-project">
                  <nuxt-img
                    :src="project.image.src"
                    :srcset="project.image.srcset"
                    :alt="project.image.alt"
                  />
                </nuxt-link>
              </figure>
            </div>
            <!-- /.project -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /div -->
      </div>
      <!-- /.grid -->
      <div class="mb-15"></div>
    </div>
    <!-- /.container -->
    <div class="overflow-hidden">
      <div class="divider text-light mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="currentColor"
            d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
          />
        </svg>
      </div>
    </div>
    <!-- /.overflow-hidden -->
  </section>
</template>

<script setup>
import imagesLoaded from "imagesloaded";
import { projects10 } from "~/data/projects";

const filters = [
  { label: "Services", value: ".services" },
  { label: "About", value: ".about" },
  { label: "Contact", value: ".contact" },
  { label: "Pricing", value: ".pricing" },
  { label: "Projects", value: ".projects" },
];

const activeFilter = ref("*");

const setFilter = (filterValue) => {
  activeFilter.value = filterValue;

  isotope.value.arrange({
    filter: filterValue,
  });
  // Add logic here to handle the filtering based on the selected filter.
  // You can emit an event or call a method to filter the content accordingly.
};

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

const isotopeContainer = ref();

onMounted(() => {
  initIsotop();
});
</script>

<style lang="scss" scoped></style>
