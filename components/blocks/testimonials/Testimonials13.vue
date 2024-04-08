<template>
  <section id="snippet-13" class="wrapper bg-light wrapper-border">
    <div class="container-card pt-14 pt-md-16">
      <div
        class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 pb-15"
        style="background-image: url(&quot;/assets/img/photos/bg22.png&quot;)"
      >
        <div class="card-body py-14 px-0">
          <div class="container">
            <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
              <div class="col-lg-4 text-center text-lg-start">
                <h3 class="display-4 mb-3 pe-xxl-15">
                  We are proud of our works
                </h3>
                <p class="lead fs-lg mb-0 pe-xxl-10">
                  We bring solutions to make life easier for our customers.
                </p>
              </div>
              <!-- /column -->
              <div class="col-lg-8 mt-lg-2">
                <div
                  class="row align-items-center counter-wrapper gy-6 text-center"
                >
                  <div v-for="(elm, i) in features" :key="i" class="col-md-4">
                    <nuxt-img
                      :src="elm.iconSrc"
                      class="icon-svg icon-svg-sm solid-duo text-grape-fuchsia mb-3"
                      alt="photo"
                    />
                    <h3 class="counter">
                      <CommonCounter
                        parentClass=""
                        :min="0"
                        :max="elm.value"
                        :time="1500"
                      />
                      <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                      {{ elm.adjective }}
                    </h3>
                    <p class="mb-0">{{ elm.description }}</p>
                  </div>
                  <!--/column -->

                  <!--/column -->
                </div>
                <!--/.row -->
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container -->
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </div>
    <!-- /.container-card -->
    <div class="container">
      <div class="grid mb-15">
        <div class="row isotope gy-6 mt-n18">
          <div
            v-for="(elm, i) in testimonials"
            :key="i"
            class="item col-md-6 col-xl-3"
          >
            <div class="card shadow-lg card-border-bottom border-soft-primary">
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
            href="#collapse-snippet-197"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-197"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-13&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container-card pt-14 pt-md-16&quot;&gt;
      &lt;div
        class&#x3D;&quot;card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 pb-15&quot;
        style&#x3D;&quot;background-image: url(&amp;quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg22.png&amp;quot;)&quot;
      &gt;
        &lt;div class&#x3D;&quot;card-body py-14 px-0&quot;&gt;
          &lt;div class&#x3D;&quot;container&quot;&gt;
            &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 gy-lg-0&quot;&gt;
              &lt;div class&#x3D;&quot;col-lg-4 text-center text-lg-start&quot;&gt;
                &lt;h3 class&#x3D;&quot;display-4 mb-3 pe-xxl-15&quot;&gt;
                  We are proud of our works
                &lt;&#x2F;h3&gt;
                &lt;p class&#x3D;&quot;lead fs-lg mb-0 pe-xxl-10&quot;&gt;
                  We bring solutions to make life easier for our customers.
                &lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;column --&gt;
              &lt;div class&#x3D;&quot;col-lg-8 mt-lg-2&quot;&gt;
                &lt;div
                  class&#x3D;&quot;row align-items-center counter-wrapper gy-6 text-center&quot;
                &gt;
                  &lt;div v-for&#x3D;&quot;(elm, i) in features&quot; :key&#x3D;&quot;i&quot; class&#x3D;&quot;col-md-4&quot;&gt;
                    &lt;nuxt-img
                      :src&#x3D;&quot;elm.iconSrc&quot;
                      class&#x3D;&quot;icon-svg icon-svg-sm solid-duo text-grape-fuchsia mb-3&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                    &lt;h3 class&#x3D;&quot;counter&quot;&gt;
                      &lt;CommonCounter
                        parentClass&#x3D;&quot;&quot;
                        :min&#x3D;&quot;0&quot;
                        :max&#x3D;&quot;elm.value&quot;
                        :time&#x3D;&quot;1500&quot;
                      &#x2F;&gt;
                      &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
                      &lbrace;&lbrace; elm.adjective &rbrace;&rbrace;
                    &lt;&#x2F;h3&gt;
                    &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; elm.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!--&#x2F;column --&gt;

                  &lt;!--&#x2F;column --&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;.row --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;column --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.row --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.container --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;.card-body --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.card --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container-card --&gt;
    &lt;div class&#x3D;&quot;container&quot;&gt;
      &lt;div class&#x3D;&quot;grid mb-15&quot;&gt;
        &lt;div class&#x3D;&quot;row isotope gy-6 mt-n18&quot;&gt;
          &lt;div
            v-for&#x3D;&quot;(elm, i) in testimonials&quot;
            :key&#x3D;&quot;i&quot;
            class&#x3D;&quot;item col-md-6 col-xl-3&quot;
          &gt;
            &lt;div class&#x3D;&quot;card shadow-lg card-border-bottom border-soft-primary&quot;&gt;
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
import { features, testimonials } from &quot;~&#x2F;data&#x2F;testimonials&quot;;
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
import { features, testimonials } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
