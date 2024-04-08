<template>
  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10">
      <footer class="bg-dark text-inverse">
        <div class="container pt-13 pt-md-15 pb-7">
          <div class="row gy-6 gy-lg-0">
            <div class="col-lg-4">
              <div class="widget">
                <h3 class="h2 mb-3 text-white">Join the Community</h3>
                <p class="lead mb-5">
                  Let's make something great together. We are trusted by over
                  5000+ clients. Join them by using our services and grow your
                  business.
                </p>
                <nuxt-link to="/signup" class="btn btn-white rounded-pill"
                  >Join Us</nuxt-link
                >
              </div>
              <!-- /.widget -->
            </div>
            <!-- /column -->
            <div class="col-md-4 col-lg-2 offset-lg-2">
              <div class="widget">
                <h4 class="widget-title text-white mb-3">Need Help?</h4>
                <ul class="list-unstyled text-reset mb-0">
                  <li v-for="link in footerLinks" :key="link.text">
                    <a :href="link.url">{{ link.text }}</a>
                  </li>
                </ul>
              </div>
              <!-- /.widget -->
            </div>
            <!-- /column -->
            <div class="col-md-4 col-lg-2">
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
            <div class="col-md-4 col-lg-2">
              <div class="widget">
                <h4 class="widget-title text-white mb-3">Get in Touch</h4>
                <address>
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
                <a href="mailto:first.last@email.com">info@email.com</a><br />
                00 (123) 456 78 90
              </div>
              <!-- /.widget -->
            </div>
            <!-- /column -->
          </div>
          <!--/.row -->
          <hr class="mt-13 mt-md-15 mb-7" />
          <div class="d-md-flex align-items-center justify-content-between">
            <p class="mb-2 mb-lg-0">
              © {{ new Date().getFullYear() }} Sandbox. All rights reserved.
            </p>
            <nav class="nav social social-white text-md-end">
              <a v-for="link in socialLinks" :key="link.iconClass" :href="'#'">
                <i :class="link.iconClass"></i>
              </a>
            </nav>
            <!-- /.social -->
          </div>
          <!-- /div -->
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
            href="#collapse-snippet-204"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-204"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-3&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10&quot;&gt;
      &lt;footer class&#x3D;&quot;bg-dark text-inverse&quot;&gt;
        &lt;div class&#x3D;&quot;container pt-13 pt-md-15 pb-7&quot;&gt;
          &lt;div class&#x3D;&quot;row gy-6 gy-lg-0&quot;&gt;
            &lt;div class&#x3D;&quot;col-lg-4&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;h3 class&#x3D;&quot;h2 mb-3 text-white&quot;&gt;Join the Community&lt;&#x2F;h3&gt;
                &lt;p class&#x3D;&quot;lead mb-5&quot;&gt;
                  Let&#39;s make something great together. We are trusted by over
                  5000+ clients. Join them by using our services and grow your
                  business.
                &lt;&#x2F;p&gt;
                &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-white rounded-pill&quot;&gt;Join Us&lt;&#x2F;a&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-4 col-lg-2 offset-lg-2&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Need Help?&lt;&#x2F;h4&gt;
                &lt;ul class&#x3D;&quot;list-unstyled text-reset mb-0&quot;&gt;
                  &lt;li v-for&#x3D;&quot;link in footerLinks&quot; :key&#x3D;&quot;link.text&quot;&gt;
                    &lt;a :href&#x3D;&quot;link.url&quot;&gt;&lbrace;&lbrace; link.text &rbrace;&rbrace;&lt;&#x2F;a&gt;
                  &lt;&#x2F;li&gt;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-4 col-lg-2&quot;&gt;
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
            &lt;div class&#x3D;&quot;col-md-4 col-lg-2&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Get in Touch&lt;&#x2F;h4&gt;
                &lt;address&gt;
                  Moonshine St. 14&#x2F;05 Light City, London, United Kingdom
                &lt;&#x2F;address&gt;
                &lt;a href&#x3D;&quot;mailto:first.last@email.com&quot;&gt;info@email.com&lt;&#x2F;a&gt;&lt;br &#x2F;&gt;
                00 (123) 456 78 90
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
          &lt;hr class&#x3D;&quot;mt-13 mt-md-15 mb-7&quot; &#x2F;&gt;
          &lt;div class&#x3D;&quot;d-md-flex align-items-center justify-content-between&quot;&gt;
            &lt;p class&#x3D;&quot;mb-2 mb-lg-0&quot;&gt;© &lbrace;&lbrace; new Date().getFullYear() &rbrace;&rbrace; Sandbox. All rights reserved.&lt;&#x2F;p&gt;
            &lt;nav class&#x3D;&quot;nav social social-white text-md-end&quot;&gt;
              &lt;a v-for&#x3D;&quot;link in socialLinks&quot; :key&#x3D;&quot;link.iconClass&quot; :href&#x3D;&quot;&#39;#&#39;&quot;&gt;
                &lt;i :class&#x3D;&quot;link.iconClass&quot;&gt;&lt;&#x2F;i&gt;
              &lt;&#x2F;a&gt;
            &lt;&#x2F;nav&gt;
            &lt;!-- &#x2F;.social --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;div --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.container --&gt;
      &lt;&#x2F;footer&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
    
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { footerLinks, navigationLinks, socialLinks } from &quot;~&#x2F;data&#x2F;footer&quot;;
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
import { footerLinks, navigationLinks, socialLinks } from "~/data/footer";
</script>

<style lang="scss" scoped></style>
