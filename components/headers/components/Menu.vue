<template>
  <li class="nav-item">
    <nuxt-link to="/" :class="`nav-link ${isActiveMenu(index) ? 'active' : ''}`"
      >Welcome</nuxt-link
    >
  </li>
  <li class="nav-item">
    <nuxt-link to="/shopify" :class="`nav-link ${isActiveMenu(shopify) ? 'active' : ''}`"
      >Shopify</nuxt-link
    >
  </li>
  <li class="nav-item">
    <nuxt-link
      to="/services"
      :class="`nav-link ${isActiveMenu(services) ? 'active' : ''}`"
      >Services</nuxt-link
    >
  </li>
  <li class="nav-item">
    <nuxt-link to="/portfolio" :class="`nav-link ${isActiveMenu(about) ? 'active' : ''}`"
      >Portfolio</nuxt-link
    >
  </li>
  <li class="nav-item">
    <nuxt-link to="/about" :class="`nav-link ${isActiveMenu(about) ? 'active' : ''}`"
      >About</nuxt-link
    >
  </li>
</template>

<script setup>
import { index, shopify, services, about, portfolio } from "~/data/menu";

const route = useRoute();

const pathName = route.path;

const isActiveMenu = (menu, menuItem) => {
  let isActive = false;

  if (typeof menu != "string" && menu.length) {
    menu?.forEach((elm) => {
      if (elm.route == pathName) {
        isActive = true;
      }
      if (elm.submenu) {
        elm.submenu.forEach((elm2) => {
          if (elm2.route == pathName) {
            isActive = true;
          }
        });
      }
    });
  } else {
    return menuItem == pathName;
  }

  return isActive;
};
</script>

<style lang="scss" scoped></style>
