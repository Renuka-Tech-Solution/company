<template>
  <section id="snippet-7" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15 text-center">
      <div class="row">
        <div class="col-md-9 col-lg-7 col-xl-7 mx-auto text-center">
          <nuxt-img
            src="/assets/img/icons/lineal/puzzle-2.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="photo"
          />
          <h2 class="display-4 mb-3">Join Our Community</h2>
          <p class="lead fs-lg mb-6 px-xl-10 px-xxl-15">
            We are trusted by over 5000+ clients. Join them by using our
            services and grow your business.
          </p>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-md-6 col-lg-5 col-xl-4 mx-auto">
          <div class="newsletter-wrapper">
            <!-- Begin Mailchimp Signup Form -->
            <div id="mc_embed_signup2">
              <form class="validate" @submit.prevent="handleSubmit">
                <div id="mc_embed_signup_scroll2">
                  <div class="mc-field-group input-group form-floating">
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      class="required email form-control"
                      placeholder="Email Address"
                    />
                    <label>Email Address</label>
                    <input
                      type="submit"
                      value="Join"
                      name="subscribe"
                      id="mc-embedded-subscribe2"
                      class="btn btn-primary"
                    />
                  </div>
                  <div id="mce-responses2" class="clear">
                    <div
                      class="response"
                      id="mce-error-response2"
                      style="display: none"
                    ></div>
                    <div
                      class="response"
                      id="mce-success-response2"
                      style="display: none"
                    ></div>
                  </div>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div
                    style="position: absolute; left: -5000px"
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div class="clear"></div>
                </div>
              </form>
            </div>
            <!--End mc_embed_signup-->
          </div>
          <!-- /.newsletter-wrapper -->
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
            href="#collapse-snippet-121"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-121"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-7&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15 text-center&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-9 col-lg-7 col-xl-7 mx-auto text-center&quot;&gt;
          &lt;nuxt-img
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;puzzle-2.svg&quot;
            class&#x3D;&quot;icon-svg icon-svg-md mb-4&quot;
            alt&#x3D;&quot;&quot;
          &#x2F;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;Join Our Community&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg mb-6 px-xl-10 px-xxl-15&quot;&gt;
            We are trusted by over 5000+ clients. Join them by using our
            services and grow your business.
          &lt;&#x2F;p&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-6 col-lg-5 col-xl-4 mx-auto&quot;&gt;
          &lt;div class&#x3D;&quot;newsletter-wrapper&quot;&gt;
            &lt;!-- Begin Mailchimp Signup Form --&gt;
            &lt;div id&#x3D;&quot;mc_embed_signup2&quot;&gt;
              &lt;form class&#x3D;&quot;validate&quot; @submit.prevent&#x3D;&quot;handleSubmit&quot;&gt;
                &lt;div id&#x3D;&quot;mc_embed_signup_scroll2&quot;&gt;
                  &lt;div class&#x3D;&quot;mc-field-group input-group form-floating&quot;&gt;
                    &lt;input
                      type&#x3D;&quot;email&quot;
                      value&#x3D;&quot;&quot;
                      name&#x3D;&quot;EMAIL&quot;
                      class&#x3D;&quot;required email form-control&quot;
                      placeholder&#x3D;&quot;Email Address&quot;
                      id&#x3D;&quot;mce-EMAIL2&quot;
                    &#x2F;&gt;
                    &lt;label for&#x3D;&quot;mce-EMAIL2&quot;&gt;Email Address&lt;&#x2F;label&gt;
                    &lt;input
                      type&#x3D;&quot;submit&quot;
                      value&#x3D;&quot;Join&quot;
                      name&#x3D;&quot;subscribe&quot;
                      id&#x3D;&quot;mc-embedded-subscribe2&quot;
                      class&#x3D;&quot;btn btn-primary&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div id&#x3D;&quot;mce-responses2&quot; class&#x3D;&quot;clear&quot;&gt;
                    &lt;div
                      class&#x3D;&quot;response&quot;
                      id&#x3D;&quot;mce-error-response2&quot;
                      style&#x3D;&quot;display: none&quot;
                    &gt;&lt;&#x2F;div&gt;
                    &lt;div
                      class&#x3D;&quot;response&quot;
                      id&#x3D;&quot;mce-success-response2&quot;
                      style&#x3D;&quot;display: none&quot;
                    &gt;&lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--&gt;
                  &lt;div
                    style&#x3D;&quot;position: absolute; left: -5000px&quot;
                    aria-hidden&#x3D;&quot;true&quot;
                  &gt;
                    &lt;input
                      type&#x3D;&quot;text&quot;
                      name&#x3D;&quot;b_ddc180777a163e0f9f66ee014_4b1bcfa0bc&quot;
                      tabindex&#x3D;&quot;-1&quot;
                      value&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div class&#x3D;&quot;clear&quot;&gt;&lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;form&gt;
            &lt;&#x2F;div&gt;
            &lt;!--End mc_embed_signup--&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.newsletter-wrapper --&gt;
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
