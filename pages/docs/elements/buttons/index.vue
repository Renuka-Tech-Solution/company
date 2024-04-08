<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsButtonsHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsButtonsPageNav />
      <DocsButtonsContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Buttons || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
