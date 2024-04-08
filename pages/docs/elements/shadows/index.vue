<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsShadowsHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />

      <DocsShadowsContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Shadows || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
