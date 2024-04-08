<template>
  <footer class="bg-dark text-inverse">
    <div class="container pt-20 pt-lg-21 pb-7">
      <div class="row gy-6 gy-lg-0">
        <div class="col-lg-4">
          <div class="widget">
            <h3 class="h2 mb-3 text-white">Join the Community</h3>
            <p class="lead mb-5">
              Let's make something great together. We are trusted by over 5000+
              clients. Join them by using our services and grow your business.
            </p>
            <nuxt-link to="/signup" class="btn btn-white rounded-pill"
              >Join Us</nuxt-link
            >
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-2 offset-lg-2">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Need Help?</h4>
            <ul class="list-unstyled text-reset mb-0">
              <li v-for="item in menuItems" :key="item.id">
                <a :href="item.link">{{ item.text }}</a>
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
              <li v-for="(item, index) in menuItems2" :key="index">
                <a :href="item.link">{{ item.text }}</a>
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
      <hr class="mt-13 mt-md-15 mb-7" />
      <div class="d-md-flex align-items-center justify-content-between">
        <p class="mb-2 mb-lg-0">
          © {{ new Date().getFullYear() }} Sandbox. All rights reserved.
        </p>
        <nav class="nav social social-white text-md-end">
          <FootersComponentsSocials />
        </nav>
        <!-- /.social -->
      </div>
      <!-- /div -->
    </div>
    <!-- /.container -->
  </footer>
  <CommonScrolltop />
</template>

<script setup>
const menuItems = [
  { id: 1, text: "Support", link: "#" },
  { id: 2, text: "Get Started", link: "#" },
  { id: 3, text: "Terms of Use", link: "#" },
  { id: 4, text: "Privacy Policy", link: "#" },
];
const menuItems2 = ref([
  { text: "About Us", link: "#" },
  { text: "Our Story", link: "#" },
  { text: "Projects", link: "#" },
  { text: "Pricing", link: "#" },
  { text: "Features", link: "#" },
]);
</script>

<style lang="scss" scoped></style>
