<template>
  <aside
    class="col-xl-2 order-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block"
  >
    <div class="widget">
      <h6 class="widget-title fs-17 mb-2 ps-xl-5">On this page</h6>
      <nav class="ps-xl-5" id="sidebar-nav">
        <ul class="list-unstyled fs-sm lh-sm text-reset scrollspyLinks">
          <li>
            <a class="nav-link scroll active" href="#snippet-1">Lineal</a>
            <ul class="list-unstyled pt-2 ps-2 fs-sm lh-sm text-reset">
              <li><a class="nav-link scroll" href="#snippet-1-1">Colors</a></li>
              <li><a class="nav-link scroll" href="#snippet-1-2">Sizes</a></li>
              <li><a class="nav-link scroll" href="#snippet-1-3">Icons</a></li>
            </ul>
          </li>
          <li>
            <a class="nav-link scroll" href="#snippet-2">Solid Mono</a>
            <ul class="list-unstyled pt-2 ps-2 fs-sm lh-sm text-reset">
              <li><a class="nav-link scroll" href="#snippet-2-1">Colors</a></li>
              <li><a class="nav-link scroll" href="#snippet-2-2">Sizes</a></li>
              <li><a class="nav-link scroll" href="#snippet-2-3">Icons</a></li>
            </ul>
          </li>
          <li>
            <a class="nav-link scroll" href="#snippet-3">Solid Duo</a>
            <ul class="list-unstyled pt-2 ps-2 fs-sm lh-sm text-reset">
              <li><a class="nav-link scroll" href="#snippet-3-1">Colors</a></li>
              <li><a class="nav-link scroll" href="#snippet-3-2">Sizes</a></li>
              <li><a class="nav-link scroll" href="#snippet-3-3">Icons</a></li>
            </ul>
          </li>
          <li>
            <a class="nav-link scroll" href="#snippet-4">Solid</a>
            <ul class="list-unstyled pt-2 ps-2 fs-sm lh-sm text-reset">
              <li><a class="nav-link scroll" href="#snippet-4-1">Colors</a></li>
              <li><a class="nav-link scroll" href="#snippet-4-2">Sizes</a></li>
              <li><a class="nav-link scroll" href="#snippet-4-3">Icons</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /nav -->
    </div>
    <!-- /.widget -->
  </aside>
</template>

<script setup>
import addScrollspy from "~/utlis/addScrollSpy";
import addSmoothScroll from "~/utlis/smoothScroll";
function ititScrollspy() {
  addScrollspy("nav-link scroll");
}
onMounted(() => {
  addSmoothScroll();
  window.addEventListener("scroll", ititScrollspy);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", ititScrollspy);
});
</script>

<style lang="scss" scoped></style>
