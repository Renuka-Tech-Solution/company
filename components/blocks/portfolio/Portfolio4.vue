<template>
  <section id="snippet-4" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17">
      <div class="row">
        <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
          <h2 class="fs-15 text-uppercase text-muted mb-3">Latest Projects</h2>
          <h3 class="display-4 mb-10">
            Check out some of our awesome projects with creative ideas and great
            design.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="container-fluid px-md-6">
      <div class="swiper-container blog grid-view mb-14 mb-md-16">
        <Swiper
          :space-between="30"
          :pagination="{ el: '.pagi4', clickable: true }"
          :modules="[Pagination, Navigation]"
          :navigation="{
            prevEl: '.snpb1',
            nextEl: '.snnb1',
          }"
          :breakpoints="{
            500: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }"
          :grab-cursor="true"
        >
          <SwiperSlide v-for="(elm, i) in projects3" :key="i">
            <figure class="rounded">
              <nuxt-img :src="elm.image.src" alt="photo" />
            </figure>
          </SwiperSlide>
        </Swiper>

        <div class="swiper-controls">
          <div class="swiper-navigation">
            <div class="swiper-button swiper-button-prev snpb1"></div>
            <div class="swiper-button swiper-button-next snnb1"></div>
          </div>
          <div
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagi4"
          ></div>
        </div>
        <!-- /.swiper -->
      </div>
      <!-- /.swiper-container -->
    </div>
    <!-- /.container-fluid -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-66"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-66"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-4&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;Latest Projects&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-10&quot;&gt;
            Check out some of our awesome projects with creative ideas and great
            design.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
    &lt;div class&#x3D;&quot;container-fluid px-md-6&quot;&gt;
      &lt;div class&#x3D;&quot;swiper-container blog grid-view mb-14 mb-md-16&quot;&gt;
        &lt;Swiper
          :space-between&#x3D;&quot;30&quot;
          :pagination&#x3D;&quot;{ el: &#39;.pagi4&#39;, clickable: true }&quot;
          :modules&#x3D;&quot;[Pagination, Navigation]&quot;
          :navigation&#x3D;&quot;{
            prevEl: &#39;.snpb1&#39;,
            nextEl: &#39;.snnb1&#39;,
          }&quot;
          :breakpoints&#x3D;&quot;{
            500: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }&quot;
          :grab-cursor&#x3D;&quot;true&quot;
        &gt;
          &lt;SwiperSlide v-for&#x3D;&quot;(elm, i) in projects3&quot; :key&#x3D;&quot;i&quot;&gt;
            &lt;figure class&#x3D;&quot;rounded&quot;&gt;
              &lt;nuxt-img :src&#x3D;&quot;elm.image.src&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;SwiperSlide&gt;
        &lt;&#x2F;Swiper&gt;

        &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
          &lt;div class&#x3D;&quot;swiper-navigation&quot;&gt;
            &lt;div class&#x3D;&quot;swiper-button swiper-button-prev snpb1&quot;&gt;&lt;&#x2F;div&gt;
            &lt;div class&#x3D;&quot;swiper-button swiper-button-next snnb1&quot;&gt;&lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lt;div
            class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagi4&quot;
          &gt;&lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.swiper --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.swiper-container --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container-fluid --&gt;
    
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;vue&quot;;
import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;;
import { projects3 } from &quot;~&#x2F;data&#x2F;projects&quot;;
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { projects3 } from "~/data/projects";
</script>

<style lang="scss" scoped></style>
