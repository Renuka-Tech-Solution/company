<template>
  <div class="yellow-theme thicccboi-font">
    <div class="content-wrapper">
      <HeadersWelcome />
      <HomesHome1Hero />
      <HomesHome1Features2 />
      <HomesHome1Process />
      <HomesHome1Team />
      <HomesHome1Features />
      <HomesHome1Pricing />
    </div>
    <FootersFooter1 />
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
