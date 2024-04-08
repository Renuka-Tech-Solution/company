<template>
  <section
    class="wrapper image-wrapper bg-image bg-overlay bg-overlay-light-600 text-white"
    style="background-image: url(/assets/img/photos/bg18.png)"
  >
    <div class="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h1 class="display-1 mb-3">Sign In</h1>
          <nav class="d-inline-block" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Sign In
              </li>
            </ol>
          </nav>
          <!-- /nav -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16">
      <div class="row">
        <div class="col-lg-7 col-xl-6 col-xxl-5 mx-auto mt-n20">
          <div class="card">
            <div class="card-body p-11 text-center">
              <h2 class="mb-3 text-start">Welcome Back</h2>
              <p class="lead mb-6 text-start">
                Fill your email and password to sign in.
              </p>
              <form @submit.prevent="() => {}" class="text-start mb-3">
                <div class="form-floating mb-4">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                  <label>Email</label>
                </div>
                <div class="form-floating password-field mb-4">
                  <input
                    type="password"
                    autocomplete="password"
                    class="form-control"
                    placeholder="Password"
                  />
                  <span class="password-toggle"
                    ><i class="uil uil-eye"></i
                  ></span>
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
                <nuxt-link to="/signup" class="hover">Sign up</nuxt-link>
              </p>
              <div class="divider-icon my-4">or</div>
              <nav class="nav social justify-content-center text-center">
                <AuthSocials />
              </nav>
              <!--/.social -->
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
