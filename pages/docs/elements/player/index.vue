<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsPlayerHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsPlayerPageNav />
      <DocsPlayerContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Player || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
