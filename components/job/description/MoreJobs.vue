<template>
  <section class="wrapper bg-soft-primary">
    <div class="container py-14 py-md-16">
      <div class="row align-items-center mb-6">
        <div class="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
          <h2 class="display-6 mb-0">More Job Openings</h2>
        </div>
        <!--/column -->
        <div class="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
          <a href="#" class="btn btn-primary rounded-pill mb-0"
            >Explore Positions</a
          >
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gy-6">
        <div v-for="job in jobs" :key="job.id" class="col-md-6 col-lg-4">
          <a :href="job.link" class="card shadow-lg lift h-100">
            <div class="card-body p-5 d-flex flex-row">
              <div>
                <span
                  :class="['avatar', job.avatarClass, 'w-11 h-11 fs-20 me-4']"
                  >{{ job.avatarText }}</span
                >
              </div>
              <div>
                <span :class="['badge', job.badgeClass, 'rounded py-1 mb-2']">{{
                  job.badgeText
                }}</span>
                <h4 class="mb-1">{{ job.title }}</h4>
                <p class="mb-0 text-body">{{ job.location }}</p>
              </div>
            </div>
          </a>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { jobs } from "~/data/job";
</script>

<style lang="scss" scoped></style>
