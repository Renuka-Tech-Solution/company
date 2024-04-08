<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Tooltip</h2>
      <div class="card">
        <div class="card-body">
          <div class="row gy-6">
            <DocsImageHoverTooltip />
            <!--/column -->
          </div>
          <!--/.row -->
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
&lt;template&gt;
  &lt;div class&#x3D;&quot;item col-md-6 col-lg-4&quot;&gt;
    &lt;figure
      class&#x3D;&quot;itooltip itooltip-dark hover-scale rounded&quot;
      title&#x3D;&#39;&lt;h5 class&#x3D;&quot;mb-1&quot;&gt;Some Title&lt;&#x2F;h5&gt;&lt;p class&#x3D;&quot;mb-0&quot;&gt;Quam Sit Ornare&lt;&#x2F;p&gt;&#39;
      v-tippy&#x3D;&quot;{
        content: &#x60;&lt;h5 class&#x3D;&#39;mb-0 py-2 px-2 bg-dark text-white rounded&#39;&gt;Quam Sit Ornare&lt;&#x2F;h5&gt;&#x60;,
        allowHTML: true,
        followCursor: true,
      }&quot;
    &gt;
      &lt;a href&#x3D;&quot;#&quot;&gt;
        &lt;nuxt-img
          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p1.jpg&quot;
          srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p1@2x.jpg 2x&quot;
          alt&#x3D;&quot;&quot;
      &#x2F;&gt;&lt;&#x2F;a&gt;
    &lt;&#x2F;figure&gt;
  &lt;&#x2F;div&gt;
  &lt;!--&#x2F;column --&gt;
  &lt;div class&#x3D;&quot;item col-md-6 col-lg-4&quot;&gt;
    &lt;figure
      class&#x3D;&quot;itooltip itooltip-light hover-scale rounded&quot;
      v-tippy&#x3D;&quot;{
        content: &#x60;&lt;h5 class&#x3D;&#39;mb-0 py-2 px-2 bg-light rounded&#39;&gt;Quam Sit Ornare&lt;&#x2F;h5&gt;&#x60;,
        allowHTML: true,
        followCursor: true,
      }&quot;
    &gt;
      &lt;a href&#x3D;&quot;#&quot;&gt;
        &lt;nuxt-img
          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2.jpg&quot;
          srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2@2x.jpg 2x&quot;
          alt&#x3D;&quot;&quot;
      &#x2F;&gt;&lt;&#x2F;a&gt;
    &lt;&#x2F;figure&gt;
  &lt;&#x2F;div&gt;
  &lt;!--&#x2F;column --&gt;
  &lt;div class&#x3D;&quot;item col-md-6 col-lg-4&quot;&gt;
    &lt;figure
      class&#x3D;&quot;itooltip itooltip-primary hover-scale rounded&quot;
      v-tippy&#x3D;&quot;{
        content: &#x60;&lt;h5 class&#x3D;&#39;mb-0 py-2 px-2 bg-primary text-white rounded&#39;&gt;Quam Sit Ornare&lt;&#x2F;h5&gt;&#x60;,
        allowHTML: true,
        followCursor: true,
      }&quot;
    &gt;
      &lt;a href&#x3D;&quot;#&quot;&gt;
        &lt;nuxt-img
          src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3.jpg&quot;
          srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3@2x.jpg 2x&quot;
          alt&#x3D;&quot;&quot;
      &#x2F;&gt;&lt;&#x2F;a&gt;
    &lt;&#x2F;figure&gt;
  &lt;&#x2F;div&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { directive as VTippy } from &quot;vue-tippy&quot;;
&lt;&#x2F;script&gt;

&lt;style lang&#x3D;&quot;scss&quot; scoped&gt;&lt;&#x2F;style&gt;
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
    <section id="snippet-2" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Overlay</h2>
      <div class="card">
        <div class="card-body">
          <div class="row gy-6">
            <div class="item col-md-6 col-lg-4">
              <figure class="overlay overlay-1 hover-scale rounded">
                <a href="#">
                  <nuxt-img
                    src="/assets/img/photos/p4.jpg"
                    srcset="/assets/img/photos/p4@2x.jpg 2x"
                    alt="photo" /><span class="bg"></span
                ></a>
                <figcaption>
                  <h5 class="from-top mb-0">Some Title</h5>
                </figcaption>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="overlay overlay-2 hover-scale color rounded">
                <a href="#">
                  <nuxt-img
                    src="/assets/img/photos/p5.jpg"
                    srcset="/assets/img/photos/p5@2x.jpg 2x"
                    alt="photo" /><span class="bg"></span
                ></a>
                <figcaption>
                  <h5 class="from-top mb-1">Some Title</h5>
                  <p class="from-bottom">Some Description</p>
                </figcaption>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure
                class="overlay overlay-3 overlay-gradient-2 hover-scale rounded"
              >
                <a href="#">
                  <nuxt-img
                    src="/assets/img/photos/p6.jpg"
                    srcset="/assets/img/photos/p6@2x.jpg 2x"
                    alt="photo" /><span class="bg"></span
                ></a>
                <figcaption>
                  <h5 class="from-left mb-1">Some Title</h5>
                  <p class="from-left mb-0">Some Description</p>
                </figcaption>
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.card-body -->
        <div class="card-footer position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-2"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-2"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre
                class="language-html"
              ><code>&lt;figure class=&quot;overlay overlay-1 hover-scale rounded&quot;&gt;
&lt;a href=&quot;#&quot;&gt; 
  &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
&lt;/a&gt;
&lt;figcaption&gt;
  &lt;h5 class=&quot;from-top mb-0&quot;&gt;Some Title&lt;/h5&gt;
&lt;/figcaption&gt;
&lt;/figure&gt;
  
&lt;figure class=&quot;overlay overlay-2 hover-scale color rounded&quot;&gt;
&lt;a href=&quot;#&quot;&gt; 
  &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
&lt;/a&gt;
&lt;figcaption&gt;
  &lt;h5 class=&quot;from-top mb-1&quot;&gt;Some Title&lt;/h5&gt;
  &lt;p class=&quot;from-bottom&quot;&gt;Some Description&lt;/p&gt;
&lt;/figcaption&gt;
&lt;/figure&gt;
  
&lt;figure class=&quot;overlay overlay-3 overlay-gradient-1 hover-scale rounded&quot;&gt;
  &lt;a href=&quot;#&quot;&gt; 
    &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
  &lt;/a&gt;
  &lt;figcaption&gt;
    &lt;h5 class=&quot;from-left mb-1&quot;&gt;Some Title&lt;/h5&gt;
    &lt;p class=&quot;from-left mb-0&quot;&gt;Some Description&lt;/p&gt;
  &lt;/figcaption&gt;
&lt;/figure&gt;
  
&lt;figure class=&quot;overlay overlay-3 overlay-gradient-2 hover-scale rounded&quot;&gt;
  &lt;a href=&quot;#&quot;&gt; 
    &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
  &lt;/a&gt;
  &lt;figcaption&gt;
    &lt;h5 class=&quot;from-left mb-1&quot;&gt;Some Title&lt;/h5&gt;
    &lt;p class=&quot;from-left mb-0&quot;&gt;Some Description&lt;/p&gt;
  &lt;/figcaption&gt;
&lt;/figure&gt;
  
&lt;figure class=&quot;overlay overlay-3 overlay-gradient-3 hover-scale rounded&quot;&gt;
  &lt;a href=&quot;#&quot;&gt; 
    &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
  &lt;/a&gt;
  &lt;figcaption&gt;
    &lt;h5 class=&quot;from-left mb-1&quot;&gt;Some Title&lt;/h5&gt;
    &lt;p class=&quot;from-left mb-0&quot;&gt;Some Description&lt;/p&gt;
  &lt;/figcaption&gt;
&lt;/figure&gt;
  
&lt;figure class=&quot;overlay overlay-3 overlay-gradient-4 hover-scale rounded&quot;&gt;
  &lt;a href=&quot;#&quot;&gt; 
    &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
  &lt;/a&gt;
  &lt;figcaption&gt;
    &lt;h5 class=&quot;from-left mb-1&quot;&gt;Some Title&lt;/h5&gt;
    &lt;p class=&quot;from-left mb-0&quot;&gt;Some Description&lt;/p&gt;
  &lt;/figcaption&gt;
&lt;/figure&gt;
  
&lt;figure class=&quot;overlay overlay-3 overlay-gradient-5 hover-scale rounded&quot;&gt;
  &lt;a href=&quot;#&quot;&gt; 
    &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
  &lt;/a&gt;
  &lt;figcaption&gt;
    &lt;h5 class=&quot;from-left mb-1&quot;&gt;Some Title&lt;/h5&gt;
    &lt;p class=&quot;from-left mb-0&quot;&gt;Some Description&lt;/p&gt;
  &lt;/figcaption&gt;
&lt;/figure&gt;
  
&lt;figure class=&quot;overlay overlay-3 overlay-gradient-6 hover-scale rounded&quot;&gt;
  &lt;a href=&quot;#&quot;&gt; 
    &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
  &lt;/a&gt;
  &lt;figcaption&gt;
    &lt;h5 class=&quot;from-left mb-1&quot;&gt;Some Title&lt;/h5&gt;
    &lt;p class=&quot;from-left mb-0&quot;&gt;Some Description&lt;/p&gt;
  &lt;/figcaption&gt;
&lt;/figure&gt;
  
&lt;figure class=&quot;overlay overlay-3 overlay-gradient-7 hover-scale rounded&quot;&gt;
  &lt;a href=&quot;#&quot;&gt; 
    &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
  &lt;/a&gt;
  &lt;figcaption&gt;
    &lt;h5 class=&quot;from-left mb-1&quot;&gt;Some Title&lt;/h5&gt;
    &lt;p class=&quot;from-left mb-0&quot;&gt;Some Description&lt;/p&gt;
  &lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-3" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Simple</h2>
      <div class="card">
        <div class="card-body">
          <div class="row gy-6">
            <div class="item col-md-6 col-lg-4">
              <figure class="lift rounded">
                <a href="#">
                  <nuxt-img
                    src="/assets/img/photos/p6.jpg"
                    srcset="/assets/img/photos/p6@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="hover-scale rounded">
                <a href="#">
                  <nuxt-img
                    src="/assets/img/photos/p3.jpg"
                    srcset="/assets/img/photos/p3@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.card-body -->
        <div class="card-footer position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-3"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-3"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre
                class="language-html"
              ><code>&lt;figure class=&quot;lift rounded&quot;&gt;
  &lt;a href=&quot;#&quot;&gt; 
    &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
  &lt;/a&gt;
&lt;/figure&gt;

&lt;figure class=&quot;hover-scale rounded&quot;&gt;
  &lt;a href=&quot;#&quot;&gt; 
    &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
  &lt;/a&gt;
&lt;/figure&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </section>
    <section id="snippet-4" class="wrapper py-16 scrollSpysection">
      <h2 class="mb-5">Cursor</h2>
      <div class="card">
        <div class="card-body">
          <div class="row gy-6">
            <div class="item col-md-6 col-lg-4">
              <figure class="hover-scale cursor-dark rounded">
                <a href="#">
                  <nuxt-img
                    src="/assets/img/photos/p1.jpg"
                    srcset="/assets/img/photos/p1@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="hover-scale cursor-light rounded">
                <a href="#">
                  <nuxt-img
                    src="/assets/img/photos/p2.jpg"
                    srcset="/assets/img/photos/p2@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
            <div class="item col-md-6 col-lg-4">
              <figure class="hover-scale cursor-primary rounded">
                <a href="#">
                  <nuxt-img
                    src="/assets/img/photos/p3.jpg"
                    srcset="/assets/img/photos/p3@2x.jpg 2x"
                    alt="photo"
                /></a>
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
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
              <pre
                class="language-html"
              ><code>&lt;figure class=&quot;hover-scale cursor-dark rounded&quot;&gt;
  &lt;a href=&quot;#&quot;&gt; 
    &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
  &lt;/a&gt;
&lt;/figure&gt;

&lt;figure class=&quot;hover-scale cursor-light rounded&quot;&gt;
  &lt;a href=&quot;#&quot;&gt; 
    &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
  &lt;/a&gt;
&lt;/figure&gt;

&lt;figure class=&quot;hover-scale cursor-primary rounded&quot;&gt;
  &lt;a href=&quot;#&quot;&gt; 
    &lt;nuxt-img src=&quot;...&quot; srcset=&quot;...@2x.jpg 2x&quot; alt=&quot;&quot; /&gt;
  &lt;/a&gt;
&lt;/figure&gt;</code></pre>
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
</template>

<script setup></script>

<style lang="scss" scoped></style>
