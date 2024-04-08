<template>
  <section id="snippet-13" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row text-center">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-16 text-uppercase text-primary mb-3">What We Do?</h2>
          <h3 class="display-3 mb-10 px-xxl-10">
            The service we offer is specifically designed to meet your needs.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div
        class="row gx-lg-8 gx-xl-12 gy-11 px-xxl-5 text-center d-flex align-items-end"
      >
        <div v-for="item in designItems" :key="item.id" class="col-lg-4">
          <div class="px-md-15 px-lg-3">
            <figure class="mb-6">
              <nuxt-img
                :class="['img-fluid']"
                :src="item.imgSrc"
                :srcset="item.imgSrcset"
                alt="photo"
              />
            </figure>
            <h3>{{ item.title }}</h3>
            <p class="mb-2">{{ item.description }}</p>
            <a :href="item.link" class="more hover">Learn More</a>
          </div>
          <!--/.px -->
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
            href="#collapse-snippet-37"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-37"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-13&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row text-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-10 offset-md-1 col-lg-8 offset-lg-2&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-primary mb-3&quot;&gt;What We Do?&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-3 mb-10 px-xxl-10&quot;&gt;
            The service we offer is specifically designed to meet your needs.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div
        class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-11 px-xxl-5 text-center d-flex align-items-end&quot;
      &gt;
        &lt;div v-for&#x3D;&quot;item in designItems&quot; :key&#x3D;&quot;item.id&quot; class&#x3D;&quot;col-lg-4&quot;&gt;
          &lt;div class&#x3D;&quot;px-md-15 px-lg-3&quot;&gt;
            &lt;figure class&#x3D;&quot;mb-6&quot;&gt;
              &lt;nuxt-img
                :class&#x3D;&quot;[&#39;img-fluid&#39;]&quot;
                :src&#x3D;&quot;item.imgSrc&quot;
                :srcset&#x3D;&quot;item.imgSrcset&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
            &lt;&#x2F;figure&gt;
            &lt;h3&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h3&gt;
            &lt;p class&#x3D;&quot;mb-2&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
            &lt;a :href&#x3D;&quot;item.link&quot; class&#x3D;&quot;more hover&quot;&gt;Learn More&lt;&#x2F;a&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.px --&gt;
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
import { designItems } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import { designItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
