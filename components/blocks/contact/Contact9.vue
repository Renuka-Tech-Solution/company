<template>
  <section id="snippet-9" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="card bg-soft-primary">
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
                @submit.prevent="handleSubmit"
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
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-123"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-123"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-9&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;card bg-soft-primary&quot;&gt;
        &lt;div class&#x3D;&quot;card-body p-12&quot;&gt;
          &lt;div class&#x3D;&quot;row gx-md-8 gx-xl-12 gy-10&quot;&gt;
            &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
              &lt;nuxt-img
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;email.svg&quot;
                class&#x3D;&quot;icon-svg icon-svg-sm mb-4&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
              &lt;h2 class&#x3D;&quot;display-4 mb-3 pe-lg-10&quot;&gt;
                If you like what you see, let&#39;s work together.
              &lt;&#x2F;h2&gt;
              &lt;p class&#x3D;&quot;lead pe-lg-12 mb-0&quot;&gt;
                I bring rapid solutions to make the life of my clients easier.
                Have any questions? Reach out to me from this contact form and I
                will get back to you shortly.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
              &lt;form
                class&#x3D;&quot;contact-form needs-validation&quot;
                @submit.prevent&#x3D;&quot;handleSubmit&quot;
              &gt;
                &lt;div class&#x3D;&quot;messages&quot;&gt;&lt;&#x2F;div&gt;
                &lt;div class&#x3D;&quot;row gx-4&quot;&gt;
                  &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
                    &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
                      &lt;input
                        id&#x3D;&quot;frm_name&quot;
                        type&#x3D;&quot;text&quot;
                        name&#x3D;&quot;name&quot;
                        class&#x3D;&quot;form-control border-0&quot;
                        placeholder&#x3D;&quot;Jane&quot;
                        required&#x3D;&quot;required&quot;
                        data-error&#x3D;&quot;First Name is required.&quot;
                      &#x2F;&gt;
                      &lt;label for&#x3D;&quot;frm_name&quot;&gt;Name *&lt;&#x2F;label&gt;
                      &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;
                        Please enter your name.
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;column --&gt;
                  &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
                    &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
                      &lt;input
                        id&#x3D;&quot;frm_email&quot;
                        type&#x3D;&quot;email&quot;
                        name&#x3D;&quot;email&quot;
                        class&#x3D;&quot;form-control border-0&quot;
                        placeholder&#x3D;&quot;jane.doe@example.com&quot;
                        required&#x3D;&quot;required&quot;
                        data-error&#x3D;&quot;Valid email is required.&quot;
                      &#x2F;&gt;
                      &lt;label for&#x3D;&quot;frm_email&quot;&gt;Email *&lt;&#x2F;label&gt;
                      &lt;div class&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                      &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;
                        Please provide a valid email address.
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;column --&gt;
                  &lt;div class&#x3D;&quot;col-12&quot;&gt;
                    &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
                      &lt;textarea
                        id&#x3D;&quot;frm_message&quot;
                        name&#x3D;&quot;message&quot;
                        class&#x3D;&quot;form-control border-0&quot;
                        placeholder&#x3D;&quot;Your message&quot;
                        style&#x3D;&quot;height: 150px&quot;
                        required
                      &gt;&lt;&#x2F;textarea&gt;
                      &lt;label for&#x3D;&quot;frm_message&quot;&gt;Message *&lt;&#x2F;label&gt;
                      &lt;div class&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                      &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;
                        Please enter your messsage.
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;column --&gt;
                  &lt;div class&#x3D;&quot;col-12&quot;&gt;
                    &lt;input
                      type&#x3D;&quot;submit&quot;
                      class&#x3D;&quot;btn btn-outline-primary rounded-pill btn-send mb-3&quot;
                      value&#x3D;&quot;Send message&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;column --&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;.row --&gt;
              &lt;&#x2F;form&gt;
              &lt;!-- &#x2F;form --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;.card-body --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.card --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
 
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
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
const handleSubmit = () => {};
</script>

<style lang="scss" scoped></style>
