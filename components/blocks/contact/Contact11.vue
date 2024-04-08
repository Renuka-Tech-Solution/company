<template>
  <section id="snippet-11" class="wrapper bg-light wrapper-border">
    <div
      class="wrapper image-wrapper bg-image bg-overlay mb-12 mb-md-14"
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
                  @submit.prevent="handleSubmit"
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
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-124"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-124"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-11&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div
      class&#x3D;&quot;wrapper image-wrapper bg-image bg-overlay mb-12 mb-md-14&quot;
      style&#x3D;&quot;background-image: url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg36.jpg)&quot;
    &gt;
      &lt;div class&#x3D;&quot;container py-15 py-md-17&quot;&gt;
        &lt;div class&#x3D;&quot;row&quot;&gt;
          &lt;div class&#x3D;&quot;col-xl-9 mx-auto&quot;&gt;
            &lt;div class&#x3D;&quot;card border-0 bg-white-900&quot;&gt;
              &lt;div class&#x3D;&quot;card-body py-lg-13 px-lg-16&quot;&gt;
                &lt;h2 class&#x3D;&quot;display-5 mb-3 text-center&quot;&gt;
                  Request Photography Pricing
                &lt;&#x2F;h2&gt;
                &lt;p class&#x3D;&quot;lead fs-lg text-center mb-10&quot;&gt;
                  For more information please get in touch using the form below:
                &lt;&#x2F;p&gt;
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
                          class&#x3D;&quot;form-control bg-white-700 border-0&quot;
                          placeholder&#x3D;&quot;Name&quot;
                          required
                        &#x2F;&gt;
                        &lt;label for&#x3D;&quot;form_name&quot;&gt;Name *&lt;&#x2F;label&gt;
                        &lt;div class&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
                        &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;
                          Please enter your name.
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
                          class&#x3D;&quot;form-control bg-white-700 border-0&quot;
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
                    &lt;div class&#x3D;&quot;col-12&quot;&gt;
                      &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
                        &lt;textarea
                          id&#x3D;&quot;form_message&quot;
                          name&#x3D;&quot;message&quot;
                          class&#x3D;&quot;form-control bg-white-700 border-0&quot;
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
                    &lt;div class&#x3D;&quot;col-12 text-center&quot;&gt;
                      &lt;input
                        type&#x3D;&quot;submit&quot;
                        class&#x3D;&quot;btn btn-primary rounded-pill btn-send&quot;
                        value&#x3D;&quot;Send message&quot;
                      &#x2F;&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!-- &#x2F;column --&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;.row --&gt;
                &lt;&#x2F;form&gt;
                &lt;!-- &#x2F;form --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.card-body --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;column --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.row --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.container --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.wrapper --&gt;
 
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
