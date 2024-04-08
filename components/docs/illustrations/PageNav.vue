<template>
  <aside
    class="col-xl-2 order-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block"
  >
    <div class="widget">
      <h6 class="widget-title fs-17 mb-2 ps-xl-5">On this page</h6>
      <nav class="ps-xl-5" id="sidebar-nav">
        <ul class="list-unstyled fs-sm lh-sm text-reset scrollspyLinks">
          <li><a class="nav-link scroll active" href="#snippet-1">Set 1</a></li>
          <li><a class="nav-link scroll" href="#snippet-2">Set 2</a></li>
          <li><a class="nav-link scroll" href="#snippet-3">Set 3</a></li>
          <li><a class="nav-link scroll" href="#snippet-4">Set 4</a></li>
          <li><a class="nav-link scroll" href="#snippet-5">Set 5</a></li>
          <li><a class="nav-link scroll" href="#snippet-6">Set 6</a></li>
          <li><a class="nav-link scroll" href="#snippet-7">Set 7</a></li>
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
