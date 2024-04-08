<template>
  <section id="snippet-2" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
        <div class="col-lg-4 mt-lg-2">
          <h2 class="fs-15 text-uppercase text-muted mb-3">Our Clients</h2>
          <h3 class="display-4 mb-3 pe-xxl-5">Trusted by over 300+ clients</h3>
          <p class="lead fs-lg mb-0 pe-xxl-5">
            We bring solutions to make life easier for our customers.
          </p>
        </div>
        <!-- /column -->
        <div class="col-lg-8">
          <div class="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-12">
            <div v-for="(elm, i) in clients2" :key="i" class="col">
              <figure class="px-3 px-md-0 px-xxl-2">
                <nuxt-img :src="elm.src" alt="photo" />
              </figure>
            </div>
            <!--/column -->

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
            href="#collapse-snippet-117"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-117"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-2&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 gy-lg-0&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-4 mt-lg-2&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;Our Clients&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-3 pe-xxl-5&quot;&gt;Trusted by over 300+ clients&lt;&#x2F;h3&gt;
          &lt;p class&#x3D;&quot;lead fs-lg mb-0 pe-xxl-5&quot;&gt;
            We bring solutions to make life easier for our customers.
          &lt;&#x2F;p&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-8&quot;&gt;
          &lt;div class&#x3D;&quot;row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-12&quot;&gt;
            &lt;div v-for&#x3D;&quot;(elm, i) in clients2&quot; :key&#x3D;&quot;i&quot; class&#x3D;&quot;col&quot;&gt;
              &lt;figure class&#x3D;&quot;px-3 px-md-0 px-xxl-2&quot;&gt;
                &lt;nuxt-img :src&#x3D;&quot;elm.src&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;

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
import { clients2 } from &quot;~&#x2F;data&#x2F;clients&quot;;
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
import { clients2 } from "~/data/clients";
</script>

<style lang="scss" scoped></style>
