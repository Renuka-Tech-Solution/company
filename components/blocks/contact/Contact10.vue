<template>
  <section id="snippet-10" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15 pb-lg-0">
      <div class="row gx-lg-8 gx-xl-0 gy-10 align-items-center">
        <div class="col-lg-6 col-xl-5 position-relative d-none d-lg-block">
          <div
            class="shape rounded-circle bg-soft-primary rellax w-21 h-21"
            data-rellax-speed="1"
            style="top: 8rem; left: 2rem"
          ></div>
          <figure class="ps-xxl-10">
            <nuxt-img
              src="/assets/img/photos/woman.png"
              srcset="/assets/img/photos/woman@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-6 col-xl-5 offset-xl-1">
          <h2 class="display-4 mb-3">Get in Touch</h2>
          <p class="lead mb-8 pe-xl-10">
            Have any questions? Reach out to us from our contact form and we
            will get back to you shortly.
          </p>
          <form
            class="contact-form needs-validation"
            @submit.prevent="handleSubmit"
          >
            <div class="messages"></div>
            <div class="form-floating mb-4">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Jane"
                required="required"
                data-error="Name is required."
              />
              <label>Name *</label>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter your name.</div>
            </div>
            <div class="form-floating mb-4">
              <input
                type="email"
                name="email"
                class="form-control"
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
              <div class="invalid-feedback">Please enter your messsage.</div>
            </div>
            <input
              type="submit"
              class="btn btn-primary rounded-pill btn-send mb-3"
              value="Send message"
            />
            <p class="text-muted">
              <strong>*</strong> These fields are required.
            </p>
          </form>
          <!-- /form -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-21"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-21"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-10&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15 pb-lg-0&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-0 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 col-xl-5 position-relative d-none d-lg-block&quot;&gt;
          &lt;div
            class&#x3D;&quot;shape rounded-circle bg-soft-primary rellax w-21 h-21&quot;
            data-rellax-speed&#x3D;&quot;1&quot;
            style&#x3D;&quot;top: 8rem; left: 2rem&quot;
          &gt;&lt;&#x2F;div&gt;
          &lt;figure class&#x3D;&quot;ps-xxl-10&quot;&gt;
            &lt;nuxt-img
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;woman.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;woman@2x.png 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6 col-xl-5 offset-xl-1&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;Get in Touch&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead mb-8 pe-xl-10&quot;&gt;
            Have any questions? Reach out to us from our contact form and we
            will get back to you shortly.
          &lt;&#x2F;p&gt;
          &lt;form
            class&#x3D;&quot;contact-form needs-validation&quot;
            @submit.prevent&#x3D;&quot;handleSubmit&quot;
          &gt;
            &lt;div class&#x3D;&quot;messages&quot;&gt;&lt;&#x2F;div&gt;
            &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
              &lt;input
                id&#x3D;&quot;form_name2&quot;
                type&#x3D;&quot;text&quot;
                name&#x3D;&quot;name&quot;
                class&#x3D;&quot;form-control&quot;
                placeholder&#x3D;&quot;Jane&quot;
                required&#x3D;&quot;required&quot;
                data-error&#x3D;&quot;Name is required.&quot;
              &#x2F;&gt;
              &lt;label for&#x3D;&quot;form_name2&quot;&gt;Name *&lt;&#x2F;label&gt;
              &lt;div class&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;Please enter your name.&lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
              &lt;input
                id&#x3D;&quot;form_email2&quot;
                type&#x3D;&quot;email&quot;
                name&#x3D;&quot;email&quot;
                class&#x3D;&quot;form-control&quot;
                placeholder&#x3D;&quot;jane.doe@example.com&quot;
                required&#x3D;&quot;required&quot;
                data-error&#x3D;&quot;Valid email is required.&quot;
              &#x2F;&gt;
              &lt;label for&#x3D;&quot;form_email2&quot;&gt;Email *&lt;&#x2F;label&gt;
              &lt;div class&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;
                Please provide a valid email address.
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div class&#x3D;&quot;form-floating mb-4&quot;&gt;
              &lt;textarea
                id&#x3D;&quot;form_message2&quot;
                name&#x3D;&quot;message&quot;
                class&#x3D;&quot;form-control&quot;
                placeholder&#x3D;&quot;Your message&quot;
                style&#x3D;&quot;height: 150px&quot;
                required
              &gt;&lt;&#x2F;textarea&gt;
              &lt;label for&#x3D;&quot;form_message2&quot;&gt;Message *&lt;&#x2F;label&gt;
              &lt;div class&#x3D;&quot;valid-feedback&quot;&gt;Looks good!&lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;invalid-feedback&quot;&gt;Please enter your messsage.&lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;input
              type&#x3D;&quot;submit&quot;
              class&#x3D;&quot;btn btn-primary rounded-pill btn-send mb-3&quot;
              value&#x3D;&quot;Send message&quot;
            &#x2F;&gt;
            &lt;p class&#x3D;&quot;text-muted&quot;&gt;
              &lt;strong&gt;*&lt;&#x2F;strong&gt; These fields are required.
            &lt;&#x2F;p&gt;
          &lt;&#x2F;form&gt;
          &lt;!-- &#x2F;form --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
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
