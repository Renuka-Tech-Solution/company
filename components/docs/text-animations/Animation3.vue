<template>
  <span class="rotator-fade text-primary">
    <span
      v-if="animatedText"
      class="animate__animated animate__fadeInDown"
      style="display: inline-block"
      >{{ currentStr }}</span
    >
    <span
      v-else="animatedText"
      class="animate__animated animate__fadeInDown"
      style="display: inline-block; visibility: hidden"
      >{{ currentStr }}</span
    >
  </span>
</template>

<script setup>
const strings = ["easy usage", "fast transactions", "secure payments"];
const currentStr = ref("mobile design");
const animatedText = ref(true);

const changeText = ref();
onMounted(() => {
  changeText.value = setInterval(() => {
    animatedText.value = false;
    setTimeout(() => {
      animatedText.value = true;
    }, 200);
    if (currentStr.value == strings[0]) {
      currentStr.value = strings[1];
    } else if (currentStr.value == strings[1]) {
      currentStr.value = strings[2];
    } else {
      currentStr.value = strings[0];
    }
  }, 2000);
});

onUnmounted(() => {
  clearInterval(changeText.value);
});
</script>

<style lang="scss" scoped></style>
