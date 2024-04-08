<template>
  <section id="snippet-5" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div class="row gy-10 gx-lg-8 gx-xl-12">
            <div class="col-lg-8">
              <form
                class="contact-form needs-validation"
                @submit.prevent="handleSubmit"
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
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-120"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-120"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-5&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-xl-10 mx-auto&quot;&gt;
          &lt;div class&#x3D;&quot;row gy-10 gx-lg-8 gx-xl-12&quot;&gt;
            &lt;div class&#x3D;&quot;col-lg-8&quot;&gt;
              &lt;form
                class&#x3D;&quot;contact-form needs-validation&quot;
                @submit.prevent&#x3D;&quot;handleSubmit&quot;
              &gt;
                &lt;div class&#x3D;&quot;messages&quot;&gt;&lt;&#x2F;div&gt;
                &lt;div class&#x3D;&quot;row gx-4&quot;&gt;
                  &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
                    &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
                      &lt;input
                        id&#x3D;&quot;form_name&quot;
                        type&#x3D;&quot;text&quot;
                        name&#x3D;&quot;name&quot;
                        class&#x3D;&quot;form-control&quot;
                        placeholder&#x3D;&quot;Jane&quot;
                        required
                      &#x2F;&gt;
                      &lt;label for&#x3D;&quot;form_name&quot;&gt;First Name *&lt;&#x2F;label&gt;
                      &lt;div class&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                      &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;
                        Please enter your first name.
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;column --&gt;
                  &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
                    &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
                      &lt;input
                        id&#x3D;&quot;form_lastname&quot;
                        type&#x3D;&quot;text&quot;
                        name&#x3D;&quot;surname&quot;
                        class&#x3D;&quot;form-control&quot;
                        placeholder&#x3D;&quot;Doe&quot;
                        required
                      &#x2F;&gt;
                      &lt;label for&#x3D;&quot;form_lastname&quot;&gt;Last Name *&lt;&#x2F;label&gt;
                      &lt;div class&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                      &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;
                        Please enter your last name.
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;column --&gt;
                  &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
                    &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
                      &lt;input
                        id&#x3D;&quot;form_email&quot;
                        type&#x3D;&quot;email&quot;
                        name&#x3D;&quot;email&quot;
                        class&#x3D;&quot;form-control&quot;
                        placeholder&#x3D;&quot;jane.doe@example.com&quot;
                        required
                      &#x2F;&gt;
                      &lt;label for&#x3D;&quot;form_email&quot;&gt;Email *&lt;&#x2F;label&gt;
                      &lt;div class&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                      &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;
                        Please provide a valid email address.
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;column --&gt;
                  &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
                    &lt;div class&#x3D;&quot;form-select-wrapper mb-4&quot;&gt;
                      &lt;select
                        class&#x3D;&quot;form-select&quot;
                        id&#x3D;&quot;form-select&quot;
                        name&#x3D;&quot;department&quot;
                        required
                      &gt;
                        &lt;option selected disabled value&#x3D;&quot;&quot;&gt;
                          Select a department
                        &lt;&#x2F;option&gt;
                        &lt;option value&#x3D;&quot;Sales&quot;&gt;Sales&lt;&#x2F;option&gt;
                        &lt;option value&#x3D;&quot;Marketing&quot;&gt;Marketing&lt;&#x2F;option&gt;
                        &lt;option value&#x3D;&quot;Customer Support&quot;&gt;
                          Customer Support
                        &lt;&#x2F;option&gt;
                      &lt;&#x2F;select&gt;
                      &lt;div class&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                      &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;
                        Please select a department.
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;column --&gt;
                  &lt;div class&#x3D;&quot;col-12&quot;&gt;
                    &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
                      &lt;textarea
                        id&#x3D;&quot;form_message&quot;
                        name&#x3D;&quot;message&quot;
                        class&#x3D;&quot;form-control&quot;
                        placeholder&#x3D;&quot;Your message&quot;
                        style&#x3D;&quot;height: 150px&quot;
                        required
                      &gt;&lt;&#x2F;textarea&gt;
                      &lt;label for&#x3D;&quot;form_message&quot;&gt;Message *&lt;&#x2F;label&gt;
                      &lt;div class&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                      &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;
                        Please enter your messsage.
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;column --&gt;
                  &lt;div class&#x3D;&quot;col-12&quot;&gt;
                    &lt;div class&#x3D;&quot;form-check mb-4&quot;&gt;
                      &lt;input
                        class&#x3D;&quot;form-check-input&quot;
                        type&#x3D;&quot;checkbox&quot;
                        value&#x3D;&quot;&quot;
                        id&#x3D;&quot;invalidCheck&quot;
                        required
                      &#x2F;&gt;
                      &lt;label class&#x3D;&quot;form-check-label&quot; for&#x3D;&quot;invalidCheck&quot;&gt;
                        I agree to
                        &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;hover&quot;&gt;terms and policy&lt;&#x2F;a&gt;.
                      &lt;&#x2F;label&gt;
                      &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;
                        You must agree before submitting.
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;column --&gt;
                  &lt;div class&#x3D;&quot;col-12&quot;&gt;
                    &lt;input
                      type&#x3D;&quot;submit&quot;
                      class&#x3D;&quot;btn btn-primary rounded-pill btn-send mb-3&quot;
                      value&#x3D;&quot;Send message&quot;
                    &#x2F;&gt;
                    &lt;p class&#x3D;&quot;text-muted&quot;&gt;
                      &lt;strong&gt;*&lt;&#x2F;strong&gt; These fields are required.
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;column --&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;.row --&gt;
              &lt;&#x2F;form&gt;
              &lt;!-- &#x2F;form --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-lg-4&quot;&gt;
              &lt;div
                v-for&#x3D;&quot;item in contactInfo&quot;
                :key&#x3D;&quot;item.id&quot;
                class&#x3D;&quot;d-flex flex-row&quot;
              &gt;
                &lt;div&gt;
                  &lt;div class&#x3D;&quot;icon text-primary fs-28 me-6 mt-n1&quot;&gt;
                    &lt;i :class&#x3D;&quot;item.iconClass&quot;&gt;&lt;&#x2F;i&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h5 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h5&gt;

                  &lt;address v-if&#x3D;&quot;item.address&quot;&gt;
                    &lbrace;&lbrace; item.address.line1 &rbrace;&rbrace;&lt;br class&#x3D;&quot;d-none d-md-block&quot; &#x2F;&gt;&lbrace;&lbrace;
                      item.address.line2
                    &rbrace;&rbrace;
                  &lt;&#x2F;address&gt;

                  &lt;p v-if&#x3D;&quot;item.content&quot;&gt;&lbrace;&lbrace; item.content &rbrace;&rbrace;&lt;&#x2F;p&gt;
                  &lt;a v-if&#x3D;&quot;item.mail&quot; :href&#x3D;&quot;item.mail&quot; class&#x3D;&quot;link-body&quot;&gt;&lbrace;&lbrace;
                    item.mail
                  &rbrace;&rbrace;&lt;&#x2F;a&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
  
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { contactInfo } from &quot;~&#x2F;data&#x2F;contact&quot;;
const handleSubmit &#x3D; () &#x3D;&gt; {};
&lt;&#x2F;script&gt;

&lt;style lang&#x3D;&quot;scss&quot; scoped&gt;&lt;&#x2F;style&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { contactInfo } from "~/data/contact";
const handleSubmit = () => {};
</script>

<style lang="scss" scoped></style>
