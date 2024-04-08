<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsTextHighlightHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsTextHighlightPageNav />
      <DocsTextHighlightContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title:
    "Docs Text Highlight || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
