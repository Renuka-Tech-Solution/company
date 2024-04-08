<template>
  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div
            class="card image-wrapper bg-full bg-image bg-overlay"
            style="background-image: url(/assets/img/photos/bg2.jpg)"
          >
            <div class="card-body p-9 p-xl-10">
              <div
                class="row align-items-center counter-wrapper gy-4 text-center text-white"
              >
                <div v-for="(elm, i) in facts2" :key="i" class="col-6 col-lg-3">
                  <h3 class="counter counter-lg text-white">
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
            <!--/.card-body -->
          </div>
          <!--/.card -->
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
            href="#collapse-snippet-23"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-23"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-3&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-xl-10 mx-auto&quot;&gt;
          &lt;div
            class&#x3D;&quot;card image-wrapper bg-full bg-image bg-overlay&quot;
            style&#x3D;&quot;background-image: url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg2.jpg)&quot;
          &gt;
            &lt;div class&#x3D;&quot;card-body p-9 p-xl-10&quot;&gt;
              &lt;div
                class&#x3D;&quot;row align-items-center counter-wrapper gy-4 text-center text-white&quot;
              &gt;
                &lt;div v-for&#x3D;&quot;(elm, i) in facts2&quot; :key&#x3D;&quot;i&quot; class&#x3D;&quot;col-6 col-lg-3&quot;&gt;
                  &lt;h3 class&#x3D;&quot;counter counter-lg text-white&quot;&gt;
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
            &lt;!--&#x2F;.card-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.card --&gt;
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
