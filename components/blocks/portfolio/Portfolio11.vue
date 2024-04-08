<template>
  <section id="snippet-11" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row mb-10">
        <div class="col-md-9 col-lg-7 col-xl-6 col-xxl-5 mx-auto">
          <div class="counter-wrapper">
            <h3 class="fs-70 mb-3 text-primary text-center counter">
              <CommonCounter parentClass="" :min="0" :max="21" :time="1500" />
              <!-- Component for counting number with intersetion observer from omponents>common>counter -->
            </h3>
          </div>
          <h2 class="display-3 mb-3 text-center mb-0">
            Functional, impressive and rich demos to start with
          </h2>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="demos-wrapper">
        <div class="project mb-10">
          <div class="card bg-soft-grape">
            <div class="card-body ps-xl-12 py-0 overflow-hidden">
              <div class="row gx-md-8 gx-xl-12 d-flex align-items-center">
                <div class="col-lg-7">
                  <div class="row gx-7">
                    <div class="col-6">
                      <figure
                        class="itooltip itooltip-grape mt-9"
                        title='<h5 class="mb-0">Click to see the demo</h5>'
                      >
                        <nuxt-link to="/demo18"
                          ><nuxt-img
                            class="shadow-lg rounded-top"
                            src="/assets/img/demos/d18.jpg"
                            srcset="/assets/img/demos/d18@2x.jpg 2x"
                            alt="photo"
                        /></nuxt-link>
                      </figure>
                    </div>
                    <!-- /column -->
                    <div class="col-6">
                      <figure
                        class="itooltip itooltip-grape"
                        title='<h5 class="mb-0">Click to see the demo</h5>'
                      >
                        <nuxt-link to="/demo18"
                          ><nuxt-img
                            class="shadow-lg rounded-bottom"
                            src="/assets/img/demos/d18-2.jpg"
                            srcset="/assets/img/demos/d18-2@2x.jpg 2x"
                            alt="photo"
                        /></nuxt-link>
                      </figure>
                    </div>
                    <!-- /column -->
                  </div>
                  <!-- /.row -->
                </div>
                <!-- /column -->
                <div class="col-lg-5 d-none d-lg-block">
                  <h2 class="post-title fs-30 mb-4">Demo Layout XVIII</h2>
                  <ul class="icon-list bullet-grape row ms-0 gy-2">
                    <li class="col-md-6" v-for="item in items" :key="item.id">
                      <span><i class="uil uil-check"></i></span>
                      <span>{{ item.text }}</span>
                    </li>
                  </ul>
                  <nuxt-link
                    to="/demo18"
                    class="btn btn-sm btn-grape rounded-pill mt-1"
                    >See Demo</nuxt-link
                  >
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!-- /.project -->
        <div class="project">
          <div class="card bg-soft-fuchsia">
            <div class="card-body ps-xl-12 py-0 overflow-hidden">
              <div class="row gx-md-8 gx-xl-12 d-flex align-items-center">
                <div class="col-lg-7">
                  <div class="row gx-7">
                    <div class="col-6">
                      <figure
                        class="itooltip itooltip-fuchsia mt-9"
                        title='<h5 class="mb-0">Click to see the demo</h5>'
                      >
                        <nuxt-link to="/demo19"
                          ><nuxt-img
                            class="shadow-lg rounded-top"
                            src="/assets/img/demos/d19-1.jpg"
                            srcset="/assets/img/demos/d19-1@2x.jpg 2x"
                            alt="photo"
                        /></nuxt-link>
                      </figure>
                    </div>
                    <!-- /column -->
                    <div class="col-6">
                      <figure
                        class="itooltip itooltip-fuchsia"
                        title='<h5 class="mb-0">Click to see the demo</h5>'
                      >
                        <nuxt-link to="/demo19"
                          ><nuxt-img
                            class="shadow-lg rounded-bottom"
                            src="/assets/img/demos/d19-2.jpg"
                            srcset="/assets/img/demos/d19-2@2x.jpg 2x"
                            alt="photo"
                        /></nuxt-link>
                      </figure>
                    </div>
                    <!-- /column -->
                  </div>
                  <!-- /.row -->
                </div>
                <!-- /column -->
                <div class="col-lg-5 d-none d-lg-block">
                  <h2 class="post-title fs-30 mb-4">Demo Layout XIX</h2>
                  <ul class="icon-list bullet-fuchsia row ms-0 gy-2">
                    <li class="col-md-6" v-for="item in items2" :key="item.id">
                      <span><i class="uil uil-check"></i></span>
                      <span>{{ item.text }}</span>
                    </li>
                  </ul>
                  <nuxt-link
                    to="/demo19"
                    class="btn btn-sm btn-fuchsia rounded-pill mt-1"
                    >See Demo</nuxt-link
                  >
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!-- /.project -->
        <div class="text-center mt-12">
          <a href="#" class="btn btn-primary rounded-pill">See All Demos</a>
        </div>
      </div>
      <!-- /.demos-wrapper -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-175"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-175"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-11&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row mb-10&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-9 col-lg-7 col-xl-6 col-xxl-5 mx-auto&quot;&gt;
          &lt;div class&#x3D;&quot;counter-wrapper&quot;&gt;
            &lt;h3 class&#x3D;&quot;fs-70 mb-3 text-primary text-center counter&quot;&gt;
              &lt;CommonCounter parentClass&#x3D;&quot;&quot; :min&#x3D;&quot;0&quot; :max&#x3D;&quot;21&quot; :time&#x3D;&quot;1500&quot; &#x2F;&gt;
              &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          &lt;h2 class&#x3D;&quot;display-3 mb-3 text-center mb-0&quot;&gt;
            Functional, impressive and rich demos to start with
          &lt;&#x2F;h2&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;demos-wrapper&quot;&gt;
        &lt;div class&#x3D;&quot;project mb-10&quot;&gt;
          &lt;div class&#x3D;&quot;card bg-soft-grape&quot;&gt;
            &lt;div class&#x3D;&quot;card-body ps-xl-12 py-0 overflow-hidden&quot;&gt;
              &lt;div class&#x3D;&quot;row gx-md-8 gx-xl-12 d-flex align-items-center&quot;&gt;
                &lt;div class&#x3D;&quot;col-lg-7&quot;&gt;
                  &lt;div class&#x3D;&quot;row gx-7&quot;&gt;
                    &lt;div class&#x3D;&quot;col-6&quot;&gt;
                      &lt;figure
                        class&#x3D;&quot;itooltip itooltip-grape mt-9&quot;
                        title&#x3D;&#39;&lt;h5 class&#x3D;&quot;mb-0&quot;&gt;Click to see the demo&lt;&#x2F;h5&gt;&#39;
                      &gt;
                        &lt;nuxt-link to&#x3D;&quot;&#x2F;demo18&quot;
                          &gt;&lt;nuxt-img
                            class&#x3D;&quot;shadow-lg rounded-top&quot;
                            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;d18.jpg&quot;
                            srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;d18@2x.jpg 2x&quot;
                            alt&#x3D;&quot;&quot;
                        &#x2F;&gt;&lt;&#x2F;nuxt-link&gt;
                      &lt;&#x2F;figure&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!-- &#x2F;column --&gt;
                    &lt;div class&#x3D;&quot;col-6&quot;&gt;
                      &lt;figure
                        class&#x3D;&quot;itooltip itooltip-grape&quot;
                        title&#x3D;&#39;&lt;h5 class&#x3D;&quot;mb-0&quot;&gt;Click to see the demo&lt;&#x2F;h5&gt;&#39;
                      &gt;
                        &lt;nuxt-link to&#x3D;&quot;&#x2F;demo18&quot;
                          &gt;&lt;nuxt-img
                            class&#x3D;&quot;shadow-lg rounded-bottom&quot;
                            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;d18-2.jpg&quot;
                            srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;d18-2@2x.jpg 2x&quot;
                            alt&#x3D;&quot;&quot;
                        &#x2F;&gt;&lt;&#x2F;nuxt-link&gt;
                      &lt;&#x2F;figure&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!-- &#x2F;column --&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;.row --&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;column --&gt;
                &lt;div class&#x3D;&quot;col-lg-5 d-none d-lg-block&quot;&gt;
                  &lt;h2 class&#x3D;&quot;post-title fs-30 mb-4&quot;&gt;Demo Layout XVIII&lt;&#x2F;h2&gt;
                  &lt;ul class&#x3D;&quot;icon-list bullet-grape row ms-0 gy-2&quot;&gt;
                    &lt;li class&#x3D;&quot;col-md-6&quot; v-for&#x3D;&quot;item in items&quot; :key&#x3D;&quot;item.id&quot;&gt;
                      &lt;span&gt;&lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i&gt;&lt;&#x2F;span&gt;
                      &lt;span&gt;&lbrace;&lbrace; item.text &rbrace;&rbrace;&lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                  &lt;&#x2F;ul&gt;
                  &lt;nuxt-link
                    to&#x3D;&quot;&#x2F;demo18&quot;
                    class&#x3D;&quot;btn btn-sm btn-grape rounded-pill mt-1&quot;
                    &gt;See Demo&lt;&#x2F;nuxt-link
                  &gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;column --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.row --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.card --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.project --&gt;
        &lt;div class&#x3D;&quot;project&quot;&gt;
          &lt;div class&#x3D;&quot;card bg-soft-fuchsia&quot;&gt;
            &lt;div class&#x3D;&quot;card-body ps-xl-12 py-0 overflow-hidden&quot;&gt;
              &lt;div class&#x3D;&quot;row gx-md-8 gx-xl-12 d-flex align-items-center&quot;&gt;
                &lt;div class&#x3D;&quot;col-lg-7&quot;&gt;
                  &lt;div class&#x3D;&quot;row gx-7&quot;&gt;
                    &lt;div class&#x3D;&quot;col-6&quot;&gt;
                      &lt;figure
                        class&#x3D;&quot;itooltip itooltip-fuchsia mt-9&quot;
                        title&#x3D;&#39;&lt;h5 class&#x3D;&quot;mb-0&quot;&gt;Click to see the demo&lt;&#x2F;h5&gt;&#39;
                      &gt;
                        &lt;nuxt-link to&#x3D;&quot;&#x2F;demo19&quot;
                          &gt;&lt;nuxt-img
                            class&#x3D;&quot;shadow-lg rounded-top&quot;
                            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;d19-1.jpg&quot;
                            srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;d19-1@2x.jpg 2x&quot;
                            alt&#x3D;&quot;&quot;
                        &#x2F;&gt;&lt;&#x2F;nuxt-link&gt;
                      &lt;&#x2F;figure&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!-- &#x2F;column --&gt;
                    &lt;div class&#x3D;&quot;col-6&quot;&gt;
                      &lt;figure
                        class&#x3D;&quot;itooltip itooltip-fuchsia&quot;
                        title&#x3D;&#39;&lt;h5 class&#x3D;&quot;mb-0&quot;&gt;Click to see the demo&lt;&#x2F;h5&gt;&#39;
                      &gt;
                        &lt;nuxt-link to&#x3D;&quot;&#x2F;demo19&quot;
                          &gt;&lt;nuxt-img
                            class&#x3D;&quot;shadow-lg rounded-bottom&quot;
                            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;d19-2.jpg&quot;
                            srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;demos&#x2F;d19-2@2x.jpg 2x&quot;
                            alt&#x3D;&quot;&quot;
                        &#x2F;&gt;&lt;&#x2F;nuxt-link&gt;
                      &lt;&#x2F;figure&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!-- &#x2F;column --&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;.row --&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;column --&gt;
                &lt;div class&#x3D;&quot;col-lg-5 d-none d-lg-block&quot;&gt;
                  &lt;h2 class&#x3D;&quot;post-title fs-30 mb-4&quot;&gt;Demo Layout XIX&lt;&#x2F;h2&gt;
                  &lt;ul class&#x3D;&quot;icon-list bullet-fuchsia row ms-0 gy-2&quot;&gt;
                    &lt;li class&#x3D;&quot;col-md-6&quot; v-for&#x3D;&quot;item in items2&quot; :key&#x3D;&quot;item.id&quot;&gt;
                      &lt;span&gt;&lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i&gt;&lt;&#x2F;span&gt;
                      &lt;span&gt;&lbrace;&lbrace; item.text &rbrace;&rbrace;&lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                  &lt;&#x2F;ul&gt;
                  &lt;nuxt-link
                    to&#x3D;&quot;&#x2F;demo19&quot;
                    class&#x3D;&quot;btn btn-sm btn-fuchsia rounded-pill mt-1&quot;
                    &gt;See Demo&lt;&#x2F;nuxt-link
                  &gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;column --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.row --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.card --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.project --&gt;
        &lt;div class&#x3D;&quot;text-center mt-12&quot;&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary rounded-pill&quot;&gt;See All Demos&lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.demos-wrapper --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
const items &#x3D; ref([
  { id: 1, text: &quot;Network, Marketing&quot; },
  { id: 2, text: &quot;SVG icons&quot; },
  { id: 3, text: &quot;3D illustrations&quot; },
  { id: 4, text: &quot;Gradient image&quot; },
]);
const items2 &#x3D; ref([
  { id: 5, text: &quot;Agency, Startup&quot; },
  { id: 6, text: &quot;Gradient image&quot; },
  { id: 7, text: &quot;SVG icons&quot; },
  { id: 8, text: &quot;Colorful design&quot; },
]);
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
const items = ref([
  { id: 1, text: "Network, Marketing" },
  { id: 2, text: "SVG icons" },
  { id: 3, text: "3D illustrations" },
  { id: 4, text: "Gradient image" },
]);
const items2 = ref([
  { id: 5, text: "Agency, Startup" },
  { id: 6, text: "Gradient image" },
  { id: 7, text: "SVG icons" },
  { id: 8, text: "Colorful design" },
]);
</script>

<style lang="scss" scoped></style>
