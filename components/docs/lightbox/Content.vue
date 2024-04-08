<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Image & Caption</h2>
      <div class="card">
        <div class="card-body">
          <div class="row gy-6">
            <DocsLightboxImageLightBox />
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
  &lt;div
    v-for&#x3D;&quot;(elm, i) in galleryItems&quot;
    :key&#x3D;&quot;i&quot;
    class&#x3D;&quot;item col-md-6 col-lg-4&quot;
    @click&#x3D;&quot;() &#x3D;&gt; setActiveLightBox(true, i)&quot;
  &gt;
    &lt;figure class&#x3D;&quot;overlay overlay-1 hover-scale rounded&quot;&gt;
      &lt;nuxt-img :src&#x3D;&quot;elm.src&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
      &lt;span class&#x3D;&quot;bg&quot;&gt;&lt;&#x2F;span&gt;

      &lt;figcaption&gt;
        &lt;h5 class&#x3D;&quot;from-top mb-0&quot;&gt;&lbrace;&lbrace; elm.captionName &rbrace;&rbrace;&lt;&#x2F;h5&gt;
      &lt;&#x2F;figcaption&gt;
    &lt;&#x2F;figure&gt;
  &lt;&#x2F;div&gt;
  &lt;CommonLightBox2
    :items&#x3D;&quot;galleryItems&quot;
    :activeLightBox&#x3D;&quot;activeLightBox&quot;
    :firstSlideIndex&#x3D;&quot;currentSlideIndex&quot;
    @setActiveLightBox&#x3D;&quot;setActiveLightBox&quot;
  &#x2F;&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
const galleryItems &#x3D; [
  {
    id: 1,
    type: &quot;image&quot;,
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p6.jpg&quot;,
    captionName: &quot;Image&quot;,
  },
  {
    id: 2,
    type: &quot;image&quot;,
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3.jpg&quot;,
    captionName: &quot;Simple Caption&quot;,
    caption: {
      title: &quot;Title&quot;,
      description: &quot;This is the image description&quot;,
    },
  },
  {
    id: 3,
    type: &quot;image&quot;,
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2.jpg&quot;,
    captionName: &quot;Advanced Caption&quot;,
    caption: {
      title: &quot;Title 2&quot;,
      description: &quot;This div will be used as the description&quot;,
    },
  },
];
const activeLightBox &#x3D; ref(false);
const currentSlideIndex &#x3D; ref();

const setActiveLightBox &#x3D; (val, i) &#x3D;&gt; {
  currentSlideIndex.value &#x3D; i;
  activeLightBox.value &#x3D; val;
};
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
    <section id="snippet-2" class="wrapper py-16 scrollSpysection">
      <h2 class="mb-5">Video</h2>
      <div class="card">
        <div class="card-body">
          <div class="row gy-6">
            <DocsLightboxVideoLightBox />
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
              <pre class="language-html"><code>
&lt;template&gt;
  &lt;div
    v-for&#x3D;&quot;(elm, i) in galleryItems&quot;
    :key&#x3D;&quot;i&quot;
    @click&#x3D;&quot;() &#x3D;&gt; setActiveLightBox(true, i)&quot;
    class&#x3D;&quot;item col-md-6 col-lg-4&quot;
  &gt;
    &lt;figure class&#x3D;&quot;overlay overlay-1 hover-scale rounded&quot;&gt;
      &lt;nuxt-img :src&#x3D;&quot;elm.src&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
      &lt;span class&#x3D;&quot;bg&quot;&gt;&lt;&#x2F;span&gt;
      &lt;figcaption&gt;
        &lt;h5 class&#x3D;&quot;from-top mb-0&quot;&gt;&lbrace;&lbrace; elm.captionName &rbrace;&rbrace;&lt;&#x2F;h5&gt;
      &lt;&#x2F;figcaption&gt;
    &lt;&#x2F;figure&gt;
  &lt;&#x2F;div&gt;
  &lt;CommonLightBox2
    :items&#x3D;&quot;galleryItems&quot;
    :activeLightBox&#x3D;&quot;activeLightBox&quot;
    :firstSlideIndex&#x3D;&quot;currentSlideIndex&quot;
    @setActiveLightBox&#x3D;&quot;setActiveLightBox&quot;
  &#x2F;&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
const galleryItems &#x3D; [
  {
    id: 1,
    type: &quot;video&quot;,
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p4.jpg&quot;,
    captionName: &quot;Vimeo&quot;,
    provider: &quot;vimeo&quot;,
    videoId: &quot;90355541&quot;,
  },
  {
    id: 2,
    type: &quot;video&quot;,
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p5.jpg&quot;,
    captionName: &quot;YouTube&quot;,
    caption: {
      title: &quot;Title&quot;,
      description: &quot;This is the video description&quot;,
    },
    provider: &quot;youtube&quot;,
    videoId: &quot;26TbMXXOe0I&quot;,
  },
  {
    id: 3,

    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p6.jpg&quot;,
    captionName: &quot;HTML5&quot;,
    caption: {
      title: &quot;Title 2&quot;,
      description: &quot;This div will be used as the description&quot;,
    },

    videoSrc: &quot;&#x2F;assets&#x2F;media&#x2F;movie.mp4&quot;,
  },
];
const activeLightBox &#x3D; ref(false);
const currentSlideIndex &#x3D; ref();

const setActiveLightBox &#x3D; (val, i) &#x3D;&gt; {
  currentSlideIndex.value &#x3D; i;
  activeLightBox.value &#x3D; val;
};
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
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
