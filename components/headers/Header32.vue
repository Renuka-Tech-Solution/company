<template>
  <header class="wrapper bg-light">
    <div class="bg-primary text-white fw-bold fs-15 mb-2">
      <div class="container py-1 d-md-flex flex-md-row">
        <div class="d-flex flex-row align-items-center">
          <div class="icon text-white fs-22 mt-1 me-2">
            <i class="uil uil-location-pin-alt"></i>
          </div>
          <address class="mb-0">Moonshine St. 14/05 Light City</address>
        </div>
        <div class="d-flex flex-row align-items-center me-6 ms-auto">
          <div class="icon text-white fs-22 mt-1 me-2">
            <i class="uil uil-phone-volume"></i>
          </div>
          <p class="mb-0">00 (123) 456 78 90</p>
        </div>
        <div class="d-flex flex-row align-items-center">
          <div class="icon text-white fs-22 mt-1 me-2">
            <i class="uil uil-message"></i>
          </div>
          <p class="mb-0">
            <a href="mailto:sandbox@email.com" class="link-white hover"
              >sandbox@email.com</a
            >
          </p>
        </div>
      </div>
      <!-- /.container -->
    </div>
    <nav
      :class="`navbar navbar-expand-lg center-nav transparent navbar-light ${
        addClass2 ? 'fixed navbar-clone' : ''
      } ${addClass ? 'navbar-clone navbar-stick' : ' navbar-unstick'} `"
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
          <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul class="navbar-nav">
              <HeadersComponentsMenu />
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
              <nuxt-link to="/contact" class="btn btn-sm btn-primary rounded"
                >Contact</nuxt-link
              >
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
