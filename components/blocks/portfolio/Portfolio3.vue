<template>
  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="projects-tiles">
        <div class="project grid grid-view">
          <div
            class="row gx-md-8 gx-xl-12 gy-10 gy-md-12 isotope"
            ref="isotopeContainer"
          >
            <div class="item col-md-6 mt-md-7 mt-lg-15">
              <div
                class="project-details d-flex justify-content-center align-self-end flex-column ps-0 pb-0"
              >
                <div class="post-header">
                  <h2 class="display-4 mb-4 pe-xxl-15">
                    Check out some of our recent projects below.
                  </h2>
                  <p class="lead fs-lg mb-0">
                    We love to turn ideas into beautiful things.
                  </p>
                </div>
                <!-- /.post-header -->
              </div>
              <!-- /.project-details -->
            </div>
            <!-- /.item -->
            <div
              v-for="(item, i) in projects2"
              :key="item.id"
              class="item px-7 py-1 col-md-6"
            >
              <figure class="lift rounded mb-6">
                <nuxt-link to="/single-project3">
                  <nuxt-img :src="item.image.src" alt="photo" />
                </nuxt-link>
              </figure>
              <div :class="['post-category', item.categoryClass]">
                {{ item.category }}
              </div>
              <h3 class="post-title">{{ item.title }}</h3>
            </div>
            <!-- /.item -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.project -->
      </div>
      <!-- /.projects-tiles -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-169"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-169"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-3&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;projects-tiles&quot;&gt;
        &lt;div class&#x3D;&quot;project grid grid-view&quot;&gt;
          &lt;div
            class&#x3D;&quot;row gx-md-8 gx-xl-12 gy-10 gy-md-12 isotope&quot;
            ref&#x3D;&quot;isotopeContainer&quot;
          &gt;
            &lt;div class&#x3D;&quot;item col-md-6 mt-md-7 mt-lg-15&quot;&gt;
              &lt;div
                class&#x3D;&quot;project-details d-flex justify-content-center align-self-end flex-column ps-0 pb-0&quot;
              &gt;
                &lt;div class&#x3D;&quot;post-header&quot;&gt;
                  &lt;h2 class&#x3D;&quot;display-4 mb-4 pe-xxl-15&quot;&gt;
                    Check out some of our recent projects below.
                  &lt;&#x2F;h2&gt;
                  &lt;p class&#x3D;&quot;lead fs-lg mb-0&quot;&gt;
                    We love to turn ideas into beautiful things.
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;.post-header --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.project-details --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.item --&gt;
            &lt;div
              v-for&#x3D;&quot;(item, i) in projects2&quot;
              :key&#x3D;&quot;item.id&quot;
              class&#x3D;&quot;item px-7 py-1 col-md-6&quot;
            &gt;
              &lt;figure class&#x3D;&quot;lift rounded mb-6&quot;&gt;
                &lt;nuxt-link to&#x3D;&quot;&#x2F;single-project3&quot;&gt;
                  &lt;nuxt-img :src&#x3D;&quot;item.image.src&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
                &lt;&#x2F;nuxt-link&gt;
              &lt;&#x2F;figure&gt;
              &lt;div :class&#x3D;&quot;[&#39;post-category&#39;, item.categoryClass]&quot;&gt;
                &lbrace;&lbrace; item.category &rbrace;&rbrace;
              &lt;&#x2F;div&gt;
              &lt;h3 class&#x3D;&quot;post-title&quot;&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h3&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.item --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.project --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.projects-tiles --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import imagesLoaded from 'imagesloaded';
import { projects2 } from &quot;~&#x2F;data&#x2F;projects&quot;;
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
import { projects2 } from "~/data/projects";
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
