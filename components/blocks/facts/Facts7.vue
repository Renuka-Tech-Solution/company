<template>
  <section id="snippet-7" class="wrapper bg-light">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row align-items-center gy-8">
        <div class="col-lg-7 text-center text-lg-start">
          <h2 class="fs-16 text-uppercase text-muted mb-3">
            Save Time and Money
          </h2>
          <h3 class="display-3 mb-0 pe-xl-10 pe-xxl-15">
            Save your time and money by choosing our
            <span class="underline-3 style-2 yellow">professional</span> team.
          </h3>
        </div>
        <!-- /column -->
        <div class="col-lg-5">
          <div class="row gy-6 text-center">
            <div v-for="(elm, i) in facts3" :key="i" class="col-md-6">
              <div :class="`progressbar semi-circle ${elm.color}`">
                <CommonCircleProgressbar :max="elm.counter" />
                <!-- Component for circuler progressbar with animation from omponents>common>CircleProgressbar -->
              </div>
              <h4 class="mb-0">{{ elm.description }}</h4>
            </div>
            <!-- /column -->

            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-25"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-25"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-7&quot; class&#x3D;&quot;wrapper bg-light&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row align-items-center gy-8&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7 text-center text-lg-start&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-muted mb-3&quot;&gt;
            Save Time and Money
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-3 mb-0 pe-xl-10 pe-xxl-15&quot;&gt;
            Save your time and money by choosing our
            &lt;span class&#x3D;&quot;underline-3 style-2 yellow&quot;&gt;professional&lt;&#x2F;span&gt; team.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5&quot;&gt;
          &lt;div class&#x3D;&quot;row gy-6 text-center&quot;&gt;
            &lt;div v-for&#x3D;&quot;(elm, i) in facts3&quot;  :key&#x3D;&quot;i&quot; class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;div :class&#x3D;&quot;&#x60;progressbar semi-circle ${elm.color}&#x60;&quot;&gt;
                &lt;CommonCircleProgressbar :max&#x3D;&quot;elm.counter&quot; &#x2F;&gt;
                &lt;!-- Component for circuler progressbar with animation from omponents&gt;common&gt;CircleProgressbar --&gt;
              &lt;&#x2F;div&gt;
              &lt;h4 class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; elm.description &rbrace;&rbrace;&lt;&#x2F;h4&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;

            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { facts3 } from &quot;~&#x2F;data&#x2F;facts&quot;;
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
import { facts3 } from "~/data/facts";
</script>

<style lang="scss" scoped></style>
