<template>
  <header class="wrapper bg-gray">
    <nav
      :class="`navbar navbar-expand-lg center-logo transparent navbar-light  ${
        addClass2 ? 'fixed navbar-clone' : ''
      } ${
        addClass ? 'navbar-clone navbar-stick navbar-light' : ' navbar-unstick'
      } `"
    >
      <div class="container flex-lg-row flex-nowrap align-items-center">
        <div class="navbar-brand w-100">
          <nuxt-link to="/">
            <nuxt-img
              src="/assets/img/logo.png"
              srcset="/assets/img/logo@2x.png 2x"
              alt="photo"
            />
          </nuxt-link>
        </div>
        <div
          class="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
          id="ofCanvasBody"
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
          <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
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
          <!-- /.offcanvas-body -->
        </div>
        <!-- /.navbar-collapse -->
        <div class="navbar-other w-100 d-flex ms-auto">
          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <li class="nav-item dropdown language-select text-uppercase">
              <HeadersComponentsLanguage />
            </li>
            <li class="nav-item d-none d-md-block">
              <nuxt-link
                to="/contact"
                class="btn btn-sm btn-primary rounded-pill"
                >Contact</nuxt-link
              >
            </li>
            <li class="nav-item d-lg-none">
              <button class="hamburger offcanvas-nav-btn" @click="menuOpen">
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
      <!-- /.container -->
    </nav>
    <!-- /.navbar -->
  </header>
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

const navLinks = ref([
  { text: "Home", href: "#home" },
  { text: "Services", href: "#services" },
  { text: "Process", href: "#process" },
  { text: "About", href: "#about" },
  { text: "Testimonials", href: "#testimonials" },
  { text: "Contact", href: "#contact" },
]);

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

<style lang="scss" scoped></style>
