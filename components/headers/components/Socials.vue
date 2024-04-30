<template>
  <!-- Social media links using map -->
  <a
    v-for="(socialMedia, index) in socialMediaLinks"
    :key="index"
    :href="socialMedia.href"
  >
    <i :class="socialMedia.iconClass"></i>
  </a>
</template>

<script setup>
const socialMediaLinks = [
  // { id: 1, href: "#", iconClass: "uil uil-twitter" },
  { id: 2, href: "https://www.facebook.com/profile.php?id=61558335398456", iconClass: "uil uil-facebook-f" },
  // { id: 3, href: "#", iconClass: "uil uil-dribbble" },
  { id: 4, href: "https://www.instagram.com/techrenuka/", iconClass: "uil uil-instagram" },
  // { id: 5, href: "#", iconClass: "uil uil-youtube" },
];
</script>

<style scoped>
/* Add any additional styling here */
</style>
