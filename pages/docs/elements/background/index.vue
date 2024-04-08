<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsBackgroundHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsBackgroundPageNav />
      <DocsBackgroundContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Background || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
