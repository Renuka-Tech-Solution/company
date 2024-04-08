<template>
  <section class="wrapper bg-light angled upper-end">
    <div class="container py-14 py-md-16">
      <div class="row gy-10 gx-lg-8 gx-xl-12 mb-16 align-items-center">
        <div class="col-lg-7 position-relative">
          <div
            class="shape bg-dot primary rellax w-18 h-18"
            data-rellax-speed="1"
            style="top: 0; left: -1.4rem; z-index: 0"
          ></div>
          <div class="row gx-md-5 gy-5">
            <div class="col-md-6">
              <figure class="rounded mt-md-10 position-relative">
                <nuxt-img
                  src="/assets/img/photos/g5.jpg"
                  srcset="/assets/img/photos/g5@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6">
              <div class="row gx-md-5 gy-5">
                <div class="col-md-12 order-md-2">
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/g6.jpg"
                      srcset="/assets/img/photos/g6@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
                <!--/column -->
                <div class="col-md-10">
                  <div class="card bg-pale-primary text-center counter-wrapper">
                    <div class="card-body py-11">
                      <h3 class="counter text-nowrap">
                        <CommonCounter
                          parentClass=""
                          :min="0"
                          :max="5000"
                          :time="1500"
                        />+
                      </h3>
                      <p class="mb-0">Satisfied Customers</p>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.card -->
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="display-4 mb-8">
            Convinced yet? Let's make something great together.
          </h2>
          <div
            v-for="item in contactInfo"
            :key="item.id"
            class="d-flex flex-row"
          >
            <div>
              <div class="icon text-primary fs-28 me-6 mt-n1">
                <i :class="item.iconClass"></i>
              </div>
            </div>
            <div>
              <h5 class="mb-1">{{ item.title }}</h5>

              <address v-if="item.address">
                {{ item.address.line1 }}<br class="d-none d-md-block" />{{
                  item.address.line2
                }}
              </address>

              <p v-if="item.content">{{ item.content }}</p>
              <a v-if="item.mail" :href="item.mail" class="link-body">{{
                item.mail
              }}</a>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
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
import { contactInfo } from "~/data/contact";
</script>

<style lang="scss" scoped></style>
