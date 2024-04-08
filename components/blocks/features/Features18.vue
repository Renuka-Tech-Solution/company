<template>
  <section id="snippet-18" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row text-center">
        <div class="col-md-10 col-lg-9 col-xxl-7 mx-auto mb-12">
          <h2 class="fs-16 text-uppercase text-muted mb-3">Our Services</h2>
          <h3 class="display-2 ls-sm px-xxl-8">
            The service we offer is
            <span class="underline-3 style-1 primary"><em>designed</em></span>
            to meet your business needs.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gy-10 align-items-center mb-15 mb-md-17">
        <div class="col-lg-7">
          <figure>
            <nuxt-img
              class="img-fluid"
              src="/assets/img/illustrations/i29.png"
              srcset="/assets/img/illustrations/i29@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!-- /column -->
        <div class="col-lg-4 ms-auto">
          <div class="svg-bg bg-pale-primary rounded mb-5">
            <nuxt-img
              src="/assets/img/icons/solid/like.svg"
              class="icon-svg solid text-primary"
              alt="photo"
            />
          </div>
          <h3 class="h1 post-title ls-sm mb-3">Social Media Marketing</h3>
          <p>
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus.
          </p>
          <ul class="icon-list bullet-bg bullet-soft-primary">
            <li
              v-for="(item, index) in checklistItems.slice(0, 3)"
              :key="index"
              :class="{ 'mt-3': index > 0 }"
            >
              <span><i class="uil uil-check"></i></span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
          <a href="#" class="more hover link-primary">Learn More</a>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gy-10 align-items-center">
        <div class="col-lg-7 order-lg-2">
          <figure>
            <nuxt-img
              class="img-fluid"
              src="/assets/img/illustrations/i30.png"
              srcset="/assets/img/illustrations/i30@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!-- /column -->
        <div class="col-lg-4 me-auto">
          <div class="svg-bg bg-pale-green rounded mb-5">
            <nuxt-img
              src="/assets/img/icons/solid/layout-2.svg"
              class="icon-svg solid text-green"
              alt="photo"
            />
          </div>
          <h3 class="h1 post-title ls-sm mb-3">Web Design & Development</h3>
          <p>
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus.
          </p>
          <ul class="icon-list bullet-bg bullet-soft-green">
            <li
              v-for="(item, index) in checklistItems.slice(0, 3)"
              :key="index"
              :class="{ 'mt-3': index > 0 }"
            >
              <span><i class="uil uil-check"></i></span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
          <a href="#" class="more hover link-green">Learn More</a>
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
            href="#collapse-snippet-143"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-143"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-18&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row text-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-10 col-lg-9 col-xxl-7 mx-auto mb-12&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-muted mb-3&quot;&gt;Our Services&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-2 ls-sm px-xxl-8&quot;&gt;
            The service we offer is
            &lt;span class&#x3D;&quot;underline-3 style-1 primary&quot;&gt;&lt;em&gt;designed&lt;&#x2F;em&gt;&lt;&#x2F;span&gt;
            to meet your business needs.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gy-10 align-items-center mb-15 mb-md-17&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7&quot;&gt;
          &lt;figure&gt;
            &lt;nuxt-img
              class&#x3D;&quot;img-fluid&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i29.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i29@2x.png 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-4 ms-auto&quot;&gt;
          &lt;div class&#x3D;&quot;svg-bg bg-pale-primary rounded mb-5&quot;&gt;
            &lt;nuxt-img
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;like.svg&quot;
              class&#x3D;&quot;icon-svg solid text-primary&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;div&gt;
          &lt;h3 class&#x3D;&quot;h1 post-title ls-sm mb-3&quot;&gt;Social Media Marketing&lt;&#x2F;h3&gt;
          &lt;p&gt;
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus.
          &lt;&#x2F;p&gt;
          &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-primary&quot;&gt;
            &lt;li
              v-for&#x3D;&quot;(item, index) in checklistItems.slice(0, 3)&quot;
              :key&#x3D;&quot;index&quot;
              :class&#x3D;&quot;{ &#39;mt-3&#39;: index &gt; 0 }&quot;
            &gt;
              &lt;span&gt;&lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i&gt;&lt;&#x2F;span&gt;
              &lt;span&gt;&lbrace;&lbrace; item.text &rbrace;&rbrace;&lt;&#x2F;span&gt;
            &lt;&#x2F;li&gt;
          &lt;&#x2F;ul&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;more hover link-primary&quot;&gt;Learn More&lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7 order-lg-2&quot;&gt;
          &lt;figure&gt;
            &lt;nuxt-img
              class&#x3D;&quot;img-fluid&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i30.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i30@2x.png 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-4 me-auto&quot;&gt;
          &lt;div class&#x3D;&quot;svg-bg bg-pale-green rounded mb-5&quot;&gt;
            &lt;nuxt-img
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;layout-2.svg&quot;
              class&#x3D;&quot;icon-svg solid text-green&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;div&gt;
          &lt;h3 class&#x3D;&quot;h1 post-title ls-sm mb-3&quot;&gt;Web Design &amp; Development&lt;&#x2F;h3&gt;
          &lt;p&gt;
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus.
          &lt;&#x2F;p&gt;
          &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-green&quot;&gt;
            &lt;li
              v-for&#x3D;&quot;(item, index) in checklistItems.slice(0, 3)&quot;
              :key&#x3D;&quot;index&quot;
              :class&#x3D;&quot;{ &#39;mt-3&#39;: index &gt; 0 }&quot;
            &gt;
              &lt;span&gt;&lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i&gt;&lt;&#x2F;span&gt;
              &lt;span&gt;&lbrace;&lbrace; item.text &rbrace;&rbrace;&lt;&#x2F;span&gt;
            &lt;&#x2F;li&gt;
          &lt;&#x2F;ul&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;more hover link-green&quot;&gt;Learn More&lt;&#x2F;a&gt;
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
