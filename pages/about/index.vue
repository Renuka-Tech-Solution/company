<template>
  <div class="content-wrapper">
    <HeadersAbout />
    <AboutAbout2Hero />
    <AboutAbout2Skills />
    <section class="wrapper bg-light">
      <div class="container py-14 py-md-16">
        <AboutAbout2Process />
        <AboutAbout2Faq />
      </div>
    </section>
    <AboutAbout2Clients />
    <AboutAbout2Contact />
  </div>
  <FootersFooter1 />
</template>

<script setup>
useSeoMeta({
  title: "About",
  description: "",
});
</script>

<style lang="scss" scoped></style>
