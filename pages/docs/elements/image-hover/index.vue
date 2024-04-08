<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsImageHoverHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsImageHoverPageNav />
      <DocsImageHoverContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Image Hover || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
