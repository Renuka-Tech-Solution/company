<template>
  <section id="snippet-8" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center">
        <div class="col-lg-6">
          <div class="row gx-md-5 gy-5">
            <div class="col-12">
              <figure class="rounded mx-md-5">
                <nuxt-img
                  :width="1120"
                  :height="570"
                  src="/assets/img/photos/g8.jpg"
                  srcset="/assets/img/photos/g8@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>

            <!--/column -->
            <div class="col-md-6">
              <figure class="rounded">
                <nuxt-img
                  :width="293"
                  :height="260"
                  src="/assets/img/photos/g9.jpg"
                  srcset="/assets/img/photos/g9@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6">
              <figure class="rounded">
                <nuxt-img
                  :width="293"
                  :height="235"
                  src="/assets/img/photos/g10.jpg"
                  srcset="/assets/img/photos/g10@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="fs-16 text-uppercase text-muted mb-3">
            What Makes Us Different?
          </h2>
          <h3 class="display-3 mb-10">
            We bring
            <span class="underline-3 style-2 yellow">solutions</span> to make
            life easier for our customers.
          </h3>
          <div class="row gy-8">
            <div v-for="item in features" :key="item.title" class="col-md-6">
              <div class="d-flex flex-row">
                <div>
                  <nuxt-img
                    :src="item.icon"
                    class="icon-svg icon-svg-xs solid-mono"
                    :class="item.textColor"
                    alt="photo"
                  />
                </div>
                <div>
                  <h4 class="mb-1">{{ item.title }}</h4>
                  <p class="mb-0">{{ item.description }}</p>
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
            href="#collapse-snippet-250"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-250"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-8&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;div class&#x3D;&quot;row gx-md-5 gy-5&quot;&gt;
            &lt;div class&#x3D;&quot;col-12&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded mx-md-5&quot;&gt;
                &lt;nuxt-img
                  :width&#x3D;&quot;1120&quot;
                  :height&#x3D;&quot;570&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g8.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g8@2x.jpg 2x&quot;
                  alt&#x3D;&quot;image&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;

            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                &lt;nuxt-img
                  :width&#x3D;&quot;293&quot;
                  :height&#x3D;&quot;260&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g9.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g9@2x.jpg 2x&quot;
                  alt&#x3D;&quot;image&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                &lt;nuxt-img
                  :width&#x3D;&quot;293&quot;
                  :height&#x3D;&quot;235&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g10.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g10@2x.jpg 2x&quot;
                  alt&#x3D;&quot;image&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-muted mb-3&quot;&gt;
            What Makes Us Different?
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-3 mb-10&quot;&gt;
            We bring
            &lt;span class&#x3D;&quot;underline-3 style-2 yellow&quot;&gt;solutions&lt;&#x2F;span&gt; to make
            life easier for our customers.
          &lt;&#x2F;h3&gt;
          &lt;div class&#x3D;&quot;row gy-8&quot;&gt;
            &lt;div v-for&#x3D;&quot;item in features&quot; :key&#x3D;&quot;item.title&quot; class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;div class&#x3D;&quot;d-flex flex-row&quot;&gt;
                &lt;div&gt;
                  &lt;nuxt-img
                    :src&#x3D;&quot;item.icon&quot;
                    class&#x3D;&quot;icon-svg icon-svg-xs solid-mono&quot;
                    :class&#x3D;&quot;item.textColor&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
                  &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
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
import { features } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import { features } from "~/data/features";
</script>

<style lang="scss" scoped></style>
