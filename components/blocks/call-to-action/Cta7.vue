<template>
  <section id="snippet-7" class="wrapper bg-light wrapper-border">
    <div class="pt-20 pb-10 position-relative">
      <section
        class="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600"
        data-image-src="/assets/img/photos/bg23.png"
      >
        <div class="overflow-hidden" style="z-index: 1">
          <div class="divider divider-alt text-light mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
              <g fill="currentColor">
                <polygon points="1440 100 0 15 0 0 1440 0 1440 100" />
              </g>
            </svg>
          </div>
        </div>
        <!-- /.overflow-hidden -->
        <div
          class="container pt-10 pt-lg-10 pt-md-13 pb-8 pb-md-10 text-center text-lg-start"
        >
          <div class="row gx-0 gy-10">
            <div
              class="col-md-10 offset-md-1 offset-lg-0 col-lg-6 col-xl-5 position-relative"
            >
              <nuxt-img
                src="/assets/img/svg/doodle2.svg"
                class="h-15 position-absolute d-none d-lg-block"
                style="bottom: 36%; right: -25%"
                alt="photo"
              />
              <nuxt-img
                src="/assets/img/svg/doodle6.svg"
                class="h-14 position-absolute d-none d-lg-block"
                style="top: -20%; left: -25%"
                alt="photo"
              />
              <h2 class="display-3 mb-4">
                Manage all your bills, accounts & budgets in
                <span class="text-gradient gradient-7">one place.</span>
              </h2>
              <p class="lead fs-24 lh-sm mb-7">
                Sandbox is available to download from both App Store and Google
                Play Store.
              </p>
              <div
                class="d-flex justify-content-center justify-content-lg-start"
              >
                <span
                  ><a href="#" class="me-2"
                    ><nuxt-img
                      src="/assets/img/photos/button-appstore.svg"
                      class="h-11 rounded-xl"
                      alt="photo" /></a
                ></span>
                <span
                  ><a href="#"
                    ><nuxt-img
                      src="/assets/img/photos/button-google-play.svg"
                      class="h-11 rounded-xl"
                      alt="photo" /></a
                ></span>
              </div>
            </div>
            <!-- /column -->
            <div class="col-lg-6 ms-auto mt-lg-n15 mt-xl-n20">
              <figure>
                <nuxt-img
                  src="/assets/img/photos/devices6.png"
                  srcset="/assets/img/photos/devices6@2x.png 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </section>
      <!-- /section -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-115"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-115"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-7&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;pt-20 pb-10 position-relative&quot;&gt;
      &lt;section
        class&#x3D;&quot;wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600&quot;
        data-image-src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg23.png&quot;
      &gt;
        &lt;div class&#x3D;&quot;overflow-hidden&quot; style&#x3D;&quot;z-index: 1&quot;&gt;
          &lt;div class&#x3D;&quot;divider divider-alt text-light mx-n2&quot;&gt;
            &lt;svg xmlns&#x3D;&quot;http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg&quot; viewBox&#x3D;&quot;0 0 1440 100&quot;&gt;
              &lt;g fill&#x3D;&quot;currentColor&quot;&gt;
                &lt;polygon points&#x3D;&quot;1440 100 0 15 0 0 1440 0 1440 100&quot; &#x2F;&gt;
              &lt;&#x2F;g&gt;
            &lt;&#x2F;svg&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.overflow-hidden --&gt;
        &lt;div
          class&#x3D;&quot;container pt-10 pt-lg-10 pt-md-13 pb-8 pb-md-10 text-center text-lg-start&quot;
        &gt;
          &lt;div class&#x3D;&quot;row gx-0 gy-10&quot;&gt;
            &lt;div
              class&#x3D;&quot;col-md-10 offset-md-1 offset-lg-0 col-lg-6 col-xl-5 position-relative&quot;
            &gt;
              &lt;nuxt-img
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle2.svg&quot;
                class&#x3D;&quot;h-15 position-absolute d-none d-lg-block&quot;
                style&#x3D;&quot;bottom: 36%; right: -25%&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
              &lt;nuxt-img
                src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle6.svg&quot;
                class&#x3D;&quot;h-14 position-absolute d-none d-lg-block&quot;
                style&#x3D;&quot;top: -20%; left: -25%&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
              &lt;h2 class&#x3D;&quot;display-3 mb-4&quot;&gt;
                Manage all your bills, accounts &amp; budgets in
                &lt;span class&#x3D;&quot;text-gradient gradient-7&quot;&gt;one place.&lt;&#x2F;span&gt;
              &lt;&#x2F;h2&gt;
              &lt;p class&#x3D;&quot;lead fs-24 lh-sm mb-7&quot;&gt;
                Sandbox is available to download from both App Store and Google
                Play Store.
              &lt;&#x2F;p&gt;
              &lt;div
                class&#x3D;&quot;d-flex justify-content-center justify-content-lg-start&quot;
              &gt;
                &lt;span
                  &gt;&lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;me-2&quot;
                    &gt;&lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;button-appstore.svg&quot;
                      class&#x3D;&quot;h-11 rounded-xl&quot;
                      alt&#x3D;&quot;&quot; &#x2F;&gt;&lt;&#x2F;a
                &gt;&lt;&#x2F;span&gt;
                &lt;span
                  &gt;&lt;a href&#x3D;&quot;#&quot;
                    &gt;&lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;button-google-play.svg&quot;
                      class&#x3D;&quot;h-11 rounded-xl&quot;
                      alt&#x3D;&quot;&quot; &#x2F;&gt;&lt;&#x2F;a
                &gt;&lt;&#x2F;span&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-lg-6 ms-auto mt-lg-n15 mt-xl-n20&quot;&gt;
              &lt;figure&gt;
                &lt;nuxt-img
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices6.png&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices6@2x.png 2x&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.container --&gt;
      &lt;&#x2F;section&gt;
      &lt;!-- &#x2F;section --&gt;
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
