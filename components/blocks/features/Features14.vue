<template>
  <section id="snippet-14" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-lg-12 col-xl-10 col-xxl-8 mx-auto text-center">
          <i class="icn-flower text-leaf fs-30 opacity-25"></i>
          <h2 class="display-5 text-center mt-2 mb-10">
            I absolutely love shooting weddings and couples because there are so
            many feelings to capture.
          </h2>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 text-center">
        <div
          v-for="item in galleryItems"
          :key="item.id"
          class="col-sm-8 col-md-6 col-lg-4 mx-auto"
        >
          <div class="card shadow-lg">
            <figure class="card-img-top overlay overlay-1">
              <a :href="`#${item.category.toLowerCase()}`">
                <nuxt-img class="img-fluid" :src="item.imgSrc" alt="photo" />
                <span class="bg"></span>
              </a>
              <figcaption>
                <h5 class="from-top mb-0">View Gallery</h5>
              </figcaption>
            </figure>
            <div class="card-body p-6">
              <h3 class="fs-21 mb-0">{{ item.category }}</h3>
            </div>
            <!--/.card-body -->
          </div>
          <!-- /.card -->
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
            href="#collapse-snippet-140"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-140"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-14&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-12 col-xl-10 col-xxl-8 mx-auto text-center&quot;&gt;
          &lt;i class&#x3D;&quot;icn-flower text-leaf fs-30 opacity-25&quot;&gt;&lt;&#x2F;i&gt;
          &lt;h2 class&#x3D;&quot;display-5 text-center mt-2 mb-10&quot;&gt;
            I absolutely love shooting weddings and couples because there are so
            many feelings to capture.
          &lt;&#x2F;h2&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 text-center&quot;&gt;
        &lt;div
          v-for&#x3D;&quot;item in galleryItems&quot;
          :key&#x3D;&quot;item.id&quot;
          class&#x3D;&quot;col-sm-8 col-md-6 col-lg-4 mx-auto&quot;
        &gt;
          &lt;div class&#x3D;&quot;card shadow-lg&quot;&gt;
            &lt;figure class&#x3D;&quot;card-img-top overlay overlay-1&quot;&gt;
              &lt;a :href&#x3D;&quot;&#x60;#${item.category.toLowerCase()}&#x60;&quot;&gt;
                &lt;nuxt-img class&#x3D;&quot;img-fluid&quot; :src&#x3D;&quot;item.imgSrc&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
                &lt;span class&#x3D;&quot;bg&quot;&gt;&lt;&#x2F;span&gt;
              &lt;&#x2F;a&gt;
              &lt;figcaption&gt;
                &lt;h5 class&#x3D;&quot;from-top mb-0&quot;&gt;View Gallery&lt;&#x2F;h5&gt;
              &lt;&#x2F;figcaption&gt;
            &lt;&#x2F;figure&gt;
            &lt;div class&#x3D;&quot;card-body p-6&quot;&gt;
              &lt;h3 class&#x3D;&quot;fs-21 mb-0&quot;&gt;&lbrace;&lbrace; item.category &rbrace;&rbrace;&lt;&#x2F;h3&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.card --&gt;
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
import { galleryItems } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import { galleryItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
