<template>
  <div class="content-wrapper">
    <HeadersHeader1 bg="bg-light" />
    <template v-if="props.error.statusCode == 404">
      <NotFound404 />
    </template>
    <template v-else>
      <div
        class="fs-22 mt-50 mb-50 ml-10"
        style="min-height: calc(100vh - 200px)"
      >
        An error found with {{ props.error.statusCode }} status code
      </div>
    </template>
  </div>
  <FootersFooter5 />
</template>

<script setup>
const props = defineProps({
  error: Object,
});
useSeoMeta({
  title: ` ${props.error.statusCode == 404 ? "Page not found" : "An error found"}  || Sandbox - Modern & Multipurpose Nuxtjs Template`,
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="css">
@import "./public/assets/css/plugins.css";
</style>
<style lang="scss">
@import "./public/assets/scss/style.scss";
</style>
