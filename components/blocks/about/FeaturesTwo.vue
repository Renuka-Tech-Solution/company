<template>
  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15 pb-lg-2">
      <figure class="rounded">
        <nuxt-img
          :width="1200"
          :height="650"
          src="/assets/img/photos/about5.jpg"
          srcset="/assets/img/photos/about5@2x.jpg 2x"
          alt="photo"
        />
      </figure>
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div
            class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 text-white mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top"
            style="background-image: url(/assets/img/photos/bg3.jpg)"
          >
            <div class="card-body p-9 p-xl-10">
              <div
                class="row align-items-center counter-wrapper gy-4 text-center"
              >
                <div
                  v-for="(counter, index) in counters2"
                  :key="index"
                  class="col-6 col-lg-3"
                >
                  <h3 class="counter counter-lg text-white">
                    <Counter
                      parentClass=""
                      :min="50"
                      :max="counter.count"
                      :time="500"
                    />
                    <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                  </h3>

                  <p>{{ counter.label }}</p>
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
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
            href="#collapse-snippet-101"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-101"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-3&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15 pb-lg-2&quot;&gt;
      &lt;figure class&#x3D;&quot;rounded&quot;&gt;
        &lt;nuxt-img
          :width&#x3D;&quot;1200&quot;
          :height&#x3D;&quot;650&quot;
          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about5.jpg&quot;
          srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about5@2x.jpg 2x&quot;
          alt&#x3D;&quot;&quot;
        &#x2F;&gt;
      &lt;&#x2F;figure&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-xl-10 mx-auto&quot;&gt;
          &lt;div
            class&#x3D;&quot;card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 text-white mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top&quot;
            style&#x3D;&quot;background-image: url(&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg3.jpg)&quot;
          &gt;
            &lt;div class&#x3D;&quot;card-body p-9 p-xl-10&quot;&gt;
              &lt;div
                class&#x3D;&quot;row align-items-center counter-wrapper gy-4 text-center&quot;
              &gt;
                &lt;div
                  v-for&#x3D;&quot;(counter, index) in counters2&quot;
                  :key&#x3D;&quot;index&quot;
                  class&#x3D;&quot;col-6 col-lg-3&quot;
                &gt;
                  &lt;h3 class&#x3D;&quot;counter counter-lg text-white&quot;&gt;
                    &lt;Counter
                      parentClass&#x3D;&quot;&quot;
                      :min&#x3D;&quot;50&quot;
                      :max&#x3D;&quot;counter.count&quot;
                      :time&#x3D;&quot;500&quot;
                    &#x2F;&gt;
                    &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
                  &lt;&#x2F;h3&gt;

                  &lt;p&gt;&lbrace;&lbrace; counter.label &rbrace;&rbrace;&lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;column --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.row --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.card --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import Counter from &quot;~&#x2F;components&#x2F;common&#x2F;Counter.vue&quot;;
import { counters2 } from &quot;~&#x2F;data&#x2F;count&quot;;
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
import Counter from "~/components/common/Counter.vue";
import { counters2 } from "~/data/count";
</script>

<style lang="scss" scoped></style>
