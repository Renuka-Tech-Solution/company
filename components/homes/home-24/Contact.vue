<template>
  <section id="pricing" class="scrollSpysection">
    <div
      class="wrapper image-wrapper bg-image bg-overlay"
      style="background-image: url(/assets/img/photos/bg36.jpg)"
    >
      <div class="container py-15 py-md-17">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="card border-0 bg-white-900">
              <div class="card-body py-lg-13 px-lg-16">
                <h2 class="display-5 mb-3 text-center">
                  Request Photography Pricing
                </h2>
                <p class="lead fs-lg text-center mb-10">
                  For more information please get in touch using the form below:
                </p>
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
                          class="form-control bg-white-700 border-0"
                          placeholder="Name"
                          required
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
                          class="form-control bg-white-700 border-0"
                          placeholder="jane.doe@example.com"
                          required
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
                          class="form-control bg-white-700 border-0"
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
                    <div class="col-12 text-center">
                      <input
                        type="submit"
                        class="btn btn-primary rounded-pill btn-send"
                        value="Send message"
                      />
                    </div>
                    <!-- /column -->
                  </div>
                  <!-- /.row -->
                </form>
                <!-- /form -->
              </div>
              <!--/.card-body -->
            </div>
            <!--/.card -->
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
