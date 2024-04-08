<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsCreditsHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsCreditsPageNav />
      <DocsCreditsContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Credits|| Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
