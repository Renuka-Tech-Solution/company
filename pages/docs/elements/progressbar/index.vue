<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsProgressbarHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsProgressbarPageNav />
      <DocsProgressbarContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Progressbar || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
