<template>
  <section id="snippet-8" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row text-center">
        <div class="col-md-10 col-lg-7 mx-auto position-relative">
          <nuxt-img
            src="/assets/img/svg/doodle5.svg"
            class="w-15 position-absolute d-none d-lg-block"
            data-delay="1800"
            style="bottom: -60%; right: 10%"
            alt="photo"
          />
          <nuxt-img
            src="/assets/img/svg/doodle6.svg"
            class="h-15 position-absolute d-none d-lg-block"
            data-delay="1800"
            style="top: -40%; left: -5%"
            alt="photo"
          />
          <h2 class="fs-16 text-uppercase text-muted mb-3">How It Works</h2>
          <h3 class="display-3 mb-8 px-xl-6">
            Download the app, create your profile and
            <span class="text-gradient gradient-7">voilà</span>, you're all set!
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-xxl-11 mx-auto">
          <div class="row gy-10 gy-lg-0 text-center d-flex align-items-center">
            <div class="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
              <figure class="mx-auto">
                <nuxt-img
                  src="/assets/img/photos/devices4.png"
                  srcset="/assets/img/photos/devices4@2x.png 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!-- /column -->
            <div class="w-100 d-lg-none"></div>
            <div class="col-md-6 col-lg-4 order-lg-first">
              <div class="mb-8">
                <span class="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7"
                  >01</span
                >
                <h4 class="fs-20">Download Application</h4>
                <p class="mb-0 px-xl-7">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus.
                </p>
              </div>
              <!-- /div -->
              <div>
                <span class="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7"
                  >02</span
                >
                <h4 class="fs-20">Quick Registration</h4>
                <p class="mb-0 px-xl-7">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus.
                </p>
              </div>
              <!-- /div -->
            </div>
            <!-- /column -->
            <div class="col-md-6 col-lg-4">
              <div class="mb-8">
                <span class="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7"
                  >03</span
                >
                <h4 class="fs-20">Track Your Spending</h4>
                <p class="mb-0 px-xl-7">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus.
                </p>
              </div>
              <!-- /div -->
              <div>
                <span class="fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7"
                  >04</span
                >
                <h4 class="fs-20">Have Total Control</h4>
                <p class="mb-0 px-xl-7">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus.
                </p>
              </div>
              <!-- /div -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
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
            href="#collapse-snippet-188"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-188"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-8&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row text-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-10 col-lg-7 mx-auto position-relative&quot;&gt;
          &lt;nuxt-img
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle5.svg&quot;
            class&#x3D;&quot;w-15 position-absolute d-none d-lg-block&quot;
            data-delay&#x3D;&quot;1800&quot;
            style&#x3D;&quot;bottom: -60%; right: 10%&quot;
            alt&#x3D;&quot;&quot;
          &#x2F;&gt;
          &lt;nuxt-img
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle6.svg&quot;
            class&#x3D;&quot;h-15 position-absolute d-none d-lg-block&quot;
            data-delay&#x3D;&quot;1800&quot;
            style&#x3D;&quot;top: -40%; left: -5%&quot;
            alt&#x3D;&quot;&quot;
          &#x2F;&gt;
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-muted mb-3&quot;&gt;How It Works&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-3 mb-8 px-xl-6&quot;&gt;
            Download the app, create your profile and
            &lt;span class&#x3D;&quot;text-gradient gradient-7&quot;&gt;voilà&lt;&#x2F;span&gt;, you&#39;re all set!
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-xxl-11 mx-auto&quot;&gt;
          &lt;div class&#x3D;&quot;row gy-10 gy-lg-0 text-center d-flex align-items-center&quot;&gt;
            &lt;div class&#x3D;&quot;col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0&quot;&gt;
              &lt;figure class&#x3D;&quot;mx-auto&quot;&gt;
                &lt;nuxt-img
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices4.png&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;devices4@2x.png 2x&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;w-100 d-lg-none&quot;&gt;&lt;&#x2F;div&gt;
            &lt;div class&#x3D;&quot;col-md-6 col-lg-4 order-lg-first&quot;&gt;
              &lt;div class&#x3D;&quot;mb-8&quot;&gt;
                &lt;span class&#x3D;&quot;fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7&quot;
                  &gt;01&lt;&#x2F;span
                &gt;
                &lt;h4 class&#x3D;&quot;fs-20&quot;&gt;Download Application&lt;&#x2F;h4&gt;
                &lt;p class&#x3D;&quot;mb-0 px-xl-7&quot;&gt;
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;div --&gt;
              &lt;div&gt;
                &lt;span class&#x3D;&quot;fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7&quot;
                  &gt;02&lt;&#x2F;span
                &gt;
                &lt;h4 class&#x3D;&quot;fs-20&quot;&gt;Quick Registration&lt;&#x2F;h4&gt;
                &lt;p class&#x3D;&quot;mb-0 px-xl-7&quot;&gt;
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;div --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6 col-lg-4&quot;&gt;
              &lt;div class&#x3D;&quot;mb-8&quot;&gt;
                &lt;span class&#x3D;&quot;fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7&quot;
                  &gt;03&lt;&#x2F;span
                &gt;
                &lt;h4 class&#x3D;&quot;fs-20&quot;&gt;Track Your Spending&lt;&#x2F;h4&gt;
                &lt;p class&#x3D;&quot;mb-0 px-xl-7&quot;&gt;
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;div --&gt;
              &lt;div&gt;
                &lt;span class&#x3D;&quot;fs-60 lh-1 mb-3 fw-normal text-gradient gradient-7&quot;
                  &gt;04&lt;&#x2F;span
                &gt;
                &lt;h4 class&#x3D;&quot;fs-20&quot;&gt;Have Total Control&lt;&#x2F;h4&gt;
                &lt;p class&#x3D;&quot;mb-0 px-xl-7&quot;&gt;
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;div --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.row --&gt;
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
