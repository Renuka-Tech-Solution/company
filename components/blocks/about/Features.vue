<template>
  <section id="snippet-2" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-12 align-items-center">
        <div class="col-lg-6 position-relative">
          <div
            class="btn btn-circle btn-primary pe-none position-absolute counter-wrapper flex-column d-none d-md-flex"
            style="
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 170px;
              height: 170px;
            "
          >
            <h3 class="text-white mb-1 mt-n2">
              <span class="counter counter-lg">
                <CounterVue parentClass="" :min="5" :max="20" :time="1500" />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                +</span
              >
            </h3>
            <p>Year Experience</p>
          </div>
          <div class="row gx-md-5 gy-5 align-items-center">
            <div class="col-md-6">
              <div class="row gx-md-5 gy-5">
                <div class="col-md-10 offset-md-2">
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/ab1.jpg"
                      srcset="/assets/img/photos/ab1@2x.jpg 2x"
                      alt="image"
                    />
                  </figure>
                </div>
                <!--/column -->
                <div class="col-md-12">
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/ab2.jpg"
                      srcset="/assets/img/photos/ab2@2x.jpg 2x"
                      alt="image"
                    />
                  </figure>
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/column -->
            <div class="col-md-6">
              <figure class="rounded">
                <nuxt-img
                  :width="290"
                  :height="440"
                  src="/assets/img/photos/ab3.jpg"
                  srcset="/assets/img/photos/ab3@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <nuxt-img
            :width="512"
            :height="390"
            src="/assets/img/icons/lineal/handshake.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="image"
          />
          <h3 class="display-5 mb-5">
            We are a creative company that focuses on establishing long-term
            relationships with customers.
          </h3>
          <p class="mb-7">
            Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum
            nulla sed consectetur. Integer posuere erat a ante venenatis dapibus
            posuere velit aliquet. Vestibulum id ligula porta felis euismod
            semper. Vestibulum id ligula.
          </p>
          <div class="row counter-wrapper gy-6">
            <div
              class="col-md-4"
              v-for="(counter, index) in counters"
              :key="index"
            >
              <h3 class="counter text-primary">
                <CounterVue
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
            href="#collapse-snippet-1"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-1"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-2&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-12 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 position-relative&quot;&gt;
          &lt;div
            class&#x3D;&quot;btn btn-circle btn-primary pe-none position-absolute counter-wrapper flex-column d-none d-md-flex&quot;
            style&#x3D;&quot;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 170px;
              height: 170px;
            &quot;
          &gt;
            &lt;h3 class&#x3D;&quot;text-white mb-1 mt-n2&quot;&gt;
              &lt;span class&#x3D;&quot;counter counter-lg&quot;&gt;
                &lt;CounterVue parentClass&#x3D;&quot;&quot; :min&#x3D;&quot;5&quot; :max&#x3D;&quot;20&quot; :time&#x3D;&quot;1500&quot; &#x2F;&gt;
                &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
                +&lt;&#x2F;span
              &gt;
            &lt;&#x2F;h3&gt;
            &lt;p&gt;Year Experience&lt;&#x2F;p&gt;
          &lt;&#x2F;div&gt;
          &lt;div class&#x3D;&quot;row gx-md-5 gy-5 align-items-center&quot;&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;div class&#x3D;&quot;row gx-md-5 gy-5&quot;&gt;
                &lt;div class&#x3D;&quot;col-md-10 offset-md-2&quot;&gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;ab1.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;ab1@2x.jpg 2x&quot;
                      alt&#x3D;&quot;image&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;column --&gt;
                &lt;div class&#x3D;&quot;col-md-12&quot;&gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      :width&#x3D;&quot;290&quot;
                      :height&#x3D;&quot;225&quot;
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;ab2.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;ab2@2x.jpg 2x&quot;
                      alt&#x3D;&quot;image&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;column --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.row --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                &lt;nuxt-img
                  :width&#x3D;&quot;290&quot;
                  :height&#x3D;&quot;440&quot;
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;ab3.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;ab3@2x.jpg 2x&quot;
                  alt&#x3D;&quot;image&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;nuxt-img
            :width&#x3D;&quot;512&quot;
            :height&#x3D;&quot;390&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;handshake.svg&quot;
            class&#x3D;&quot; icon-svg icon-svg-md mb-4&quot;
            alt&#x3D;&quot;image&quot;
          &#x2F;&gt;
          &lt;h3 class&#x3D;&quot;display-5 mb-5&quot;&gt;
            We are a creative company that focuses on establishing long-term
            relationships with customers.
          &lt;&#x2F;h3&gt;
          &lt;p class&#x3D;&quot;mb-7&quot;&gt;
            Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum
            nulla sed consectetur. Integer posuere erat a ante venenatis dapibus
            posuere velit aliquet. Vestibulum id ligula porta felis euismod
            semper. Vestibulum id ligula.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;row counter-wrapper gy-6&quot;&gt;
            &lt;div
              class&#x3D;&quot;col-md-4&quot;
              v-for&#x3D;&quot;(counter, index) in counters&quot;
              :key&#x3D;&quot;index&quot;
            &gt;
              &lt;h3 class&#x3D;&quot;counter text-primary&quot;&gt;
                &lt;CounterVue
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
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import CounterVue from &quot;~&#x2F;components&#x2F;common&#x2F;Counter.vue&quot;;
import { counters } from &quot;~&#x2F;data&#x2F;count&quot;;
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
import CounterVue from "~/components/common/Counter.vue";
import { counters } from "~/data/count";
</script>

<style lang="scss" scoped></style>
