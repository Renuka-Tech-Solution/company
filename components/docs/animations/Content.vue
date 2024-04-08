<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
      <div class="row">
        <div class="col-md-9 col-lg-7 col-xl-6 mx-auto">
          <h1 class="display-1 mb-3">Animations</h1>
          <p class="lead px-xxl-5">
            Add animations to elements to show them by scrolling. For further
            plugin documentation please visit
            <a
              href="https://michalsnik.github.io/aos/"
              target="_blank"
              class="hover more"
              >Aos docs</a
            >
          </p>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-lg-3 mx-auto">
          <form class="Preview">
            <select
              class="form-select"
              @change="changeAnimation"
              v-model="selectedValue"
            >
              <option v-for="(elm, i) in aosOptions" :key="i" :value="elm">
                {{ elm }}
              </option>
            </select>
          </form>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
  <div class="container">
    <div class="row">
      <DocsCommonSidebar />
      <DocsAnimationsPageNav />
      <!-- /column -->

      <!-- /column -->
      <div class="col-xl-8 order-xl-2">
        <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
          <h2 class="mb-3">Standard Example</h2>
          <p class="lead mb-8">
            Set the <code class="code">data-aos</code> attribute in the target
            element and specify the animation type.
          </p>
          <div class="card">
            <div class="card-body">
              <div class="row g-4">
                <div class="col" :data-aos="selectedValue">
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/p1.jpg"
                      srcset="/assets/img/photos/p1@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
                <div class="col" :data-aos="selectedValue">
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/p2.jpg"
                      srcset="/assets/img/photos/p2@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
                <div class="col" :data-aos="selectedValue">
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/p3.jpg"
                      srcset="/assets/img/photos/p3@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <!--/.card-body -->
            <div class="card-footer position-relative">
              <a
                class="collapse-link collapsed stretched-link"
                data-bs-toggle="collapse"
                href="#collapse-1"
                >View example's code</a
              >
            </div>
            <!--/.card-footer -->
            <div
              id="collapse-1"
              class="card-footer bg-dark p-0 accordion-collapse collapse"
            >
              <div class="code-wrapper">
                <div class="code-wrapper-inner">
                  <pre class="language-html"><code>                
                &lt;div class&#x3D;&quot;col&quot; data-aos&#x3D;&quot;fade&quot;&gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p1.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p1@2x.jpg 2x&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lt;div class&#x3D;&quot;col&quot; data-aos&#x3D;&quot;fade&quot;&gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2@2x.jpg 2x&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lt;div class&#x3D;&quot;col&quot; data-aos&#x3D;&quot;fade&quot;&gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3@2x.jpg 2x&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;</code></pre>
                </div>
                <!--/.code-wrapper-inner -->
              </div>
              <!--/.code-wrapper -->
            </div>
            <!--/.card-footer -->
          </div>
          <!--/.card -->
        </section>

        <section id="snippet-4" class="wrapper pt-16 scrollSpysection">
          <h2 class="mb-3">[data-aos-duration]</h2>
          <p class="lead mb-8">
            You can set the showing time of the element. (ms)
          </p>
          <div class="card">
            <div class="card-body">
              <div class="row g-4">
                <div
                  class="col"
                  :data-aos="selectedValue"
                  data-aos-duration="400"
                >
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/p1.jpg"
                      srcset="/assets/img/photos/p1@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
                <div
                  class="col"
                  :data-aos="selectedValue"
                  data-aos-duration="1600"
                >
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/p2.jpg"
                      srcset="/assets/img/photos/p2@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
                <div
                  class="col"
                  :data-aos="selectedValue"
                  data-aos-duration="2500"
                >
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/p3.jpg"
                      srcset="/assets/img/photos/p3@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <!--/.card-body -->
            <div class="card-footer position-relative">
              <a
                class="collapse-link collapsed stretched-link"
                data-bs-toggle="collapse"
                href="#collapse-4"
                >View example's code</a
              >
            </div>
            <!--/.card-footer -->
            <div
              id="collapse-4"
              class="card-footer bg-dark p-0 accordion-collapse collapse"
            >
              <div class="code-wrapper">
                <div class="code-wrapper-inner">
                  <pre class="language-html"><code>
                &lt;div
                  class&#x3D;&quot;col&quot;
                  data-aos&#x3D;&quot;fade&quot;
                  data-aos-duration&#x3D;&quot;400&quot;
                &gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p1.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p1@2x.jpg 2x&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lt;div
                  class&#x3D;&quot;col&quot;
                  data-aos&#x3D;&quot;fade&quot;
                  data-aos-duration&#x3D;&quot;1600&quot;
                &gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2@2x.jpg 2x&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lt;div
                  class&#x3D;&quot;col&quot;
                  data-aos&#x3D;&quot;fade&quot;
                  data-aos-duration&#x3D;&quot;2500&quot;
                &gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3@2x.jpg 2x&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                  </code></pre>
                </div>
                <!--/.code-wrapper-inner -->
              </div>
              <!--/.code-wrapper -->
            </div>
            <!--/.card-footer -->
          </div>
          <!--/.card -->
        </section>

        <section id="snippet-6" class="wrapper py-16 scrollSpysection">
          <h2 class="mb-3">[ data-aos-delay]</h2>
          <p class="mb-8">
            You can set the showing delay time of the element. (ms)
          </p>
          <div class="card">
            <div class="card-body">
              <div class="row g-4">
                <div class="col" :data-aos="selectedValue" data-aos-delay="400">
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/p1.jpg"
                      srcset="/assets/img/photos/p1@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
                <div class="col" :data-aos="selectedValue" data-aos-delay="900">
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/p2.jpg"
                      srcset="/assets/img/photos/p2@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
                <div
                  class="col"
                  :data-aos="selectedValue"
                  data-aos-delay="1500"
                >
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/p3.jpg"
                      srcset="/assets/img/photos/p3@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <!--/.card-body -->
            <div class="card-footer position-relative">
              <a
                class="collapse-link collapsed stretched-link"
                data-bs-toggle="collapse"
                href="#collapse-6"
                >View example's code</a
              >
            </div>
            <!--/.card-footer -->
            <div
              id="collapse-6"
              class="card-footer bg-dark p-0 accordion-collapse collapse"
            >
              <div class="code-wrapper">
                <div class="code-wrapper-inner">
                  <pre class="language-html"><code>
                &lt;div class&#x3D;&quot;col&quot; data-aos&#x3D;&quot;fade&quot;  data-aos-delay&#x3D;&quot;400&quot;&gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p1.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p1@2x.jpg 2x&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lt;div class&#x3D;&quot;col&quot; data-aos&#x3D;&quot;fade&quot;  data-aos-delay&#x3D;&quot;900&quot;&gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2@2x.jpg 2x&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lt;div
                  class&#x3D;&quot;col&quot;
                  data-aos&#x3D;&quot;fade&quot;
                   data-aos-delay&#x3D;&quot;1500&quot;
                &gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3@2x.jpg 2x&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                  </code></pre>
                </div>
                <!--/.code-wrapper-inner -->
              </div>
              <!--/.code-wrapper -->
            </div>
            <!--/.card-footer -->
          </div>
          <!--/.card -->
        </section>
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script setup>
const selectedValue = ref("fade");
const aosOptions = [
  "fade",
  "fade-up",
  "fade-down",
  "fade-right",
  "fade-left",
  "fade-up-right",
  "fade-up-left",
  "fade-down-right",
  "fade-down-left",
  "flip-up",
  "flip-down",
  "flip-right",
  "flip-left",
  "zoom-in",
  "zoom-in-up",
  "zoom-in-down",
  "zoom-in-right",
  "zoom-in-left",
  "zoom-out",
  "zoom-out-up",
  "zoom-out-down",
  "zoom-out-right",
  "zoom-out-left",
];
</script>

<style lang="scss" scoped></style>
