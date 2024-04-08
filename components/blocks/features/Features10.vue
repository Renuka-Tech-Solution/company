<template>
  <section id="snippet-10" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gy-8 align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div class="row gx-md-5 gy-5">
            <div class="col-md-4 offset-md-2 align-self-end">
              <figure class="rounded">
                <nuxt-img
                  src="/assets/img/photos/g1.jpg"
                  srcset="/assets/img/photos/g1@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6 align-self-end">
              <figure class="rounded">
                <nuxt-img
                  src="/assets/img/photos/g2.jpg"
                  srcset="/assets/img/photos/g2@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6 offset-md-1">
              <figure class="rounded">
                <nuxt-img
                  src="/assets/img/photos/g3.jpg"
                  srcset="/assets/img/photos/g3@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-4 align-self-start">
              <figure class="rounded">
                <nuxt-img
                  src="/assets/img/photos/g4.jpg"
                  srcset="/assets/img/photos/g4@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-4 mb-3">What We Do?</h2>
          <p class="lead fs-lg mb-8 pe-xxl-2">
            The full service we are offering is
            <span class="underline">specifically</span> designed to meet your
            business needs and projects.
          </p>
          <div class="row gx-xl-10 gy-6">
            <div
              v-for="feature in serviceFeatures"
              :key="feature.id"
              class="col-md-6 col-lg-12 col-xl-6"
            >
              <div class="d-flex flex-row">
                <div>
                  <div
                    class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-5"
                  >
                    <i :class="feature.icon"></i>
                  </div>
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
            href="#collapse-snippet-137"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-137"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-10&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gy-8 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 order-lg-2&quot;&gt;
          &lt;div class&#x3D;&quot;row gx-md-5 gy-5&quot;&gt;
            &lt;div class&#x3D;&quot;col-md-4 offset-md-2 align-self-end&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                &lt;nuxt-img
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g1.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g1@2x.jpg 2x&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6 align-self-end&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                &lt;nuxt-img
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g2.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g2@2x.jpg 2x&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6 offset-md-1&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                &lt;nuxt-img
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g3.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g3@2x.jpg 2x&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-4 align-self-start&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                &lt;nuxt-img
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g4.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g4@2x.jpg 2x&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;What We Do?&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg mb-8 pe-xxl-2&quot;&gt;
            The full service we are offering is
            &lt;span class&#x3D;&quot;underline&quot;&gt;specifically&lt;&#x2F;span&gt; designed to meet your
            business needs and projects.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;row gx-xl-10 gy-6&quot;&gt;
            &lt;div
              v-for&#x3D;&quot;feature in serviceFeatures&quot;
              :key&#x3D;&quot;feature.id&quot;
              class&#x3D;&quot;col-md-6 col-lg-12 col-xl-6&quot;
            &gt;
              &lt;div class&#x3D;&quot;d-flex flex-row&quot;&gt;
                &lt;div&gt;
                  &lt;div
                    class&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-primary pe-none me-5&quot;
                  &gt;
                    &lt;i :class&#x3D;&quot;feature.icon&quot;&gt;&lt;&#x2F;i&gt;
                  &lt;&#x2F;div&gt;
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
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { serviceFeatures } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import { serviceFeatures } from "~/data/features";
</script>

<style lang="scss" scoped></style>
