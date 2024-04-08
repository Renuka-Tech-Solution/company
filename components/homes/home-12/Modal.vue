<template>
  <div
    :class="`modal fade modal-popup ${modalOpen ? 'show' : ''}`"
    :style="
      modalOpen
        ? { display: 'block', paddingLeft: '0px', visibility: 'visible' }
        : { display: 'block', paddingLeft: '0px', visibility: 'hidden' }
    "
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content text-center">
        <div class="modal-body">
          <button
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="
              () => {
                modalOpen = false;
              }
            "
          ></button>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <figure class="mb-6">
                <nuxt-img
                  src="/assets/img/illustrations/i7.png"
                  srcset="/assets/img/illustrations/i7@2x.png 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
          <h3>Join the mailing list and get %10 off</h3>
          <p class="mb-6">
            Nullam quis risus eget urna mollis ornare vel eu leo. Donec
            ullamcorper nulla non metus auctor fringilla.
          </p>
          <div class="newsletter-wrapper">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <!-- Begin Mailchimp Signup Form -->
                <div id="mc_embed_signup">
                  <form @submit.prevent="() => {}" class="validate">
                    <div id="mc_embed_signup_scroll">
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
                          id="mc-embedded-subscribe"
                          class="btn btn-primary"
                        />
                      </div>
                      <div id="mce-responses" class="clear">
                        <div
                          class="response"
                          id="mce-error-response"
                          style="display: none"
                        ></div>
                        <div
                          class="response"
                          id="mce-success-response"
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
        <!--/.modal-body -->
      </div>
      <!--/.modal-content -->
    </div>
    <!--/.modal-dialog -->
  </div>

  <div
    :class="`modal-backdrop fade ${modalOpen ? 'show' : ''}`"
    :style="
      modalOpen
        ? { display: 'block', visibility: 'visible' }
        : { display: 'block', visibility: 'hidden' }
    "
  ></div>
</template>

<script setup>
const modalOpen = ref(false);

onMounted(() => {
  modalOpen.value = true;
});
</script>

<style lang="scss" scoped></style>
