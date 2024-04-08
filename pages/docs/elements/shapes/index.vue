<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsShapesHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsShapesPageNav />
      <DocsShapesContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Shapes || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
