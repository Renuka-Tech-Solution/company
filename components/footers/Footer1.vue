<template>
  <footer class="bg-dark text-inverse">
    <div class="container py-13 py-md-15">
      <div class="row gy-6 gy-lg-0">
        <div class="col-md-4 col-lg-4">
          <div class="widget">
            <nuxt-img
              class="mb-4"
              src="/assets/img/logo-light.png"
              srcset="/assets/img/logo-light@2x.png 2x"
              alt="photo"
            />
            <p class="mb-4">
              © {{ new Date().getFullYear() }} Tech Renuka. All rights reserved.
              <!-- <br class="d-none d-lg-block" /> -->
            </p>
            <nav class="nav social social-white">
              <FootersComponentsSocials />
            </nav>
            <!-- /.social -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-4 px-11">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Contact</h4>
            <address class="pe-xl-15 pe-xxl-17">
              Surat, Gujarat, India
            </address>
            <a href="mailto:contact@techrenuka.com">contact@techrenuka.com</a><br />
            +91-80000-78982
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-4 px-12">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Learn More</h4>
            <ul class="list-unstyled mb-0">
              <FootersComponentsLinks />
            </ul>
          </div>
          <!-- /.widget -->
        </div>
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </footer>
  <CommonScrolltop />
</template>

<script setup></script>

<style lang="scss" scoped></style>
