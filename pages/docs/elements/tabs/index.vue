<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsTabsHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsTabsPageNav />
      <DocsTabsContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Tabs || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
