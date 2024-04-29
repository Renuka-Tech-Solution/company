<template>
  <div class="content-wrapper">
    <HeadersServices/>
    <ServicesHero />
    <section class="wrapper bg-light angled upper-end">
      <div class="container pb-14 pb-md-16">
        <ServicesCounter />
        <ServicesFeatures />
        <ServicesProcess />
      </div>
    </section>
    <ServicesCtaVideo />
  </div>
  <FootersFooter />
</template>

<script setup>
useSeoMeta({
  title: "Services",
  description: "",
});
</script>

<style lang="scss" scoped></style>
