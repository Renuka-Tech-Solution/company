<template>
  <section id="snippet-2" class="wrapper bg-light wrapper-border">
    <div class="container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10">
      <div class="mt-14"></div>
      <footer class="bg-soft-primary">
        <div class="container">
          <div class="row">
            <div class="col-xl-11 col-xxl-10 mx-auto">
              <div
                class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 mt-n50p mb-n5"
                style="background-image: url(/assets/img/photos/bg3.jpg)"
              >
                <div
                  class="card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start"
                >
                  <h3
                    class="display-6 mb-6 mb-lg-0 pe-lg-15 pe-xxl-18 text-white"
                  >
                    We are trusted by over 5000+ clients. Join them by using our
                    services and grow your business.
                  </h3>
                  <nuxt-link
                    to="/signup"
                    class="btn btn-white rounded-pill mb-0 text-nowrap"
                    >Join Us</nuxt-link
                  >
                </div>
                <!--/.card-body -->
              </div>
              <!--/.card -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <div class="container pb-12 text-center">
          <div class="row mt-n10 mt-lg-0">
            <div class="col-xl-10 mx-auto">
              <div class="row mb-3">
                <div class="col-md-4">
                  <div class="widget">
                    <h4 class="widget-title">Address</h4>
                    <address>
                      Moonshine St. 14/05 <br class="d-none d-md-block" />
                      Light City, London, UK
                    </address>
                  </div>
                  <!-- /.widget -->
                </div>
                <!--/column -->
                <div class="col-md-4">
                  <div class="widget">
                    <h4 class="widget-title">Phone</h4>
                    <p>00 (123) 456 78 90 <br />00 (987) 654 32 10</p>
                  </div>
                  <!-- /.widget -->
                </div>
                <!--/column -->
                <div class="col-md-4">
                  <div class="widget">
                    <h4 class="widget-title">E-mail</h4>
                    <p>
                      <a href="mailto:sandbox@email.com" class="link-body"
                        >sandbox@email.com</a
                      >
                      <br class="d-none d-md-block" /><a
                        href="mailto:help@sandbox.com"
                        class="link-body"
                        >help@sandbox.com</a
                      >
                    </p>
                  </div>
                  <!-- /.widget -->
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
              <p>
                © {{ new Date().getFullYear() }} Sandbox. All rights reserved.
              </p>
              <nav class="nav social justify-content-center">
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
            <!-- /column -->
          </div>
          <!-- /.row -->
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
            href="#collapse-snippet-203"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-203"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-2&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10&quot;&gt;
      &lt;div class&#x3D;&quot;mt-14&quot;&gt;&lt;&#x2F;div&gt;
      &lt;footer class&#x3D;&quot;bg-soft-primary&quot;&gt;
        &lt;div class&#x3D;&quot;container&quot;&gt;
          &lt;div class&#x3D;&quot;row&quot;&gt;
            &lt;div class&#x3D;&quot;col-xl-11 col-xxl-10 mx-auto&quot;&gt;
              &lt;div
                class&#x3D;&quot;card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 mt-n50p mb-n5&quot;
                style&#x3D;&quot;background-image: url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg3.jpg)&quot;
              &gt;
                &lt;div
                  class&#x3D;&quot;card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start&quot;
                &gt;
                  &lt;h3
                    class&#x3D;&quot;display-6 mb-6 mb-lg-0 pe-lg-15 pe-xxl-18 text-white&quot;
                  &gt;
                    We are trusted by over 5000+ clients. Join them by using our
                    services and grow your business.
                  &lt;&#x2F;h3&gt;
                  &lt;a
                    href&#x3D;&quot;#&quot;
                    class&#x3D;&quot;btn btn-white rounded-pill mb-0 text-nowrap&quot;
                    &gt;Join Us&lt;&#x2F;a
                  &gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;.card-body --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.card --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;div class&#x3D;&quot;container pb-12 text-center&quot;&gt;
          &lt;div class&#x3D;&quot;row mt-n10 mt-lg-0&quot;&gt;
            &lt;div class&#x3D;&quot;col-xl-10 mx-auto&quot;&gt;
              &lt;div class&#x3D;&quot;row mb-3&quot;&gt;
                &lt;div class&#x3D;&quot;col-md-4&quot;&gt;
                  &lt;div class&#x3D;&quot;widget&quot;&gt;
                    &lt;h4 class&#x3D;&quot;widget-title&quot;&gt;Address&lt;&#x2F;h4&gt;
                    &lt;address&gt;
                      Moonshine St. 14&#x2F;05 &lt;br class&#x3D;&quot;d-none d-md-block&quot; &#x2F;&gt;
                      Light City, London, UK
                    &lt;&#x2F;address&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;.widget --&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;column --&gt;
                &lt;div class&#x3D;&quot;col-md-4&quot;&gt;
                  &lt;div class&#x3D;&quot;widget&quot;&gt;
                    &lt;h4 class&#x3D;&quot;widget-title&quot;&gt;Phone&lt;&#x2F;h4&gt;
                    &lt;p&gt;00 (123) 456 78 90 &lt;br &#x2F;&gt;00 (987) 654 32 10&lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;.widget --&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;column --&gt;
                &lt;div class&#x3D;&quot;col-md-4&quot;&gt;
                  &lt;div class&#x3D;&quot;widget&quot;&gt;
                    &lt;h4 class&#x3D;&quot;widget-title&quot;&gt;E-mail&lt;&#x2F;h4&gt;
                    &lt;p&gt;
                      &lt;a href&#x3D;&quot;mailto:sandbox@email.com&quot; class&#x3D;&quot;link-body&quot;
                        &gt;sandbox@email.com&lt;&#x2F;a
                      &gt;
                      &lt;br class&#x3D;&quot;d-none d-md-block&quot; &#x2F;&gt;&lt;a
                        href&#x3D;&quot;mailto:help@sandbox.com&quot;
                        class&#x3D;&quot;link-body&quot;
                        &gt;help@sandbox.com&lt;&#x2F;a
                      &gt;
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;.widget --&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;column --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.row --&gt;
              &lt;p&gt;© &lbrace;&lbrace; new Date().getFullYear() &rbrace;&rbrace; Sandbox. All rights reserved.&lt;&#x2F;p&gt;
              &lt;nav class&#x3D;&quot;nav social justify-content-center&quot;&gt;
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
            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.container --&gt;
      &lt;&#x2F;footer&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { socialLinks } from &quot;~&#x2F;data&#x2F;footer&quot;;
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
import { socialLinks } from "~/data/footer";
</script>

<style lang="scss" scoped></style>
