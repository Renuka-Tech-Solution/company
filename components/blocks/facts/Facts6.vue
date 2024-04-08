<template>
  <section id="snippet-6" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div class="row align-items-center counter-wrapper gy-6 text-center">
            <div v-for="(elm, i) in facts2" :key="i" class="col-md-3">
              <nuxt-img
                :src="elm.iconSrc"
                class="icon-svg icon-svg-lg text-primary mb-3"
                alt="photo"
              />
              <h3 class="counter">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="elm.counter"
                  :time="1500"
                />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
              </h3>
              <p>{{ elm.description }}</p>
            </div>
            <!--/column -->

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
            href="#collapse-snippet-127"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-127"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-6&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-xl-10 mx-auto&quot;&gt;
          &lt;div class&#x3D;&quot;row align-items-center counter-wrapper gy-6 text-center&quot;&gt;
            &lt;div v-for&#x3D;&quot;(elm, i) in facts2&quot; :key&#x3D;&quot;i&quot; class&#x3D;&quot;col-md-3&quot;&gt;
              &lt;nuxt-img
                :src&#x3D;&quot;elm.iconSrc&quot;
                class&#x3D;&quot;icon-svg icon-svg-lg text-primary mb-3&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
              &lt;h3 class&#x3D;&quot;counter&quot;&gt;
                &lt;CommonCounter
                  parentClass&#x3D;&quot;&quot;
                  :min&#x3D;&quot;0&quot;
                  :max&#x3D;&quot;elm.counter&quot;
                  :time&#x3D;&quot;1500&quot;
                &#x2F;&gt;
                &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
              &lt;&#x2F;h3&gt;
              &lt;p&gt;&lbrace;&lbrace; elm.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;

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
