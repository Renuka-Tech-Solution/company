<template>
  <section id="snippet-1" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-md-8 col-lg-6 col-xl-5 order-lg-2 position-relative">
          <div
            class="shape bg-soft-primary rounded-circle rellax w-20 h-20"
            data-rellax-speed="1"
            style="top: -2rem; right: -1.9rem"
          ></div>
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/about7.jpg"
              srcset="/assets/img/photos/about7@2x.jpg 2x"
              alt="image"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-4 mb-3">Who Are We?</h2>
          <p class="lead fs-lg">
            We are a digital and branding company that believes in the power of
            creative strategy and along with great design.
          </p>
          <p class="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </p>
          <div class="row gx-xl-10 gy-6">
            <div v-for="(item, index) in items" :key="index" class="col-md-6">
              <div class="d-flex flex-row">
                <div>
                  <nuxt-img
                    :src="item.iconSrc"
                    class="icon-svg icon-svg-sm me-4"
                    alt="photo"
                  />
                </div>
                <div>
                  <h4 class="mb-1">{{ item.title }}</h4>
                  <p class="mb-0">{{ item.description }}</p>
                </div>
              </div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
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
            href="#collapse-snippet-4"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-4"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-1&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-8 col-lg-6 col-xl-5 order-lg-2 position-relative&quot;&gt;
          &lt;div
            class&#x3D;&quot;shape bg-soft-primary rounded-circle rellax w-20 h-20&quot;
            data-rellax-speed&#x3D;&quot;1&quot;
            style&#x3D;&quot;top: -2rem; right: -1.9rem&quot;
          &gt;&lt;&#x2F;div&gt;
          &lt;figure class&#x3D;&quot;rounded&quot;&gt;
            &lt;nuxt-img
              :width&#x3D;&quot;575&quot;
              :height&#x3D;&quot;550&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about7.jpg&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about7@2x.jpg 2x&quot;
              alt&#x3D;&quot;image&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;Who Are We?&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg&quot;&gt;
            We are a digital and branding company that believes in the power of
            creative strategy and along with great design.
          &lt;&#x2F;p&gt;
          &lt;p class&#x3D;&quot;mb-6&quot;&gt;
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;row gx-xl-10 gy-6&quot;&gt;
            &lt;div v-for&#x3D;&quot;(item, index) in items&quot; :key&#x3D;&quot;index&quot; class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;div class&#x3D;&quot;d-flex flex-row&quot;&gt;
                &lt;div&gt;
                  &lt;nuxt-img
                    :src&#x3D;&quot;item.iconSrc&quot;
                    class&#x3D;&quot;icon-svg icon-svg-sm me-4&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
                  &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
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
const items &#x3D; [
  {
    id: 1,
    iconSrc: &quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;target.svg&quot;,
    title: &quot;Our Mission&quot;,
    description: &quot;Dapibus eu leo quam ornare curabitur blandit tempus.&quot;,
  },
  {
    id: 2,

    iconSrc: &quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;award-2.svg&quot;,
    title: &quot;Our Values&quot;,
    description: &quot;Aenean lacinia bibendum nulla sed consectetur.&quot;,
  },
  &#x2F;&#x2F; Add more items as needed
];
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
const items = [
  {
    id: 1,
    iconSrc: "/assets/img/icons/lineal/target.svg",
    title: "Our Mission",
    description: "Dapibus eu leo quam ornare curabitur blandit tempus.",
  },
  {
    id: 2,

    iconSrc: "/assets/img/icons/lineal/award-2.svg",
    title: "Our Values",
    description: "Aenean lacinia bibendum nulla sed consectetur.",
  },
  // Add more items as needed
];
</script>

<style lang="scss" scoped></style>
