<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsColorsHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsColorsPageNav />
      <DocsColorsContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Colors || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
