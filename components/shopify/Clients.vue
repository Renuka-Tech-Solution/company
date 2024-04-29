<template>
  <section class="wrapper bg-light">
        <div class="container py-8 pt-md-8 pb-md-12">
            <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
                <h3 class="display-6 mb-0 mb-lg-3 pe-xxl-5 text-center">Shopify Satisfied Clients</h3>
                <div class="col-lg-7 mx-auto">
                <div
                    class="row row-cols-1 mx-10 md:row md:row-cols-2 row-cols-md-3 gx-0 gx-md-6 gx-xl-5 gy-10 d-flex align-items-center"
                >
                    <div v-for="(elm, i) in shopifyClients" :key="i" class="col">
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
import { shopifyClients } from "~/data/clients";
</script>