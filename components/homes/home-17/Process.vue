<template>
  <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center">
    <div class="col-lg-6">
      <h2 class="fs-15 text-uppercase text-muted mb-3">Our Strategy</h2>
      <h3 class="display-4 mb-5">
        3 working steps to organize our business projects.
      </h3>
      <p>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Etiam porta sem malesuada magna mollis euismod eget. Nullam
        id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus.
      </p>
      <p class="mb-6">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
        ligula porta felis euismod semper. Aenean lacinia bibendum consectetur.
      </p>
      <a href="#" class="btn btn-primary rounded-pill mb-0">Learn More</a>
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <div v-for="step in steps" :key="step.id" class="d-flex flex-row">
        <div>
          <span
            :class="[
              'icon',
              'btn',
              'btn-block',
              'btn-lg',
              'btn-soft-' + step.color,
              'pe-none',
              'mt-1',
              'me-5',
            ]"
          >
            <span class="number fs-22">{{ step.number }}</span>
          </span>
        </div>
        <div>
          <h4 class="mb-1">{{ step.title }}</h4>
          <p class="mb-0">{{ step.description }}</p>
        </div>
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
const steps = ref([
  {
    id: 1,
    number: "01",
    color: "purple",
    title: "Collect Ideas",
    description:
      "Nulla vitae elit libero pharetra augue dapibus. Fusce dapibus, tellus ac cursus commodo.",
  },
  {
    id: 2,
    number: "02",
    color: "green",
    title: "Data Analysis",
    description:
      "Vivamus sagittis lacus vel augue laoreet tortor mauris condimentum fermentum.",
  },
  {
    id: 3,
    number: "03",
    color: "orange",
    title: "Finalize Product",
    description:
      "Cras mattis consectetur purus sit amet massa justo sit amet risus consectetur magna elit.",
  },
]);
</script>

<style lang="scss" scoped></style>
