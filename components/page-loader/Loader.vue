<template>
  <div :class="`page-loader ${loaded ? 'done' : ''}`"></div>
</template>

<script setup>
const loaded = ref(false);
onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 1000);
});
</script>

<style lang="scss" scoped></style>
