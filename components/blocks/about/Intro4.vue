<template>
  <section id="snippet-11" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-md-8 gx-xl-12 gy-6 align-items-center">
        <div class="col-md-8 col-lg-6 order-lg-2 mx-auto">
          <div class="img-mask mask-2">
            <nuxt-img src="/assets/img/photos/about30.jpg" alt="photo" />
          </div>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-5 mb-3">About Me</h2>
          <p class="lead fs-lg">
            I'm Caitlyn Sandbox, a photographer specializing in food, drink and
            product photography.
          </p>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo
            sit amet risus. Etiam porta sem malesuada magna mollis euismod.
            Vestibulum id ligula.
          </p>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Aenean lacinia bibendum nulla sed consectetur. Curabitur
            blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur.
          </p>
          <a href="#" class="btn btn-primary rounded-pill mt-2">Learn More</a>
        </div>
        <!--/column -->
      </div>
      <!-- /.row -->
      <div class="row gx-md-8 gx-xl-12 mt-10 mt-md-13">
        <div class="col-lg-4">
          <h2 class="display-5 mb-3">My Working Process</h2>
          <p>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Fusce dapibus, tellus ac cursus. Aenean eu leo quam.
          </p>
        </div>
        <!-- /column -->
        <div class="col-lg-8">
          <div class="row gy-6 gx-md-8 gx-xl-12">
            <div v-for="(step, index) in steps" :key="index" class="col-md-6">
              <div class="d-flex flex-row">
                <div>
                  <span :class="step.iconClass"
                    ><span class="number fs-18">{{ step.number }}</span></span
                  >
                </div>
                <div>
                  <h4 class="mb-1">{{ step.title }}</h4>
                  <p class="mb-0">{{ step.description }}</p>
                </div>
              </div>
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
            href="#collapse-snippet-103"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-103"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-11&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-md-8 gx-xl-12 gy-6 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-8 col-lg-6 order-lg-2 mx-auto&quot;&gt;
          &lt;div class&#x3D;&quot;img-mask mask-2&quot;&gt;
            &lt;nuxt-img
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about30.jpg&quot;
              :width&#x3D;&quot;1000&quot;
              :height&#x3D;&quot;850&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-5 mb-3&quot;&gt;About Me&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg&quot;&gt;
            I&#39;m Caitlyn Sandbox, a photographer specializing in food, drink and
            product photography.
          &lt;&#x2F;p&gt;
          &lt;p&gt;
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo
            sit amet risus. Etiam porta sem malesuada magna mollis euismod.
            Vestibulum id ligula.
          &lt;&#x2F;p&gt;
          &lt;p&gt;
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Aenean lacinia bibendum nulla sed consectetur. Curabitur
            blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur.
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary rounded-pill mt-2&quot;&gt;Learn More&lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gx-md-8 gx-xl-12 mt-10 mt-md-13&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-4&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-5 mb-3&quot;&gt;My Working Process&lt;&#x2F;h2&gt;
          &lt;p&gt;
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Fusce dapibus, tellus ac cursus. Aenean eu leo quam.
          &lt;&#x2F;p&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-8&quot;&gt;
          &lt;div class&#x3D;&quot;row gy-6 gx-md-8 gx-xl-12&quot;&gt;
            &lt;div v-for&#x3D;&quot;(step, index) in steps&quot; :key&#x3D;&quot;index&quot; class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;div class&#x3D;&quot;d-flex flex-row&quot;&gt;
                &lt;div&gt;
                  &lt;span :class&#x3D;&quot;step.iconClass&quot;
                    &gt;&lt;span class&#x3D;&quot;number fs-18&quot;&gt;&lbrace;&lbrace; step.number &rbrace;&rbrace;&lt;&#x2F;span&gt;&lt;&#x2F;span
                  &gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; step.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
                  &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; step.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
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
import { steps } from &quot;~&#x2F;data&#x2F;steps&quot;;
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
import { steps } from "~/data/steps";
</script>

<style lang="scss" scoped></style>
