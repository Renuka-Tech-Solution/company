<template>
  <a
    v-for="(item, index) in socialButtons"
    :key="index"
    :href="item.link"
    :class="item.buttonClass"
  >
    <i :class="item.iconClass"></i>
  </a>
</template>

<script setup>
const socialButtons = ref([
  {
    link: "#",
    buttonClass: "btn btn-circle btn-sm btn-google",
    iconClass: "uil uil-google",
  },
  {
    link: "#",
    buttonClass: "btn btn-circle btn-sm btn-facebook-f",
    iconClass: "uil uil-facebook-f",
  },
  {
    link: "#",
    buttonClass: "btn btn-circle btn-sm btn-twitter",
    iconClass: "uil uil-twitter",
  },
]);
</script>
