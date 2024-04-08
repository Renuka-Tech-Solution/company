<template>
  <aside
    class="col-xl-2 order-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block"
  >
    <div class="widget">
      <h6 class="widget-title fs-17 mb-2 ps-xl-5">On this page</h6>
      <nav class="ps-xl-5" id="sidebar-nav">
        <ul class="list-unstyled fs-sm lh-sm text-reset scrollspyLinks">
          <li><a class="nav-link scroll active" href="#arrows">Arrows</a></li>
          <li>
            <a class="nav-link scroll" href="#brand-logos">Brand Logos</a>
          </li>
          <li><a class="nav-link scroll" href="#business">Business</a></li>
          <li><a class="nav-link scroll" href="#chat">Chat</a></li>
          <li>
            <a class="nav-link scroll" href="#cloud-web">Cloud and Web</a>
          </li>
          <li>
            <a class="nav-link scroll" href="#communication">Communication</a>
          </li>
          <li>
            <a class="nav-link scroll" href="#construction">Construction</a>
          </li>
          <li><a class="nav-link scroll" href="#content">Content</a></li>
          <li>
            <a class="nav-link scroll" href="#design-tools">Design Tools</a>
          </li>
          <li><a class="nav-link scroll" href="#devices">Devices</a></li>
          <li><a class="nav-link scroll" href="#education">Education</a></li>
          <li><a class="nav-link scroll" href="#emoji">Emoji</a></li>
          <li>
            <a class="nav-link scroll" href="#file-folder">File and Folder</a>
          </li>
          <li>
            <a class="nav-link scroll" href="#location-map">Location and Map</a>
          </li>
          <li><a class="nav-link scroll" href="#medical">Medical</a></li>
          <li><a class="nav-link scroll" href="#multimedia">Multimedia</a></li>
          <li>
            <a class="nav-link scroll" href="#photo-tools">Photography Tools</a>
          </li>
          <li><a class="nav-link scroll" href="#security">Security</a></li>
          <li><a class="nav-link scroll" href="#shape">Shape</a></li>
          <li><a class="nav-link scroll" href="#shopping">Shopping</a></li>
          <li>
            <a class="nav-link scroll" href="#sign-symbol">Sign and Symbol</a>
          </li>
          <li><a class="nav-link scroll" href="#sports">Sports</a></li>
          <li><a class="nav-link scroll" href="#time">Time</a></li>
          <li><a class="nav-link scroll" href="#transport">Transport</a></li>
          <li>
            <a class="nav-link scroll" href="#user-interface">User Interface</a>
          </li>
          <li><a class="nav-link scroll" href="#users">Users</a></li>
          <li><a class="nav-link scroll" href="#weather">Weather</a></li>
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
