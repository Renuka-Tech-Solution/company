<template>
  <section id="snippet-2" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-lg-8 col-xl-7 col-xxl-6">
          <h2 class="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
          <h3 class="display-4 mb-9">
            The service we offer is specifically designed to meet your needs.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-md-8 gy-8">
        <div
          v-for="feature in features5"
          :key="feature.id"
          class="col-md-6 col-lg-3"
        >
          <div :class="feature.iconClass">
            <i :class="feature.icon"></i>
          </div>
          <h4>{{ feature.title }}</h4>
          <p class="mb-3">{{ feature.description }}</p>
          <a href="#" :class="['more', 'hover', feature.linkColorClass]"
            >Learn More</a
          >
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
            href="#collapse-snippet-132"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-132"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-2&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-8 col-xl-7 col-xxl-6&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;What We Do?&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-9&quot;&gt;
            The service we offer is specifically designed to meet your needs.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gx-md-8 gy-8&quot;&gt;
        &lt;div
          v-for&#x3D;&quot;feature in features5&quot;
          :key&#x3D;&quot;feature.id&quot;
          class&#x3D;&quot;col-md-6 col-lg-3&quot;
        &gt;
          &lt;div :class&#x3D;&quot;feature.iconClass&quot;&gt;
            &lt;i :class&#x3D;&quot;feature.icon&quot;&gt;&lt;&#x2F;i&gt;
          &lt;&#x2F;div&gt;
          &lt;h4&gt;&lbrace;&lbrace; feature.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
          &lt;p class&#x3D;&quot;mb-3&quot;&gt;&lbrace;&lbrace; feature.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; :class&#x3D;&quot;[&#39;more&#39;, &#39;hover&#39;, feature.linkColorClass]&quot;
            &gt;Learn More&lt;&#x2F;a
          &gt;
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
import { features5 } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import { features5 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
