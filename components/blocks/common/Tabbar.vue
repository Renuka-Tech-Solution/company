<template>
  <section class="wrapper bg-light wrapper-border">
    <div class="container py-11">
      <h2 class="h5">Filter Blocks:</h2>
      <ul class="list-inline mb-0">
        <li
          v-for="(block, index) in blocks"
          :key="index"
          class="list-inline-item me-1 mb-2"
        >
          <nuxt-link
            :to="block.link"
            :class="`btn btn-soft-ash btn-sm rounded ${
              pathname == block.link ? 'text-primary pe-none' : ''
            }`"
            :id="block.id"
            >{{ block.name }}</nuxt-link
          >
        </li>
      </ul>
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { blocks } from "~/data/blockMenu";
const route = useRoute();
const pathname = route.path;
</script>

<style lang="scss" scoped></style>
