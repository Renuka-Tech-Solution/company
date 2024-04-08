<template>
  <section id="snippet-5" class="wrapper bg-light wrapper-border">
    <div class="container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10">
      <footer class="bg-navy text-inverse">
        <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
          <div class="d-lg-flex flex-row align-items-lg-center">
            <h3
              class="display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white"
            >
              Join our community by using our services and grow your business.
            </h3>
            <nuxt-link
              to="/signup"
              class="btn btn-primary rounded-pill mb-0 text-nowrap"
              >Try It For Free</nuxt-link
            >
          </div>
          <!--/div -->
          <hr class="mt-11 mb-12" />
          <div class="row gy-6 gy-lg-0">
            <div class="col-md-4 col-lg-3">
              <div class="widget">
                <nuxt-img
                  class="mb-4"
                  src="/assets/img/logo-light.png"
                  srcset="/assets/img/logo-light@2x.png 2x"
                  alt="photo"
                />
                <p class="mb-4">
                  © {{ new Date().getFullYear() }} Sandbox.
                  <br class="d-none d-lg-block" />All rights reserved.
                </p>
                <nav class="nav social social-white">
                  <a
                    v-for="link in socialLinks"
                    :key="link.iconClass"
                    :href="'#'"
                  >
                    <i :class="link.iconClass"></i>
                  </a>
                </nav>
                <!-- /.social -->
              </div>
              <!-- /.widget -->
            </div>
            <!-- /column -->
            <div class="col-md-4 col-lg-3">
              <div class="widget">
                <h4 class="widget-title text-white mb-3">Get in Touch</h4>
                <address class="pe-xl-15 pe-xxl-17">
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
                <a href="mailto:#">info@email.com</a><br />
                00 (123) 456 78 90
              </div>
              <!-- /.widget -->
            </div>
            <!-- /column -->
            <div class="col-md-4 col-lg-3">
              <div class="widget">
                <h4 class="widget-title text-white mb-3">Learn More</h4>
                <ul class="list-unstyled mb-0">
                  <li v-for="link in navigationLinks" :key="link.text">
                    <a :href="link.url">{{ link.text }}</a>
                  </li>
                </ul>
              </div>
              <!-- /.widget -->
            </div>
            <!-- /column -->
            <div class="col-md-12 col-lg-3">
              <div class="widget">
                <h4 class="widget-title text-white mb-3">Our Newsletter</h4>
                <p class="mb-5">
                  Subscribe to our newsletter to get our news & deals delivered
                  to you.
                </p>
                <div class="newsletter-wrapper">
                  <!-- Begin Mailchimp Signup Form -->
                  <div id="mc_embed_signup2">
                    <form
                      class="validate dark-fields"
                      @submit.prevent="handleSubmit"
                    >
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
              <!-- /.widget -->
            </div>
            <!-- /column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /.container -->
      </footer>
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-207"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-207"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-5&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10&quot;&gt;
      &lt;footer class&#x3D;&quot;bg-navy text-inverse&quot;&gt;
        &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
          &lt;div class&#x3D;&quot;d-lg-flex flex-row align-items-lg-center&quot;&gt;
            &lt;h3
              class&#x3D;&quot;display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white&quot;
            &gt;
              Join our community by using our services and grow your business.
            &lt;&#x2F;h3&gt;
            &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary rounded-pill mb-0 text-nowrap&quot;
              &gt;Try It For Free&lt;&#x2F;a
            &gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;div --&gt;
          &lt;hr class&#x3D;&quot;mt-11 mb-12&quot; &#x2F;&gt;
          &lt;div class&#x3D;&quot;row gy-6 gy-lg-0&quot;&gt;
            &lt;div class&#x3D;&quot;col-md-4 col-lg-3&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;nuxt-img
                  class&#x3D;&quot;mb-4&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo-light.png&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo-light@2x.png 2x&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
                &lt;p class&#x3D;&quot;mb-4&quot;&gt;
                  © &lbrace;&lbrace; new Date().getFullYear() &rbrace;&rbrace; Sandbox. &lt;br class&#x3D;&quot;d-none d-lg-block&quot; &#x2F;&gt;All rights
                  reserved.
                &lt;&#x2F;p&gt;
                &lt;nav class&#x3D;&quot;nav social social-white&quot;&gt;
                  &lt;a
                    v-for&#x3D;&quot;link in socialLinks&quot;
                    :key&#x3D;&quot;link.iconClass&quot;
                    :href&#x3D;&quot;&#39;#&#39;&quot;
                  &gt;
                    &lt;i :class&#x3D;&quot;link.iconClass&quot;&gt;&lt;&#x2F;i&gt;
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;nav&gt;
                &lt;!-- &#x2F;.social --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-4 col-lg-3&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Get in Touch&lt;&#x2F;h4&gt;
                &lt;address class&#x3D;&quot;pe-xl-15 pe-xxl-17&quot;&gt;
                  Moonshine St. 14&#x2F;05 Light City, London, United Kingdom
                &lt;&#x2F;address&gt;
                &lt;a href&#x3D;&quot;mailto:#&quot;&gt;info@email.com&lt;&#x2F;a&gt;&lt;br &#x2F;&gt;
                00 (123) 456 78 90
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-4 col-lg-3&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Learn More&lt;&#x2F;h4&gt;
                &lt;ul class&#x3D;&quot;list-unstyled mb-0&quot;&gt;
                  &lt;li v-for&#x3D;&quot;link in navigationLinks&quot; :key&#x3D;&quot;link.text&quot;&gt;
                    &lt;a :href&#x3D;&quot;link.url&quot;&gt;&lbrace;&lbrace; link.text &rbrace;&rbrace;&lt;&#x2F;a&gt;
                  &lt;&#x2F;li&gt;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-12 col-lg-3&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Our Newsletter&lt;&#x2F;h4&gt;
                &lt;p class&#x3D;&quot;mb-5&quot;&gt;
                  Subscribe to our newsletter to get our news &amp; deals delivered
                  to you.
                &lt;&#x2F;p&gt;
                &lt;div class&#x3D;&quot;newsletter-wrapper&quot;&gt;
                  &lt;!-- Begin Mailchimp Signup Form --&gt;
                  &lt;div id&#x3D;&quot;mc_embed_signup2&quot;&gt;
                    &lt;form
                      class&#x3D;&quot;validate dark-fields&quot;
                      @submit.prevent&#x3D;&quot;handleSubmit&quot;
                    &gt;
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
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.container --&gt;
      &lt;&#x2F;footer&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { socialLinks, navigationLinks } from &quot;~&#x2F;data&#x2F;footer&quot;;
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
import { socialLinks, navigationLinks } from "~/data/footer";
const handleSubmit = () => {};
</script>

<style lang="scss" scoped></style>
