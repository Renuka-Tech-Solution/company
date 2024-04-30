<template>
  <div class="content-wrapper">
    <HeadersMenu />
    <AboutHero />
    <AboutSkills />
    <section class="wrapper bg-light">
      <div class="container py-14 py-md-16">
        <AboutHowItWorks />
        <AboutFaq />
      </div>
    </section>
    <AboutClients />
    <AboutContact />
  </div>
  <FootersFooter />
</template>

<script setup>
useSeoMeta({
  title: "About",
  description: "",
});
</script>

<style lang="scss" scoped></style>
