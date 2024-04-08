<template>
  <section class="wrapper bg-light">
    <div class="container py-14 pt-md-17">
      <h2 class="fs-15 text-uppercase text-muted text-center mb-8">
        Trusted by Over 5000 Clients
      </h2>
      <div class="px-lg-5 mb-7 mb-md-10">
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

          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /div -->

      <!-- /.tab-content -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { clients1 } from "~/data/clients";
</script>

<style lang="scss" scoped></style>
