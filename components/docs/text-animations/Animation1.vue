<template>
  <span class="typer text-primary" id="typewriter"></span>
</template>

<script setup>
import Typewriter from "typewriter-effect/dist/core";

onMounted(() => {
  new Typewriter("#typewriter", {
    strings: ["customer satisfaction", "business needs", "creative ideas"],
    autoStart: true,
  });
});
</script>

<style lang="scss" scoped></style>
