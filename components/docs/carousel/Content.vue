<template>
  <div class="col-xl-8 order-xl-2">
    <section id="snippet-1" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Simple Carousel</h2>
      <div class="card">
        <div class="card-body">
          <div
            class="swiper-container mb-10"
            data-margin="30"
            data-nav="true"
            data-dots="true"
            data-items-xl="3"
            data-items-md="2"
            data-items-xs="1"
          >
            <Slider1 />
            <!-- /.swiper -->
          </div>
          <!-- /.swiper-container -->
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
  &lt;Swiper
    :space-between&#x3D;&quot;30&quot;
    :pagination&#x3D;&quot;{ el: &#39;.docss1p&#39;, clickable: true }&quot;
    :modules&#x3D;&quot;[Pagination, Navigation]&quot;
    :navigation&#x3D;&quot;{
      prevEl: &#39;.docss1nbp&#39;,
      nextEl: &#39;.docss1nbn&#39;,
    }&quot;
    :grab-cursor&#x3D;&quot;true&quot;
    :breakpoints&#x3D;&quot;{
      500: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
    }&quot;
  &gt;
    &lt;SwiperSlide v-for&#x3D;&quot;(photo, index) in photoList&quot; :key&#x3D;&quot;index&quot;&gt;
      &lt;figure class&#x3D;&quot;overlay overlay-1 hover-scale rounded mb-0&quot;&gt;
        &lt;a href&#x3D;&quot;#&quot;&gt;
          &lt;nuxt-img :src&#x3D;&quot;photo.src&quot; :srcset&#x3D;&quot;photo.srcset&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
          &lt;span class&#x3D;&quot;bg&quot;&gt;&lt;&#x2F;span&gt;
        &lt;&#x2F;a&gt;
        &lt;figcaption&gt;
          &lt;h5 class&#x3D;&quot;from-top mb-0&quot;&gt;Read More&lt;&#x2F;h5&gt;
        &lt;&#x2F;figcaption&gt;
      &lt;&#x2F;figure&gt;&lt;&#x2F;SwiperSlide
    &gt;
  &lt;&#x2F;Swiper&gt;
  &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
    &lt;div
      class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal docss1p&quot;
    &gt;&lt;&#x2F;div&gt;
    &lt;div class&#x3D;&quot;swiper-navigation&quot;&gt;
      &lt;div class&#x3D;&quot;swiper-button swiper-button-prev docss1nbp&quot;&gt;&lt;&#x2F;div&gt;
      &lt;div class&#x3D;&quot;swiper-button swiper-button-next docss1nbn&quot;&gt;&lt;&#x2F;div&gt;
    &lt;&#x2F;div&gt;
  &lt;&#x2F;div&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;vue&quot;;
import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;;
const photoList &#x3D; [
  {
    id: 1,
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p1.jpg&quot;,
    srcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p1@2x.jpg 2x&quot;,
  },
  {
    id: 2,
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2.jpg&quot;,
    srcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p2@2x.jpg 2x&quot;,
  },
  {
    id: 3,
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3.jpg&quot;,
    srcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p3@2x.jpg 2x&quot;,
  },
  {
    id: 4,
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p4.jpg&quot;,
    srcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p4@2x.jpg 2x&quot;,
  },
  {
    id: 5,
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p5.jpg&quot;,
    srcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;p5@2x.jpg 2x&quot;,
  },
  &#x2F;&#x2F; Add more photos as needed
];
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
      <h2 class="mb-5">Card Carousel</h2>
      <div class="card">
        <div class="card-body">
          <div
            class="swiper-container dots-closer blog grid-view mb-6"
            data-margin="0"
            data-dots="true"
            data-items-md="2"
            data-items-xs="1"
          >
            <DocsCarouselSlider2 />
            <!-- /.swiper -->
          </div>
          <!-- /.swiper-container -->
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
  &lt;Swiper
    :space-between&#x3D;&quot;30&quot;
    :pagination&#x3D;&quot;{ el: &#39;.docssp2&#39;, clickable: true }&quot;
    :modules&#x3D;&quot;[Pagination]&quot;
    :grab-cursor&#x3D;&quot;true&quot;
    :breakpoints&#x3D;&quot;{
      500: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2 },
    }&quot;
  &gt;
    &lt;SwiperSlide v-for&#x3D;&quot;(elm, i) in slideContent&quot; :key&#x3D;&quot;i&quot;
      &gt;&lt;div class&#x3D;&quot;item-inner&quot;&gt;
        &lt;article&gt;
          &lt;div class&#x3D;&quot;card&quot;&gt;
            &lt;div class&#x3D;&quot;card-body&quot;&gt;
              &lt;p&gt;
                &lbrace;&lbrace; elm.desc &rbrace;&rbrace;
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card-body --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.card --&gt;
        &lt;&#x2F;article&gt;
        &lt;!-- &#x2F;article --&gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;SwiperSlide&gt;
  &lt;&#x2F;Swiper&gt;
  &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
    &lt;div
      class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal docssp2&quot;
    &gt;&lt;&#x2F;div&gt;
  &lt;&#x2F;div&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;vue&quot;;
import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;;
const slideContent &#x3D; [
  {
    id: 1,
    desc: &#x60; Duis mollis est non commodo luctu, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Nullam quis risus eget urna
            mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna vel scelerisque nisl consectetur
            et.&#x60;,
  },
  {
    id: 2,
    desc: &#x60; Duis mollis est non commodo luctu, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Nullam quis risus eget urna
            mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna vel scelerisque nisl consectetur
            et.&#x60;,
  },
  {
    id: 3,
    desc: &#x60; Duis mollis est non commodo luctu, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Nullam quis risus eget urna
            mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna vel scelerisque nisl consectetur
            et.&#x60;,
  },
  {
    id: 4,
    desc: &#x60; Duis mollis est non commodo luctu, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Nullam quis risus eget urna
            mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna vel scelerisque nisl consectetur
            et.&#x60;,
  },
];
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
    <section id="snippet-3" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Text Slider</h2>
      <div class="card">
        <div class="card-body">
          <div
            class="swiper-container dots-closer text-center mb-6"
            data-margin="30"
            data-dots="true"
          >
            <DocsCarouselSlider3 />
            <!-- /.swiper -->
          </div>
          <!-- /.swiper-container -->
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
              <pre class="language-html"><code>
&lt;template&gt;
  &lt;Swiper
    :space-between&#x3D;&quot;30&quot;
    :pagination&#x3D;&quot;{ el: &#39;.docssp3&#39;, clickable: true }&quot;
    :modules&#x3D;&quot;[Pagination]&quot;
    :grab-cursor&#x3D;&quot;true&quot;
    :breakpoints&#x3D;&quot;{
      500: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    }&quot;
  &gt;
    &lt;SwiperSlide v-for&#x3D;&quot;(elm, i) in slideContent&quot; :key&#x3D;&quot;i&quot;&gt;
      &lt;p&gt;
        &lbrace;&lbrace; elm.desc &rbrace;&rbrace;
      &lt;&#x2F;p&gt;
    &lt;&#x2F;SwiperSlide&gt;
  &lt;&#x2F;Swiper&gt;
  &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
    &lt;div
      class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal docssp3&quot;
    &gt;&lt;&#x2F;div&gt;
  &lt;&#x2F;div&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;vue&quot;;
import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;;
const slideContent &#x3D; [
  {
    id: 1,
    desc: &#x60; Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Cras mattis consectetur purus sit amet
            fermentum. Maecenas faucibus mollis interdum.&#x60;,
  },
  {
    id: 2,
    desc: &#x60; Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Cras mattis consectetur purus sit amet
            fermentum. Maecenas faucibus mollis interdum.&#x60;,
  },
  {
    id: 3,
    desc: &#x60; Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Cras mattis consectetur purus sit amet
            fermentum. Maecenas faucibus mollis interdum.&#x60;,
  },
  {
    id: 4,
    desc: &#x60; Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Cras mattis consectetur purus sit amet
            fermentum. Maecenas faucibus mollis interdum.&#x60;,
  },
];
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
    <section id="snippet-4" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-3">Image Slider</h2>

      <p class="lead mb-3">
        Use any available <code class="code">.m-*</code>,
        <code class="code">.p-*</code>, <code class="code">.bg-*</code> and
        <code class="code">.text-*</code> helper class to style and place the
        captions. You can change their placement with the help of flex classes
        as well.
      </p>
      <p class="lead">
        Use
        <a href="https://animate.style" class="external" target="_blank"
          >animate.css</a
        >
        animation and utility classes to add animations and delays to captions.
      </p>
      <p class="lead mb-8">
        For hero slider (slider with fixed height and background cover images)
        with captions example check out
        <nuxt-link to="/demo15" class="external" target="_blank"
          >Demo 15</nuxt-link
        >
      </p>
      <div class="card">
        <div class="card-body">
          <div
            class="swiper-container dots-over"
            data-margin="5"
            data-dots="true"
            data-nav="true"
            data-autoheight="true"
          >
            <DocsCarouselSlider4 />
            <!-- /.swiper -->
          </div>
          <!-- /.swiper-container -->
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
&lt;template&gt;
  &lt;div class&#x3D;&quot;card&quot;&gt;
    &lt;div class&#x3D;&quot;card-body&quot;&gt;
      &lt;div class&#x3D;&quot;swiper-container swiper-thumbs-container dots-over&quot;&gt;
        &lt;Swiper
          :space-between&#x3D;&quot;10&quot;
          :navigation&#x3D;&quot;{ prevEl: &#39;.spnvp&#39;, nextEl: &#39;.spnvn&#39; }&quot;
          :modules&#x3D;&quot;[Navigation, Thumbs]&quot;
          :grab-cursor&#x3D;&quot;true&quot;
          :thumbs&#x3D;&quot;{ swiper: thumbsSwiper }&quot;
        &gt;
          &lt;swiper-slide v-for&#x3D;&quot;(image, index) in productImages&quot; :key&#x3D;&quot;index&quot;&gt;
            &lt;figure class&#x3D;&quot;rounded&quot;&gt;
              &lt;nuxt-img :src&#x3D;&quot;image.src&quot; :srcset&#x3D;&quot;image.srcset&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
              &lt;div
                class&#x3D;&quot;item-link cursor-pointer&quot;
                @click&#x3D;&quot;() &#x3D;&gt; setActiveLightBox(true, index)&quot;
              &gt;
                &lt;i class&#x3D;&quot;uil uil-focus-add&quot;&gt;&lt;&#x2F;i&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;swiper-slide&gt;
        &lt;&#x2F;Swiper&gt;
        &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
          &lt;div class&#x3D;&quot;swiper-navigation&quot;&gt;
            &lt;div class&#x3D;&quot;swiper-button swiper-button-prev spnvp&quot;&gt;&lt;&#x2F;div&gt;
            &lt;div class&#x3D;&quot;swiper-button swiper-button-next spnvn&quot;&gt;&lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;

        &lt;!-- &#x2F;.swiper --&gt;
        &lt;div class&#x3D;&quot;swiper swiper-thumbs&quot;&gt;
          &lt;Swiper
            :space-between&#x3D;&quot;10&quot;
            :slides-per-view&#x3D;&quot;5&quot;
            :modules&#x3D;&quot;[Thumbs]&quot;
            @swiper&#x3D;&quot;setThumbsSwiper&quot;
            :grab-cursor&#x3D;&quot;true&quot;
          &gt;
            &lt;swiper-slide v-for&#x3D;&quot;(image, index) in productImages&quot; :key&#x3D;&quot;index&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                &lt;nuxt-img
                  :src&#x3D;&quot;image.src&quot;
                  :srcset&#x3D;&quot;image.srcset&quot;
                  alt&#x3D;&quot;&quot;
                  class&#x3D;&quot;rounded&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;swiper-slide&gt;
          &lt;&#x2F;Swiper&gt;

          &lt;!--&#x2F;.swiper-wrapper --&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;div&gt;
  &lt;&#x2F;div&gt;
  &lt;CommonLightbox
    :images&#x3D;&quot;images&quot;
    :activeLightBox&#x3D;&quot;activeLightBox&quot;
    :firstSlideIndex&#x3D;&quot;currentSlideIndex&quot;
    @setActiveLightBox&#x3D;&quot;setActiveLightBox&quot;
  &#x2F;&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
const productImages &#x3D; ref([
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs1.jpg&quot;,
    srcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs1@2x.jpg 2x&quot;,
    link: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs1@2x.jpg&quot;,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs2.jpg&quot;,
    srcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs2@2x.jpg 2x&quot;,
    link: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs2@2x.jpg&quot;,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs3.jpg&quot;,
    srcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs3@2x.jpg 2x&quot;,
    link: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs3@2x.jpg&quot;,
  },
  {
    src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs4.jpg&quot;,
    srcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs4@2x.jpg 2x&quot;,
    link: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;shs4@2x.jpg&quot;,
  },
]);
const images &#x3D; productImages.value.map((elm) &#x3D;&gt; elm.src);
const activeLightBox &#x3D; ref(false);
const currentSlideIndex &#x3D; ref();

const setActiveLightBox &#x3D; (val, i) &#x3D;&gt; {
  currentSlideIndex.value &#x3D; i;
  activeLightBox.value &#x3D; val;
};

import { Swiper, SwiperSlide } from &quot;swiper&#x2F;vue&quot;;
import { Navigation, Thumbs } from &quot;swiper&#x2F;modules&quot;;

const thumbsSwiper &#x3D; ref(null);
const setThumbsSwiper &#x3D; (swiper) &#x3D;&gt; {
  thumbsSwiper.value &#x3D; swiper;
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
    <section id="snippet-5" class="wrapper pt-16 scrollSpysection">
      <h2 class="mb-5">Thumbnail Slider</h2>
      <DocsCarouselSlider5 />

      <!--/.card -->
    </section>
    <section id="instructions" class="wrapper py-16 scrollSpysection">
      <h2 class="mb-5">Instructions</h2>
      <div class="card">
        <div class="card-body">
          <h4>Data Attributes</h4>

          <h4>Alternative styles for controls</h4>
          <p>
            Use the following classes with
            <code class="code">.swiper-container</code> to change navigation
            styles.
          </p>
          <table class="table mb-10">
            <thead class="text-navy">
              <tr>
                <th scope="col" class="col-4">Class</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="ps-0">
                  <code class="code my-0">.swiper-hero</code>
                </td>
                <td>
                  Enables hero slider, ie:
                  <nuxt-link to="/demo15" class="external mt-n1" target="_blank"
                    >Demo 15</nuxt-link
                  >
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <code class="code my-0">.swiper-fullscreen</code>
                </td>
                <td>
                  Enables fullscreen slider, ie:
                  <nuxt-link to="/demo23" class="external mt-n1" target="_blank"
                    >Demo 23</nuxt-link
                  >
                </td>
              </tr>
              <tr>
                <td class="ps-0"><code class="code my-0">.nav-dark</code></td>
                <td>Changes arrow background to dark color.</td>
              </tr>
              <tr>
                <td class="ps-0"><code class="code my-0">.nav-color</code></td>
                <td>Changes arrow background to primary color.</td>
              </tr>
              <tr>
                <td class="ps-0"><code class="code my-0">.nav-bottom</code></td>
                <td>Moves arrows below the slider.</td>
              </tr>
              <tr>
                <td class="ps-0"><code class="code my-0">.nav-start</code></td>
                <td>
                  Moves arrows from center to left. Requires
                  <code class="code mt-n1">.nav-bottom</code>
                </td>
              </tr>
              <tr>
                <td class="ps-0"><code class="code my-0">.dots-light</code></td>
                <td>Changes bullet colors to white.</td>
              </tr>
              <tr>
                <td class="ps-0"><code class="code my-0">.dots-start</code></td>
                <td>Moves bullets from center to left.</td>
              </tr>
              <tr>
                <td class="ps-0"><code class="code my-0">.dots-over</code></td>
                <td>Moves bullets on the slider.</td>
              </tr>
              <tr>
                <td class="ps-0">
                  <code class="code my-0">.dots-closer</code>
                </td>
                <td>Moves bullets closer below the slider.</td>
              </tr>
            </tbody>
          </table>
          <h4>Full examples</h4>
          <nuxt-link to="/docs/blocks/blog" class="external" target="_blank">
            Blog Blocks</nuxt-link
          >
          ,
          <nuxt-link
            to="/docs/blocks/testimonials"
            class="external"
            target="_blank"
          >
            Testimonials Blocks</nuxt-link
          >
          ,
          <nuxt-link
            to="/docs/blocks/portfolio"
            class="external"
            target="_blank"
          >
            Portfolio Blocks</nuxt-link
          >,
          <nuxt-link to="/docs/blocks/clients" class="external" target="_blank"
            >Client Blocks</nuxt-link
          >
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </section>
  </div>
</template>

<script setup>
import Slider1 from "./Slider1.vue";
</script>

<style lang="scss" scoped></style>
