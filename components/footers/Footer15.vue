<template>
  <footer>
    <div class="container pt-14 pt-md-18 pb-7">
      <div class="card bg-soft-primary mb-8">
        <div class="card-body p-12">
          <div class="row gx-md-8 gx-xl-12 gy-10">
            <div class="col-lg-6">
              <nuxt-img
                src="/assets/img/icons/lineal/email.svg"
                class="icon-svg icon-svg-sm mb-4"
                alt="photo"
              />
              <h2 class="display-4 mb-3 pe-lg-10">
                If you like what you see, let's work together.
              </h2>
              <p class="lead pe-lg-12 mb-0">
                I bring rapid solutions to make the life of my clients easier.
                Have any questions? Reach out to me from this contact form and I
                will get back to you shortly.
              </p>
            </div>
            <!-- /column -->
            <div class="col-lg-6">
              <form
                class="contact-form needs-validation"
                @submit.prevent="() => {}"
              >
                <div class="messages"></div>
                <div class="row gx-4">
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        type="text"
                        name="name"
                        class="form-control border-0"
                        placeholder="Jane"
                        required="required"
                        data-error="First Name is required."
                      />
                      <label>Name *</label>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please enter your name.
                      </div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        type="email"
                        name="email"
                        class="form-control border-0"
                        placeholder="jane.doe@example.com"
                        required="required"
                        data-error="Valid email is required."
                      />
                      <label>Email *</label>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please provide a valid email address.
                      </div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-12">
                    <div class="form-floating mb-4">
                      <textarea
                        name="message"
                        class="form-control border-0"
                        placeholder="Your message"
                        style="height: 150px"
                        required
                      ></textarea>
                      <label>Message *</label>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please enter your messsage.
                      </div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-12">
                    <input
                      type="submit"
                      class="btn btn-outline-primary rounded-pill btn-send mb-3"
                      value="Send message"
                    />
                  </div>
                  <!-- /column -->
                </div>
                <!-- /.row -->
              </form>
              <!-- /form -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
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
