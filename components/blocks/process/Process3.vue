<template>
  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container pt-11 pt-lg-13 pb-16 pb-lg-6">
      <div class="row gx-lg-8 gx-xl-10 align-items-center">
        <div class="col-lg-6">
          <figure>
            <nuxt-img
              src="/assets/img/photos/device.png"
              srcset="/assets/img/photos/device@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!-- /column -->
        <div class="col-lg-6">
          <h2 class="fs-15 text-uppercase text-muted mb-3">How It Works</h2>
          <h3 class="display-4 mb-5">
            Download the app, create your profile and voilà, you're all set!
          </h3>
          <p class="mb-8">
            Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
            consectetur purus sit amet fermentum. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Nulla vitae elit libero.
            Etiam porta sem malesuada magna mollis euismod. Fusce dapibus,
            tellus ac cursus commodo.
          </p>
          <div class="row gy-6 gx-xxl-8 process-wrapper">
            <div v-for="(item, index) in steps2" class="col-md-4" :key="index">
              <nuxt-img
                :src="item.iconSrc"
                class="icon-svg icon-svg-sm"
                :class="['text-' + item.iconColor, 'mb-3']"
                alt="photo"
              />
              <h4 class="mb-1">{{ item.title }}</h4>
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
            href="#collapse-snippet-74"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-74"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-3&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-11 pt-lg-13 pb-16 pb-lg-6&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;figure&gt;
            &lt;nuxt-img
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;device.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;device@2x.png 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;How It Works&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-5&quot;&gt;
            Download the app, create your profile and voilà, you&#39;re all set!
          &lt;&#x2F;h3&gt;
          &lt;p class&#x3D;&quot;mb-8&quot;&gt;
            Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
            consectetur purus sit amet fermentum. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Nulla vitae elit libero.
            Etiam porta sem malesuada magna mollis euismod. Fusce dapibus,
            tellus ac cursus commodo.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;row gy-6 gx-xxl-8 process-wrapper&quot;&gt;
            &lt;div v-for&#x3D;&quot;(item, index) in steps2&quot; class&#x3D;&quot;col-md-4&quot; :key&#x3D;&quot;index&quot;&gt;
              &lt;nuxt-img
                :src&#x3D;&quot;item.iconSrc&quot;
                class&#x3D;&quot;icon-svg icon-svg-sm&quot;
                :class&#x3D;&quot;[&#39;text-&#39; + item.iconColor, &#39;mb-3&#39;]&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
              &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
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
import { steps2 } from &quot;~&#x2F;data&#x2F;process&quot;;
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
import { steps2 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
