<template>
  <section id="snippet-17" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row text-center">
        <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto position-relative">
          <nuxt-img
            src="/assets/img/svg/doodle3.svg"
            class="h-11 position-absolute d-none d-lg-block"
            style="top: -45%; left: 23%"
            alt="photo"
          />
          <nuxt-img
            src="/assets/img/svg/doodle4.svg"
            class="h-8 position-absolute d-none d-lg-block"
            style="top: 6%; right: 2%"
            alt="photo"
          />
          <h2 class="fs-16 text-uppercase text-muted mb-3">App Features</h2>
          <h3 class="display-3 mb-11 px-lg-5 px-xl-0 px-xxl-3">
            Sandbox makes your spending
            <span class="text-gradient gradient-7">stress-free</span> for you to
            have the perfect control.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-xxl-11 mx-auto">
          <div class="row gx-md-8 gy-10 text-center">
            <div
              v-for="feature in features6"
              :key="feature.id"
              class="col-md-6 col-lg-3"
            >
              <div
                :class="[
                  'svg-bg',
                  'svg-bg-lg',
                  feature.bgColor,
                  'rounded-xl',
                  'mb-4',
                ]"
              >
                <nuxt-img
                  :src="feature.icon"
                  class="icon-svg solid text-navy"
                  alt="photo"
                />
              </div>
              <h4 class="fs-20">{{ feature.title }}</h4>
            </div>
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
            href="#collapse-snippet-40"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-40"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-17&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row text-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-10 col-xl-9 col-xxl-8 mx-auto position-relative&quot;&gt;
          &lt;nuxt-img
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle3.svg&quot;
            class&#x3D;&quot;h-11 position-absolute d-none d-lg-block&quot;
            style&#x3D;&quot;top: -45%; left: 23%&quot;
            alt&#x3D;&quot;&quot;
          &#x2F;&gt;
          &lt;nuxt-img
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle4.svg&quot;
            class&#x3D;&quot;h-8 position-absolute d-none d-lg-block&quot;
            style&#x3D;&quot;top: 6%; right: 2%&quot;
            alt&#x3D;&quot;&quot;
          &#x2F;&gt;
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-muted mb-3&quot;&gt;App Features&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-3 mb-11 px-lg-5 px-xl-0 px-xxl-3&quot;&gt;
            Sandbox makes your spending
            &lt;span class&#x3D;&quot;text-gradient gradient-7&quot;&gt;stress-free&lt;&#x2F;span&gt; for you to
            have the perfect control.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-xxl-11 mx-auto&quot;&gt;
          &lt;div class&#x3D;&quot;row gx-md-8 gy-10 text-center&quot;&gt;
            &lt;div
              v-for&#x3D;&quot;feature in features6&quot;
              :key&#x3D;&quot;feature.id&quot;
              class&#x3D;&quot;col-md-6 col-lg-3&quot;
            &gt;
              &lt;div
                :class&#x3D;&quot;[
                  &#39;svg-bg&#39;,
                  &#39;svg-bg-lg&#39;,
                  feature.bgColor,
                  &#39;rounded-xl&#39;,
                  &#39;mb-4&#39;,
                ]&quot;
              &gt;
                &lt;nuxt-img
                  :src&#x3D;&quot;feature.icon&quot;
                  class&#x3D;&quot;icon-svg solid text-navy&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
              &lt;&#x2F;div&gt;
              &lt;h4 class&#x3D;&quot;fs-20&quot;&gt;&lbrace;&lbrace; feature.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
            &lt;&#x2F;div&gt;
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
import { features6 } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import { features6 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
