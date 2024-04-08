<template>
  <section id="snippet-4" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-6 align-items-center">
        <div class="col-lg-7 order-lg-2">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/i4.png"
              srcset="/assets/img/illustrations/i4@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5 mt-12">
          <div class="swiper-container dots-closer mb-6">
            <Swiper
              :pagination="{ el: '.spb6', clickable: true }"
              :modules="[Pagination]"
              :grab-cursor="true"
              :breakpoints="{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1200: { slidesPerView: 1 },
              }"
            >
              <SwiperSlide v-for="(elm, i) in testimonials3" :key="i">
                <blockquote class="icon icon-top fs-lg text-center">
                  <p>
                    {{ elm.quote }}
                  </p>
                  <div
                    class="blockquote-details justify-content-center text-center"
                  >
                    <div class="info ps-0">
                      <h5 class="mb-1">{{ elm.name }}</h5>
                      <p class="mb-0">{{ elm.role }}</p>
                    </div>
                  </div>
                </blockquote></SwiperSlide
              >
            </Swiper>
            <div class="swiper-controls">
              <div
                class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb6"
              ></div>
            </div>

            <!-- /.swiper -->
          </div>
          <!-- /.swiper-container -->
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
            href="#collapse-snippet-84"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-84"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-4&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-6 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7 order-lg-2&quot;&gt;
          &lt;figure&gt;
            &lt;nuxt-img
              class&#x3D;&quot;w-auto&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i4.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i4@2x.png 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5 mt-12&quot;&gt;
          &lt;div class&#x3D;&quot;swiper-container dots-closer mb-6&quot;&gt;
            &lt;Swiper
              :pagination&#x3D;&quot;{ el: &#39;.spb6&#39;, clickable: true }&quot;
              :modules&#x3D;&quot;[Pagination]&quot;
              :grab-cursor&#x3D;&quot;true&quot;
              :breakpoints&#x3D;&quot;{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1200: { slidesPerView: 1 },
              }&quot;
            &gt;
              &lt;SwiperSlide v-for&#x3D;&quot;(elm, i) in testimonials3&quot; :key&#x3D;&quot;i&quot;&gt;
                &lt;blockquote class&#x3D;&quot;icon icon-top fs-lg text-center&quot;&gt;
                  &lt;p&gt;
                    &lbrace;&lbrace; elm.quote &rbrace;&rbrace;
                  &lt;&#x2F;p&gt;
                  &lt;div
                    class&#x3D;&quot;blockquote-details justify-content-center text-center&quot;
                  &gt;
                    &lt;div class&#x3D;&quot;info ps-0&quot;&gt;
                      &lt;h5 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; elm.name &rbrace;&rbrace;&lt;&#x2F;h5&gt;
                      &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; elm.role &rbrace;&rbrace;&lt;&#x2F;p&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;blockquote&gt;&lt;&#x2F;SwiperSlide
              &gt;
            &lt;&#x2F;Swiper&gt;
            &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
              &lt;div
                class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb6&quot;
              &gt;&lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;

            &lt;!-- &#x2F;.swiper --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.swiper-container --&gt;
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
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;vue&quot;;
import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;;
import { testimonials3 } from &quot;~&#x2F;data&#x2F;testimonials&quot;;
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
import { testimonials3 } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
