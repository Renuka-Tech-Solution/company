<template>
  <section id="snippet-7" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/i9.png"
              srcset="/assets/img/illustrations/i9@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h3 class="fs-16 text-uppercase text-muted mb-3">How It Works?</h3>
          <h3 class="display-4 mb-6">
            Find out everything about creating a business model.
          </h3>
          <div class="row gy-4">
            <div v-for="(item, index) in steps6" class="col-md-6" :key="index">
              <h4>
                <span class="text-primary">{{ item.number }}.</span>
                {{ item.title }}
              </h4>
              <p class="mb-0">{{ item.description }}</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
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
            href="#collapse-snippet-78"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-78"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-7&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7&quot;&gt;
          &lt;figure&gt;
            &lt;nuxt-img
              class&#x3D;&quot;w-auto&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i9.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i9@2x.png 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5&quot;&gt;
          &lt;h3 class&#x3D;&quot;fs-16 text-uppercase text-muted mb-3&quot;&gt;How It Works?&lt;&#x2F;h3&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-6&quot;&gt;
            Find out everything about creating a business model.
          &lt;&#x2F;h3&gt;
          &lt;div class&#x3D;&quot;row gy-4&quot;&gt;
            &lt;div v-for&#x3D;&quot;(item, index) in steps6&quot; class&#x3D;&quot;col-md-6&quot; :key&#x3D;&quot;index&quot;&gt;
              &lt;h4&gt;
                &lt;span class&#x3D;&quot;text-primary&quot;&gt;&lbrace;&lbrace; item.number &rbrace;&rbrace;.&lt;&#x2F;span&gt;
                &lbrace;&lbrace; item.title &rbrace;&rbrace;
              &lt;&#x2F;h4&gt;
              &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
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
import { steps6 } from &quot;~&#x2F;data&#x2F;process&quot;;
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
import { steps6 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
