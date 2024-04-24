<template>
  <section class="wrapper bg-light angled upper-end lower-end">
    <div class="container py-14 pt-lg-14 pb-lg-15">
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-lg-18 align-items-center">
        <div class="col-lg-7">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/about-i5.webp"
              srcset="/assets/img/illustrations/about-i5.webp"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="fs-16 text-uppercase text-muted mb-3">Let’s Talk</h2>
          <h3 class="display-4 mb-3">
            Let's make something great together. We are trusted by over 400+ clients.
          </h3>
          <p>
            Turning visions into standout online experiences. Specialists in website
            development, Shopify services, and beyond. Trust us to bring your digital
            dreams to life with expertise and innovation.
          </p>
          <!-- <nuxt-link to="/signup" class="btn btn-primary rounded-pill mt-2"
            >Join Us</nuxt-link
          > -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <!-- <div class="px-lg-5">
        <div class="row gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center">
          <div
            v-for="(elm, i) in clients1.slice(0, 6)"
            :key="i"
            class="col-4 col-md-2"
          >
            <figure class="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
              <nuxt-img :src="elm.src" alt="photo" />
            </figure>
          </div>
        </div>
      </div> -->

      <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mt-3">
        <div class="col-lg-4 mt-lg-50">
          <h2 class="fs-15 text-uppercase text-muted mb-3">Our Clients</h2>
          <h3 class="display-5 mb-3 pe-xxl-5">Trusted by over 400+ clients</h3>
          <p class="lead fs-lg mb-0 pe-xxl-5">
            We bring solutions to make life easier for our client's.
          </p>
        </div>
        <!-- /column -->
        <div class="col-lg-8">
          <div
            class="row row-cols-1 mx-10 row-cols-md-3 row-cols-lg-4 gx-0 gx-md-8 gx-xl-7 gy-10 align-items-center"
          >
            <div v-for="(elm, i) in clients1" :key="i" class="col">
              <figure class="px-3 px-md-0 px-xxl-1">
                <nuxt-img :src="elm.src" alt="photo" />
              </figure>
            </div>
            <!--/column -->

            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { pricing } from "~/data/pricing";
const isYearly = ref(false);
import { clients1 } from "~/data/clients";
</script>

<style lang="scss" scoped></style>
