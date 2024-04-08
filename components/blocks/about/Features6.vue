<template>
  <section id="snippet-13" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div
        class="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12"
      >
        <div class="col-lg-6">
          <div class="row gx-md-5 gy-5">
            <div class="col-md-6">
              <figure class="rounded">
                <nuxt-img
                  :width="293"
                  :height="260"
                  src="/assets/img/photos/g12.jpg"
                  srcset="/assets/img/photos/g12@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6 align-self-end">
              <figure class="rounded">
                <nuxt-img
                  :width="293"
                  :height="235"
                  src="/assets/img/photos/g13.jpg"
                  srcset="/assets/img/photos/g13@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-12">
              <figure class="rounded mx-md-5">
                <nuxt-img
                  :width="560"
                  :height="285"
                  src="/assets/img/photos/g11.jpg"
                  srcset="/assets/img/photos/g11@2x.jpg 2x"
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
          <h2 class="fs-16 text-uppercase text-primary mb-3">Who Are We?</h2>
          <h3 class="display-3 mb-5">
            Company that believes in the power of creative strategy.
          </h3>
          <p class="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum
            nulla sed.
          </p>
          <div class="row align-items-center counter-wrapper gy-6">
            <div class="col-md-6">
              <h3 class="counter counter-lg mb-1">
                <counter :min="0" :max="99.7" :time="1500" />%
              </h3>
              <h5 class="mb-0">Customer Satisfaction</h5>
            </div>
            <!--/column -->
            <div class="col-md-6">
              <h3 class="counter counter-lg mb-1">
                <counter :min="0" :max="12" :time="1500" />x
              </h3>
              <h5 class="mb-0">Revenue Growth</h5>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-6 mb-7 mb-md-9">
        <div v-for="(item, index) in features4" :key="index" class="col-lg-4">
          <div class="d-flex flex-row">
            <div>
              <div :class="item.iconClass">
                <span class="number fs-18">{{ index + 1 }}</span>
              </div>
            </div>
            <div>
              <h3>{{ item.title }}</h3>
              <p class="mb-2">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="text-center">
        <a href="#" class="btn btn-primary">More Details</a>
      </div>
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-3"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-3"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-13&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div
        class&#x3D;&quot;row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12&quot;
      &gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;div class&#x3D;&quot;row gx-md-5 gy-5&quot;&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                &lt;nuxt-img
                  :width&#x3D;&quot;293&quot;
                  :height&#x3D;&quot;260&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g12.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g12@2x.jpg 2x&quot;
                  alt&#x3D;&quot;image&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6 align-self-end&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                &lt;nuxt-img
                  :width&#x3D;&quot;293&quot;
                  :height&#x3D;&quot;235&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g13.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g13@2x.jpg 2x&quot;
                  alt&#x3D;&quot;image&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-12&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded mx-md-5&quot;&gt;
                &lt;nuxt-img
                  :width&#x3D;&quot;560&quot;
                  :height&#x3D;&quot;285&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g11.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g11@2x.jpg 2x&quot;
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
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-primary mb-3&quot;&gt;Who Are We?&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-3 mb-5&quot;&gt;
            Company that believes in the power of creative strategy.
          &lt;&#x2F;h3&gt;
          &lt;p class&#x3D;&quot;mb-6&quot;&gt;
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum
            nulla sed.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;row align-items-center counter-wrapper gy-6&quot;&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;h3 class&#x3D;&quot;counter counter-lg mb-1&quot;&gt;
                &lt;counter :min&#x3D;&quot;0&quot; :max&#x3D;&quot;99.7&quot; :time&#x3D;&quot;1500&quot; &#x2F;&gt;%
              &lt;&#x2F;h3&gt;
              &lt;h5 class&#x3D;&quot;mb-0&quot;&gt;Customer Satisfaction&lt;&#x2F;h5&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;h3 class&#x3D;&quot;counter counter-lg mb-1&quot;&gt;
                &lt;counter :min&#x3D;&quot;0&quot; :max&#x3D;&quot;12&quot; :time&#x3D;&quot;1500&quot; &#x2F;&gt;x
              &lt;&#x2F;h3&gt;
              &lt;h5 class&#x3D;&quot;mb-0&quot;&gt;Revenue Growth&lt;&#x2F;h5&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-6 mb-7 mb-md-9&quot;&gt;
        &lt;div v-for&#x3D;&quot;(item, index) in features4&quot; :key&#x3D;&quot;index&quot; class&#x3D;&quot;col-lg-4&quot;&gt;
          &lt;div class&#x3D;&quot;d-flex flex-row&quot;&gt;
            &lt;div&gt;
              &lt;div :class&#x3D;&quot;item.iconClass&quot;&gt;
                &lt;span class&#x3D;&quot;number fs-18&quot;&gt;&lbrace;&lbrace; index + 1 &rbrace;&rbrace;&lt;&#x2F;span&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h3&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h3&gt;
              &lt;p class&#x3D;&quot;mb-2&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;text-center&quot;&gt;
        &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary&quot;&gt;More Details&lt;&#x2F;a&gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
 
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { features4 } from &quot;~&#x2F;data&#x2F;features&quot;;
import Counter from &quot;~&#x2F;components&#x2F;common&#x2F;Counter.vue&quot;;
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
import Counter from "~/components/common/Counter.vue";
import { features4 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
