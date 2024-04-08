<template>
  <section id="snippet-1" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
        <div class="col-lg-6 position-relative">
          <div
            class="shape bg-line leaf rounded-circle rellax w-17 h-17"
            data-rellax-speed="1"
            style="top: -2rem; right: -0.6rem"
          ></div>
          <div
            class="shape bg-pale-violet rounded-circle rellax w-17 h-17"
            data-rellax-speed="1"
            style="bottom: -2rem; left: -0.4rem"
          ></div>
          <figure class="rounded mb-0">
            <nuxt-img
              src="/assets/img/photos/se3.jpg"
              srcset="/assets/img/photos/se3@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h3 class="display-4 mb-4">Package Design</h3>
          <p class="mb-5">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Maecenas faucibus mollis interdum. Maecenas sed
            diam eget risus varius.
          </p>
          <div class="row gy-3">
            <div class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-leaf mb-0">
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
              <ul class="icon-list bullet-bg bullet-soft-leaf mb-0">
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
          <a href="#" class="btn btn-soft-leaf rounded-pill mt-6 mb-0"
            >More Details</a
          >
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-6 order-lg-2 position-relative">
          <div
            class="shape bg-line aqua rounded-circle rellax w-17 h-17"
            data-rellax-speed="1"
            style="top: -2rem; left: -0.6rem"
          ></div>
          <div
            class="shape bg-pale-red rounded-circle rellax w-17 h-17"
            data-rellax-speed="1"
            style="bottom: -2rem; right: -0.4rem"
          ></div>
          <figure class="rounded mb-0">
            <nuxt-img
              src="/assets/img/photos/se4.jpg"
              srcset="/assets/img/photos/se4@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h3 class="display-4 mb-4">Corporate Design</h3>
          <p class="mb-5">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </p>
          <div class="row gy-3">
            <div class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-aqua mb-0">
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
              <ul class="icon-list bullet-bg bullet-soft-aqua mb-0">
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
          <a href="#" class="btn btn-soft-aqua rounded-pill mt-6 mb-0"
            >More Details</a
          >
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
            href="#collapse-snippet-29"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-29"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-1&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 position-relative&quot;&gt;
          &lt;div
            class&#x3D;&quot;shape bg-line leaf rounded-circle rellax w-17 h-17&quot;
            data-rellax-speed&#x3D;&quot;1&quot;
            style&#x3D;&quot;top: -2rem; right: -0.6rem&quot;
          &gt;&lt;&#x2F;div&gt;
          &lt;div
            class&#x3D;&quot;shape bg-pale-violet rounded-circle rellax w-17 h-17&quot;
            data-rellax-speed&#x3D;&quot;1&quot;
            style&#x3D;&quot;bottom: -2rem; left: -0.4rem&quot;
          &gt;&lt;&#x2F;div&gt;
          &lt;figure class&#x3D;&quot;rounded mb-0&quot;&gt;
            &lt;nuxt-img
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;se3.jpg&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;se3@2x.jpg 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-4&quot;&gt;Package Design&lt;&#x2F;h3&gt;
          &lt;p class&#x3D;&quot;mb-5&quot;&gt;
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Maecenas faucibus mollis interdum. Maecenas sed
            diam eget risus varius.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;row gy-3&quot;&gt;
            &lt;div class&#x3D;&quot;col-xl-6&quot;&gt;
              &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-leaf mb-0&quot;&gt;
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
              &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-leaf mb-0&quot;&gt;
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
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-soft-leaf rounded-pill mt-6 mb-0&quot;
            &gt;More Details&lt;&#x2F;a
          &gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 order-lg-2 position-relative&quot;&gt;
          &lt;div
            class&#x3D;&quot;shape bg-line aqua rounded-circle rellax w-17 h-17&quot;
            data-rellax-speed&#x3D;&quot;1&quot;
            style&#x3D;&quot;top: -2rem; left: -0.6rem&quot;
          &gt;&lt;&#x2F;div&gt;
          &lt;div
            class&#x3D;&quot;shape bg-pale-red rounded-circle rellax w-17 h-17&quot;
            data-rellax-speed&#x3D;&quot;1&quot;
            style&#x3D;&quot;bottom: -2rem; right: -0.4rem&quot;
          &gt;&lt;&#x2F;div&gt;
          &lt;figure class&#x3D;&quot;rounded mb-0&quot;&gt;
            &lt;nuxt-img
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;se4.jpg&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;se4@2x.jpg 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-4&quot;&gt;Corporate Design&lt;&#x2F;h3&gt;
          &lt;p class&#x3D;&quot;mb-5&quot;&gt;
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;row gy-3&quot;&gt;
            &lt;div class&#x3D;&quot;col-xl-6&quot;&gt;
              &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-aqua mb-0&quot;&gt;
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
              &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-aqua mb-0&quot;&gt;
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
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-soft-aqua rounded-pill mt-6 mb-0&quot;
            &gt;More Details&lt;&#x2F;a
          &gt;
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
