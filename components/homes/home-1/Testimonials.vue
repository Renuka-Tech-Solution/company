<template>
  <section class="wrapper bg-gradient-reverse-primary">
    <div class="container py-14 py-md-18">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7">
          <div class="row gx-md-5 gy-5">
            <div
              v-for="(card, index) in testimonials"
              :key="index"
              :class="['col-md-6', card.class]"
            >
              <div :class="['card']" :id="`card-${card.id}`">
                <div class="card-body">
                  <blockquote class="icon mb-0">
                    <p>{{ card.quote }}</p>
                    <div class="blockquote-details">
                      <div class="info p-0">
                        <h5 class="mb-1">{{ card.name }}</h5>
                        <p class="mb-0">{{ card.role }}</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="fs-16 text-uppercase text-muted mb-3 mt-lg-n6">
            Our Community
          </h2>
          <h3 class="display-4 mb-5">
            Don't take our word for it. See what customers are saying about us.
          </h3>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit
            libero, a pharetra augue. Maecenas faucibus mollis interdum.
            Vestibulum id ligula porta felis euismod.
          </p>
          <a href="#" class="btn btn-primary rounded-pill mt-3"
            >All Testimonials</a
          >
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { testimonials } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
