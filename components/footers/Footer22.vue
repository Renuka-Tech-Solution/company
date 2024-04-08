<template>
  <footer class="bg-dark text-inverse">
    <div class="container py-13 py-md-15">
      <div class="row gy-6 gy-lg-0">
        <div class="col-lg-4">
          <div class="widget">
            <nuxt-img
              class="mb-4"
              src="/assets/img/logo-light.png"
              srcset="/assets/img/logo-light@2x.png 2x"
              alt="photo"
            />
            <p class="mb-4">
              © {{ new Date().getFullYear() }} Sandbox. All rights reserved.
            </p>
            <nav class="nav social social-white">
              <FootersComponentsSocials />
            </nav>
            <!-- /.social -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-2 offset-lg-2">
          <div class="widget">
            <h4 class="widget-title mb-3 text-white">Need Help?</h4>
            <ul class="list-unstyled mb-0">
              <FootersComponentsLinks2 />
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-2">
          <div class="widget">
            <h4 class="widget-title mb-3 text-white">Learn More</h4>
            <ul class="list-unstyled mb-0">
              <FootersComponentsLinks />
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-2">
          <div class="widget">
            <h4 class="widget-title mb-3 text-white">Get in Touch</h4>
            <address>
              Moonshine St. 14/05 Light City, London, United Kingdom
            </address>
            <a href="mailto:first.last@email.com">info@email.com</a><br />
            00 (123) 456 78 90
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </footer>
  <CommonScrolltop />
</template>

<script setup></script>

<style lang="scss" scoped></style>
