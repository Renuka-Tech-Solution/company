<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsTooltipsPopoversHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsTooltipsPopoversPageNav />
      <DocsTooltipsPopoversContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title:
    "Docs Tooltips And Provers || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
