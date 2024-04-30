<template>
  <section class="wrapper">
    <div class="container pt-17 pt-md-17 pb-6 pb-md-10 text-center">
      <div class="row">
        <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-8 mb-md-12 mx-auto">
          <h1 class="display-1 mb-3">Shopify Mastery</h1>
          <p class="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-8">
            Expert Shopify design and development, crafting stunning ecommerce websites with seamless functionality and engaging user experiences. Elevate your online presence.
          </p>
        </div>
        <figure class="rounded">
          <nuxt-img src="/assets/img/photos/shopify-hero.png" alt="photo" />
        </figure>
      </div>
    </div>

    <div class="container py-10 pt-md-12 pt-lg-14 pb-md-2">
      <div class="row gx-lg-8 gx-xl-12 gy-3 gy-lg-0">
        <div class="col-lg-5 mt-lg-15">
          <!-- <h2 class="fs-15 text-uppercase text-muted mb-3">Our Clients</h2> -->
          <h3 class="display-5 mb-3 pe-xxl-5">Shopify Certified Partner</h3>
          <p class="lead fs-lg mb-0 pe-xxl-5">
            Official Shopify Partner: Trusted expertise for your e-commerce
            success.
          </p>
        </div>
        <!-- /column -->
        <div class="col-lg-7">
          <div
            class="row row-cols-1 mx-10 md:row md:row-cols-2 row-cols-md-2 gx-0 gx-md-6 gx-xl-5 gy-10 align-items-center"
          >
            <div v-for="(elm, i) in shopifyCertificate" :key="i" class="col">
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
  </section>
</template>

<script setup>
import { shopifyCertificate } from "~/data/clients";
</script>

<style lang="scss" scoped></style>
