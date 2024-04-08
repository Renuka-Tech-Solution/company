<template>
  <footer class="bg-white">
    <div class="container pt-8 pt-md-10 pb-7">
      <div class="row gx-lg-0 gy-6">
        <div class="col-lg-4">
          <div class="widget">
            <nuxt-img
              class="mb-4"
              src="/assets/img/logo-dark.png"
              srcset="/assets/img/logo-dark@2x.png 2x"
              alt="photo"
            />
            <p class="lead mb-0">
              We are trusted by over 5000+ clients. Join them by using our
              services and grow your business.
            </p>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-lg-3 offset-lg-2">
          <div class="widget">
            <div class="d-flex flex-row">
              <div>
                <div class="icon text-primary fs-28 me-4 mt-n1">
                  <i class="uil uil-phone-volume"></i>
                </div>
              </div>
              <div>
                <h5 class="mb-1">Phone</h5>
                <p class="mb-0">00 (123) 456 78 90 <br />00 (987) 654 32 10</p>
              </div>
            </div>
            <!--/div -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-lg-3">
          <div class="widget">
            <div class="d-flex flex-row">
              <div>
                <div class="icon text-primary fs-28 me-4 mt-n1">
                  <i class="uil uil-location-pin-alt"></i>
                </div>
              </div>
              <div class="align-self-start justify-content-start">
                <h5 class="mb-1">Address</h5>
                <address>
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
              </div>
            </div>
            <!--/div -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
      </div>
      <!--/.row -->
      <hr class="mt-13 mt-md-14 mb-7" />
      <div class="d-md-flex align-items-center justify-content-between">
        <p class="mb-2 mb-lg-0">
          © {{ new Date().getFullYear() }} Sandbox. All rights reserved.
        </p>
        <nav class="nav social social-muted mb-0 text-md-end">
          <FootersComponentsSocials />
        </nav>
        <!-- /.social -->
      </div>
    </div>
    <!-- /.container -->
  </footer>
  <CommonScrolltop />
</template>

<script setup></script>

<style lang="scss" scoped></style>
