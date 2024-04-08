<template>
  <section id="snippet-6" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7 order-lg-2">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/i7.png"
              srcset="/assets/img/illustrations/i7@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h3 class="display-4 mb-5">
            We make your spending stress-free for you to have the perfect
            control.
          </h3>
          <p class="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </p>
          <div class="row gy-3">
            <div class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 2)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
            </div>
            <!--/column -->
            <div class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                <li
                  v-for="(item, index) in checklistItems.slice(2, 4)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
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
            href="#collapse-snippet-134"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-134"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-6&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7 order-lg-2&quot;&gt;
          &lt;figure&gt;
            &lt;nuxt-img
              class&#x3D;&quot;w-auto&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i7.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i7@2x.png 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5&quot;&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-5&quot;&gt;
            We make your spending stress-free for you to have the perfect
            control.
          &lt;&#x2F;h3&gt;
          &lt;p class&#x3D;&quot;mb-6&quot;&gt;
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;row gy-3&quot;&gt;
            &lt;div class&#x3D;&quot;col-xl-6&quot;&gt;
              &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-primary mb-0&quot;&gt;
                &lt;li
                  v-for&#x3D;&quot;(item, index) in checklistItems.slice(0, 2)&quot;
                  :key&#x3D;&quot;index&quot;
                  :class&#x3D;&quot;{ &#39;mt-3&#39;: index &gt; 0 }&quot;
                &gt;
                  &lt;span&gt;&lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i&gt;&lt;&#x2F;span&gt;
                  &lt;span&gt;&lbrace;&lbrace; item.text &rbrace;&rbrace;&lt;&#x2F;span&gt;
                &lt;&#x2F;li&gt;
              &lt;&#x2F;ul&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-xl-6&quot;&gt;
              &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-primary mb-0&quot;&gt;
                &lt;li
                  v-for&#x3D;&quot;(item, index) in checklistItems.slice(2, 4)&quot;
                  :key&#x3D;&quot;index&quot;
                  :class&#x3D;&quot;{ &#39;mt-3&#39;: index &gt; 0 }&quot;
                &gt;
                  &lt;span&gt;&lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i&gt;&lt;&#x2F;span&gt;
                  &lt;span&gt;&lbrace;&lbrace; item.text &rbrace;&rbrace;&lt;&#x2F;span&gt;
                &lt;&#x2F;li&gt;
              &lt;&#x2F;ul&gt;
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
import { checklistItems } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import { checklistItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
