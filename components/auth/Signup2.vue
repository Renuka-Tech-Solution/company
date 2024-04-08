<template>
  <section class="wrapper bg-dark text-white">
    <div class="container pt-18 pt-md-20 pb-21 pb-md-21 text-center">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h1 class="display-1 text-white mb-3">Sign Up</h1>
          <nav class="d-inline-block" aria-label="breadcrumb">
            <ol class="breadcrumb text-white">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Sign Up
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
        <div class="col mt-n19">
          <div class="card shadow-lg">
            <div class="row gx-0 text-center">
              <div
                class="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block"
                style="background-image: url(/assets/img/photos/tm3.jpg)"
              ></div>
              <!--/column -->
              <div class="col-lg-6">
                <div class="p-10 p-md-11 p-lg-13">
                  <h2 class="mb-3 text-start">Sign up to Sandbox</h2>
                  <p class="lead mb-6 text-start">
                    Registration takes less than a minute.
                  </p>
                  <form @submit.prevent="() => {}" class="text-start mb-3">
                    <div class="form-floating mb-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                      />
                      <label>Name</label>
                    </div>
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
                    <div class="form-floating password-field mb-4">
                      <input
                        type="password"
                        autocomplete="password"
                        class="form-control"
                        placeholder="Confirm Password"
                      />
                      <span class="password-toggle"
                        ><i class="uil uil-eye"></i
                      ></span>
                      <label>Confirm Password</label>
                    </div>
                    <a class="btn btn-primary rounded-pill btn-login w-100 mb-2"
                      >Sign Up</a
                    >
                  </form>
                  <!-- /form -->
                  <p class="mb-0">
                    Already have an account?
                    <nuxt-link to="/signin2" class="hover">Sign in</nuxt-link>
                  </p>
                  <div class="divider-icon my-4">or</div>
                  <nav class="nav social justify-content-center text-center">
                    <AuthSocials />
                  </nav>
                  <!--/.social -->
                </div>
                <!--/div -->
              </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
          <!-- /.card -->
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
