<template>
  <div class="grid mb-18">
    <div class="row isotope gy-6 mt-n18">
      <div
        class="item col-md-6 col-xl-3"
        v-for="testimonial in testimonials6"
        :key="testimonial.id"
      >
        <div class="card shadow-lg card-border-bottom border-soft-primary">
          <div class="card-body">
            <blockquote class="border-0 mb-0">
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
