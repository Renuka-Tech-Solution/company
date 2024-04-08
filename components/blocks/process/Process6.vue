<template>
  <section id="snippet-6" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/i3.png"
              srcset="/assets/img/illustrations/i3@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="fs-15 text-uppercase text-line text-primary mb-3">
            How It Works?
          </h2>
          <h3 class="display-5 mb-7 pe-xxl-5">
            Everything you need on creating a business process.
          </h3>
          <div
            v-for="(item, index) in steps5"
            :class="`d-flex flex-row ${index != 2 ? 'mb-4' : ''}`"
            :key="index"
          >
            <div>
              <nuxt-img
                :src="item.iconSrc"
                class="icon-svg icon-svg-sm"
                :class="['text-' + item.iconColor, 'me-4']"
                alt="photo"
              />
            </div>
            <div>
              <h4 class="mb-1">{{ item.title }}</h4>
              <p class="mb-1">{{ item.description }}</p>
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
            href="#collapse-snippet-186"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-186"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-6&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7&quot;&gt;
          &lt;figure&gt;
            &lt;nuxt-img
              class&#x3D;&quot;w-auto&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i3.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i3@2x.png 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-line text-primary mb-3&quot;&gt;
            How It Works?
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-5 mb-7 pe-xxl-5&quot;&gt;
            Everything you need on creating a business process.
          &lt;&#x2F;h3&gt;
          &lt;div
            v-for&#x3D;&quot;(item, index) in steps5&quot;
            :class&#x3D;&quot;&#x60;d-flex flex-row ${index !&#x3D; 2 ? &#39;mb-4&#39; : &#39;&#39;}&#x60;&quot;
            :key&#x3D;&quot;index&quot;
          &gt;
            &lt;div&gt;
              &lt;nuxt-img
                :src&#x3D;&quot;item.iconSrc&quot;
                class&#x3D;&quot;icon-svg icon-svg-sm&quot;
                :class&#x3D;&quot;[&#39;text-&#39; + item.iconColor, &#39;me-4&#39;]&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
              &lt;p class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
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
import { steps5 } from &quot;~&#x2F;data&#x2F;process&quot;;
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
import { steps5 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
