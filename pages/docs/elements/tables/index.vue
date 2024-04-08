<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsTablesHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsTablesPageNav />
      <DocsTablesContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Tables || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
