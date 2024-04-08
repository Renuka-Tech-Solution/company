<template>
  <header class="wrapper bg-gray">
    <nav
      :class="`navbar navbar-expand-lg extended extended-alt navbar-light navbar-bg-light caret-none ${
        addClass2 ? 'fixed navbar-clone' : ''
      } ${addClass ? 'navbar-clone navbar-stick' : ' navbar-unstick'} `"
    >
      <div class="container flex-lg-column">
        <div
          class="topbar d-flex flex-row justify-content-lg-center align-items-center"
        >
          <div class="navbar-brand">
            <nuxt-link to="/"
              ><nuxt-img
                src="/assets/img/logo-dark.png"
                srcset="/assets/img/logo-dark@2x.png 2x"
                alt="photo"
            /></nuxt-link>
          </div>
        </div>
        <!-- /.d-flex -->
        <div
          class="navbar-collapse-wrapper bg-white d-flex flex-row align-items-center justify-content-between"
        >
          <div class="navbar-other w-100 d-none d-lg-block">
            <nav class="nav social social-muted">
              <HeadersComponentsSocials4 />
            </nav>
            <!-- /.social -->
          </div>
          <!-- /.navbar-other -->
          <div
            id="ofCanvasBody"
            class="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
          >
            <div class="offcanvas-header d-lg-none">
              <h3 class="text-white fs-30 mb-0">Sandbox</h3>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                @click="menuClose"
              ></button>
            </div>
            <div class="offcanvas-body d-flex flex-column h-100 header25">
              <ul class="navbar-nav scrollspyLinks">
                <li
                  v-for="(link, index) in navLinks"
                  :key="index"
                  class="nav-item"
                >
                  <a
                    :class="{
                      'nav-link': true,
                      scroll: true,
                      active: index === 0,
                    }"
                    :href="link.href"
                  >
                    {{ link.text }}
                  </a>
                </li>
              </ul>
              <!-- /.navbar-nav -->
              <div class="offcanvas-footer d-lg-none">
                <div>
                  <a href="mailto:first.last@email.com" class="link-inverse"
                    >info@email.com</a
                  >
                  <br />
                  00 (123) 456 78 90 <br />
                  <nav class="nav social social-white mt-4">
                    <HeadersComponentsSocials />
                  </nav>
                  <!-- /.social -->
                </div>
              </div>
              <!-- /.offcanvas-footer -->
            </div>
          </div>
          <!-- /.navbar-collapse -->
          <div class="navbar-other w-100 d-flex">
            <ul class="navbar-nav flex-row align-items-center ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-info"
                  ><i class="uil uil-info-circle"></i
                ></a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-search"
                  ><i class="uil uil-search"></i
                ></a>
              </li>
              <li class="nav-item d-lg-none">
                <button @click="menuOpen" class="hamburger offcanvas-nav-btn">
                  <span></span>
                </button>
              </li>
            </ul>
            <!-- /.navbar-nav -->
          </div>
          <!-- /.navbar-other -->
          <div
            id="offcanvasBackdrop"
            @click="menuClose"
            class="offcanvas-backdrop fade"
            style="display: none"
          ></div>
        </div>
        <!-- /.navbar-collapse-wrapper -->
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.navbar -->
    <div
      class="offcanvas offcanvas-end text-inverse"
      id="offcanvas-info"
      data-bs-scroll="true"
    >
      <div class="offcanvas-header">
        <h3 class="text-white fs-30 mb-0">Sandbox</h3>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body pb-6">
        <div class="widget mb-8">
          <p>
            Sandbox is a multipurpose HTML5 template with various layouts which
            will be a great solution for your business.
          </p>
        </div>
        <!-- /.widget -->
        <div class="widget mb-8">
          <h4 class="widget-title text-white mb-3">Contact Info</h4>
          <address>
            Moonshine St. 14/05 <br />
            Light City, London
          </address>
          <a href="mailto:first.last@email.com">info@email.com</a><br />
          00 (123) 456 78 90
        </div>
        <!-- /.widget -->
        <div class="widget mb-8">
          <h4 class="widget-title text-white mb-3">Learn More</h4>
          <ul class="list-unstyled">
            <HeadersComponentsLinks />
          </ul>
        </div>
        <!-- /.widget -->
        <div class="widget">
          <h4 class="widget-title text-white mb-3">Follow Us</h4>
          <nav class="nav social social-white">
            <HeadersComponentsSocials />
          </nav>
          <!-- /.social -->
        </div>
        <!-- /.widget -->
      </div>
      <!-- /.offcanvas-body -->
    </div>
    <!-- /.offcanvas -->
    <div
      class="offcanvas offcanvas-top bg-light"
      id="offcanvas-search"
      data-bs-scroll="true"
    >
      <div class="container d-flex flex-row py-6">
        <form @submit.prevent="() => {}" class="search-form w-100">
          <input
            type="text"
            class="form-control"
            placeholder="Type keyword and hit enter"
          />
        </form>
        <!-- /.search-form -->
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <!-- /.container -->
    </div>
    <!-- /.offcanvas -->
  </header>
</template>

<script setup>
const navLinks = ref([
  { text: "Home", href: "#home" },
  { text: "Services", href: "#services" },
  { text: "Portfolio", href: "#portfolio" },
  { text: "Testimonials", href: "#testimonials" },
  { text: "About", href: "#about" },
  { text: "Pricing", href: "#pricing" },
]);
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

const menuOpen = () => {
  document.getElementById("ofCanvasBody").classList.toggle("show");
  document.getElementById("offcanvasBackdrop").style.display = "block";
  document.getElementById("offcanvasBackdrop").classList.toggle("show");
};

const menuClose = () => {
  document.getElementById("ofCanvasBody").classList.toggle("show");
  document.getElementById("offcanvasBackdrop").classList.toggle("show");
  setTimeout(() => {
    document.getElementById("offcanvasBackdrop").style.display = "none";
  }, 300);
};

const addClass = ref(false);
const addClass2 = ref(false);

const handleScroll = () => {
  addClass2.value = window.scrollY >= 200;
  addClass.value = window.scrollY >= 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="css">
@media (min-width: 992px) {
  .header25 .navbar-nav > .nav-item > .nav-link {
    position: relative;
  }

  .header25 .navbar-nav > .nav-item + .nav-item > .nav-link:before {
    content: "";
    display: block;
    position: absolute;
    width: 3px;
    height: 3px;
    top: 50%;
    left: -2px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 50%;
  }
}
</style>
