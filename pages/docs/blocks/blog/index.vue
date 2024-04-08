<template>
  <div class="content-wrapper">
    <Header1 />
    <Hero />
    <Tabbar />
    <Blog1 />
    <Blog2 />
    <Blog3 />
    <Blog4 />
    <Blog5 />
  </div>
  <BlocksCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Blocs Blog || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
import Tabbar from "~/components/blocks/common/Tabbar.vue";
import Header1 from "~/components/headers/Header1.vue";
import Hero from "~/components/blocks/blog/Hero";
import Blog1 from "~/components/blocks/blog/Blog1";
import Blog2 from "~/components/blocks/blog/Blog2.vue";
import Blog3 from "~/components/blocks/blog/Blog3.vue";
import Blog4 from "~/components/blocks/blog/Blog4.vue";
import Blog5 from "~/components/blocks/blog/Blog5.vue";
</script>

<style lang="scss" scoped></style>
