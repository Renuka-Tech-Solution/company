<template>
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16">
      <div class="row">
        <div class="col mt-n19 mb-16">
          <div class="card shadow-lg">
            <div class="row gx-0">
              <div
                class="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block"
                style="background-image: url(/assets/img/photos/tm1.jpg)"
              ></div>
              <!--/column -->
              <div class="col-lg-6">
                <div class="p-10 p-md-11 p-lg-13">
                  <h2 class="display-4 mb-3">Let’s Talk</h2>
                  <p class="lead fs-lg">
                    Let's make something great together. We are trusted by over
                    <CommonCounter
                      parentClass=""
                      :min="0"
                      :max="5000"
                      :time="1500"
                    />+ clients. Join them by using our services and grow your
                    business.
                  </p>
                  <p>
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                    venenatis vestibulum. Maecenas faucibus mollis interdum.
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                  </p>
                  <nuxt-link
                    to="/signup"
                    class="btn btn-primary rounded-pill mt-2"
                    >Join Us</nuxt-link
                  >
                </div>
                <!--/div -->
              </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div class="row gy-10 gx-lg-8 gx-xl-12">
            <div class="col-lg-8">
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
                        class="form-control"
                        placeholder="Jane"
                        required
                      />
                      <label>First Name *</label>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please enter your first name.
                      </div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        type="text"
                        name="surname"
                        class="form-control"
                        placeholder="Doe"
                        required
                      />
                      <label>Last Name *</label>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please enter your last name.
                      </div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        type="email"
                        name="email"
                        class="form-control"
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
                  <div class="col-md-6">
                    <div class="form-select-wrapper mb-4">
                      <select
                        class="form-select"
                        id="form-select"
                        name="department"
                        required
                      >
                        <option selected disabled value="">
                          Select a department
                        </option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Customer Support">
                          Customer Support
                        </option>
                      </select>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please select a department.
                      </div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-12">
                    <div class="form-floating mb-4">
                      <textarea
                        name="message"
                        class="form-control"
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
                    <div class="form-check mb-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        required
                      />
                      <label class="form-check-label">
                        I agree to
                        <a href="#" class="hover">terms and policy</a>.
                      </label>
                      <div class="invalid-feedback">
                        You must agree before submitting.
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
                    <p class="text-muted">
                      <strong>*</strong> These fields are required.
                    </p>
                  </div>
                  <!-- /column -->
                </div>
                <!-- /.row -->
              </form>
              <!-- /form -->
            </div>
            <!--/column -->
            <div class="col-lg-4">
              <div
                v-for="item in contactInfo2"
                :key="item.id"
                class="d-flex flex-row"
              >
                <div>
                  <div class="icon text-primary fs-28 me-6 mt-n1">
                    <i :class="item.iconClass"></i>
                  </div>
                </div>
                <div>
                  <h5 class="">{{ item.title }}</h5>

                  <address v-if="item.address">
                    {{ item.address.line1 }}<br class="d-none d-md-block" />{{
                      item.address.line2
                    }}
                  </address>

                  <p v-if="item.content">
                    {{ item.content[0] }}<br />
                    {{ item.content[1] }}
                  </p>
                  <a
                    v-if="item.mail"
                    :href="`mailto:${item.mail[0]}`"
                    class="link-body"
                    >{{ item.mail[0] }}</a
                  >
                  <br v-if="item.mail" />
                  <a
                    v-if="item.mail"
                    :href="`mailto:${item.mail[1]}`"
                    class="link-body"
                    >{{ item.mail[1] }}</a
                  >
                </div>
              </div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { contactInfo2 } from "~/data/contact";
</script>

<style lang="scss" scoped></style>
