<template>
  <section id="snippet-12" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-6 px-xl-5">
        <div v-for="item in featureItems" :key="item.id" class="col-lg-4">
          <div class="d-flex flex-row">
            <div>
              <div class="icon btn btn-circle pe-none btn-primary me-4">
                <i :class="item.icon"></i>
              </div>
            </div>
            <div>
              <h4>{{ item.title }}</h4>
              <p class="mb-2">{{ item.description }}</p>
              <a :href="item.link" class="more hover">Learn More</a>
            </div>
          </div>
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
            href="#collapse-snippet-139"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-139"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-12&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-6 px-xl-5&quot;&gt;
        &lt;div v-for&#x3D;&quot;item in featureItems&quot; :key&#x3D;&quot;item.id&quot; class&#x3D;&quot;col-lg-4&quot;&gt;
          &lt;div class&#x3D;&quot;d-flex flex-row&quot;&gt;
            &lt;div&gt;
              &lt;div class&#x3D;&quot;icon btn btn-circle pe-none btn-primary me-4&quot;&gt;
                &lt;i :class&#x3D;&quot;item.icon&quot;&gt;&lt;&#x2F;i&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h4&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
              &lt;p class&#x3D;&quot;mb-2&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
              &lt;a :href&#x3D;&quot;item.link&quot; class&#x3D;&quot;more hover&quot;&gt;Learn More&lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
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
import { featureItems } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import { featureItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
