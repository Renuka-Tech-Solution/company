<template>
  <section id="snippet-5" class="wrapper bg-light wrapper-border">
    <div class="wrapper bg-soft-primary mb-12 mb-md-14">
      <div class="container py-14 py-md-16">
        <div class="row mb-8">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="fs-16 text-uppercase text-primary mb-3">Analyze Now</h2>
            <h3 class="display-4 mb-0">
              Wonder how much faster your website can go? Easily check your SEO
              Score now.
            </h3>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <div class="row">
          <div class="col-lg-5 mx-auto">
            <form @submit.prevent="handleSubmit">
              <div class="form-floating input-group">
                <input
                  type="url"
                  class="form-control border-0"
                  placeholder="Enter Website URL"
                />
                <label>Enter Website URL</label>
                <button class="btn btn-primary" type="button">Analyze</button>
              </div>
            </form>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-113"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-113"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-5&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;wrapper bg-soft-primary mb-12 mb-md-14&quot;&gt;
      &lt;div class&#x3D;&quot;container py-14 py-md-16&quot;&gt;
        &lt;div class&#x3D;&quot;row mb-8&quot;&gt;
          &lt;div class&#x3D;&quot;col-lg-8 mx-auto text-center&quot;&gt;
            &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-primary mb-3&quot;&gt;Analyze Now&lt;&#x2F;h2&gt;
            &lt;h3 class&#x3D;&quot;display-4 mb-0&quot;&gt;
              Wonder how much faster your website can go? Easily check your SEO
              Score now.
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;column --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.row --&gt;
        &lt;div class&#x3D;&quot;row&quot;&gt;
          &lt;div class&#x3D;&quot;col-lg-5 mx-auto&quot;&gt;
            &lt;form @submit.prevent&#x3D;&quot;handleSubmit&quot;&gt;
              &lt;div class&#x3D;&quot;form-floating input-group&quot;&gt;
                &lt;input
                  type&#x3D;&quot;url&quot;
                  class&#x3D;&quot;form-control border-0&quot;
                  placeholder&#x3D;&quot;Enter Website URL&quot;
                  id&#x3D;&quot;analyze&quot;
                &#x2F;&gt;
                &lt;label for&#x3D;&quot;analyze&quot;&gt;Enter Website URL&lt;&#x2F;label&gt;
                &lt;button class&#x3D;&quot;btn btn-primary&quot; type&#x3D;&quot;button&quot;&gt;Analyze&lt;&#x2F;button&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;form&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;column --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.row --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.container --&gt;
    &lt;&#x2F;div&gt;
  
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
const handleSubmit &#x3D; () &#x3D;&gt; {};
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
const handleSubmit = () => {};
</script>

<style lang="scss" scoped></style>
