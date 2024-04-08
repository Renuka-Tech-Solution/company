<template>
  <section class="wrapper bg-light angled upper-end">
    <div class="container pb-11">
      <div class="row mb-14 mb-md-16">
        <div class="col-xl-10 mx-auto mt-n19">
          <div class="card">
            <div class="row gx-0">
              <div class="col-lg-6 align-self-stretch">
                <div class="map map-full rounded-top rounded-lg-start">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str"
                    style="width: 100%; height: 100%; border: 0"
                    allowfullscreen
                  ></iframe>
                </div>
                <!-- /.map -->
              </div>
              <!--/column -->
              <div class="col-lg-6">
                <div class="p-10 p-md-11 p-lg-14">
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
                        {{ item.address.line1
                        }}<br class="d-none d-md-block" />{{
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

                  <!--/div -->
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
        <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          <h2 class="display-4 mb-3 text-center">Drop Us a Line</h2>
          <p class="lead text-center mb-10">
            Reach out to us from our contact form and we will get back to you
            shortly.
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
                    <option value="Customer Support">Customer Support</option>
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
              <div class="col-12 text-center">
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
