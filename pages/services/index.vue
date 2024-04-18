<template>
  <div class="content-wrapper">
    <HeadersServices/>
    <ServicesService1Hero />
    <section class="wrapper bg-light angled upper-end">
      <div class="container pb-14 pb-md-16">
        <ServicesService1Facts />
        <ServicesService1Features />
        <ServicesService1Process />
      </div>
    </section>
    <ServicesService1Cta />
    <ServicesService1Pricing />
  </div>
  <FootersFooter5 />
</template>

<script setup>
useSeoMeta({
  title: "Services",
  description: "",
});
</script>

<style lang="scss" scoped></style>
