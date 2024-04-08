<template>
  <section class="wrapper bg-soft-primary">
    <div class="container py-14 py-md-16 text-center">
      <div class="row">
        <div class="col-md-9 col-lg-7 col-xl-7 mx-auto text-center">
          <nuxt-img
            src="/assets/img/icons/lineal/puzzle-2.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="photo"
          />
          <h2 class="display-4 mb-3">Join Our Community</h2>
          <p class="lead fs-lg mb-6 px-xl-10 px-xxl-15">
            We are trusted by over 5000+ clients. Join them by using our
            services and grow your business.
          </p>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-md-6 col-lg-5 col-xl-4 mx-auto">
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
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
