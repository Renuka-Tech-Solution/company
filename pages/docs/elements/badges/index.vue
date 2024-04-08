<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsBadgesHero />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsBadgesPageNav />
      <DocsBadgesContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Badges || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
