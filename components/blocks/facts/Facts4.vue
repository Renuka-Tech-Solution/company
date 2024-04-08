<template>
  <section
    class="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map"
    style="background-image: url(/assets/img/map.png)"
  >
    <div class="container py-15 pt-md-17 pb-md-18">
      <div class="row pt-md-12">
        <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
          <h2 class="fs-15 text-uppercase text-muted mb-3">
            Join Our Community
          </h2>
          <h3 class="display-4 mb-8 px-lg-12">
            We are trusted by over 5000+ clients. Join them now and grow your
            business.
          </h3>
        </div>
        <!-- /.row -->
      </div>
      <!-- /column -->
      <div class="row pb-md-12">
        <div class="col-md-10 col-lg-9 col-xl-7 mx-auto">
          <div class="row align-items-center counter-wrapper gy-4 gy-md-0">
            <div
              v-for="(elm, i) in facts2.slice(0, 3)"
              :key="i"
              class="col-md-4 text-center"
            >
              <h3 class="counter counter-lg text-primary">
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
  </section>
  <!-- /section -->
  <div class="container pb-15 pb-md-17">
    <div class="card">
      <div class="card-footer border-0 position-relative">
        <a
          class="collapse-link collapsed stretched-link"
          data-bs-toggle="collapse"
          href="#collapse-snippet-126"
          >View example's code</a
        >
      </div>
      <!--/.card-footer -->
      <div
        id="collapse-snippet-126"
        class="card-footer bg-dark p-0 accordion-collapse collapse"
      >
        <div class="code-wrapper">
          <div class="code-wrapper-inner">
            <pre class="language-html"><code>&lt;template&gt;
  &lt;section
    class&#x3D;&quot;wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map&quot;
    style&#x3D;&quot;background-image: url(&#x2F;assets&#x2F;img&#x2F;map.png)&quot;
  &gt;
    &lt;div class&#x3D;&quot;container py-15 pt-md-17 pb-md-18&quot;&gt;
      &lt;div class&#x3D;&quot;row pt-md-12&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-10 col-xl-9 col-xxl-8 mx-auto&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;
            Join Our Community
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-8 px-lg-12&quot;&gt;
            We are trusted by over 5000+ clients. Join them now and grow your
            business.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.row --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;column --&gt;
      &lt;div class&#x3D;&quot;row pb-md-12&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-10 col-lg-9 col-xl-7 mx-auto&quot;&gt;
          &lt;div class&#x3D;&quot;row align-items-center counter-wrapper gy-4 gy-md-0&quot;&gt;
            &lt;div
              v-for&#x3D;&quot;(elm, i) in facts2.slice(0, 3)&quot;
              :key&#x3D;&quot;i&quot;
              class&#x3D;&quot;col-md-4 text-center&quot;
            &gt;
              &lt;h3 class&#x3D;&quot;counter counter-lg text-primary&quot;&gt;
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
  &lt;&#x2F;section&gt;
  &lt;!-- &#x2F;section --&gt;
  
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
</template>

<script setup>
import { facts2 } from "~/data/facts";
</script>

<style lang="scss" scoped></style>
