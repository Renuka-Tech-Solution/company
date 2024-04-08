<template>
  <section id="snippet-12" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row text-center">
        <div
          class="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative"
        >
          <nuxt-img
            :width="85"
            :height="82"
            src="/assets/img/svg/doodle3.svg"
            class="h-11 position-absolute d-none d-lg-block"
            style="top: -20%; right: -12%"
            alt="image"
          />
          <nuxt-img
            width="206"
            height="214"
            src="/assets/img/svg/doodle9.svg"
            class="h-17 position-absolute d-none d-lg-block"
            style="bottom: 5%; left: -17%"
            alt="image"
          />
          <h2 class="fs-16 text-uppercase text-muted mb-3 text-center">
            Why Choose Sandbox?
          </h2>
          <h3 class="display-3 mb-12 text-center">
            Here are a few
            <span class="text-gradient gradient-7">reasons why</span> our
            customers choose the Sandbox app.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row d-flex align-items-start">
        <div class="col-lg-6 position-lg-sticky" style="top: 8rem">
          <figure>
            <nuxt-img
              src="/assets/img/photos/devices5.png"
              srcset="/assets/img/photos/devices5@2x.png 2x"
              alt="image"
            />
          </figure>
        </div>
        <!-- /column -->
        <div class="col-lg-5 ms-auto">
          <div
            v-for="(feature, index) in features3"
            :key="index"
            class="d-flex flex-row mb-8"
          >
            <div>
              <div :class="feature.svgBgClass">
                <nuxt-img
                  :width="256"
                  :height="256"
                  :src="feature.icon"
                  class="icon-svg solid text-navy"
                  alt="photo"
                />
              </div>
            </div>
            <div>
              <h4 class="fs-20">{{ feature.title }}</h4>
              <p>{{ feature.description }}</p>
            </div>
          </div>
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
            href="#collapse-snippet-100"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-100"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-12&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row text-center&quot;&gt;
        &lt;div
          class&#x3D;&quot;col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative&quot;
        &gt;
          &lt;nuxt-img
            :width&#x3D;&quot;85&quot;
            :height&#x3D;&quot;82&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle3.svg&quot;
            class&#x3D;&quot;h-11 position-absolute d-none d-lg-block&quot;
            style&#x3D;&quot;top: -20%; right: -12%&quot;
            alt&#x3D;&quot;image&quot;
          &#x2F;&gt;
          &lt;nuxt-img
            width&#x3D;&quot;206&quot;
            height&#x3D;&quot;214&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle9.svg&quot;
            class&#x3D;&quot;h-17 position-absolute d-none d-lg-block&quot;
            style&#x3D;&quot;bottom: 5%; left: -17%&quot;
            alt&#x3D;&quot;image&quot;
          &#x2F;&gt;
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-muted mb-3 text-center&quot;&gt;
            Why Choose Sandbox?
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-3 mb-12 text-center&quot;&gt;
            Here are a few
            &lt;span class&#x3D;&quot;text-gradient gradient-7&quot;&gt;reasons why&lt;&#x2F;span&gt; our
            customers choose the Sandbox app.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row d-flex align-items-start&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 position-lg-sticky&quot; style&#x3D;&quot;top: 8rem&quot;&gt;
          &lt;figure&gt;
            &lt;nuxt-img
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices5.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices5@2x.png 2x&quot;
              alt&#x3D;&quot;image&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5 ms-auto&quot;&gt;
          &lt;div
            v-for&#x3D;&quot;(feature, index) in features3&quot;
            :key&#x3D;&quot;index&quot;
            class&#x3D;&quot;d-flex flex-row mb-8&quot;
          &gt;
            &lt;div&gt;
              &lt;div :class&#x3D;&quot;feature.svgBgClass&quot;&gt;
                &lt;nuxt-img
                  :width&#x3D;&quot;256&quot;
                  :height&#x3D;&quot;256&quot;
                  :src&#x3D;&quot;feature.icon&quot;
                  class&#x3D;&quot;icon-svg solid text-navy&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h4 class&#x3D;&quot;fs-20&quot;&gt;&lbrace;&lbrace; feature.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
              &lt;p&gt;&lbrace;&lbrace; feature.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
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
import { features3 } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import { features3 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
