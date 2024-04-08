<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsChangelogHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />

      <DocsChangelogContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Changelog || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
