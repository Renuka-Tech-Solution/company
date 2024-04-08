<template>
  <section id="snippet-10" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row text-center">
        <div class="col-lg-10 col-xxl-8 mx-auto mb-12">
          <h2 class="fs-16 text-uppercase text-muted mb-3">Latest Projects</h2>
          <h3 class="display-2 ls-sm">
            Check out some of our
            <span class="underline-3 style-1 primary"><em>awesome</em></span>
            projects with creative ideas and great design.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gy-10 align-items-center mb-15 mb-md-17">
        <div class="col-lg-7">
          <div class="card bg-soft-grape">
            <div class="card-body px-9 py-0 overflow-hidden">
              <div class="row gx-4 gx-md-9">
                <div class="col-6">
                  <figure class="mt-9">
                    <a href="#"
                      ><nuxt-img
                        class="shadow-lg rounded-top"
                        src="/assets/img/demos/d18.jpg"
                        srcset="/assets/img/demos/d18@2x.jpg 2x"
                        alt="photo"
                    /></a>
                  </figure>
                </div>
                <!-- /column -->
                <div class="col-6">
                  <figure>
                    <a href="#"
                      ><nuxt-img
                        class="shadow-lg rounded-bottom"
                        src="/assets/img/demos/d18-2.jpg"
                        srcset="/assets/img/demos/d18-2@2x.jpg 2x"
                        alt="photo"
                    /></a>
                  </figure>
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!-- /column -->
        <div class="col-lg-4 ms-auto">
          <h3 class="h1 post-title ls-sm mb-2">Wiretree Network Company</h3>
          <div class="post-category text-muted mb-4">
            <span>Dashboard</span>, <span>Web Development</span>
          </div>
          <p class="mb-6">
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus. Donec sed odio dui. Vivamus sagittis lacus vel.
          </p>
          <nuxt-link to="/single-project" class="btn btn-grape rounded"
            >See Project</nuxt-link
          >
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gy-10 align-items-center">
        <div class="col-lg-7 order-lg-2">
          <div class="card bg-soft-primary">
            <div class="card-body p-11 overflow-hidden">
              <figure>
                <a href="#"
                  ><nuxt-img
                    src="/assets/img/photos/f2.png"
                    srcset="/assets/img/photos/f2@2x.png 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!-- /column -->
        <div class="col-lg-4 me-auto">
          <h3 class="h1 post-title ls-sm mb-2">Alphine Finance</h3>
          <div class="post-category text-muted mb-4">
            <span>Branding</span>, <span>Web Design</span>
          </div>
          <p class="mb-6">
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus. Donec sed odio dui. Vivamus sagittis lacus vel.
          </p>
          <nuxt-link to="/single-project" class="btn btn-primary rounded"
            >See Project</nuxt-link
          >
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
            href="#collapse-snippet-69"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-69"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-10&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row text-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-10 col-xxl-8 mx-auto mb-12&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-muted mb-3&quot;&gt;Latest Projects&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-2 ls-sm&quot;&gt;
            Check out some of our
            &lt;span class&#x3D;&quot;underline-3 style-1 primary&quot;&gt;&lt;em&gt;awesome&lt;&#x2F;em&gt;&lt;&#x2F;span&gt;
            projects with creative ideas and great design.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gy-10 align-items-center mb-15 mb-md-17&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7&quot;&gt;
          &lt;div class&#x3D;&quot;card bg-soft-grape&quot;&gt;
            &lt;div class&#x3D;&quot;card-body px-9 py-0 overflow-hidden&quot;&gt;
              &lt;div class&#x3D;&quot;row gx-4 gx-md-9&quot;&gt;
                &lt;div class&#x3D;&quot;col-6&quot;&gt;
                  &lt;figure class&#x3D;&quot;mt-9&quot;&gt;
                    &lt;a href&#x3D;&quot;#&quot;
                      &gt;&lt;nuxt-img
                        class&#x3D;&quot;shadow-lg rounded-top&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;d18.jpg&quot;
                        srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;d18@2x.jpg 2x&quot;
                        alt&#x3D;&quot;&quot;
                    &#x2F;&gt;&lt;&#x2F;a&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;column --&gt;
                &lt;div class&#x3D;&quot;col-6&quot;&gt;
                  &lt;figure&gt;
                    &lt;a href&#x3D;&quot;#&quot;
                      &gt;&lt;nuxt-img
                        class&#x3D;&quot;shadow-lg rounded-bottom&quot;
                        src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;d18-2.jpg&quot;
                        srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;d18-2@2x.jpg 2x&quot;
                        alt&#x3D;&quot;&quot;
                    &#x2F;&gt;&lt;&#x2F;a&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;column --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.row --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.card --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-4 ms-auto&quot;&gt;
          &lt;h3 class&#x3D;&quot;h1 post-title ls-sm mb-2&quot;&gt;Wiretree Network Company&lt;&#x2F;h3&gt;
          &lt;div class&#x3D;&quot;post-category text-muted mb-4&quot;&gt;
            &lt;span&gt;Dashboard&lt;&#x2F;span&gt;, &lt;span&gt;Web Development&lt;&#x2F;span&gt;
          &lt;&#x2F;div&gt;
          &lt;p class&#x3D;&quot;mb-6&quot;&gt;
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus. Donec sed odio dui. Vivamus sagittis lacus vel.
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-grape rounded&quot;&gt;See Project&lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7 order-lg-2&quot;&gt;
          &lt;div class&#x3D;&quot;card bg-soft-primary&quot;&gt;
            &lt;div class&#x3D;&quot;card-body p-11 overflow-hidden&quot;&gt;
              &lt;figure&gt;
                &lt;a href&#x3D;&quot;#&quot;
                  &gt;&lt;nuxt-img
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f2.png&quot;
                    srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f2@2x.png 2x&quot;
                    alt&#x3D;&quot;&quot;
                &#x2F;&gt;&lt;&#x2F;a&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.card --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-4 me-auto&quot;&gt;
          &lt;h3 class&#x3D;&quot;h1 post-title ls-sm mb-2&quot;&gt;Alphine Finance&lt;&#x2F;h3&gt;
          &lt;div class&#x3D;&quot;post-category text-muted mb-4&quot;&gt;
            &lt;span&gt;Branding&lt;&#x2F;span&gt;, &lt;span&gt;Web Design&lt;&#x2F;span&gt;
          &lt;&#x2F;div&gt;
          &lt;p class&#x3D;&quot;mb-6&quot;&gt;
            Maecenas faucibus mollis interdum sed posuere consectetur est at
            lobortis. Scelerisque id ligula porta felis euismod semper. Fusce
            dapibus tellus. Donec sed odio dui. Vivamus sagittis lacus vel.
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary rounded&quot;&gt;See Project&lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;&lt;&#x2F;script&gt;

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

<script setup></script>

<style lang="scss" scoped></style>
