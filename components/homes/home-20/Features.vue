<template>
  <section class="wrapper bg-light">
    <div class="container py-15 py-md-17">
      <div class="row text-center mb-10">
        <div class="col-md-10 col-lg-9 col-xxl-8 mx-auto">
          <h2 class="fs-16 text-uppercase text-muted mb-3">What We Do?</h2>
          <h3 class="display-3 px-xl-10 mb-0">
            The service we offer is specifically designed to meet your needs.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-lg-0 gy-10 mb-15 mb-md-17 align-items-center">
        <div class="col-lg-6">
          <figure class="rounded mb-0">
            <nuxt-img
              class="img-fluid"
              src="/assets/img/illustrations/ui4.png"
              srcset="/assets/img/illustrations/ui4@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5 ms-auto">
          <h3 class="fs-28 mb-3">Web Design</h3>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna risus varius.
          </p>
          <ul class="icon-list bullet-bg bullet-soft-primary">
            <li
              v-for="(item, index) in checklistItems.slice(0, 3)"
              :key="index"
              :class="{ 'mt-3': index > 0 }"
            >
              <span><i class="uil uil-check"></i></span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
          <a href="#" class="btn btn-soft-primary rounded-pill mt-2 mb-0"
            >More Details</a
          >
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-0 gy-10 mb-15 mb-md-17 align-items-center">
        <div class="col-lg-6 order-lg-2 ms-auto">
          <figure class="rounded mb-0">
            <nuxt-img
              class="img-fluid"
              src="/assets/img/illustrations/ui1.png"
              srcset="/assets/img/illustrations/ui1@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h3 class="fs-28 mb-3">Mobile Development</h3>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna risus varius.
          </p>
          <ul class="icon-list bullet-bg bullet-soft-primary">
            <li
              v-for="(item, index) in checklistItems.slice(0, 3)"
              :key="index"
              :class="{ 'mt-3': index > 0 }"
            >
              <span><i class="uil uil-check"></i></span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
          <a href="#" class="btn btn-soft-primary rounded-pill mt-2 mb-0"
            >More Details</a
          >
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-0 gy-10 align-items-center">
        <div class="col-lg-6">
          <figure class="rounded mb-0">
            <nuxt-img
              class="img-fluid"
              src="/assets/img/illustrations/ui5.png"
              srcset="/assets/img/illustrations/ui5@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5 ms-auto">
          <h3 class="fs-28 mb-3">SEO Optimization</h3>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna risus varius.
          </p>
          <ul class="icon-list bullet-bg bullet-soft-primary">
            <li
              v-for="(item, index) in checklistItems.slice(0, 3)"
              :key="index"
              :class="{ 'mt-3': index > 0 }"
            >
              <span><i class="uil uil-check"></i></span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
          <a href="#" class="btn btn-soft-primary rounded-pill mt-2 mb-0"
            >More Details</a
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
import { checklistItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
