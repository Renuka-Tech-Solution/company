<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <DocsCommonHero
      title="FAQ"
      desc="Find answers to some frequently asked questions here."
    />
  </div>
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />

      <DocsFaqContent />
    </div>
  </div>
  <DocsCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Docs Faq || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
