<template>
  <section id="snippet-4" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row text-center">
        <div class="col-lg-10 mx-auto">
          <div class="position-relative">
            <div
              class="shape bg-dot red rellax w-16 h-18"
              data-rellax-speed="1"
              style="top: 1rem; left: -3.9rem; pointer-events: none"
            ></div>
            <div
              class="shape rounded-circle bg-line primary rellax w-18 h-18"
              data-rellax-speed="1"
              style="bottom: 2rem; right: -3rem; pointer-events: none"
            ></div>
            <div style="width: 100%; position: relative" class="">
              <CommonVideoPlayer
                :options="{
                  autoplay: true,
                  controls: true,
                  sources: [
                    {
                      src: '/assets/media/movie.mp4',
                      type: 'video/mp4',
                    },
                  ],
                }"
              />
              <!-- Component for video player  from omponents>common>Videoplayer -->
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row text-center">
        <div class="col-lg-9 mx-auto">
          <h2 class="fs-15 text-uppercase text-muted mb-3 mt-12">
            Our Process
          </h2>
          <h3 class="display-4 mb-0 text-center px-xl-10 px-xxl-15">
            Find out everything you need to know about creating a business
            process model
          </h3>
          <div class="row gx-lg-8 gx-xl-12 process-wrapper text-center mt-10">
            <div v-for="(item, index) in steps3" class="col-md-4" :key="index">
              <nuxt-img
                :src="item.iconSrc"
                class="icon-svg icon-svg-md"
                :class="['text-' + item.iconColor, 'mb-3']"
                alt="photo"
              />
              <h4 class="mb-1">{{ item.title }}</h4>
              <p class="mb-0">{{ item.description }}</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
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
            href="#collapse-snippet-185"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-185"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-4&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row text-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-10 mx-auto&quot;&gt;
          &lt;div class&#x3D;&quot;position-relative&quot;&gt;
            &lt;div
              class&#x3D;&quot;shape bg-dot red rellax w-16 h-18&quot;
              data-rellax-speed&#x3D;&quot;1&quot;
              style&#x3D;&quot;top: 1rem; left: -3.9rem; pointer-events: none&quot;
            &gt;&lt;&#x2F;div&gt;
            &lt;div
              class&#x3D;&quot;shape rounded-circle bg-line primary rellax w-18 h-18&quot;
              data-rellax-speed&#x3D;&quot;1&quot;
              style&#x3D;&quot;bottom: 2rem; right: -3rem; pointer-events: none&quot;
            &gt;&lt;&#x2F;div&gt;
            &lt;div style&#x3D;&quot;width: 100%; position: relative&quot; class&#x3D;&quot;&quot;&gt;
              &lt;CommonVideoPlayer
                :options&#x3D;&quot;{
                  autoplay: true,
                  controls: true,
                  sources: [
                    {
                      src: &#39;&#x2F;assets&#x2F;media&#x2F;movie.mp4&#39;,
                      type: &#39;video&#x2F;mp4&#39;,
                    },
                  ],
                }&quot;
              &#x2F;&gt;
              &lt;!-- Component for video player  from omponents&gt;common&gt;Videoplayer --&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row text-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-9 mx-auto&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3 mt-12&quot;&gt;
            Our Process
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-0 text-center px-xl-10 px-xxl-15&quot;&gt;
            Find out everything you need to know about creating a business
            process model
          &lt;&#x2F;h3&gt;
          &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 process-wrapper text-center mt-10&quot;&gt;
            &lt;div v-for&#x3D;&quot;(item, index) in steps3&quot; class&#x3D;&quot;col-md-4&quot; :key&#x3D;&quot;index&quot;&gt;
              &lt;nuxt-img
                :src&#x3D;&quot;item.iconSrc&quot;
                class&#x3D;&quot;icon-svg icon-svg-md&quot;
                :class&#x3D;&quot;[&#39;text-&#39; + item.iconColor, &#39;mb-3&#39;]&quot;
                alt&#x3D;&quot;&quot;
              &#x2F;&gt;
              &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
              &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
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
import { steps3 } from &quot;~&#x2F;data&#x2F;process&quot;;
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
import { steps3 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
