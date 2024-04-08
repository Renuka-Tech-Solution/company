<template>
  <header class="wrapper bg-soft-primary">
    <nav
      :class="`navbar navbar-expand-lg center-logo transparent position-absolute ${
        addClass2 ? 'fixed navbar-clone' : ''
      } ${
        addClass
          ? 'navbar-clone navbar-stick navbar-light'
          : ' navbar-unstick navbar-dark'
      } `"
    >
      <div class="container justify-content-between align-items-center">
        <div
          class="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none"
        >
          <div class="navbar-brand">
            <nuxt-link to="/">
              <nuxt-img
                class="logo-dark"
                src="/assets/img/logo-dark.png"
                srcset="/assets/img/logo-dark@2x.png 2x"
                alt="photo"
              />
              <nuxt-img
                class="logo-light"
                src="/assets/img/logo-light.png"
                srcset="/assets/img/logo-light@2x.png 2x"
                alt="photo"
              />
            </nuxt-link>
          </div>
          <div class="navbar-other ms-auto">
            <ul class="navbar-nav flex-row align-items-center">
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
        <!-- /.d-flex -->
        <div
          class="navbar-collapse-wrapper d-flex flex-row align-items-center w-100"
        >
          <div
            id="ofCanvasBody"
            class="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
          >
            <div
              class="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-15"
            >
              <nuxt-link to="/" class="transition-none d-none d-lg-flex"
                ><nuxt-img
                  class="logo-dark"
                  src="/assets/img/logo-dark.png"
                  srcset="/assets/img/logo-dark@2x.png 2x"
                  alt="photo" />
                <nuxt-img
                  class="logo-light"
                  src="/assets/img/logo-light.png"
                  srcset="/assets/img/logo-light@2x.png 2x"
                  alt="photo"
              /></nuxt-link>
              <h3 class="text-white fs-30 mb-0 d-lg-none">Sandbox</h3>
              <button
                type="button"
                class="btn-close btn-close-white d-lg-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                @click="menuClose"
              ></button>
            </div>
            <HeadersComponentsMenu2 />
            <div class="offcanvas-body d-lg-none order-4 mt-auto">
              <div class="offcanvas-footer">
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
            </div>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.navbar-collapse-wrapper -->
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.navbar -->
  </header>
</template>

<script setup>
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
