<template>
  <section id="snippet-7" class="wrapper bg-light wrapper-border">
    <div class="overflow-hidden">
      <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
        <div class="row">
          <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
            <h2 class="fs-16 text-uppercase text-primary mb-3">
              Latest Projects
            </h2>
            <h3 class="display-3 mb-10">
              Check out some of our awesome projects with creative ideas and
              great design.
            </h3>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <div
          class="swiper-container grid-view nav-bottom nav-color mb-14"
          data-margin="30"
          data-dots="false"
          data-nav="true"
          data-items-md="2"
          data-items-xs="1"
        >
          <Swiper
            :space-between="30"
            :pagination="{ el: '.pbutton10', clickable: true }"
            :modules="[Pagination, Navigation]"
            :navigation="{
              prevEl: '.snpb2',
              nextEl: '.snnb2',
            }"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }"
            class="overflow-visible"
          >
            <SwiperSlide v-for="(slide, i) in projects5" :key="i">
              <figure class="rounded mb-7">
                <nuxt-link to="/single-project3">
                  <nuxt-img :src="slide.image.src" alt="photo" />
                </nuxt-link>
              </figure>
              <div
                class="project-details d-flex justify-content-center flex-column"
              >
                <div class="post-header">
                  <h2 class="post-title h3">
                    <nuxt-link to="/single-project" class="link-dark">{{
                      slide.title
                    }}</nuxt-link>
                  </h2>
                  <div class="post-category text-ash">{{ slide.category }}</div>
                </div>
                <!-- /.post-header -->
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-controls">
            <div class="swiper-navigation">
              <div class="swiper-button swiper-button-prev snpb2"></div>
              <div class="swiper-button swiper-button-next snnb2"></div>
            </div>
          </div>

          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.overflow-hidden -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-172"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-172"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-7&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;overflow-hidden&quot;&gt;
      &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
        &lt;div class&#x3D;&quot;row&quot;&gt;
          &lt;div class&#x3D;&quot;col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center&quot;&gt;
            &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-primary mb-3&quot;&gt;
              Latest Projects
            &lt;&#x2F;h2&gt;
            &lt;h3 class&#x3D;&quot;display-3 mb-10&quot;&gt;
              Check out some of our awesome projects with creative ideas and
              great design.
            &lt;&#x2F;h3&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;column --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.row --&gt;
        &lt;div
          class&#x3D;&quot;swiper-container grid-view nav-bottom nav-color mb-14&quot;
          data-margin&#x3D;&quot;30&quot;
          data-dots&#x3D;&quot;false&quot;
          data-nav&#x3D;&quot;true&quot;
          data-items-md&#x3D;&quot;2&quot;
          data-items-xs&#x3D;&quot;1&quot;
        &gt;
          &lt;Swiper
            :space-between&#x3D;&quot;30&quot;
            :pagination&#x3D;&quot;{ el: &#39;.pbutton10&#39;, clickable: true }&quot;
            :modules&#x3D;&quot;[Pagination, Navigation]&quot;
            :navigation&#x3D;&quot;{
              prevEl: &#39;.snpb2&#39;,
              nextEl: &#39;.snnb2&#39;,
            }&quot;
            :breakpoints&#x3D;&quot;{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }&quot;
            class&#x3D;&quot;overflow-visible&quot;
          &gt;
            &lt;SwiperSlide v-for&#x3D;&quot;(slide, i) in projects5&quot; :key&#x3D;&quot;i&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded mb-7&quot;&gt;
                &lt;nuxt-link to&#x3D;&quot;&#x2F;single-project3&quot;&gt;
                  &lt;nuxt-img :src&#x3D;&quot;slide.image.src&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
                &lt;&#x2F;nuxt-link&gt;
              &lt;&#x2F;figure&gt;
              &lt;div
                class&#x3D;&quot;project-details d-flex justify-content-center flex-column&quot;
              &gt;
                &lt;div class&#x3D;&quot;post-header&quot;&gt;
                  &lt;h2 class&#x3D;&quot;post-title h3&quot;&gt;
                    &lt;nuxt-link to&#x3D;&quot;/single-project&quot; class&#x3D;&quot;link-dark&quot;&gt;&lbrace;&lbrace;
                      slide.title
                    &rbrace;&rbrace;&lt;&#x2F;nuxt-link&gt;
                  &lt;&#x2F;h2&gt;
                  &lt;div class&#x3D;&quot;post-category text-ash&quot;&gt;&lbrace;&lbrace; slide.category &rbrace;&rbrace;&lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;.post-header --&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;SwiperSlide&gt;
          &lt;&#x2F;Swiper&gt;
          &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
            &lt;div class&#x3D;&quot;swiper-navigation&quot;&gt;
              &lt;div class&#x3D;&quot;swiper-button swiper-button-prev snpb2&quot;&gt;&lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;swiper-button swiper-button-next snnb2&quot;&gt;&lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;

          &lt;!-- &#x2F;.swiper --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.swiper-container --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.container --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.overflow-hidden --&gt;
    
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;vue&quot;;
import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;;
import { projects5 } from &quot;~&#x2F;data&#x2F;projects&quot;;
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
import { projects5 } from "~/data/projects";
</script>

<style lang="scss" scoped></style>
