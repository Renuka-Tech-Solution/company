<template>
  <section id="snippet-5" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-6 position-relative">
          <div
            class="shape rounded bg-pale-red rellax d-md-block"
            data-rellax-speed="0"
            style="
              top: 50%;
              left: 50%;
              width: 50%;
              height: 60%;
              transform: translate(-50%, -50%);
              z-index: 0;
            "
          ></div>
          <div class="row gx-md-5 gy-5 position-relative">
            <div class="col-6">
              <nuxt-img
                class="img-fluid rounded shadow-lg mb-5"
                src="/assets/img/photos/sa5.jpg"
                srcset="/assets/img/photos/sa5@2x.jpg 2x"
                alt="photo"
              />
              <nuxt-img
                class="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                src="/assets/img/photos/sa6.jpg"
                srcset="/assets/img/photos/sa6@2x.jpg 2x"
                alt="photo"
              />
            </div>
            <!-- /column -->
            <div class="col-6">
              <nuxt-img
                class="img-fluid rounded shadow-lg my-5"
                src="/assets/img/photos/sa7.jpg"
                srcset="/assets/img/photos/sa7@2x.jpg 2x"
                alt="photo"
              />
              <nuxt-img
                class="img-fluid rounded shadow-lg d-flex col-10"
                src="/assets/img/photos/sa8.jpg"
                srcset="/assets/img/photos/sa8@2x.jpg 2x"
                alt="photo"
              />
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h3 class="display-4 mb-5">
            We have considered our solutions to support every stage of growth.
          </h3>
          <p class="mb-5">
            Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
            nulla non metus auctor fringilla. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
          <div class="row gy-3">
            <div class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-red mb-0">
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
              <ul class="icon-list bullet-bg bullet-soft-red mb-0">
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
            href="#collapse-snippet-31"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-31"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-5&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 position-relative&quot;&gt;
          &lt;div
            class&#x3D;&quot;shape rounded bg-pale-red rellax d-md-block&quot;
            data-rellax-speed&#x3D;&quot;0&quot;
            style&#x3D;&quot;
              top: 50%;
              left: 50%;
              width: 50%;
              height: 60%;
              transform: translate(-50%, -50%);
              z-index: 0;
            &quot;
          &gt;&lt;&#x2F;div&gt;
          &lt;div class&#x3D;&quot;row gx-md-5 gy-5 position-relative&quot;&gt;
            &lt;div class&#x3D;&quot;col-6&quot;&gt;
              &lt;nuxt-img
                class&#x3D;&quot;img-fluid rounded shadow-lg mb-5&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa5.jpg&quot;
                srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa5@2x.jpg 2x&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
              &lt;nuxt-img
                class&#x3D;&quot;img-fluid rounded shadow-lg d-flex col-10 ms-auto&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa6.jpg&quot;
                srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa6@2x.jpg 2x&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-6&quot;&gt;
              &lt;nuxt-img
                class&#x3D;&quot;img-fluid rounded shadow-lg my-5&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa7.jpg&quot;
                srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa7@2x.jpg 2x&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
              &lt;nuxt-img
                class&#x3D;&quot;img-fluid rounded shadow-lg d-flex col-10&quot;
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa8.jpg&quot;
                srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;sa8@2x.jpg 2x&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-5&quot;&gt;
            We have considered our solutions to support every stage of growth.
          &lt;&#x2F;h3&gt;
          &lt;p class&#x3D;&quot;mb-5&quot;&gt;
            Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
            nulla non metus auctor fringilla. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus
            commodo.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;row gy-3&quot;&gt;
            &lt;div class&#x3D;&quot;col-xl-6&quot;&gt;
              &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-red mb-0&quot;&gt;
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
              &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-red mb-0&quot;&gt;
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
