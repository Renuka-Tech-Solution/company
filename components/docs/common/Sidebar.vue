<template>
  <aside class="col-xl-2 sidebar doc-sidebar mt-md-0 py-16 d-none d-xl-block">
    <div class="widget pb-3">
      <h6 class="widget-title fs-17 mb-2">Usage</h6>
      <nav id="collapse-usage">
        <ul class="list-unstyled fs-sm lh-sm text-reset">
          <li v-for="(elm, i) in usage" :key="i">
            <nuxt-link
              :to="elm.route"
              :class="`${pathName == elm.route ? 'active' : ''}`"
              >{{ elm.label }}</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <!-- /nav -->
    </div>
    <!-- /.widget -->
    <div class="widget pb-3">
      <h6 class="widget-title fs-17 mb-2">Styleguide</h6>
      <nav id="collapse-style">
        <ul class="list-unstyled fs-sm lh-sm text-reset">
          <li v-for="(elm, i) in styleGuideItems" :key="i">
            <nuxt-link
              :to="elm.route"
              :class="`${pathName == elm.route ? 'active' : ''}`"
              >{{ elm.label }}</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <!-- /nav -->
    </div>
    <!-- /.widget -->
    <div class="widget pb-3">
      <h6 class="widget-title fs-17 mb-2">Elements</h6>
      <nav id="collapse-elements">
        <ul class="list-unstyled fs-sm lh-sm text-reset">
          <li v-for="(elm, i) in elements" :key="i">
            <nuxt-link
              :to="elm.route"
              :class="`${pathName == elm.route ? 'active' : ''}`"
              >{{ elm.label }}</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <!-- /nav -->
    </div>
    <!-- /.widget -->
  </aside>
</template>

<script setup>
import { elements, styleGuideItems, usage } from "~/data/menu";

const route = useRoute();

const pathName = route.path;
</script>

<style lang="scss" scoped></style>
