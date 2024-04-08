<template>
  <section class="wrapper bg-gradient-blend">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-md-8 gx-xl-12 gy-10">
        <div class="col-lg-6">
          <nuxt-img
            src="/assets/img/icons/solid/email-2.svg"
            class="icon-svg icon-svg-sm solid-duo text-purple-aqua mb-3"
            alt="photo"
          />
          <h2 class="display-3 mb-3 pe-xl-14 pe-xxl-16">
            If you like what you see, <em>let's work</em> together.
          </h2>
          <p class="lead fs-lg pe-xxl-12 mb-0">
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
                  <div class="invalid-feedback">Please enter your name.</div>
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
                  class="btn btn-primary rounded-pill btn-send mb-3"
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
    <!-- /.container -->
    <div class="overflow-hidden">
      <div class="divider text-light mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
          <path
            fill="currentColor"
            d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
          />
        </svg>
      </div>
    </div>
    <!-- /.overflow-hidden -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
