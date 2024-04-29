<template>
  <section class="wrapper bg-light angled upper-end lower-end">
    <div class="container pb-md-15 pt-lg-1 pb-lg-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
        <div class="mx-auto mb-lg-10 mb-md-3">
          <h2 class="fs-15 text-uppercase text-muted text-center mb-3">
            Our Happy Clients
          </h2>
          <h3 class="display-5 mb-3 pe-xxl-5 text-center">
            Trusted by over 400+ clients
          </h3>
          <p class="lead fs-lg mb-0 pe-xxl-5 text-center">
            We bring solutions to make life easier for our client's.
          </p>
        </div>
        <div class="col-md-12">
          <div
            class="row row-cols-1 mx-10 row-cols-md-2 row-cols-lg-4 mx-10 gx-0 gx-md-8 gx-xl-7 gy-10 d-flex justify-content-center align-items-center"
          >
            <div v-for="(elm, i) in clients" :key="i" class="col">
              <figure class="px-3 px-md-0 px-xxl-1">
                <nuxt-img :src="elm.src" alt="photo" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { clients } from "~/data/clients";
</script>

<style lang="scss" scoped></style>