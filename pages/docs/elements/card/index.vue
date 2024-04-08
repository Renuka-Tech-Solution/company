<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsCardHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsCardPageNav />
      <DocsCardContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Card || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
