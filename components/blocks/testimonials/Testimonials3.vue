<template>
  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-xl-12 gy-10">
        <div class="col-xl-4">
          <h2 class="display-4 mt-10 mb-3">Our Community</h2>
          <p class="lead fs-lg mb-6">
            Customer satisfaction is our major goal. See what our clients are
            saying about our services.
          </p>
          <a href="#" class="btn btn-primary rounded-pill">All Testimonials</a>
        </div>
        <!-- /column -->
        <div class="col-xl-8">
          <div class="position-relative">
            <div
              class="shape rounded-circle bg-soft-yellow rellax w-16 h-16"
              data-rellax-speed="1"
              style="top: -0.7rem; right: -1.7rem"
            ></div>
            <div
              class="shape rounded-circle bg-line red rellax w-16 h-16"
              data-rellax-speed="1"
              style="bottom: -0.5rem; left: -1.4rem"
            ></div>
            <div class="swiper-container dots-closer mb-6">
              <Swiper
                :space-between="1"
                :pagination="{ el: '.spb2', clickable: true }"
                :modules="[Pagination]"
                :grab-cursor="true"
                :breakpoints="{
                  500: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                  1200: { slidesPerView: 2 },
                }"
              >
                <SwiperSlide v-for="(elm, i) in testimonials2" :key="i">
                  <div class="item-inner">
                    <div class="card">
                      <div class="card-body">
                        <blockquote class="icon mb-0">
                          <p>
                            {{ elm.quote }}
                          </p>
                          <div class="blockquote-details">
                            <nuxt-img
                              class="rounded-circle w-12"
                              :src="elm.avatarSrc"
                              alt="photo"
                            />
                            <div class="info">
                              <h5 class="mb-1">{{ elm.name }}</h5>
                              <p class="mb-0">{{ elm.role }}</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      <!--/.card-body -->
                    </div>
                    <!-- /.card -->
                  </div>
                </SwiperSlide>
              </Swiper>
              <div class="swiper-controls">
                <div
                  class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb2"
                ></div>
              </div>

              <!-- /.swiper -->
            </div>
            <!-- /.swiper-container -->
          </div>
          <!-- /.position-relative -->
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
            href="#collapse-snippet-191"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-191"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-3&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-xl-12 gy-10&quot;&gt;
        &lt;div class&#x3D;&quot;col-xl-4&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mt-10 mb-3&quot;&gt;Our Community&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg mb-6&quot;&gt;
            Customer satisfaction is our major goal. See what our clients are
            saying about our services.
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary rounded-pill&quot;&gt;All Testimonials&lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-xl-8&quot;&gt;
          &lt;div class&#x3D;&quot;position-relative&quot;&gt;
            &lt;div
              class&#x3D;&quot;shape rounded-circle bg-soft-yellow rellax w-16 h-16&quot;
              data-rellax-speed&#x3D;&quot;1&quot;
              style&#x3D;&quot;top: -0.7rem; right: -1.7rem&quot;
            &gt;&lt;&#x2F;div&gt;
            &lt;div
              class&#x3D;&quot;shape rounded-circle bg-line red rellax w-16 h-16&quot;
              data-rellax-speed&#x3D;&quot;1&quot;
              style&#x3D;&quot;bottom: -0.5rem; left: -1.4rem&quot;
            &gt;&lt;&#x2F;div&gt;
            &lt;div class&#x3D;&quot;swiper-container dots-closer mb-6&quot;&gt;
              &lt;Swiper
                :space-between&#x3D;&quot;1&quot;
                :pagination&#x3D;&quot;{ el: &#39;.spb2&#39;, clickable: true }&quot;
                :modules&#x3D;&quot;[Pagination]&quot;
                :grab-cursor&#x3D;&quot;true&quot;
                :breakpoints&#x3D;&quot;{
                  500: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                  1200: { slidesPerView: 2 },
                }&quot;
              &gt;
                &lt;SwiperSlide v-for&#x3D;&quot;(elm, i) in testimonials2&quot; :key&#x3D;&quot;i&quot;&gt;
                  &lt;div class&#x3D;&quot;item-inner&quot;&gt;
                    &lt;div class&#x3D;&quot;card&quot;&gt;
                      &lt;div class&#x3D;&quot;card-body&quot;&gt;
                        &lt;blockquote class&#x3D;&quot;icon mb-0&quot;&gt;
                          &lt;p&gt;
                            &lbrace;&lbrace; elm.quote &rbrace;&rbrace;
                          &lt;&#x2F;p&gt;
                          &lt;div class&#x3D;&quot;blockquote-details&quot;&gt;
                            &lt;nuxt-img
                              class&#x3D;&quot;rounded-circle w-12&quot;
                              :src&#x3D;&quot;elm.avatarSrc&quot;
                              alt&#x3D;&quot;&quot;
                            &#x2F;&gt;
                            &lt;div class&#x3D;&quot;info&quot;&gt;
                              &lt;h5 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; elm.name &rbrace;&rbrace;&lt;&#x2F;h5&gt;
                              &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; elm.role &rbrace;&rbrace;&lt;&#x2F;p&gt;
                            &lt;&#x2F;div&gt;
                          &lt;&#x2F;div&gt;
                        &lt;&#x2F;blockquote&gt;
                      &lt;&#x2F;div&gt;
                      &lt;!--&#x2F;.card-body --&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!-- &#x2F;.card --&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;SwiperSlide&gt;
              &lt;&#x2F;Swiper&gt;
              &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
                &lt;div
                  class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb2&quot;
                &gt;&lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;

              &lt;!-- &#x2F;.swiper --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.swiper-container --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.position-relative --&gt;
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
