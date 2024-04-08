<template>
  <div class="row text-center">
    <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
      <h2 class="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
      <h3 class="display-4 mb-9">
        The service we offer is specifically designed to meet your needs.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row gx-md-8 gx-xl-12 gy-8 mb-14 mb-md-16 text-center">
    <div v-for="column in fatures" :key="column.id" class="col-md-4">
      <div
        :class="[
          'icon',
          'btn',
          'btn-block',
          'btn-lg',
          'btn-soft-' + column.color,
          'pe-none',
          'mb-5',
        ]"
      >
        <i :class="column.icon"></i>
      </div>
      <h4>{{ column.title }}</h4>
      <p class="mb-3">{{ column.description }}</p>
      <a :href="column.link" :class="['more', 'hover', 'link-' + column.color]"
        >Learn More</a
      >
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
const fatures = ref([
  {
    id: 1,
    title: "24/7 Support",
    icon: "uil uil-phone-volume",
    color: "purple",
    description:
      "Fusce dapibus tellus cursus porta tortor condimentum euismod massa justo vehicula sit amet et risus cras.",
    link: "#support",
  },
  {
    id: 2,
    title: "Secure Payments",
    icon: "uil uil-shield-exclamation",
    color: "green",
    description:
      "Fusce dapibus tellus cursus porta tortor condimentum euismod massa justo vehicula sit amet et risus cras.",
    link: "#payments",
  },
  {
    id: 3,
    title: "Daily Updates",
    icon: "uil uil-laptop-cloud",
    color: "orange",
    description:
      "Fusce dapibus tellus cursus porta tortor condimentum euismod massa justo vehicula sit amet et risus cras.",
    link: "#updates",
  },
]);
</script>

<style lang="scss" scoped></style>
