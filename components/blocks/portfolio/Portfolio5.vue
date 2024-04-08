<template>
  <section id="snippet-5" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-8">
          <h2 class="fs-15 text-uppercase text-muted text-center mb-3">
            Our Projects
          </h2>
          <h3 class="display-4 text-center">
            Check out some of our awesome projects with creative ideas and great
            design.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="grid grid-view projects-masonry">
        <div class="row gx-md-8 gy-10 gy-md-13 isotope" ref="isotopeContainer">
          <div
            v-for="project in projects4"
            :key="project.id"
            :class="[
              'project',
              'item',
              `col-md-6`,
              `col-xl-4`,
              project.category,
            ]"
          >
            <figure class="lift rounded mb-6">
              <nuxt-link to="/single-project3">
                <nuxt-img :src="project.image.src" alt="photo" />
              </nuxt-link>
            </figure>
            <div
              class="project-details d-flex justify-content-center flex-column"
            >
              <div class="post-header">
                <div
                  :class="[
                    'post-category',
                    'text-line',
                    `mb-3`,
                    project.categoryClass,
                  ]"
                >
                  {{ project.categoryText }}
                </div>
                <h2 class="post-title h3">{{ project.title }}</h2>
              </div>
              <!-- /.post-header -->
            </div>
            <!-- /.project-details -->
          </div>
          <!-- /.project -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-170"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-170"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-5&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-9 col-xl-8 col-xxl-7 mx-auto mb-8&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted text-center mb-3&quot;&gt;
            Our Projects
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 text-center&quot;&gt;
            Check out some of our awesome projects with creative ideas and great
            design.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;grid grid-view projects-masonry&quot;&gt;
        &lt;div class&#x3D;&quot;row gx-md-8 gy-10 gy-md-13 isotope&quot; ref&#x3D;&quot;isotopeContainer&quot;&gt;
          &lt;div
            v-for&#x3D;&quot;project in projects4&quot;
            :key&#x3D;&quot;project.id&quot;
            :class&#x3D;&quot;[
              &#39;project&#39;,
              &#39;item&#39;,
              &#x60;col-md-6&#x60;,
              &#x60;col-xl-4&#x60;,
              project.category,
            ]&quot;
          &gt;
            &lt;figure class&#x3D;&quot;lift rounded mb-6&quot;&gt;
              &lt;nuxt-link to&#x3D;&quot;&#x2F;single-project3&quot;&gt;
                &lt;nuxt-img :src&#x3D;&quot;project.image.src&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
              &lt;&#x2F;nuxt-link&gt;
            &lt;&#x2F;figure&gt;
            &lt;div
              class&#x3D;&quot;project-details d-flex justify-content-center flex-column&quot;
            &gt;
              &lt;div class&#x3D;&quot;post-header&quot;&gt;
                &lt;div
                  :class&#x3D;&quot;[
                    &#39;post-category&#39;,
                    &#39;text-line&#39;,
                    &#x60;mb-3&#x60;,
                    project.categoryClass,
                  ]&quot;
                &gt;
                  &lbrace;&lbrace; project.categoryText &rbrace;&rbrace;
                &lt;&#x2F;div&gt;
                &lt;h2 class&#x3D;&quot;post-title h3&quot;&gt;&lbrace;&lbrace; project.title &rbrace;&rbrace;&lt;&#x2F;h2&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.post-header --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.project-details --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.project --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.row --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.grid --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import imagesLoaded from 'imagesloaded';
import { projects4 } from &quot;~&#x2F;data&#x2F;projects&quot;;
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
import { projects4 } from "~/data/projects";
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
