<template>
  <section class="section-frame overflow-hidden">
    <div class="wrapper bg-soft-primary" style="border-radius: 1rem">
      <div class="container py-17">
        <div class="row text-center">
          <div class="col-xl-11 col-xxl-10 mx-auto">
            <h2 class="fs-16 text-uppercase text-muted mb-3">Company Facts</h2>
            <h3 class="display-4 mb-10 px-lg-20 px-xl-20">
              Save your time and money by choosing our professional team.
            </h3>
            <div class="row gy-6 text-center">
              <div
                v-for="item in progressItems"
                :key="item.id"
                class="col-md-6 col-lg-3"
              >
                <div :class="['progressbar', 'semi-circle', item.color]">
                  <CommonCircleProgressbar :max="item.value" />
                </div>
                <h4>{{ item.title }}</h4>
                <p class="mb-0">{{ item.description }}</p>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
  </section>
</template>

<script setup>
import { progressItems } from "~/data/count";
</script>

<style lang="scss" scoped></style>
