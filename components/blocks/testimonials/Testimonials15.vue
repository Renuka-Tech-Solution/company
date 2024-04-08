<template>
  <section id="snippet-15" class="wrapper bg-light wrapper-border">
    <div
      class="wrapper image-wrapper bg-image bg-overlay mb-12 mb-md-14"
      style="background-image: url(&quot;/assets/img/photos/bg35.jpg&quot;)"
    >
      <div class="container py-15 py-md-17">
        <h2 class="display-5 mb-4 text-center text-white">Happy Customers</h2>
        <div class="swiper-container dots-closer dots-light dots-light-75">
          <Swiper
            :pagination="{ el: '.spb16', clickable: true }"
            :modules="[Pagination]"
            :grab-cursor="true"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }"
          >
            <SwiperSlide v-for="(elm, i) in testimonials2" :key="i">
              <div class="item-inner">
                <div class="card border-0 bg-white-900">
                  <div class="card-body">
                    <span class="ratings five mb-3"></span>
                    <blockquote class="border-0 mb-0">
                      <p>{{ elm.quote }}</p>
                      <div class="blockquote-details">
                        <div class="info p-0">
                          <h5 class="mb-0">{{ elm.name }}</h5>
                          <p class="mb-0">{{ elm.role }}</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <!-- /.card-body -->
                </div>
                <!-- /.card -->
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-controls">
            <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb16"
            ></div>
          </div>

          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-198"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-198"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-15&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div
      class&#x3D;&quot;wrapper image-wrapper bg-image bg-overlay mb-12 mb-md-14&quot;
      style&#x3D;&quot;background-image: url(&amp;quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;bg35.jpg&amp;quot;)&quot;
    &gt;
      &lt;div class&#x3D;&quot;container py-15 py-md-17&quot;&gt;
        &lt;h2 class&#x3D;&quot;display-5 mb-4 text-center text-white&quot;&gt;Happy Customers&lt;&#x2F;h2&gt;
        &lt;div class&#x3D;&quot;swiper-container dots-closer dots-light dots-light-75&quot;&gt;
          &lt;Swiper
            :pagination&#x3D;&quot;{ el: &#39;.spb16&#39;, clickable: true }&quot;
            :modules&#x3D;&quot;[Pagination]&quot;
            :grab-cursor&#x3D;&quot;true&quot;
            :breakpoints&#x3D;&quot;{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }&quot;
          &gt;
            &lt;SwiperSlide v-for&#x3D;&quot;(elm, i) in testimonials2&quot; :key&#x3D;&quot;i&quot;&gt;
              &lt;div class&#x3D;&quot;item-inner&quot;&gt;
                &lt;div class&#x3D;&quot;card border-0 bg-white-900&quot;&gt;
                  &lt;div class&#x3D;&quot;card-body&quot;&gt;
                    &lt;span class&#x3D;&quot;ratings five mb-3&quot;&gt;&lt;&#x2F;span&gt;
                    &lt;blockquote class&#x3D;&quot;border-0 mb-0&quot;&gt;
                      &lt;p&gt;&lbrace;&lbrace; elm.quote &rbrace;&rbrace;&lt;&#x2F;p&gt;
                      &lt;div class&#x3D;&quot;blockquote-details&quot;&gt;
                        &lt;div class&#x3D;&quot;info p-0&quot;&gt;
                          &lt;h5 class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; elm.name &rbrace;&rbrace;&lt;&#x2F;h5&gt;
                          &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; elm.role &rbrace;&rbrace;&lt;&#x2F;p&gt;
                        &lt;&#x2F;div&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;blockquote&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;.card-body --&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;.card --&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;SwiperSlide&gt;
          &lt;&#x2F;Swiper&gt;
          &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
            &lt;div
              class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb16&quot;
            &gt;&lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;

          &lt;!-- &#x2F;.swiper --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.swiper-container --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.container --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.wrapper --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;vue&quot;;
import { Navigation, Pagination } from &quot;swiper&#x2F;modules&quot;;
import { testimonials2 } from &quot;~&#x2F;data&#x2F;testimonials&quot;;
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
import { testimonials2 } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
