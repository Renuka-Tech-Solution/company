<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsModalHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsModalPageNav />
      <DocsModalContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Modal || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
