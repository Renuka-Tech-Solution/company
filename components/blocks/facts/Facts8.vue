<template>
  <section id="snippet-8" class="section-frame overflow-hidden wrapper-border">
    <div
      class="wrapper bg-soft-primary mb-md-13 mb-15"
      style="border-radius: 1rem"
    >
      <div class="container py-17">
        <div class="row text-center">
          <div class="col-xl-11 col-xxl-10 mx-auto">
            <h2 class="fs-16 text-uppercase text-muted mb-3">Company Facts</h2>
            <h3 class="display-4 mb-10 px-lg-20 px-xl-20">
              Save your time and money by choosing our professional team.
            </h3>
            <div class="row gy-6 text-center">
              <div
                v-for="(elm, i) in facts4"
                :key="i"
                class="col-md-6 col-lg-3"
              >
                <div :class="`progressbar semi-circle ${elm.color}`">
                  <CommonCircleProgressbar :max="elm.counter" />
                  <!-- Component for circuler progressbar with animation from omponents>common>CircleProgressbar -->
                </div>
                <h4>{{ elm.title }}</h4>
                <p class="mb-0">{{ elm.desc }}</p>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-128"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-128"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-8&quot; class&#x3D;&quot;section-frame overflow-hidden wrapper-border&quot;&gt;
    &lt;div
      class&#x3D;&quot;wrapper bg-soft-primary mb-md-13 mb-15&quot;
      style&#x3D;&quot;border-radius: 1rem&quot;
    &gt;
      &lt;div class&#x3D;&quot;container py-17&quot;&gt;
        &lt;div class&#x3D;&quot;row text-center&quot;&gt;
          &lt;div class&#x3D;&quot;col-xl-11 col-xxl-10 mx-auto&quot;&gt;
            &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-muted mb-3&quot;&gt;Company Facts&lt;&#x2F;h2&gt;
            &lt;h3 class&#x3D;&quot;display-4 mb-10 px-lg-20 px-xl-20&quot;&gt;
              Save your time and money by choosing our professional team.
            &lt;&#x2F;h3&gt;
            &lt;div class&#x3D;&quot;row gy-6 text-center&quot;&gt;
              &lt;div
                v-for&#x3D;&quot;(elm, i) in facts4&quot;
                :key&#x3D;&quot;i&quot;
                class&#x3D;&quot;col-md-6 col-lg-3&quot;
              &gt;
                &lt;div :class&#x3D;&quot;&#x60;progressbar semi-circle ${elm.color}&#x60;&quot;&gt;
                  &lt;CommonCircleProgressbar :max&#x3D;&quot;elm.counter&quot; &#x2F;&gt;
                  &lt;!-- Component for circuler progressbar with animation from omponents&gt;common&gt;CircleProgressbar --&gt;
                &lt;&#x2F;div&gt;
                &lt;h4&gt;&lbrace;&lbrace; elm.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
                &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; elm.desc &rbrace;&rbrace;&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;column --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.row --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;column --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.row --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.container --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.wrapper --&gt;
 
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { facts4 } from &quot;~&#x2F;data&#x2F;facts&quot;;
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
import { facts4 } from "~/data/facts";
</script>

<style lang="scss" scoped></style>
