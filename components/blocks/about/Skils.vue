<template>
  <section id="snippet-6" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/i8.png"
              srcset="/assets/img/illustrations/i8@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h3 class="display-4 mb-6 pe-xxl-6">
            We bring rapid solutions to make the life of our customers easier.
          </h3>
          <ul class="progress-list mt-3">
            <li v-for="(item, index) in skills" :key="index">
              <p>{{ item.title }}</p>
              <div :class="`progressbar line ${item.color}`">
                <LineProgressbar :max="item.value" />
                <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
              </div>
            </li>
          </ul>
          <!-- /.progress-list -->
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
            href="#collapse-snippet-106"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-106"
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
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i8.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i8@2x.png 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5&quot;&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-6 pe-xxl-6&quot;&gt;
            We bring rapid solutions to make the life of our customers easier.
          &lt;&#x2F;h3&gt;
          &lt;ul class&#x3D;&quot;progress-list mt-3&quot;&gt;
            &lt;li v-for&#x3D;&quot;(item, index) in skills&quot; :key&#x3D;&quot;index&quot;&gt;
              &lt;p&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;p&gt;
              &lt;div :class&#x3D;&quot;&#x60;progressbar line ${item.color}&#x60;&quot;&gt;
                &lt;LineProgressbar :max&#x3D;&quot;item.value&quot; &#x2F;&gt;
                &lt;!-- Component for line progressbar with animation from omponents&gt;common&gt;LineProgressbar --&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;li&gt;
          &lt;&#x2F;ul&gt;
          &lt;!-- &#x2F;.progress-list --&gt;
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
import LineProgressbar from &quot;~&#x2F;components&#x2F;common&#x2F;LineProgressbar.vue&quot;;

import { skills } from &quot;~&#x2F;data&#x2F;skils&quot;;
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
import LineProgressbar from "~/components/common/LineProgressbar.vue";

import { skills } from "~/data/skils";
</script>

<style lang="scss" scoped></style>
