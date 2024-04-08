<template>
  <section id="snippet-6" class="wrapper bg-light wrapper-border">
    <div class="container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10">
      <footer>
        <div class="container pb-7">
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
            href="#collapse-snippet-208"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-208"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-6&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10&quot;&gt;
      &lt;footer&gt;
        &lt;div class&#x3D;&quot;container pb-7&quot;&gt;
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
