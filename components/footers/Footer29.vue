<template>
  <footer
    class="wrapper pattern-wrapper bg-image section-frame"
    style="background-image: url(/assets/img/pattern.png)"
  >
    <div class="container pb-13 pb-md-15">
      <div
        class="card image-wrapper bg-full bg-image bg-overlay mt-n50p mx-md-5 rounded-xl overflow-hidden"
        style="background-image: url(/assets/img/photos/bg27.jpg)"
      >
        <div
          class="card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start"
        >
          <h3
            class="display-2 mb-6 mb-lg-0 pe-lg-10 pe-xl-5 pe-xxl-18 text-white"
          >
            We are trusted by over 5000+ clients. Join them now and grow your
            business.
          </h3>
          <nuxt-link
            to="/signup"
            class="btn btn-lg btn-white rounded-xl mb-0 text-nowrap"
            >Join Us</nuxt-link
          >
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
      <div class="text-inverse mx-md-5 mt-n15 mt-lg-0">
        <div class="row gy-6 gy-lg-0">
          <div class="col-lg-4">
            <div class="widget">
              <h3 class="h2 mb-3 text-white">Join the Community</h3>
              <p class="mb-5">
                Let's make something great together. We are trusted by over
                5000+ clients. Join them by using our services and grow your
                business.
              </p>
              <p class="mb-1">
                © {{ new Date().getFullYear() }} Sandbox. All rights reserved.
              </p>
              <nav class="nav social social-white">
                <HeadersComponentsSocials />
              </nav>
              <!-- /.social -->
            </div>
            <!-- /.widget -->
          </div>
          <!-- /column -->
          <div class="col-md-4 col-lg-2 offset-lg-2">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Need Help?</h4>
              <ul class="list-unstyled text-reset mb-0">
                <li v-for="(item, index) in menuItems" :key="index">
                  <a :href="item.link">{{ item.label }}</a>
                </li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /column -->
          <div class="col-md-4 col-lg-2">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Learn More</h4>
              <ul class="list-unstyled mb-0">
                <li v-for="(menuItem, index) in menuItems2" :key="index">
                  <a :href="menuItem.link">{{ menuItem.label }}</a>
                </li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /column -->
          <div class="col-md-4 col-lg-2">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Get in Touch</h4>
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
    </div>
    <!-- /.container -->
  </footer>
  <CommonScrolltop />
</template>

<script setup>
const menuItems = ref([
  { label: "Support", link: "#" },
  { label: "Get Started", link: "#" },
  { label: "Terms of Use", link: "#" },
  { label: "Privacy Policy", link: "#" },
]);
const menuItems2 = ref([
  { label: "About Us", link: "#" },
  { label: "Our Story", link: "#" },
  { label: "Projects", link: "#" },
  { label: "Pricing", link: "#" },
  { label: "Features", link: "#" },
]);
</script>

<style lang="scss" scoped></style>
