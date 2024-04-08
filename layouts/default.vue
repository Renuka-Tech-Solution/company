<template>
  <slot></slot>
</template>

<script setup>
import AOS from "aos";
import initClipboard from "~/utlis/initClipboard";
import initPrism from "~/utlis/initPrism";
import initPlayer from "~/utlis/initVideoplayer";
import { injectSvg } from "~/utlis/injextSvg";
onMounted(() => {
  // Check if the window object is defined
  if (typeof window !== "undefined") {
    // Import the script only on the client side
    import("bootstrap/dist/js/bootstrap.esm").then((module) => {
      // Module is imported, you can access any exported functionality if
    });
  }
  initPrism();
  initClipboard();
  initPlayer();
  injectSvg();
  AOS.init({
    duration: 1400,
    // once: true,
  });
});

import "aos/dist/aos.css"; // Import the AOS CSS

watch(
  () => useRoute().path,
  () => {
    initPlayer();
    initPrism();
    initClipboard();
    injectSvg();
  }
);
</script>

<style lang="scss">
@import "../public/assets/css/plugins.css";
@import "../public/assets/scss/style.scss";

@import "../public/assets/scss/fonts/fonts.scss";
</style>
<style lang="css">
@import "../public/assets/css/colors/colors.css";
</style>
