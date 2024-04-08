<template>
  <section id="snippet-14" class="wrapper bg-light">
    <div
      class="wrapper image-wrapper bg-image bg-overlay text-white mb-12 mb-md-14"
      style="background-image: url(&quot;/assets/img/photos/bg32.jpg&quot;)"
    >
      <div class="container py-14 py-md-16 text-center">
        <i class="icn-flower text-white fs-30 opacity-50"></i>
        <div class="row mt-3">
          <div class="col-xl-9 col-xxl-8 mx-auto">
            <div
              class="swiper-container dots-light dots-closer mb-6"
              data-margin="30"
              data-dots="true"
            >
              <Swiper
                :space-between="30"
                :pagination="{ el: '.spb14', clickable: true }"
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
                  <blockquote class="border-0 fs-24 mb-0">
                    <p>
                      {{ elm.quote }}
                    </p>
                    <div class="blockquote-details justify-content-center">
                      <div class="info p-0">
                        <h6 class="mb-0 text-white">{{ elm.name }}</h6>
                      </div>
                    </div>
                  </blockquote>
                </SwiperSlide>
              </Swiper>
              <div class="swiper-controls">
                <div
                  class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb14"
                ></div>
              </div>

              <!--/.swiper -->
            </div>
            <!-- /.swiper-container -->
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /section -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-90"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-90"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-14&quot; class&#x3D;&quot;wrapper bg-light&quot;&gt;
    &lt;div
      class&#x3D;&quot;wrapper image-wrapper bg-image bg-overlay text-white mb-12 mb-md-14&quot;
      style&#x3D;&quot;background-image: url(&amp;quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg32.jpg&amp;quot;)&quot;
    &gt;
      &lt;div class&#x3D;&quot;container py-14 py-md-16 text-center&quot;&gt;
        &lt;i class&#x3D;&quot;icn-flower text-white fs-30 opacity-50&quot;&gt;&lt;&#x2F;i&gt;
        &lt;div class&#x3D;&quot;row mt-3&quot;&gt;
          &lt;div class&#x3D;&quot;col-xl-9 col-xxl-8 mx-auto&quot;&gt;
            &lt;div
              class&#x3D;&quot;swiper-container dots-light dots-closer mb-6&quot;
              data-margin&#x3D;&quot;30&quot;
              data-dots&#x3D;&quot;true&quot;
            &gt;
              &lt;Swiper
                :space-between&#x3D;&quot;30&quot;
                :pagination&#x3D;&quot;{ el: &#39;.spb14&#39;, clickable: true }&quot;
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
                  &lt;blockquote class&#x3D;&quot;border-0 fs-24 mb-0&quot;&gt;
                    &lt;p&gt;
                      &lbrace;&lbrace; elm.quote &rbrace;&rbrace;
                    &lt;&#x2F;p&gt;
                    &lt;div class&#x3D;&quot;blockquote-details justify-content-center&quot;&gt;
                      &lt;div class&#x3D;&quot;info p-0&quot;&gt;
                        &lt;h6 class&#x3D;&quot;mb-0 text-white&quot;&gt;&lbrace;&lbrace; elm.name &rbrace;&rbrace;&lt;&#x2F;h6&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;blockquote&gt;
                &lt;&#x2F;SwiperSlide&gt;
              &lt;&#x2F;Swiper&gt;
              &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
                &lt;div
                  class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb14&quot;
                &gt;&lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;

              &lt;!--&#x2F;.swiper --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.swiper-container --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;column --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.row --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.container --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;section --&gt;
   
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
