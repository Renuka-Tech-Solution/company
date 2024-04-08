<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsTilesHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsTilesPageNav />
      <DocsTilesContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Tiles || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
