<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <BlocksNavbarHero />
    <BlocksCommonTabbar />
    <Guide />
    <BlocksNavbarNavbar1 />
    <BlocksNavbarNavbar2 />
    <BlocksNavbarNavbar3 />
    <BlocksNavbarNavbar4 />
    <BlocksNavbarNavbar5 />
    <BlocksNavbarNavbar6 />
    <BlocksNavbarNavbar7 />
    <BlocksNavbarNavbar8 />
    <BlocksNavbarNavbar9 />
    <BlocksNavbarNavbar10 />
    <BlocksNavbarNavbar11 />
    <BlocksNavbarNavbar12 />
    <BlocksNavbarNavbar13 />
    <BlocksNavbarNavbar14 />
    <BlocksNavbarNavbar15 />
    <BlocksNavbarNavbar16 />
    <BlocksNavbarNavbar17 />
  </div>
  <BlocksCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Blocs Navbar || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
import Guide from "~/components/blocks/navbar/Guide.vue";
</script>

<style lang="css">
section header.image-wrapper:not(.mobile) {
  background-attachment: scroll !important;
}

section header.image-wrapper,
section .navbar {
  z-index: 2 !important;
}

section .navbar .hamburger,
section .navbar [data-bs-toggle="offcanvas"],
section .navbar .btn {
  pointer-events: none;
}

section .navbar .container {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
</style>
