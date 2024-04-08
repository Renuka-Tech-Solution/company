<template>
  <section id="snippet-4" class="wrapper bg-light wrapper-border">
    <div class="container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10">
      <footer>
        <div class="container pb-7">
          <div class="row gx-lg-0 gy-6">
            <div class="col-lg-4">
              <div class="widget">
                <nuxt-img
                  class="mb-4"
                  src="/assets/img/logo.png"
                  srcset="/assets/img/logo@2x.png 2x"
                  alt="photo"
                />
                <p class="lead mb-0">
                  We are trusted by over 5000+ clients. Join them by using our
                  services and grow your business.
                </p>
              </div>
              <!-- /.widget -->
            </div>
            <!-- /column -->
            <div class="col-lg-3 offset-lg-2">
              <div class="widget">
                <div class="d-flex flex-row">
                  <div>
                    <div class="icon text-primary fs-28 me-4 mt-n1">
                      <i class="uil uil-phone-volume"></i>
                    </div>
                  </div>
                  <div>
                    <h5 class="mb-1">Phone</h5>
                    <p class="mb-0">
                      00 (123) 456 78 90 <br />00 (987) 654 32 10
                    </p>
                  </div>
                </div>
                <!--/div -->
              </div>
              <!-- /.widget -->
            </div>
            <!-- /column -->
            <div class="col-lg-3">
              <div class="widget">
                <div class="d-flex flex-row">
                  <div>
                    <div class="icon text-primary fs-28 me-4 mt-n1">
                      <i class="uil uil-location-pin-alt"></i>
                    </div>
                  </div>
                  <div class="align-self-start justify-content-start">
                    <h5 class="mb-1">Address</h5>
                    <address>
                      Moonshine St. 14/05 Light City, London, United Kingdom
                    </address>
                  </div>
                </div>
                <!--/div -->
              </div>
              <!-- /.widget -->
            </div>
            <!-- /column -->
          </div>
          <!--/.row -->
          <hr class="mt-13 mt-md-14 mb-7" />
          <div class="d-md-flex align-items-center justify-content-between">
            <p class="mb-2 mb-lg-0">
              © {{ new Date().getFullYear() }} Sandbox. All rights reserved.
            </p>
            <nav class="nav social social-muted mb-0 text-md-end">
              <a v-for="link in socialLinks" :key="link.iconClass" :href="'#'">
                <i :class="link.iconClass"></i>
              </a>
            </nav>
            <!-- /.social -->
          </div>
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
            href="#collapse-snippet-206"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-206"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-4&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10&quot;&gt;
      &lt;footer&gt;
        &lt;div class&#x3D;&quot;container pb-7&quot;&gt;
          &lt;div class&#x3D;&quot;row gx-lg-0 gy-6&quot;&gt;
            &lt;div class&#x3D;&quot;col-lg-4&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;nuxt-img
                  class&#x3D;&quot;mb-4&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo.png&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;logo@2x.png 2x&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
                &lt;p class&#x3D;&quot;lead mb-0&quot;&gt;
                  We are trusted by over 5000+ clients. Join them by using our
                  services and grow your business.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-lg-3 offset-lg-2&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;div class&#x3D;&quot;d-flex flex-row&quot;&gt;
                  &lt;div&gt;
                    &lt;div class&#x3D;&quot;icon text-primary fs-28 me-4 mt-n1&quot;&gt;
                      &lt;i class&#x3D;&quot;uil uil-phone-volume&quot;&gt;&lt;&#x2F;i&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div&gt;
                    &lt;h5 class&#x3D;&quot;mb-1&quot;&gt;Phone&lt;&#x2F;h5&gt;
                    &lt;p class&#x3D;&quot;mb-0&quot;&gt;
                      00 (123) 456 78 90 &lt;br &#x2F;&gt;00 (987) 654 32 10
                    &lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;div --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-lg-3&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;div class&#x3D;&quot;d-flex flex-row&quot;&gt;
                  &lt;div&gt;
                    &lt;div class&#x3D;&quot;icon text-primary fs-28 me-4 mt-n1&quot;&gt;
                      &lt;i class&#x3D;&quot;uil uil-location-pin-alt&quot;&gt;&lt;&#x2F;i&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;div class&#x3D;&quot;align-self-start justify-content-start&quot;&gt;
                    &lt;h5 class&#x3D;&quot;mb-1&quot;&gt;Address&lt;&#x2F;h5&gt;
                    &lt;address&gt;
                      Moonshine St. 14&#x2F;05 Light City, London, United Kingdom
                    &lt;&#x2F;address&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;div --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
          &lt;hr class&#x3D;&quot;mt-13 mt-md-14 mb-7&quot; &#x2F;&gt;
          &lt;div class&#x3D;&quot;d-md-flex align-items-center justify-content-between&quot;&gt;
            &lt;p class&#x3D;&quot;mb-2 mb-lg-0&quot;&gt;© &lbrace;&lbrace; new Date().getFullYear() &rbrace;&rbrace; Sandbox. All rights reserved.&lt;&#x2F;p&gt;
            &lt;nav class&#x3D;&quot;nav social social-muted mb-0 text-md-end&quot;&gt;
              &lt;a v-for&#x3D;&quot;link in socialLinks&quot; :key&#x3D;&quot;link.iconClass&quot; :href&#x3D;&quot;&#39;#&#39;&quot;&gt;
                &lt;i :class&#x3D;&quot;link.iconClass&quot;&gt;&lt;&#x2F;i&gt;
              &lt;&#x2F;a&gt;
            &lt;&#x2F;nav&gt;
            &lt;!-- &#x2F;.social --&gt;
          &lt;&#x2F;div&gt;
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
