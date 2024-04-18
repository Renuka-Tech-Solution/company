<template>
  <li class="nav-item dropdown dropdown-mega">
    <nuxt-link to="/" :class="`nav-link ${isActiveMenu(index) ? 'active' : ''}`">Welcome</nuxt-link>
    <!-- <ul class="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
      <li class="mega-menu-content mega-menu-scroll">
        <ul
          class="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled"
        >
          <li class="col" v-for="demo in demos" :key="demo.id">
            <nuxt-link
              :class="`dropdown-item ${
                isActiveMenu([], demo.route) ? 'active' : ''
              }`"
              :to="demo.route"
            >
              <figure class="rounded lift d-none d-lg-block">
                <nuxt-img
                  :src="demo.imageSrc"
                  :srcset="demo.imageSrcSet"
                  alt="image"
                />
              </figure>
              <span class="d-lg-none">{{ demo.name }}</span>
            </nuxt-link>
          </li>
        </ul>
        
        <span class="d-none d-lg-flex"
          ><i class="uil uil-direction"></i
          ><strong>Scroll to view more</strong></span
        >
      </li>
    
    </ul> -->
    <!--/.dropdown-menu -->
  </li>
  <li class="nav-item">
    <nuxt-link to="/shopify" :class="`nav-link ${isActiveMenu(shopify) ? 'active' : ''}`">Shopify</nuxt-link>
  </li>
  <li class="nav-item">
    <nuxt-link to="/services" :class="`nav-link ${isActiveMenu(services) ? 'active' : ''}`">Services</nuxt-link>
  </li>
  <li class="nav-item">
    <nuxt-link to="/portfolio" :class="`nav-link ${isActiveMenu(about) ? 'active' : ''}`">Portfolio</nuxt-link>
  </li>
  <li class="nav-item">
    <nuxt-link to="/about" :class="`nav-link ${isActiveMenu(about) ? 'active' : ''}`">About</nuxt-link>
  </li>
</template>

<script setup>
import {
  index,
  shopify,
  services,
  about,
  portfolio,
  blockItems,
  usage,
  styleGuideItems,
  elements,
} from "~/data/menu";

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
