<template>
  <section id="snippet-2" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
          <h2 class="fs-15 text-uppercase text-muted mb-3">Latest Projects</h2>
          <h3 class="display-4 mb-10">
            Check out some of our awesome projects with
            <span class="underline-3 style-2 yellow">creative</span> ideas and
            great design.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="swiper-container grid-view mb-6">
        <Swiper
          :space-between="30"
          :pagination="{ el: '.pbutton2', clickable: true }"
          :modules="[Pagination]"
          :grab-cursor="true"
          :breakpoints="{
            500: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }"
        >
          <SwiperSlide v-for="(elm, i) in projects" :key="i">
            <figure class="rounded mb-6">
              <nuxt-img :src="elm.imgSrc" :srcset="elm.imgSrcset" alt="photo" />
              <div
                class="item-link cursor-pointer"
                @click="() => setActiveLightBox(true, i)"
              >
                <i class="uil uil-focus-add"></i>
              </div>
            </figure>
            <div
              class="project-details d-flex justify-content-center flex-column"
            >
              <div class="post-header">
                <h2 class="post-title h3">
                  <nuxt-link to="/single-project" class="link-dark">{{
                    elm.title
                  }}</nuxt-link>
                </h2>
                <div class="post-category text-ash">{{ elm.category }}</div>
              </div>
              <!-- /.post-header -->
            </div></SwiperSlide
          >
        </Swiper>
        <div class="swiper-controls">
          <div
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pbutton2"
          ></div>
        </div>

        <!-- /.swiper -->
      </div>
      <!-- /.swiper-container -->
    </div>

    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-65"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-65"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-2&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;Latest Projects&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-10&quot;&gt;
            Check out some of our awesome projects with
            &lt;span class&#x3D;&quot;underline-3 style-2 yellow&quot;&gt;creative&lt;&#x2F;span&gt; ideas and
            great design.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;swiper-container grid-view mb-6&quot;&gt;
        &lt;Swiper
          :space-between&#x3D;&quot;30&quot;
          :pagination&#x3D;&quot;{ el: &#39;.pbutton2&#39;, clickable: true }&quot;
          :modules&#x3D;&quot;[Pagination]&quot;
          :grab-cursor&#x3D;&quot;true&quot;
          :breakpoints&#x3D;&quot;{
            500: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }&quot;
        &gt;
          &lt;SwiperSlide v-for&#x3D;&quot;(elm, i) in projects&quot; :key&#x3D;&quot;i&quot;&gt;
            &lt;figure class&#x3D;&quot;rounded mb-6&quot;&gt;
              &lt;nuxt-img :src&#x3D;&quot;elm.imgSrc&quot; :srcset&#x3D;&quot;elm.imgSrcset&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
              &lt;div
                class&#x3D;&quot;item-link cursor-pointer&quot;
                @click&#x3D;&quot;() &#x3D;&gt; setActiveLightBox(true, i)&quot;
              &gt;
                &lt;i class&#x3D;&quot;uil uil-focus-add&quot;&gt;&lt;&#x2F;i&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;figure&gt;
            &lt;div
              class&#x3D;&quot;project-details d-flex justify-content-center flex-column&quot;
            &gt;
              &lt;div class&#x3D;&quot;post-header&quot;&gt;
                &lt;h2 class&#x3D;&quot;post-title h3&quot;&gt;
                  &lt;nuxt-link to&#x3D;&quot;&#x2F;single-project&quot; class&#x3D;&quot;link-dark&quot;&gt;&lbrace;&lbrace;
                    elm.title
                  &rbrace;&rbrace;&lt;&#x2F;nuxt-link&gt;
                &lt;&#x2F;h2&gt;
                &lt;div class&#x3D;&quot;post-category text-ash&quot;&gt;&lbrace;&lbrace; elm.category &rbrace;&rbrace;&lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.post-header --&gt;
            &lt;&#x2F;div&gt;&lt;&#x2F;SwiperSlide
          &gt;
        &lt;&#x2F;Swiper&gt;
        &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
          &lt;div
            class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pbutton2&quot;
          &gt;&lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;

        &lt;!-- &#x2F;.swiper --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.swiper-container --&gt;
    &lt;&#x2F;div&gt;

    &lt;!-- &#x2F;.container --&gt;
    
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
  &lt;Lightbox
    :images&#x3D;&quot;images&quot;
    :activeLightBox&#x3D;&quot;activeLightBox&quot;
    :firstSlideIndex&#x3D;&quot;currentSlideIndex&quot;
    @setActiveLightBox&#x3D;&quot;setActiveLightBox&quot;
  &#x2F;&gt;
  &lt;!-- Component for lightbox image slider  from omponents&gt;common&gt;Lightbox --&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { projects } from &quot;~&#x2F;data&#x2F;projects&quot;;
const activeLightBox &#x3D; ref(false);
const currentSlideIndex &#x3D; ref(1);
const images &#x3D; ref([]);
onMounted(() &#x3D;&gt; {
  images.value &#x3D; projects.map((elm) &#x3D;&gt; elm.imgSrc);
});

const setActiveLightBox &#x3D; (val, i) &#x3D;&gt; {
  currentSlideIndex.value &#x3D; i;
  activeLightBox.value &#x3D; val;
};
import Lightbox from &quot;~&#x2F;components&#x2F;common&#x2F;Lightbox.vue&quot;;

import { Swiper, SwiperSlide } from &quot;swiper&#x2F;vue&quot;;
import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;;
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
  <Lightbox
    :images="images"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
  <!-- Component for lightbox image slider  from omponents>common>Lightbox -->
</template>

<script setup>
import { projects } from "~/data/projects";
const activeLightBox = ref(false);
const currentSlideIndex = ref();
const images = ref([]);
onMounted(() => {
  images.value = projects.map((elm) => elm.imgSrc);
});

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};
import Lightbox from "~/components/common/Lightbox.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
