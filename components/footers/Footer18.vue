<template>
  <footer class="bg-light">
    <div class="container pb-13 pb-md-15">
      <div
        class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 mb-14"
        style="background-image: url(/assets/img/photos/bg16.png)"
      >
        <div class="card-body p-10 p-xl-12">
          <div class="row text-center">
            <div class="col-xl-11 col-xxl-9 mx-auto">
              <h2 class="fs-16 text-uppercase text-white mb-3">
                Join Our Community
              </h2>
              <h3 class="display-3 mb-8 px-lg-8 text-white">
                We are
                <span class="underline-3 style-2 yellow">trusted</span> by over
                5000+ clients. Join them now and grow your business.
              </h3>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
          <div class="d-flex justify-content-center">
            <span><a class="btn btn-white rounded">Get Started</a></span>
          </div>
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
      <div class="row gy-6 gy-lg-0">
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <nuxt-img
              class="mb-4"
              src="/assets/img/logo-dark.png"
              srcset="/assets/img/logo-dark@2x.png 2x"
              alt="photo"
            />
            <p class="mb-4">
              © {{ new Date().getFullYear() }} Sandbox.
              <br class="d-none d-lg-block" />All rights reserved.
            </p>
            <nav class="nav social">
              <FootersComponentsSocials />
            </nav>
            <!-- /.social -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title mb-3">Get in Touch</h4>
            <address class="pe-xl-15 pe-xxl-17">
              Moonshine St. 14/05 Light City, London, United Kingdom
            </address>
            <a href="mailto:#" class="link-body">info@email.com</a><br />
            00 (123) 456 78 90
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title mb-3">Learn More</h4>
            <ul class="list-unstyled text-reset mb-0">
              <FootersComponentsLinks />
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-12 col-lg-3">
          <div class="widget">
            <h4 class="widget-title mb-3">Our Newsletter</h4>
            <p class="mb-5">
              Subscribe to our newsletter to get our news & deals delivered to
              you.
            </p>
            <div class="newsletter-wrapper">
              <!-- Begin Mailchimp Signup Form -->
              <div id="mc_embed_signup2">
                <form @submit.prevent="() => {}" class="validate">
                  <div id="mc_embed_signup_scroll2">
                    <div class="mc-field-group input-group form-floating">
                      <input
                        type="email"
                        value=""
                        name="EMAIL"
                        class="required email form-control"
                        placeholder="Email Address"
                      />
                      <label>Email Address</label>
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
