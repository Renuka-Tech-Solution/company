<template>
  <section id="snippet-5" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row mb-5">
        <div class="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
          <nuxt-img
            src="/assets/img/icons/lineal/list.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="photo"
          />
          <h2 class="display-4 mb-4 px-lg-14">
            Here are 3 working steps to organize our business projects.
          </h2>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div
            v-for="(item, index) in steps4"
            class="card"
            :class="{
              'me-lg-6': index === 0,
              'ms-lg-13': index === 1,
              'mx-lg-6': index === 2,
              'mt-6': index > 0,
            }"
            :key="index"
          >
            <div class="card-body p-6">
              <div class="d-flex flex-row">
                <div>
                  <span
                    class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4"
                  >
                    <span class="number">{{ item.number }}</span>
                  </span>
                </div>
                <div>
                  <h4 class="mb-1">{{ item.title }}</h4>
                  <p class="mb-0">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <!--/.card -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-6 mb-3">How It Works?</h2>
          <p class="lead fs-lg pe-lg-5">
            Find out everything you need to know and more about how we create
            our business process models.
          </p>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis ornare.
          </p>
          <p class="mb-6">
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
            ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
            consectetur. Sed posuere consectetur est at lobortis. Vestibulum id
            ligula porta felis.
          </p>
          <a href="#" class="btn btn-primary rounded-pill mb-0">Learn More</a>
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
            href="#collapse-snippet-77"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-77"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-5&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row mb-5&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-10 col-xl-8 col-xxl-7 mx-auto text-center&quot;&gt;
          &lt;nuxt-img
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;list.svg&quot;
            class&#x3D;&quot;icon-svg icon-svg-md mb-4&quot;
            alt&#x3D;&quot;&quot;
          &#x2F;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-4 px-lg-14&quot;&gt;
            Here are 3 working steps to organize our business projects.
          &lt;&#x2F;h2&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gx-md-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 order-lg-2&quot;&gt;
          &lt;div
            v-for&#x3D;&quot;(item, index) in steps4&quot;
            class&#x3D;&quot;card&quot;
            :class&#x3D;&quot;{
              &#39;me-lg-6&#39;: index &#x3D;&#x3D;&#x3D; 0,
              &#39;ms-lg-13&#39;: index &#x3D;&#x3D;&#x3D; 1,
              &#39;mx-lg-6&#39;: index &#x3D;&#x3D;&#x3D; 2,
              &#39;mt-6&#39;: index &gt; 0,
            }&quot;
            :key&#x3D;&quot;index&quot;
          &gt;
            &lt;div class&#x3D;&quot;card-body p-6&quot;&gt;
              &lt;div class&#x3D;&quot;d-flex flex-row&quot;&gt;
                &lt;div&gt;
                  &lt;span
                    class&#x3D;&quot;icon btn btn-circle btn-lg btn-soft-primary pe-none me-4&quot;
                  &gt;
                    &lt;span class&#x3D;&quot;number&quot;&gt;&lbrace;&lbrace; item.number &rbrace;&rbrace;&lt;&#x2F;span&gt;
                  &lt;&#x2F;span&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
                  &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.card --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-6 mb-3&quot;&gt;How It Works?&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg pe-lg-5&quot;&gt;
            Find out everything you need to know and more about how we create
            our business process models.
          &lt;&#x2F;p&gt;
          &lt;p&gt;
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis ornare.
          &lt;&#x2F;p&gt;
          &lt;p class&#x3D;&quot;mb-6&quot;&gt;
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
            ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
            consectetur. Sed posuere consectetur est at lobortis. Vestibulum id
            ligula porta felis.
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary rounded-pill mb-0&quot;&gt;Learn More&lt;&#x2F;a&gt;
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
import { steps4 } from &quot;~&#x2F;data&#x2F;process&quot;;
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
import { steps4 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
