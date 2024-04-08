<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsTextAnimationsHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsTextAnimationsPageNav />
      <DocsTextAnimationsContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title:
    "Docs Text Animations || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
