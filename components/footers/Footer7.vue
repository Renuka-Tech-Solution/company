<template>
  <footer class="bg-gradient-reverse-primary">
    <div class="container pt-13 pt-md-15 pb-7">
      <div
        class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 mb-13"
        style="background-image: url(/assets/img/photos/bg2.jpg)"
      >
        <div class="card-body p-9 p-xl-11">
          <div class="row align-items-center gy-6">
            <div class="col-lg-7">
              <h3 class="display-5 text-white">Subscribe to our newsletter</h3>
              <p class="lead pe-lg-12 mb-0 text-white">
                Subscribe to our newsletter to get our news & deals delivered to
                you. Don't worry, we hate spam and we respect your privacy.
              </p>
            </div>
            <!-- /column -->
            <div class="col-lg-5 col-xl-4 offset-xl-1">
              <div class="newsletter-wrapper">
                <!-- Begin Mailchimp Signup Form -->
                <div id="mc_embed_signup2">
                  <form @submit.prevent="() => {}" class="validate dark-fields">
                    <div id="mc_embed_signup_scroll2">
                      <div class="mc-field-group input-group form-floating">
                        <input
                          type="email"
                          value=""
                          name="EMAIL"
                          class="required email form-control"
                          placeholder="Email Address"
                        />
                        <label class="position-absolute">Email Address</label>
                        <input
                          type="submit"
                          value="Join"
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          class="btn btn-primary"
                        />
                      </div>
                      <div id="mce-responses2" class="clear">
                        <div
                          class="response"
                          id="mce-error-response2"
                          style="display: none"
                        ></div>
                        <div
                          class="response"
                          id="mce-success-response2"
                          style="display: none"
                        ></div>
                      </div>
                      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                      <div
                        style="position: absolute; left: -5000px"
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                          tabindex="-1"
                          value=""
                        />
                      </div>
                      <div class="clear"></div>
                    </div>
                  </form>
                </div>
                <!--End mc_embed_signup-->
              </div>
              <!-- /.newsletter-wrapper -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
      <div class="row gy-6 gy-lg-0">
        <div class="col-lg-4">
          <div class="widget">
            <h3 class="h2 mb-3">Join the Community</h3>
            <p class="lead mb-5">
              Let's make something great together. We are trusted by over 5000+
              clients. Join them by using our services and grow your business.
            </p>
            <nuxt-link to="/signup" class="btn btn-primary rounded-pill"
              >Join Us</nuxt-link
            >
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-2 offset-lg-2">
          <div class="widget">
            <h4 class="widget-title mb-3">Need Help?</h4>
            <ul class="list-unstyled text-reset mb-0">
              <FootersComponentsLinks />
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-2">
          <div class="widget">
            <h4 class="widget-title mb-3">Learn More</h4>
            <ul class="list-unstyled text-reset mb-0">
              <FootersComponentsLinks2 />
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-2">
          <div class="widget">
            <h4 class="widget-title mb-3">Get in Touch</h4>
            <address>
              Moonshine St. 14/05 Light City, London, United Kingdom
            </address>
            <a href="mailto:first.last@email.com" class="link-body"
              >info@email.com</a
            ><br />
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
        <nav class="nav social text-md-end">
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

<script setup></script>

<style lang="scss" scoped></style>
