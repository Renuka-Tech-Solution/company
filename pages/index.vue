<template>
  <div class="yellow-theme thicccboi-font">
    <div class="content-wrapper">
      <HeadersWelcome />
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
import CompanyHeader from "~/components/headers/Welcome.vue";
</script>

<style lang="scss"></style>
