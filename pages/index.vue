<template>
  <div class="thicccboi-font">
    <div class="content-wrapper">
      <HeadersMenu />
      <HomeHero />
      <HomeService />
      <HomeStrategy />
      <HomeTeam />
      <HomeOurSolutions />
      <HomeClients />
    </div>
    <FootersFooter />
  </div>
</template>

<script setup>
import chunk from "~/utlis/chunk"
useSeoMeta({
  title: "Tech Renuka",
  description: "Code, Create, Connect",
});
// import CompanyHeader from "~/components/headers/Menu.vue";
</script>

<style lang="scss"></style>
