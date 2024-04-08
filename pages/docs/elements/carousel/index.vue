<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsCarouselHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsCarouselPageNav />
      <DocsCarouselContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Carousel || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
