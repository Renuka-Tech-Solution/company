<template>
  <span class="typer text-primary" id="typewriter2"></span>
</template>

<script setup>
import Typewriter from "typewriter-effect/dist/core";

onMounted(() => {
  new Typewriter("#typewriter2", {
    strings: ["customer satisfaction", "business needs", "creative ideas"],
    autoStart: true,
    loop: true,
  });
});
</script>

<style lang="scss" scoped></style>
