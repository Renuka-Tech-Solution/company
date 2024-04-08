<template>
  <div class="grid mb-14 mb-md-17">
    <div class="row isotope gy-6 mt-n19 mt-md-n22">
      <div
        v-for="(elm, i) in testimonials"
        :key="i"
        class="item col-md-6 col-xl-3"
      >
        <div class="card shadow-lg">
          <div class="card-body">
            <span class="ratings five mb-3"></span>
            <blockquote class="icon mb-0">
              <p>
                {{ elm.quote }}
              </p>
              <div class="blockquote-details">
                <div class="info ps-0">
                  <h5 class="mb-1">{{ elm.name }}</h5>
                  <p class="mb-0">{{ elm.role }}</p>
                </div>
              </div>
            </blockquote>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!--/column -->

      <!--/column -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script setup>
import { testimonials } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
