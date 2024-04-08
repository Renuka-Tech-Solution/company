<template>
  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15 text-center">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
          <h3 class="display-4 mb-10 px-xl-10">
            The service we offer is specifically designed to meet your needs.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="position-relative">
        <div
          class="shape rounded-circle bg-soft-blue rellax w-16 h-16"
          data-rellax-speed="1"
          style="bottom: -0.5rem; right: -2.2rem; z-index: 0"
        ></div>
        <div
          class="shape bg-dot yellow rellax w-16 h-17"
          data-rellax-speed="1"
          style="top: -0.5rem; left: -2.5rem; z-index: 0"
        ></div>
        <div class="row gx-md-5 gy-5 text-center">
          <div
            v-for="service in services"
            :key="service.id"
            class="col-md-6 col-xl-3"
          >
            <div class="card shadow-lg">
              <div class="card-body">
                <nuxt-img
                  :src="service.iconSrc"
                  class="icon-svg icon-svg-md"
                  :class="service.iconColorClass"
                  alt="photo"
                />
                <h4>{{ service.title }}</h4>
                <p class="mb-2">{{ service.description }}</p>
                <!-- Skipping link property -->
                <a href="#" :class="['more', 'hover', service.linkColorClass]"
                  >Learn More</a
                >
              </div>
              <!--/.card-body -->
            </div>
            <!--/.card -->
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.position-relative -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-30"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-30"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-3&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15 text-center&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-10 offset-md-1 col-lg-8 offset-lg-2&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;What We Do?&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-10 px-xl-10&quot;&gt;
            The service we offer is specifically designed to meet your needs.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;position-relative&quot;&gt;
        &lt;div
          class&#x3D;&quot;shape rounded-circle bg-soft-blue rellax w-16 h-16&quot;
          data-rellax-speed&#x3D;&quot;1&quot;
          style&#x3D;&quot;bottom: -0.5rem; right: -2.2rem; z-index: 0&quot;
        &gt;&lt;&#x2F;div&gt;
        &lt;div
          class&#x3D;&quot;shape bg-dot yellow rellax w-16 h-17&quot;
          data-rellax-speed&#x3D;&quot;1&quot;
          style&#x3D;&quot;top: -0.5rem; left: -2.5rem; z-index: 0&quot;
        &gt;&lt;&#x2F;div&gt;
        &lt;div class&#x3D;&quot;row gx-md-5 gy-5 text-center&quot;&gt;
          &lt;div
            v-for&#x3D;&quot;service in services&quot;
            :key&#x3D;&quot;service.id&quot;
            class&#x3D;&quot;col-md-6 col-xl-3&quot;
          &gt;
            &lt;div class&#x3D;&quot;card shadow-lg&quot;&gt;
              &lt;div class&#x3D;&quot;card-body&quot;&gt;
                &lt;nuxt-img
                  :src&#x3D;&quot;service.iconSrc&quot;
                  class&#x3D;&quot;icon-svg icon-svg-md&quot;
                  :class&#x3D;&quot;service.iconColorClass&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
                &lt;h4&gt;&lbrace;&lbrace; service.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
                &lt;p class&#x3D;&quot;mb-2&quot;&gt;&lbrace;&lbrace; service.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
                &lt;!-- Skipping link property --&gt;
                &lt;a href&#x3D;&quot;#&quot; :class&#x3D;&quot;[&#39;more&#39;, &#39;hover&#39;, service.linkColorClass]&quot;
                  &gt;Learn More&lt;&#x2F;a
                &gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.card-body --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;column --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;.row --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.position-relative --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
    
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { services } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import { services } from "~/data/features";
</script>

<style lang="scss" scoped></style>
