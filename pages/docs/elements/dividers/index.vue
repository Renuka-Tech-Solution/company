<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsDividersHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsDividersPageNav />
      <DocsDividersContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Dividers || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
