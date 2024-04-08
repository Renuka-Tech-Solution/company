<template>
  <section id="snippet-8" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row text-center">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-15 text-uppercase text-muted mb-3">App Features</h2>
          <h3 class="display-4 mb-9 px-xl-11">
            Sandbox is the only app you need to track your goals for better
            health.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-8">
        <div
          v-for="feature in healthFeatures"
          :key="feature.id"
          class="col-md-6 col-lg-4"
        >
          <div class="d-flex flex-row">
            <div>
              <nuxt-img
                :src="feature.iconSrc"
                class="icon-svg icon-svg-sm me-4"
                :class="feature.iconColorClass"
                alt="photo"
              />
            </div>
            <div>
              <h4 class="mb-1">{{ feature.title }}</h4>
              <p class="mb-0">{{ feature.description }}</p>
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
            href="#collapse-snippet-135"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-135"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-8&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row text-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-10 offset-md-1 col-lg-8 offset-lg-2&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;App Features&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-9 px-xl-11&quot;&gt;
            Sandbox is the only app you need to track your goals for better
            health.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-8&quot;&gt;
        &lt;div
          v-for&#x3D;&quot;feature in healthFeatures&quot;
          :key&#x3D;&quot;feature.id&quot;
          class&#x3D;&quot;col-md-6 col-lg-4&quot;
        &gt;
          &lt;div class&#x3D;&quot;d-flex flex-row&quot;&gt;
            &lt;div&gt;
              &lt;nuxt-img
                :src&#x3D;&quot;feature.iconSrc&quot;
                class&#x3D;&quot;icon-svg icon-svg-sm me-4&quot;
                :class&#x3D;&quot;feature.iconColorClass&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; feature.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
              &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; feature.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
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
import { healthFeatures } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import { healthFeatures } from "~/data/features";
</script>

<style lang="scss" scoped></style>
