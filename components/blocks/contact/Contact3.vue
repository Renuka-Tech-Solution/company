<template>
  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gy-10 gx-lg-8 gx-xl-12 align-items-center">
        <div class="col-lg-7 position-relative">
          <div
            class="shape bg-dot primary rellax w-18 h-18"
            data-rellax-speed="1"
            style="top: 0; left: -1.4rem; z-index: 0"
          ></div>
          <div class="row gx-md-5 gy-5">
            <div class="col-md-6">
              <figure class="rounded mt-md-10 position-relative">
                <nuxt-img
                  src="/assets/img/photos/g5.jpg"
                  srcset="/assets/img/photos/g5@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6">
              <div class="row gx-md-5 gy-5">
                <div class="col-md-12 order-md-2">
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/g6.jpg"
                      srcset="/assets/img/photos/g6@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
                <!--/column -->
                <div class="col-md-10">
                  <div class="card bg-pale-primary text-center counter-wrapper">
                    <div class="card-body py-11">
                      <h3 class="counter text-nowrap">
                        <CounterVue
                          parentClass=""
                          :min="0"
                          :max="5000"
                          :time="1500"
                        />
                        <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                        +
                      </h3>
                      <p class="mb-0">Satisfied Customers</p>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.card -->
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="display-4 mb-3">Let’s Talk</h2>
          <p class="lead fs-lg">
            Let's make something great together. We are
            <span class="underline">trusted by</span> over 5000+ clients. Join
            them by using our services and grow your business.
          </p>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
            massa justo sit amet risus.
          </p>
          <nuxt-link to="/signup" class="btn btn-primary rounded-pill mt-2"
            >Join Us</nuxt-link
          >
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
            href="#collapse-snippet-119"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-119"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-3&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gy-10 gx-lg-8 gx-xl-12 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7 position-relative&quot;&gt;
          &lt;div
            class&#x3D;&quot;shape bg-dot primary rellax w-18 h-18&quot;
            data-rellax-speed&#x3D;&quot;1&quot;
            style&#x3D;&quot;top: 0; left: -1.4rem; z-index: 0&quot;
          &gt;&lt;&#x2F;div&gt;
          &lt;div class&#x3D;&quot;row gx-md-5 gy-5&quot;&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded mt-md-10 position-relative&quot;&gt;
                &lt;nuxt-img
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g5.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g5@2x.jpg 2x&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;div class&#x3D;&quot;row gx-md-5 gy-5&quot;&gt;
                &lt;div class&#x3D;&quot;col-md-12 order-md-2&quot;&gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g6.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g6@2x.jpg 2x&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;column --&gt;
                &lt;div class&#x3D;&quot;col-md-10&quot;&gt;
                  &lt;div class&#x3D;&quot;card bg-pale-primary text-center counter-wrapper&quot;&gt;
                    &lt;div class&#x3D;&quot;card-body py-11&quot;&gt;
                      &lt;h3 class&#x3D;&quot;counter text-nowrap&quot;&gt;
                        &lt;CounterVue
                          parentClass&#x3D;&quot;&quot;
                          :min&#x3D;&quot;0&quot;
                          :max&#x3D;&quot;5000&quot;
                          :time&#x3D;&quot;1500&quot;
                        &#x2F;&gt;
                        &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
                        +
                      &lt;&#x2F;h3&gt;
                      &lt;p class&#x3D;&quot;mb-0&quot;&gt;Satisfied Customers&lt;&#x2F;p&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!--&#x2F;.card-body --&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!--&#x2F;.card --&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;column --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.row --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;Let’s Talk&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg&quot;&gt;
            Let&#39;s make something great together. We are
            &lt;span class&#x3D;&quot;underline&quot;&gt;trusted by&lt;&#x2F;span&gt; over 5000+ clients. Join
            them by using our services and grow your business.
          &lt;&#x2F;p&gt;
          &lt;p&gt;
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
            massa justo sit amet risus.
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary rounded-pill mt-2&quot;&gt;Join Us&lt;&#x2F;a&gt;
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
</script>

<style lang="scss" scoped></style>
