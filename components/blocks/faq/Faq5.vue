<template>
  <section id="snippet-5" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-md-8 gx-xl-12 gy-10">
        <div v-for="(elm, i) in faq3" :key="i" class="col-lg-6">
          <div class="d-flex flex-row">
            <div>
              <span class="icon btn btn-sm btn-circle btn-primary pe-none me-5"
                ><i class="uil uil-comment-exclamation"></i
              ></span>
            </div>
            <div>
              <h4>{{ elm.question }}</h4>
              <p class="mb-0">{{ elm.answer }}</p>
            </div>
          </div>
        </div>
        <!-- /column -->

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
            href="#collapse-snippet-131"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-131"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-5&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-md-8 gx-xl-12 gy-10&quot;&gt;
        &lt;div v-for&#x3D;&quot;(elm, i) in faq3&quot; :key&#x3D;&quot;i&quot; class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;div class&#x3D;&quot;d-flex flex-row&quot;&gt;
            &lt;div&gt;
              &lt;span class&#x3D;&quot;icon btn btn-sm btn-circle btn-primary pe-none me-5&quot;
                &gt;&lt;i class&#x3D;&quot;uil uil-comment-exclamation&quot;&gt;&lt;&#x2F;i
              &gt;&lt;&#x2F;span&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h4&gt;&lbrace;&lbrace; elm.question &rbrace;&rbrace;&lt;&#x2F;h4&gt;
              &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; elm.answer &rbrace;&rbrace;&lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;

        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { faq3 } from &quot;~&#x2F;data&#x2F;faq&quot;;
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
import { faq3 } from "~/data/faq";
</script>

<style lang="scss" scoped></style>
