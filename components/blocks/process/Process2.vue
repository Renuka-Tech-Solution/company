<template>
  <section id="snippet-2" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <h2 class="display-4 mb-3">How We Do It?</h2>
      <p class="lead fs-lg mb-8">
        We make your spending <span class="underline">stress-free</span> for you
        to have the perfect control.
      </p>
      <div class="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
        <div
          v-for="(item, index) in steps"
          class="col-md-6 col-lg-3"
          :key="index"
        >
          <span
            :class="[
              'icon',
              'btn',
              'btn-circle',
              'btn-lg',
              item.number != 2 ? 'btn-soft-primary' : 'btn-primary',
              'pe-none',
              'mb-4',
            ]"
          >
            <span class="number">{{ item.number }}</span>
          </span>
          <h4 class="mb-1">{{ item.title }}</h4>
          <p class="mb-0">{{ item.description }}</p>
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
            href="#collapse-snippet-181"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-181"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-2&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;How We Do It?&lt;&#x2F;h2&gt;
      &lt;p class&#x3D;&quot;lead fs-lg mb-8&quot;&gt;
        We make your spending &lt;span class&#x3D;&quot;underline&quot;&gt;stress-free&lt;&#x2F;span&gt; for you
        to have the perfect control.
      &lt;&#x2F;p&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-6 process-wrapper line&quot;&gt;
        &lt;div
          v-for&#x3D;&quot;(item, index) in steps&quot;
          class&#x3D;&quot;col-md-6 col-lg-3&quot;
          :key&#x3D;&quot;index&quot;
        &gt;
          &lt;span
            :class&#x3D;&quot;[
              &#39;icon&#39;,
              &#39;btn&#39;,
              &#39;btn-circle&#39;,
              &#39;btn-lg&#39;,
              item.number !&#x3D; 2 ? &#39;btn-soft-primary&#39; : &#39;btn-primary&#39;,
              &#39;pe-none&#39;,
              &#39;mb-4&#39;,
            ]&quot;
          &gt;
            &lt;span class&#x3D;&quot;number&quot;&gt;&lbrace;&lbrace; item.number &rbrace;&rbrace;&lt;&#x2F;span&gt;
          &lt;&#x2F;span&gt;
          &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
          &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
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
import { steps } from &quot;~&#x2F;data&#x2F;process&quot;;
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
import { steps } from "~/data/process";
</script>

<style lang="scss" scoped></style>
