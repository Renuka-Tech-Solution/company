<template>
  <section id="snippet-1" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-0 gy-10 align-items-center">
        <div class="col-lg-6 order-lg-2 offset-lg-1 grid">
          <div
            class="row gx-md-5 gy-5 align-items-center counter-wrapper isotope"
          >
            <div
              class="item col-md-6"
              v-for="(item, index) in facts1"
              :key="index"
            >
              <div class="card shadow-lg">
                <div class="card-body">
                  <div class="d-flex d-lg-block d-xl-flex flex-row">
                    <div>
                      <div
                        :class="[
                          'icon',
                          'btn',
                          'btn-circle',
                          'btn-lg',
                          item.iconClass,
                          'pe-none',
                          'mx-auto',
                          'me-4',
                          'mb-lg-3',
                          'mb-xl-0',
                        ]"
                      >
                        <i :class="item.icon"></i>
                      </div>
                    </div>
                    <div>
                      <h3 class="counter mb-1">
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
                  </div>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.card -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="display-4 mb-3">Join Our Community</h2>
          <p class="lead fs-lg">
            We have considered our business solutions to support you on every
            stage of your growth.
          </p>
          <p class="mb-0">
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
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
            href="#collapse-snippet-22"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-22"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-1&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-0 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 order-lg-2 offset-lg-1 grid&quot;&gt;
          &lt;div
            class&#x3D;&quot;row gx-md-5 gy-5 align-items-center counter-wrapper isotope&quot;
          &gt;
            &lt;div
              class&#x3D;&quot;item col-md-6&quot;
              v-for&#x3D;&quot;(item, index) in facts1&quot;
              :key&#x3D;&quot;index&quot;
            &gt;
              &lt;div class&#x3D;&quot;card shadow-lg&quot;&gt;
                &lt;div class&#x3D;&quot;card-body&quot;&gt;
                  &lt;div class&#x3D;&quot;d-flex d-lg-block d-xl-flex flex-row&quot;&gt;
                    &lt;div&gt;
                      &lt;div
                        :class&#x3D;&quot;[
                          &#39;icon&#39;,
                          &#39;btn&#39;,
                          &#39;btn-circle&#39;,
                          &#39;btn-lg&#39;,
                          item.iconClass,
                          &#39;pe-none&#39;,
                          &#39;mx-auto&#39;,
                          &#39;me-4&#39;,
                          &#39;mb-lg-3&#39;,
                          &#39;mb-xl-0&#39;,
                        ]&quot;
                      &gt;
                        &lt;i :class&#x3D;&quot;item.icon&quot;&gt;&lt;&#x2F;i&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div&gt;
                      &lt;h3 class&#x3D;&quot;counter mb-1&quot;&gt;
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
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;.card-body --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.card --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;Join Our Community&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg&quot;&gt;
            We have considered our business solutions to support you on every
            stage of your growth.
          &lt;&#x2F;p&gt;
          &lt;p class&#x3D;&quot;mb-0&quot;&gt;
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          &lt;&#x2F;p&gt;
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
import { facts1 } from &quot;~&#x2F;data&#x2F;facts&quot;;
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
import { facts1 } from "~/data/facts";
</script>

<style lang="scss" scoped></style>
