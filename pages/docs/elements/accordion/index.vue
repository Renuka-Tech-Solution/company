<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsAccordionHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsAccordionPageNav />
      <DocsAccordionContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Accordion || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
