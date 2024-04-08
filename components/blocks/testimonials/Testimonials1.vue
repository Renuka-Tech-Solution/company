<template>
  <section id="snippet-1" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7">
          <div class="row gx-md-5 gy-5">
            <div
              v-for="(card, index) in testimonials"
              :key="index"
              :class="['col-md-6', card.class]"
            >
              <div :class="['card', card.bgClass]" :id="`card-${card.id}`">
                <div class="card-body">
                  <blockquote class="icon mb-0">
                    <p>{{ card.quote }}</p>
                    <div class="blockquote-details">
                      <div class="info p-0">
                        <h5 class="mb-1">{{ card.name }}</h5>
                        <p class="mb-0">{{ card.role }}</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="display-4 mb-3">Our Community</h2>
          <p class="lead fs-lg">
            Customer satisfaction is our major goal. See what our customers are
            saying about us.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit
            libero, a pharetra augue. Maecenas faucibus mollis interdum.
            Vestibulum id ligula porta felis euismod semper.
          </p>
          <a href="#" class="btn btn-navy rounded-pill mt-3"
            >All Testimonials</a
          >
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
            href="#collapse-snippet-190"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-190"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-1&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7&quot;&gt;
          &lt;div class&#x3D;&quot;row gx-md-5 gy-5&quot;&gt;
            &lt;div
              v-for&#x3D;&quot;(card, index) in testimonials&quot;
              :key&#x3D;&quot;index&quot;
              :class&#x3D;&quot;[&#39;col-md-6&#39;, card.class]&quot;
            &gt;
              &lt;div :class&#x3D;&quot;[&#39;card&#39;, card.bgClass]&quot; :id&#x3D;&quot;&#x60;card-${card.id}&#x60;&quot;&gt;
                &lt;div class&#x3D;&quot;card-body&quot;&gt;
                  &lt;blockquote class&#x3D;&quot;icon mb-0&quot;&gt;
                    &lt;p&gt;&lbrace;&lbrace; card.quote &rbrace;&rbrace;&lt;&#x2F;p&gt;
                    &lt;div class&#x3D;&quot;blockquote-details&quot;&gt;
                      &lt;div class&#x3D;&quot;info p-0&quot;&gt;
                        &lt;h5 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; card.name &rbrace;&rbrace;&lt;&#x2F;h5&gt;
                        &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; card.role &rbrace;&rbrace;&lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;blockquote&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;Our Community&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg&quot;&gt;
            Customer satisfaction is our major goal. See what our customers are
            saying about us.
          &lt;&#x2F;p&gt;
          &lt;p&gt;
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit
            libero, a pharetra augue. Maecenas faucibus mollis interdum.
            Vestibulum id ligula porta felis euismod semper.
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-navy rounded-pill mt-3&quot;
            &gt;All Testimonials&lt;&#x2F;a
          &gt;
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
import { testimonials } from &quot;~&#x2F;data&#x2F;testimonials&quot;;
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
import { testimonials } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
