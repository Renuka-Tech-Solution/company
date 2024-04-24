<template>
  <footer class="bg-light">
    <div class="container">
      <div class="card shadow-lg mt-n16 mt-md-n21 mb-15 mb-md-14">
        <div class="row gx-0">
          <div
            class="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block"
            style="background-image: url(/assets/img/photos/tm1.jpg)"
          ></div>
          <!--/column -->
          <div class="col-lg-6">
            <div class="p-10 p-md-11 p-lg-13">
              <h2 class="display-4 mb-3">Let’s Talk</h2>
              <p class="lead fs-lg">
                Let's make something great together. We are trusted by over
                5000+ clients. Join them by using our services and grow your
                business.
              </p>
              <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus.
              </p>
              <nuxt-link to="/signup" class="btn btn-primary rounded-pill mt-2"
                >Join Us</nuxt-link
              >
            </div>
            <!--/div -->
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.card -->
    </div>
    <!-- /.container -->
    <div class="container pb-12 text-center">
      <div class="row mt-n10 mt-lg-0">
        <div class="col-xl-10 mx-auto">
          <div class="row mb-3">
            <div class="col-md-4">
              <div class="widget">
                <h4 class="widget-title">Address</h4>
                <address>
                  Moonshine St. 14/05 <br class="d-none d-md-block" />
                  Light City, London, UK
                </address>
              </div>
              <!-- /.widget -->
            </div>
            <!--/column -->
            <div class="col-md-4">
              <div class="widget">
                <h4 class="widget-title">Phone</h4>
                <p>00 (123) 456 78 90 <br />00 (987) 654 32 10</p>
              </div>
              <!-- /.widget -->
            </div>
            <!--/column -->
            <div class="col-md-4">
              <div class="widget">
                <h4 class="widget-title">E-mail</h4>
                <p>
                  <a href="mailto:sandbox@email.com" class="link-body"
                    >sandbox@email.com</a
                  >
                  <br class="d-none d-md-block" /><a
                    href="mailto:help@sandbox.com"
                    class="link-body"
                    >help@sandbox.com</a
                  >
                </p>
              </div>
              <!-- /.widget -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <p>© {{ new Date().getFullYear() }} Sandbox. All rights reserved.</p>
          <nav class="nav social justify-content-center">
            <FootersComponentsSocials />
          </nav>
          <!-- /.social -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </footer>
  <CommonScrolltop />
</template>

<script setup></script>

<style lang="scss" scoped></style>
