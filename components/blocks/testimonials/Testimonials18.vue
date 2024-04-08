<template>
  <section id="snippet-18" class="wrapper bg-light wrapper-border">
    <div class="pt-15 pt-md-17 pb-21 pb-md-23">
      <section class="section-frame mx-xxl-11">
        <div
          class="wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500 section-frame-wrapper"
          style="background-image: url(&quot;/assets/img/photos/bg23.png&quot;)"
        >
          <div class="container py-16 py-md-18">
            <div class="row">
              <div class="col-md-11 col-lg-10 col-xl-9 mx-auto text-center">
                <h3 class="display-2 mb-10 px-xxl-10">
                  Don't take our word for it. See what customers are saying
                  about us.
                </h3>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
            <div class="row">
              <div class="grid col-md-11 mx-auto mb-lg-n23">
                <div class="row isotope gy-6" ref="isotopeContainer">
                  <div
                    v-for="(elm, i) in testimonials4"
                    :key="i"
                    class="item col-md-6 col-xl-4"
                  >
                    <div class="card shadow-lg">
                      <div class="card-body">
                        <span class="ratings five mb-3"></span>
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
                </div>
                <!-- /.row -->
              </div>
              <!-- /.grid-view -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.wrapper -->
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
            href="#collapse-snippet-99"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-99"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-18&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;pt-15 pt-md-17 pb-21 pb-md-23&quot;&gt;
      &lt;section class&#x3D;&quot;section-frame mx-xxl-11&quot;&gt;
        &lt;div
          class&#x3D;&quot;wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500 section-frame-wrapper&quot;
          style&#x3D;&quot;background-image: url(&amp;quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg23.png&amp;quot;)&quot;
        &gt;
          &lt;div class&#x3D;&quot;container py-16 py-md-18&quot;&gt;
            &lt;div class&#x3D;&quot;row&quot;&gt;
              &lt;div class&#x3D;&quot;col-md-11 col-lg-10 col-xl-9 mx-auto text-center&quot;&gt;
                &lt;h3 class&#x3D;&quot;display-2 mb-10 px-xxl-10&quot;&gt;
                  Don&#39;t take our word for it. See what customers are saying
                  about us.
                &lt;&#x2F;h3&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;column --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.row --&gt;
            &lt;div class&#x3D;&quot;row&quot;&gt;
              &lt;div class&#x3D;&quot;grid col-md-11 mx-auto mb-lg-n23&quot;&gt;
                &lt;div class&#x3D;&quot;row isotope gy-6&quot; ref&#x3D;&quot;isotopeContainer&quot;&gt;
                  &lt;div
                    v-for&#x3D;&quot;(elm, i) in testimonials4&quot;
                    :key&#x3D;&quot;i&quot;
                    class&#x3D;&quot;item col-md-6 col-xl-4&quot;
                  &gt;
                    &lt;div class&#x3D;&quot;card shadow-lg&quot;&gt;
                      &lt;div class&#x3D;&quot;card-body&quot;&gt;
                        &lt;span class&#x3D;&quot;ratings five mb-3&quot;&gt;&lt;&#x2F;span&gt;
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
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;.row --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.grid-view --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.row --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.container --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.wrapper --&gt;
      &lt;&#x2F;section&gt;
      &lt;!-- &#x2F;section --&gt;
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
