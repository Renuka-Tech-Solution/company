<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsLightboxHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsLightboxPageNav />
      <DocsLightboxContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs LightBox || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
