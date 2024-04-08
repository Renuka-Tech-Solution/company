<template>
  <section class="wrapper bg-light">
    <div class="container py-15 py-md-17">
      <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
        <div class="col-lg-4 mt-lg-2">
          <h2 class="fs-16 text-uppercase text-muted mb-3">Our Clients</h2>
          <h3 class="display-3 mb-3 pe-xxl-5">Trusted by over 300+ clients</h3>
          <p class="lead fs-lg mb-0 pe-xxl-7">
            We bring solutions to make life easier for our customers.
          </p>
        </div>
        <!-- /column -->
        <div class="col-lg-8">
          <div class="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-12">
            <div v-for="(elm, i) in clients2" :key="i" class="col">
              <figure class="px-3 px-md-0 px-xxl-2">
                <nuxt-img :src="elm.src" alt="photo" />
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { clients2 } from "~/data/clients";
</script>

<style lang="scss" scoped></style>
