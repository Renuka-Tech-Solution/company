<template>
  <section id="snippet-9" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-md-8 gy-10 align-items-center">
        <div class="col-lg-6 offset-lg-1 order-lg-2 position-relative">
          <figure class="rounded">
            <nuxt-img
              class="img-fluid"
              :width="625"
              :height="590"
              src="/assets/img/photos/about27.jpg"
              srcset="/assets/img/photos/about27@2x.jpg 2x"
              alt="photo"
            />
          </figure>
          <div
            class="card shadow-lg position-absolute d-none d-md-block"
            style="top: 15%; left: -7%"
          >
            <div class="card-body py-4 px-5">
              <div class="d-flex flex-row align-items-center">
                <div>
                  <nuxt-img
                    src="/assets/img/icons/solid/cloud-group.svg"
                    class="icon-svg icon-svg-sm solid-duo text-grape-fuchsia me-3"
                    alt="photo"
                  />
                </div>
                <div>
                  <h3 class="fs-25 counter mb-0 text-nowrap">
                    <Counter :max="25000" :min="100" :time="1500" />
                    <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                    +
                  </h3>
                  <p class="fs-16 lh-sm mb-0 text-nowrap">Happy Clients</p>
                </div>
              </div>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
          <div
            class="card shadow-lg position-absolute text-center d-none d-md-block"
            style="bottom: 10%; left: -10%"
          >
            <div class="card-body p-6">
              <div class="progressbar semi-circle fuchsia mb-3" data-value="80">
                <CircleProgressbar :max="80" />
                <!-- Component for circuler progressbar with animation from omponents>common>CircleProgressbar -->
              </div>
              <h4 class="mb-0">Time Saved</h4>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="fs-16 text-uppercase text-gradient gradient-1 mb-3">
            What Makes Us Different?
          </h2>
          <h3 class="display-4 mb-4 me-lg-n5">
            We make spending stress free so you have the perfect control.
          </h3>
          <p class="mb-6">
            Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
            nulla non metus auctor fringilla. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus.
            Integer posuere erat a ante venenatis dapibus posuere velit.
          </p>
          <ul class="icon-list bullet-bg bullet-soft-primary">
            <li v-for="item in features2" :key="item.id">
              <i :class="item.iconClass"></i>{{ item.text }}
            </li>
          </ul>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-2"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-2"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-9&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-md-8 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 offset-lg-1 order-lg-2 position-relative&quot;&gt;
          &lt;figure class&#x3D;&quot;rounded&quot;&gt;
            &lt;nuxt-img
              class&#x3D;&quot;img-fluid&quot;
              :width&#x3D;&quot;625&quot;
              :height&#x3D;&quot;590&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about27.jpg&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about27@2x.jpg 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
          &lt;div
            class&#x3D;&quot;card shadow-lg position-absolute d-none d-md-block&quot;
            style&#x3D;&quot;top: 15%; left: -7%&quot;
          &gt;
            &lt;div class&#x3D;&quot;card-body py-4 px-5&quot;&gt;
              &lt;div class&#x3D;&quot;d-flex flex-row align-items-center&quot;&gt;
                &lt;div&gt;
                  &lt;nuxt-img
                    :width&#x3D;&quot;256&quot;
                    :height&#x3D;&quot;235&quot;
                    src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;solid&#x2F;cloud-group.svg&quot;
                    class&#x3D;&quot; icon-svg icon-svg-sm solid-duo text-grape-fuchsia me-3&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                &lt;&#x2F;div&gt;
                &lt;div&gt;
                  &lt;h3 class&#x3D;&quot;fs-25 counter mb-0 text-nowrap&quot;&gt;
                    &lt;Counter :max&#x3D;&quot;25000&quot; :min&#x3D;&quot;100&quot; :time&#x3D;&quot;1500&quot; &#x2F;&gt;
                    &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
                    +
                  &lt;&#x2F;h3&gt;
                  &lt;p class&#x3D;&quot;fs-16 lh-sm mb-0 text-nowrap&quot;&gt;Happy Clients&lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.card --&gt;
          &lt;div
            class&#x3D;&quot;card shadow-lg position-absolute text-center d-none d-md-block&quot;
            style&#x3D;&quot;bottom: 10%; left: -10%&quot;
          &gt;
            &lt;div class&#x3D;&quot;card-body p-6&quot;&gt;
              &lt;div class&#x3D;&quot;progressbar semi-circle fuchsia mb-3&quot; data-value&#x3D;&quot;80&quot;&gt;
                &lt;CircleProgressbar :max&#x3D;&quot;80&quot; &#x2F;&gt;
                &lt;!-- Component for circuler progressbar with animation from omponents&gt;common&gt;CircleProgressbar --&gt;
              &lt;&#x2F;div&gt;
              &lt;h4 class&#x3D;&quot;mb-0&quot;&gt;Time Saved&lt;&#x2F;h4&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.card --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-gradient gradient-1 mb-3&quot;&gt;
            What Makes Us Different?
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-4 me-lg-n5&quot;&gt;
            We make spending stress free so you have the perfect control.
          &lt;&#x2F;h3&gt;
          &lt;p class&#x3D;&quot;mb-6&quot;&gt;
            Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
            nulla non metus auctor fringilla. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus.
            Integer posuere erat a ante venenatis dapibus posuere velit.
          &lt;&#x2F;p&gt;
          &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-primary&quot;&gt;
            &lt;li v-for&#x3D;&quot;item in features2&quot; :key&#x3D;&quot;item.id&quot;&gt;
              &lt;i :class&#x3D;&quot;item.iconClass&quot;&gt;&lt;&#x2F;i&gt;&lbrace;&lbrace; item.text &rbrace;&rbrace;
            &lt;&#x2F;li&gt;
          &lt;&#x2F;ul&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import CircleProgressbar from &quot;~&#x2F;components&#x2F;common&#x2F;CircleProgressbar.vue&quot;;
import Counter from &quot;~&#x2F;components&#x2F;common&#x2F;Counter.vue&quot;;

import { features2 } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import CircleProgressbar from "~/components/common/CircleProgressbar.vue";
import Counter from "~/components/common/Counter.vue";

import { features2 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
