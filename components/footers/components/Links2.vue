<template>
  <li v-for="(item, index) in navigationItems" :key="index">
    <nuxt-link :to="item.link">{{ item.label }}</nuxt-link>
  </li>
  <CommonScrolltop />
</template>

<script setup>
const navigationItems = ref([
  { label: "Our Story", link: "/blog" },
  { label: "Projects", link: "/projects" },
  { label: "Pricing", link: "/pricing" },
  { label: "Features", link: "/about" },
]);
</script>
