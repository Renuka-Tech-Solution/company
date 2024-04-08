<template>
  <PageLoader />
  <div class="content-wrapper">
    <HeadersHeader1 />
    <PageLoaderHero />
    <section class="wrapper bg-light angled upper-end">
      <div class="container pb-14 pb-md-16">
        <PageLoaderFacts />
        <PageLoaderFeatures />
        <PageLoaderProcess />
      </div>
    </section>
    <PageLoaderCta />
    <PageLoaderPricing />
  </div>
  <FootersFooter5 />
</template>

<script setup>
useSeoMeta({
  title: "Page Loader || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
