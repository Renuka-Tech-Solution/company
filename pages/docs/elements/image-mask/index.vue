<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsImageMaskHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsImageMaskPageNav />
      <DocsImageMaskContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Image Mask || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
