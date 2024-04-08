<template>
  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <h2 class="fs-15 text-uppercase text-muted mb-3">Our Clients</h2>
      <div class="row gx-lg-8 mb-10 gy-5">
        <div class="col-lg-6">
          <h3 class="display-5 mb-0">
            We are trusted by over 300+ clients. Join them by using our services
            and grow your business.
          </h3>
        </div>
        <!-- /column -->
        <div class="col-lg-6">
          <p class="lead mb-0">
            Donec ullamcorper nulla non metus auctor fringilla. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Integer posuere erat a ante. Maecenas faucibus mollis
            interdum. Cras justo odio mollis.
          </p>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div
        class="row row-cols-2 row-cols-md-3 row-cols-xl-5 gx-lg-6 gy-6 justify-content-center"
      >
        <div v-for="(elm, i) in clients2.slice(0, 5)" :key="i" class="col">
          <div class="card shadow-lg h-100 align-items-center">
            <div class="card-body align-items-center d-flex px-3 py-6 p-md-8">
              <figure class="px-md-3 px-xl-0 px-xxl-3 mb-0">
                <nuxt-img :src="elm.src" alt="photo" />
              </figure>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!--/column -->

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
            href="#collapse-snippet-16"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-16"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-3&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;Our Clients&lt;&#x2F;h2&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 mb-10 gy-5&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h3 class&#x3D;&quot;display-5 mb-0&quot;&gt;
            We are trusted by over 300+ clients. Join them by using our services
            and grow your business.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;p class&#x3D;&quot;lead mb-0&quot;&gt;
            Donec ullamcorper nulla non metus auctor fringilla. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Integer posuere erat a ante. Maecenas faucibus mollis
            interdum. Cras justo odio mollis.
          &lt;&#x2F;p&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div
        class&#x3D;&quot;row row-cols-2 row-cols-md-3 row-cols-xl-5 gx-lg-6 gy-6 justify-content-center&quot;
      &gt;
        &lt;div v-for&#x3D;&quot;(elm, i) in clients2.slice(0, 5)&quot; :key&#x3D;&quot;i&quot; class&#x3D;&quot;col&quot;&gt;
          &lt;div class&#x3D;&quot;card shadow-lg h-100 align-items-center&quot;&gt;
            &lt;div class&#x3D;&quot;card-body align-items-center d-flex px-3 py-6 p-md-8&quot;&gt;
              &lt;figure class&#x3D;&quot;px-md-3 px-xl-0 px-xxl-3 mb-0&quot;&gt;
                &lt;nuxt-img :src&#x3D;&quot;elm.src&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.card --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;

        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
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
