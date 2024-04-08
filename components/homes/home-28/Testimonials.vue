<template>
  <div class="grid mt-md-n19 mt-xl-n20 mt-xxl-n21 mb-20">
    <div class="row isotope gy-6">
      <div
        v-for="testimonial in testimonials6"
        :key="testimonial.id"
        :class="['item', 'col-md-6 col-xl-3']"
      >
        <div class="card shadow-lg">
          <div class="card-body">
            <blockquote class="icon mb-0">
              <p>{{ testimonial.quote }}</p>
              <div class="blockquote-details">
                <div class="info ps-0">
                  <h5 class="mb-1">{{ testimonial.authorName }}</h5>
                  <p class="mb-0">{{ testimonial.authorRole }}</p>
                </div>
              </div>
            </blockquote>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!--/column -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script setup>
import { testimonials6 } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
