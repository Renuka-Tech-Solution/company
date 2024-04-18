<template>
  <li v-for="item in menuItems" :key="item.id">
    <nuxt-link :to="item.link">{{ item.text }}</nuxt-link>
  </li>
  <CommonScrolltop />
</template>

<script setup>
const menuItems = ref([
  { id: 1, text: "Shopify", link: "/shopify" },
  { id: 2, text: "Services", link: "/services" },
  { id: 3, text: "Portfolio", link: "/portfolio" },
  { id: 1, text: "About Us", link: "/about" },
  { id: 3, text: "Contact", link: "/contact" },

  // { id: 4, text: "Our Policy", link: "/terms" },
]);
</script>

<style lang="scss" scoped></style>
