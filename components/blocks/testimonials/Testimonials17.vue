<template>
  <section id="snippet-17" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div
          class="col-md-11 col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center position-relative"
        >
          <nuxt-img
            src="/assets/img/svg/doodle1.svg"
            class="h-9 position-absolute d-none d-lg-block"
            style="top: 2%; left: 9%"
            alt="photo"
          />
          <nuxt-img
            src="/assets/img/svg/doodle10.svg"
            class="h-7 position-absolute d-none d-lg-block"
            style="top: -45%; left: -17%"
            alt="photo"
          />
          <nuxt-img
            src="/assets/img/svg/doodle11.svg"
            class="h-13 position-absolute d-none d-lg-block"
            style="top: -40%; right: -15%"
            alt="photo"
          />
          <h2 class="fs-16 text-uppercase text-muted mb-3">Happy Customers</h2>
          <h3 class="display-3 mb-11 px-xl-10 px-xxl-13">
            Don't take our word for it. See what
            <span class="text-gradient gradient-7">customers</span> are saying
            about us.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="grid">
        <div ref="isotopeContainer" class="row isotope gy-6">
          <div
            v-for="(elm, i) in testimonials4"
            :key="i"
            class="item col-md-6 col-xl-4"
          >
            <div :class="`card shadow-none rounded-xl ${elm.bg}`">
              <div class="card-body">
                <blockquote class="icon mb-0">
                  <p>
                    {{ elm.quote }}
                  </p>
                  <div class="blockquote-details">
                    <div class="info ps-0">
                      <h5 class="mb-1">{{ elm.name }}</h5>
                      <p class="mb-0">{{ elm.role }}</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!--/column -->

          <!--/column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid-view -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-199"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-199"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-17&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div
          class&#x3D;&quot;col-md-11 col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center position-relative&quot;
        &gt;
          &lt;nuxt-img
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle1.svg&quot;
            class&#x3D;&quot;h-9 position-absolute d-none d-lg-block&quot;
            style&#x3D;&quot;top: 2%; left: 9%&quot;
            alt&#x3D;&quot;&quot;
          &#x2F;&gt;
          &lt;nuxt-img
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle10.svg&quot;
            class&#x3D;&quot;h-7 position-absolute d-none d-lg-block&quot;
            style&#x3D;&quot;top: -45%; left: -17%&quot;
            alt&#x3D;&quot;&quot;
          &#x2F;&gt;
          &lt;nuxt-img
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;svg&#x2F;doodle11.svg&quot;
            class&#x3D;&quot;h-13 position-absolute d-none d-lg-block&quot;
            style&#x3D;&quot;top: -40%; right: -15%&quot;
            alt&#x3D;&quot;&quot;
          &#x2F;&gt;
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-muted mb-3&quot;&gt;Happy Customers&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-3 mb-11 px-xl-10 px-xxl-13&quot;&gt;
            Don&#39;t take our word for it. See what
            &lt;span class&#x3D;&quot;text-gradient gradient-7&quot;&gt;customers&lt;&#x2F;span&gt; are saying
            about us.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;grid&quot;&gt;
        &lt;div ref&#x3D;&quot;isotopeContainer&quot; class&#x3D;&quot;row isotope gy-6&quot;&gt;
          &lt;div
            v-for&#x3D;&quot;(elm, i) in testimonials4&quot;
            :key&#x3D;&quot;i&quot;
            class&#x3D;&quot;item col-md-6 col-xl-4&quot;
          &gt;
            &lt;div :class&#x3D;&quot;&#x60;card shadow-none rounded-xl ${elm.bg}&#x60;&quot;&gt;
              &lt;div class&#x3D;&quot;card-body&quot;&gt;
                &lt;blockquote class&#x3D;&quot;icon mb-0&quot;&gt;
                  &lt;p&gt;
                    &lbrace;&lbrace; elm.quote &rbrace;&rbrace;
                  &lt;&#x2F;p&gt;
                  &lt;div class&#x3D;&quot;blockquote-details&quot;&gt;
                    &lt;div class&#x3D;&quot;info ps-0&quot;&gt;
                      &lt;h5 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; elm.name &rbrace;&rbrace;&lt;&#x2F;h5&gt;
                      &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; elm.role &rbrace;&rbrace;&lt;&#x2F;p&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;blockquote&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.card-body --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.card --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;column --&gt;

          &lt;!--&#x2F;column --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.row --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.grid-view --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
    
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import imagesLoaded from 'imagesloaded';
import { testimonials4 } from &quot;~&#x2F;data&#x2F;testimonials&quot;;
const isotopeContainer &#x3D; ref();
const isotope &#x3D; ref();
const initIsotop &#x3D; async () &#x3D;&gt; {
  const Isotope &#x3D; (await import(&quot;isotope-layout&quot;)).default;
  &#x2F;&#x2F; Initialize Isotope in the mounted hook
  isotope.value &#x3D; new Isotope(isotopeContainer.value, {
    itemSelector: &quot;.item&quot;,
    layoutMode: &quot;masonry&quot;, &#x2F;&#x2F; or &#39;fitRows&#39;, depending on your layout needs
  });
  imagesLoaded(isotopeContainer.value).on(
    "progress",
    function (instance, image) {
      // Trigger Isotope layout
      isotope.value.layout();
    }
  );
};

onMounted(() &#x3D;&gt; {
  initIsotop();
  
});
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
import imagesLoaded from "imagesloaded";
import { testimonials4 } from "~/data/testimonials";
const isotopeContainer = ref();
const isotope = ref();
const initIsotop = async () => {
  const Isotope = (await import("isotope-layout")).default;
  // Initialize Isotope in the mounted hook
  isotope.value = new Isotope(isotopeContainer.value, {
    itemSelector: ".item",
    layoutMode: "masonry", // or 'fitRows', depending on your layout needs
  });
  imagesLoaded(isotopeContainer.value).on(
    "progress",
    function (instance, image) {
      // Trigger Isotope layout
      isotope.value.layout();
    }
  );
};

onMounted(() => {
  initIsotop();
});
</script>

<style lang="scss" scoped></style>
