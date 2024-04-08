<template>
  <header class="wrapper bg-light pt-1">
    <nav
      :class="`navbar navbar-expand-lg classic transparent navbar-light ${
        addClass2 ? 'fixed navbar-clone' : ''
      } ${addClass ? 'navbar-clone navbar-stick' : ' navbar-unstick'} `"
    >
      <div class="container flex-lg-row flex-nowrap align-items-center">
        <div class="navbar-brand w-100">
          <nuxt-link to="/">
            <nuxt-img
              src="/assets/img/logo-dark.png"
              srcset="/assets/img/logo-dark@2x.png 2x"
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
              @click="menuClose"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
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
        <div class="navbar-other ms-lg-4">
          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-search"
                ><i class="uil uil-search"></i
              ></a>
            </li>
            <li class="nav-item d-none d-md-block">
              <a
                href="#"
                class="btn btn-sm btn-primary rounded-pill"
                data-bs-toggle="modal"
                data-bs-target="#modal-signin"
                >Sign In</a
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
    <div class="modal fade" id="modal-signin" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content text-center">
          <div class="modal-body">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <h2 class="mb-3 text-start">Welcome Back</h2>
            <p class="lead mb-6 text-start">
              Fill your email and password to sign in.
            </p>
            <form @submit.prevent="() => {}" class="text-start mb-3">
              <div class="form-floating mb-4">
                <input type="email" class="form-control" placeholder="Email" />
                <label>Email</label>
              </div>
              <div class="form-floating password-field mb-4">
                <input
                  type="password"
                  autocomplete="password"
                  class="form-control"
                  placeholder="Password"
                />
                <span class="password-toggle"><i class="uil uil-eye"></i></span>
                <label>Password</label>
              </div>
              <a class="btn btn-primary rounded-pill btn-login w-100 mb-2"
                >Sign In</a
              >
            </form>
            <!-- /form -->
            <p class="mb-1"><a href="#" class="hover">Forgot Password?</a></p>
            <p class="mb-0">
              Don't have an account?
              <a
                href="#"
                data-bs-target="#modal-signup"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                class="hover"
                >Sign up</a
              >
            </p>
            <div class="divider-icon my-4">or</div>
            <nav class="nav social justify-content-center text-center">
              <HeadersComponentsSocials3 />
            </nav>
            <!--/.social -->
          </div>
          <!--/.modal-content -->
        </div>
        <!--/.modal-body -->
      </div>
      <!--/.modal-dialog -->
    </div>
    <!--/.modal -->
    <div class="modal fade" id="modal-signup" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content text-center">
          <div class="modal-body">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <h2 class="mb-3 text-start">Sign up to Sandbox</h2>
            <p class="lead mb-6 text-start">
              Registration takes less than a minute.
            </p>
            <form @submit.prevent="() => {}" class="text-start mb-3">
              <div class="form-floating mb-4">
                <input type="text" class="form-control" placeholder="Name" />
                <label>Name</label>
              </div>
              <div class="form-floating mb-4">
                <input type="email" class="form-control" placeholder="Email" />
                <label>Email</label>
              </div>
              <div class="form-floating password-field mb-4">
                <input
                  type="password"
                  autocomplete="password"
                  class="form-control"
                  placeholder="Password"
                />
                <span class="password-toggle"><i class="uil uil-eye"></i></span>
                <label>Password</label>
              </div>
              <div class="form-floating password-field mb-4">
                <input
                  type="password"
                  autocomplete="password"
                  class="form-control"
                  placeholder="Confirm Password"
                />
                <span class="password-toggle"><i class="uil uil-eye"></i></span>
                <label>Confirm Password</label>
              </div>
              <a class="btn btn-primary rounded-pill btn-login w-100 mb-2"
                >Sign Up</a
              >
            </form>
            <!-- /form -->
            <p class="mb-0">
              Already have an account?
              <a
                href="#"
                data-bs-target="#modal-signin"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                class="hover"
                >Sign in</a
              >
            </p>
            <div class="divider-icon my-4">or</div>
            <nav class="nav social justify-content-center text-center">
              <HeadersComponentsSocials3 />
            </nav>
            <!--/.social -->
          </div>
          <!--/.modal-content -->
        </div>
        <!--/.modal-body -->
      </div>
      <!--/.modal-dialog -->
    </div>
    <!--/.modal -->
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
