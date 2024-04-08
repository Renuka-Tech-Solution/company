<template>
  <section id="snippet-1" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
        <div class="col-md-8 col-lg-6 position-relative">
          <div
            class="shape bg-dot primary rellax w-17 h-21"
            data-rellax-speed="1"
            style="top: -2rem; left: -1.9rem"
          ></div>
          <div
            class="shape rounded bg-soft-primary rellax d-md-block"
            data-rellax-speed="0"
            style="bottom: -1.8rem; right: -1.5rem; width: 85%; height: 90%"
          ></div>
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/about7.jpg"
              srcset="/assets/img/photos/about7@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5 col-xl-4 offset-lg-1">
          <h2 class="h1 mb-3">How It Works?</h2>
          <p class="lead fs-lg mb-6">
            So here are three working steps why our valued customers choose us.
          </p>
          <div
            v-for="(item, index) in process1"
            class="d-flex flex-row mb-6"
            :key="index"
          >
            <div>
              <span class="icon btn btn-circle btn-primary pe-none me-5">
                <span class="number fs-18">{{ item.number }}</span>
              </span>
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
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-73"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-73"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-1&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gy-10 gy-sm-13 gx-lg-3 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-8 col-lg-6 position-relative&quot;&gt;
          &lt;div
            class&#x3D;&quot;shape bg-dot primary rellax w-17 h-21&quot;
            data-rellax-speed&#x3D;&quot;1&quot;
            style&#x3D;&quot;top: -2rem; left: -1.9rem&quot;
          &gt;&lt;&#x2F;div&gt;
          &lt;div
            class&#x3D;&quot;shape rounded bg-soft-primary rellax d-md-block&quot;
            data-rellax-speed&#x3D;&quot;0&quot;
            style&#x3D;&quot;bottom: -1.8rem; right: -1.5rem; width: 85%; height: 90%&quot;
          &gt;&lt;&#x2F;div&gt;
          &lt;figure class&#x3D;&quot;rounded&quot;&gt;
            &lt;nuxt-img
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about7.jpg&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about7@2x.jpg 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5 col-xl-4 offset-lg-1&quot;&gt;
          &lt;h2 class&#x3D;&quot;h1 mb-3&quot;&gt;How It Works?&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg mb-6&quot;&gt;
            So here are three working steps why our valued customers choose us.
          &lt;&#x2F;p&gt;
          &lt;div
            v-for&#x3D;&quot;(item, index) in process1&quot;
            class&#x3D;&quot;d-flex flex-row mb-6&quot;
            :key&#x3D;&quot;index&quot;
          &gt;
            &lt;div&gt;
              &lt;span class&#x3D;&quot;icon btn btn-circle btn-primary pe-none me-5&quot;&gt;
                &lt;span class&#x3D;&quot;number fs-18&quot;&gt;&lbrace;&lbrace; item.number &rbrace;&rbrace;&lt;&#x2F;span&gt;
              &lt;&#x2F;span&gt;
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
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { process1 } from &quot;~&#x2F;data&#x2F;process&quot;;
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
import { process1 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
