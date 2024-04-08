<template>
  <section id="snippet-1" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row mb-3">
        <div
          class="col-md-10 col-lg-12 col-xl-10 col-xxl-9 mx-auto text-center"
        >
          <h2 class="fs-15 text-uppercase text-muted mb-3">Our Team</h2>
          <h3 class="display-4 mb-7 px-lg-19 px-xl-18">
            Think unique and be innovative. Make a difference with Sandbox.
          </h3>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0">
        <div
          v-for="(item, index) in teamMembers"
          class="col-md-6 col-lg-3"
          :key="index"
        >
          <div class="position-relative">
            <div
              class="shape rounded rellax"
              :class="['bg-soft-' + item.color, 'd-md-block']"
              :style="{
                bottom: '-0.75rem',
                right: '-0.75rem',
                width: '98%',
                height: '98%',
                zIndex: 0,
              }"
            ></div>
            <div class="card">
              <figure class="card-img-top">
                <nuxt-img class="img-fluid" :src="item.avatarSrc" alt="photo" />
              </figure>
              <div class="card-body px-6 py-5">
                <h4 class="mb-1">{{ item.name }}</h4>
                <p class="mb-0">{{ item.position }}</p>
              </div>
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
            href="#collapse-snippet-80"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-80"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-1&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row mb-3&quot;&gt;
        &lt;div
          class&#x3D;&quot;col-md-10 col-lg-12 col-xl-10 col-xxl-9 mx-auto text-center&quot;
        &gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;Our Team&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-7 px-lg-19 px-xl-18&quot;&gt;
            Think unique and be innovative. Make a difference with Sandbox.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0&quot;&gt;
        &lt;div
          v-for&#x3D;&quot;(item, index) in teamMembers&quot;
          class&#x3D;&quot;col-md-6 col-lg-3&quot;
          :key&#x3D;&quot;index&quot;
        &gt;
          &lt;div class&#x3D;&quot;position-relative&quot;&gt;
            &lt;div
              class&#x3D;&quot;shape rounded rellax&quot;
              :class&#x3D;&quot;[&#39;bg-soft-&#39; + item.color, &#39;d-md-block&#39;]&quot;
              :style&#x3D;&quot;{
                bottom: &#39;-0.75rem&#39;,
                right: &#39;-0.75rem&#39;,
                width: &#39;98%&#39;,
                height: &#39;98%&#39;,
                zIndex: 0,
              }&quot;
            &gt;&lt;&#x2F;div&gt;
            &lt;div class&#x3D;&quot;card&quot;&gt;
              &lt;figure class&#x3D;&quot;card-img-top&quot;&gt;
                &lt;nuxt-img class&#x3D;&quot;img-fluid&quot; :src&#x3D;&quot;item.avatarSrc&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
              &lt;&#x2F;figure&gt;
              &lt;div class&#x3D;&quot;card-body px-6 py-5&quot;&gt;
                &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.name &rbrace;&rbrace;&lt;&#x2F;h4&gt;
                &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; item.position &rbrace;&rbrace;&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
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
import { teamMembers } from &quot;~&#x2F;data&#x2F;team&quot;;
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
import { teamMembers } from "~/data/team";
</script>

<style lang="scss" scoped></style>
