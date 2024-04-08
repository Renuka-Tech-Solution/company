<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
      <div class="row">
        <div class="col-md-10 col-xl-8 mx-auto">
          <div class="post-header">
            <h1 class="display-1 mb-5">Multimedia Artist & Animator</h1>
            <ul class="post-meta fs-17 mb-5">
              <li v-for="(item, index) in jobDetails" :key="index">
                <i :class="item.iconClass"></i> {{ item.text }}
              </li>
            </ul>
            <!-- /.post-meta -->
          </div>
          <!-- /.post-header -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
const jobDetails = ref([
  { iconClass: "uil uil-clock", text: "Full time" },
  { iconClass: "uil uil-location-arrow", text: "Manchester, UK" },
  { iconClass: "uil uil-building", text: "Design Department" },
]);
</script>

<style lang="scss" scoped></style>
