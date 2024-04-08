<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsCommonHero
      title="Get Started"
      desc="Guide to get started with Sandbox Modern & Multipurpose Nuxtjs Template"
    />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsGetStartedPageNav />
      <DocsGetStartedContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
