<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsMiscHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsMiscPageNav />
      <DocsMiscContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Misc || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
