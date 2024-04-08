<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsPaginationHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsPaginationPageNav />
      <DocsPaginationContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Pagination || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
