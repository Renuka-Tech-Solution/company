<template>
  <section class="wrapper bg-light">
    <div class="container pt-12 pt-md-14 pb-13 pb-md-15">
      <div class="row text-center">
        <div class="col-xl-10 mx-auto">
          <h2 class="fs-15 text-uppercase text-primary mb-3">Job Positions</h2>
          <h3 class="display-4 mb-10 px-xxl-15">
            We’re always searching for amazing people to join our team. Take a
            look at our current openings.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
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
      <div class="row mt-11">
        <div class="col-lg-6 col-xl-5 mx-auto text-center">
          <h2 class="display-6 mb-3">Can't find the right position?</h2>
          <p class="lead mb-5 px-md-16 px-lg-3">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
            leo risus, porta ac consectetur.
          </p>
          <a href="#" class="btn btn-primary rounded-pill">Get in Touch</a>
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
import { jobs } from "~/data/job";
</script>

<style lang="scss" scoped></style>
