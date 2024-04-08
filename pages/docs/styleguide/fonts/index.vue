<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsFontsHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsFontsPageNav />
      <DocsFontsContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Fonts || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
