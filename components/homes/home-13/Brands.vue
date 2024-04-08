<template>
  <section class="wrapper bg-gray">
    <div class="container py-14 py-md-16">
      <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-10">
        <div class="col-lg-4 mt-lg-2">
          <h3 class="display-4 mb-3 pe-xxl-5">Trusted by over 300+ clients</h3>
          <p class="lead fs-lg mb-0 pe-xxl-5">
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
