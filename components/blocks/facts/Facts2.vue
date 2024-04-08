<template>
  <section id="snippet-2" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-lg-4">
          <h2 class="fs-15 text-uppercase text-primary mb-3">Company Facts</h2>
          <h3 class="display-4 pe-xl-15">We are proud of our works</h3>
        </div>
        <!-- /column -->
        <div class="col-lg-8">
          <div class="row align-items-center counter-wrapper gy-6 text-center">
            <div
              class="col-md-4"
              v-for="item in facts2.slice(0, 3)"
              :key="item.id"
            >
              <nuxt-img
                :src="item.iconSrc"
                class="icon-svg icon-svg-lg text-primary mb-3"
                alt="photo"
              />
              <h3 class="counter">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="item.counter"
                  :time="1500"
                />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
              </h3>
              <p class="mb-0">{{ item.description }}</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
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
            href="#collapse-snippet-125"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-125"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-2&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-4&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-primary mb-3&quot;&gt;Company Facts&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 pe-xl-15&quot;&gt;We are proud of our works&lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-8&quot;&gt;
          &lt;div class&#x3D;&quot;row align-items-center counter-wrapper gy-6 text-center&quot;&gt;
            &lt;div
              class&#x3D;&quot;col-md-4&quot;
              v-for&#x3D;&quot;item in facts2.slice(0, 3)&quot;
              :key&#x3D;&quot;item.id&quot;
            &gt;
              &lt;nuxt-img
                :src&#x3D;&quot;item.iconSrc&quot;
                class&#x3D;&quot;icon-svg icon-svg-lg text-primary mb-3&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
              &lt;h3 class&#x3D;&quot;counter&quot;&gt;
                &lt;CommonCounter
                  parentClass&#x3D;&quot;&quot;
                  :min&#x3D;&quot;0&quot;
                  :max&#x3D;&quot;item.counter&quot;
                  :time&#x3D;&quot;1500&quot;
                &#x2F;&gt;
                &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
              &lt;&#x2F;h3&gt;
              &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
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
import { facts2 } from &quot;~&#x2F;data&#x2F;facts&quot;;
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
import { facts2 } from "~/data/facts";
</script>

<style lang="scss" scoped></style>
