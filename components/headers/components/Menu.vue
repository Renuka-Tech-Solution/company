<template>
  <li class="nav-item dropdown dropdown-mega">
    <a
      :class="`nav-link dropdown-toggle ${isActiveMenu(demos) ? 'active' : ''}`"
      href="#"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
      >Demos</a
    >
    <ul class="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
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
        <!--/.row -->
        <span class="d-none d-lg-flex"
          ><i class="uil uil-direction"></i
          ><strong>Scroll to view more</strong></span
        >
      </li>
      <!--/.mega-menu-content-->
    </ul>
    <!--/.dropdown-menu -->
  </li>
  <li class="nav-item dropdown">
    <a
      :class="`nav-link dropdown-toggle ${isActiveMenu(pages) ? 'active' : ''}`"
      href="#"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
      >Pages</a
    >
    <ul class="dropdown-menu">
      <li
        v-for="item in pages"
        :key="item.id"
        :class="`${
          item.submenu ? 'dropdown dropdown-submenu dropend' : 'nav-item'
        }`"
      >
        <a
          :class="`dropdown-item dropdown-toggle  ${
            isActiveMenu(item.submenu ? item.submenu : [], item.route)
              ? 'active'
              : ''
          }`"
          v-if="item.submenu"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
          href="#"
          >{{ item.label }}</a
        >
        <nuxt-link
          v-else
          :class="`dropdown-item   ${
            isActiveMenu([], item.route) ? 'active' : ''
          }`"
          :to="item.route"
          >{{ item.label }}</nuxt-link
        >
        <ul class="dropdown-menu">
          <li
            class="nav-item"
            v-for="submenuItem in item.submenu"
            :key="submenuItem.id"
          >
            <nuxt-link
              :class="`dropdown-item ${
                isActiveMenu([], submenuItem.route) ? 'active' : ''
              }`"
              :to="submenuItem.route"
              >{{ submenuItem.label }}</nuxt-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li class="nav-item dropdown">
    <a
      :class="`nav-link dropdown-toggle ${
        isActiveMenu(projects) ? 'active' : ''
      } ${isActiveMenu(singleProjects) ? 'active' : ''}`"
      href="#"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
      >Projects</a
    >
    <div class="dropdown-menu dropdown-lg">
      <div class="dropdown-lg-content">
        <div>
          <h6 class="dropdown-header">Project Pages</h6>
          <ul class="list-unstyled">
            <li v-for="project in projects" :key="project.id">
              <nuxt-link
                :class="`dropdown-item ${
                  isActiveMenu([], project.route) ? 'active' : ''
                }`"
                :to="project.route"
                >{{ project.label }}</nuxt-link
              >
            </li>
          </ul>
        </div>
        <!-- /.column -->
        <div>
          <h6 class="dropdown-header">Single Projects</h6>
          <ul class="list-unstyled">
            <li v-for="project in singleProjects" :key="project.id">
              <nuxt-link
                :class="`dropdown-item ${
                  isActiveMenu([], project.route) ? 'active' : ''
                }`"
                :to="project.route"
                >{{ project.label }}</nuxt-link
              >
            </li>
          </ul>
        </div>
        <!-- /.column -->
      </div>
      <!-- /auto-column -->
    </div>
  </li>
  <li class="nav-item dropdown">
    <a
      :class="`nav-link dropdown-toggle ${
        isActiveMenu(blogItems) ? 'active' : ''
      }`"
      href="#"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
      >Blog</a
    >
    <ul class="dropdown-menu">
      <li
        v-for="blogItem in blogItems"
        :key="blogItem.id"
        :class="{
          'dropdown dropdown-submenu dropend': blogItem.dropdown,
          'nav-item': !blogItem.dropdown,
        }"
      >
        <a
          :class="`dropdown-item dropdown-toggle  ${
            isActiveMenu(
              blogItem.submenu ? blogItem.submenu : [],
              blogItem.route
            )
              ? 'active'
              : ''
          }`"
          v-if="blogItem.submenu"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
          href="#"
          >{{ blogItem.label }}</a
        >
        <nuxt-link
          v-else
          :class="`dropdown-item   ${
            isActiveMenu([], blogItem.route) ? 'active' : ''
          }`"
          :to="blogItem.route"
          >{{ blogItem.label }}</nuxt-link
        >
        <ul v-if="blogItem.dropdown" class="dropdown-menu">
          <li v-for="postItem in blogItem.submenu" :key="postItem.id">
            <nuxt-link
              :class="`dropdown-item ${
                isActiveMenu([], postItem.route) ? 'active' : ''
              }`"
              :to="postItem.route"
              >{{ postItem.label }}</nuxt-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li class="nav-item dropdown dropdown-mega">
    <a
      :class="`nav-link dropdown-toggle ${
        isActiveMenu(blockItems) ? 'active' : ''
      }`"
      href="#"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
      >Blocks</a
    >
    <ul class="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
      <li class="mega-menu-content">
        <ul
          class="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled"
        >
          <li v-for="blockItem in blockItems" :key="blockItem.id" class="col">
            <nuxt-link
              :class="`dropdown-item ${
                isActiveMenu([], blockItem.route) ? 'active' : ''
              }`"
              :to="blockItem.route"
            >
              <div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                <nuxt-img
                  class="rounded-0"
                  :src="blockItem.imageSrc"
                  alt="image"
                />
              </div>
              <span>{{ blockItem.label }}</span>
            </nuxt-link>
          </li>
        </ul>
        <!--/.row -->
      </li>
      <!--/.mega-menu-content-->
    </ul>
    <!--/.dropdown-menu -->
  </li>
  <li class="nav-item dropdown dropdown-mega">
    <a
      
      :class="`nav-link dropdown-toggle ${isActiveMenu([...usage,
  ...styleGuideItems,
  ...elements,]) ? 'active' : ''}`"
      href="#"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
      >Documentation</a
    >
    <ul class="dropdown-menu mega-menu">
      <li class="mega-menu-content">
        <div class="row gx-0 gx-lg-3">
          <div class="col-lg-4">
            <h6 class="dropdown-header">Usage</h6>
            <ul class="list-unstyled cc-2 pb-lg-1">
              <li v-for="item in usage" :key="item.id">
                <nuxt-link
                  :class="`dropdown-item ${
                    isActiveMenu([], item.route) ? 'active' : ''
                  }`"
                  :to="item.route"
                  >{{ item.label }}</nuxt-link
                >
              </li>
            </ul>
            <h6 class="dropdown-header mt-lg-6">Styleguide</h6>
            <ul class="list-unstyled cc-2">
              <li v-for="item in styleGuideItems" :key="item.id">
                <nuxt-link
                  :class="`dropdown-item ${
                    isActiveMenu([], item.route) ? 'active' : ''
                  }`"
                  :to="item.route"
                  >{{ item.label }}</nuxt-link
                >
              </li>
            </ul>
          </div>
          <!--/column -->
          <div class="col-lg-8">
            <h6 class="dropdown-header">Elements</h6>
            <ul class="list-unstyled cc-3">
              <li v-for="element in elements" :key="element.id">
                <nuxt-link
                  :class="`dropdown-item ${
                    isActiveMenu([], element.route) ? 'active' : ''
                  }`"
                  :to="element.route"
                  >{{ element.label }}</nuxt-link
                >
              </li>
            </ul>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </li>
      <!--/.mega-menu-content-->
    </ul>
    <!--/.dropdown-menu -->
  </li>
</template>

<script setup>
import {
  demos,
  pages,
  projects,
  singleProjects,
  blogItems,
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
