<template>
  <section class="wrapper bg-light">
    <div class="container pt-10 pt-md-11 pb-15 pb-md-17">
      <div class="row text-center">
        <div class="col-xl-10 mx-auto">
          <h2 class="fs-15 text-uppercase text-muted mb-3">Job Positions</h2>
          <h3 class="display-4 mb-10 px-xxl-15">
            We’re always searching for amazing people to join our team. Take a
            look at our current openings.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <form @submit.prevent="handleSubmit" class="filter-form mb-10">
            <div class="row">
              <div class="col-md-4 mb-3">
                <div class="form-select-wrapper">
                  <select class="form-select" aria-label="">
                    <option selected>Position</option>
                    <option
                      v-for="(position, index) in jobPositions"
                      :key="index"
                      :value="position.value"
                    >
                      {{ position.label }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="form-select-wrapper">
                  <select class="form-select" aria-label="">
                    <option selected>Type</option>
                    <option
                      v-for="(type, index) in jobTypes"
                      :key="index"
                      :value="type.value"
                    >
                      {{ type.label }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="form-select-wrapper">
                  <select class="form-select" aria-label="">
                    <option selected>Location</option>
                    <option
                      v-for="(location, index) in locations"
                      :key="index"
                      :value="location.value"
                    >
                      {{ location.label }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <div class="job-list mb-10">
            <h3 class="mb-4">Design</h3>
            <a
              v-for="position in webDesignJobPositions"
              :key="position.id"
              :href="position.link"
              class="card mb-4 lift"
            >
              <div class="card-body p-5">
                <span class="row justify-content-between align-items-center">
                  <span
                    class="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body"
                  >
                    <span
                      :class="[
                        'avatar',
                        position.avatarClass,
                        'w-9 h-9 fs-17 me-3',
                      ]"
                      >{{ position.avatarText }}</span
                    >
                    {{ position.title }}
                  </span>
                  <span
                    class="col-5 col-md-3 text-body d-flex align-items-center"
                  >
                    <i class="uil uil-clock me-1"></i> {{ position.time }}
                  </span>
                  <span
                    class="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center"
                  >
                    <i class="uil uil-location-arrow me-1"></i>
                    {{ position.location }}
                  </span>
                  <span class="d-none d-lg-block col-1 text-center text-body">
                    <i class="uil uil-angle-right-b"></i>
                  </span>
                </span>
              </div>
            </a>
            <!-- /.card -->
          </div>
          <div class="job-list">
            <h3 class="mb-4">Development</h3>
            <a
              v-for="job in webDebJobs"
              :key="job.id"
              :href="job.link"
              class="card mb-4 lift"
            >
              <div class="card-body p-5">
                <span class="row justify-content-between align-items-center">
                  <span
                    class="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body"
                  >
                    <span
                      :class="['avatar', job.avatarClass, 'w-9 h-9 fs-17 me-3']"
                      >{{ job.avatarText }}</span
                    >
                    {{ job.title }}
                  </span>
                  <span
                    class="col-5 col-md-3 text-body d-flex align-items-center"
                  >
                    <i class="uil uil-clock me-1"></i> {{ job.time }}
                  </span>
                  <span
                    class="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center"
                  >
                    <i class="uil uil-location-arrow me-1"></i>
                    {{ job.location }}
                  </span>
                  <span class="d-none d-lg-block col-1 text-center text-body">
                    <i class="uil uil-angle-right-b"></i>
                  </span>
                </span>
              </div>
            </a>
            <!-- /.card -->
          </div>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { webDebJobs, webDesignJobPositions } from "~/data/job";
const handleSubmit = () => {};
const locations = [
  { value: "location1", label: "Chicago, US" },
  { value: "location3", label: "Michigan, US" },
  { value: "location2", label: "New York, US" },
  { value: "location4", label: "Los Angeles, US" },
  { value: "location5", label: "Moscow, Russia" },
  { value: "location6", label: "Sydney, Australia" },
  { value: "location7", label: "Birmingham, UK" },
  { value: "location8", label: "Manchester, UK" },
  { value: "location9", label: "Beijing, China" },
];
const jobTypes = [
  { value: "type1", label: "Full-time" },
  { value: "type3", label: "Part-time" },
  { value: "type4", label: "Remote" },
];
const jobPositions = [
  { value: "position1", label: "Business" },
  { value: "position2", label: "Design" },
  { value: "position3", label: "Development" },
  { value: "position4", label: "Engineering" },
  { value: "position5", label: "Finance" },
  { value: "position6", label: "Marketing" },
];
</script>

<style lang="scss" scoped></style>
