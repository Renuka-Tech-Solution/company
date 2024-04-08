<template>
  <li v-for="item in menuItems" :key="item.id">
    <nuxt-link :to="item.link">{{ item.text }}</nuxt-link>
  </li>
  <CommonScrolltop />
</template>

<script setup>
const menuItems = ref([
  { id: 1, text: "About Us", link: "/about" },
  { id: 2, text: "Our Story", link: "/blog" },
  { id: 3, text: "Projects", link: "/projects" },
  { id: 4, text: "Terms of Use", link: "/terms" },
  { id: 5, text: "Privacy Policy", link: "/terms" },
]);
</script>

<style lang="scss" scoped></style>
