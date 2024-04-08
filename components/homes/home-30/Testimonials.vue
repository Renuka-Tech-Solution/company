<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center mb-15 mb-md-17">
    <div class="col-lg-7 position-relative">
      <div
        class="position-absolute d-none d-md-block"
        style="
          top: 50%;
          left: 50%;
          width: 130%;
          height: auto;
          transform: translate(-50%, -50%);
        "
      >
        <nuxt-img class="w-100" src="/assets/img/photos/blurry.png" alt="photo" />
      </div>
      <div class="row gx-md-5 gy-5">
        <div
          v-for="(card, index) in testimonials"
          :key="index"
          :class="['col-md-6', card.class]"
        >
          <div class="card shadow-xl rounded-xl">
            <div class="card-body">
              <blockquote class="icon mb-0">
                <p>
                  {{ card.quote }}
                </p>
                <div class="blockquote-details">
                  <div class="info p-0">
                    <h5 class="mb-1">{{ card.name }}</h5>
                    <p class="mb-0">{{ card.role }}</p>
                  </div>
                </div>
              </blockquote>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!--/column -->

        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
    <div class="col-lg-5">
      <h2 class="display-2 mb-2 mt-lg-n6">Our Community</h2>
      <p class="lead fs-lg mb-4">
        Customer satisfaction is our major goal. See what our clients are saying
        about our services.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a
        pharetra augue. Maecenas faucibus mollis interdum. Vestibulum id ligula
        porta felis euismod.
      </p>
      <a href="#" class="btn btn-primary rounded-xl mt-3">All Testimonials</a>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { testimonials } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
