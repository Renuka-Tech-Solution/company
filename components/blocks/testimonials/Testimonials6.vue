<template>
  <section id="snippet-6" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-6 align-items-center">
        <div class="col-lg-7 position-relative">
          <div
            class="shape bg-dot primary rellax w-18 h-18"
            data-rellax-speed="1"
            style="top: 0; left: -1.4rem; z-index: 0"
          ></div>
          <div class="row gx-md-5 gy-5">
            <div class="col-md-6">
              <figure class="rounded mt-md-10 position-relative">
                <nuxt-img
                  src="/assets/img/photos/g5.jpg"
                  srcset="/assets/img/photos/g5@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6">
              <div class="row gx-md-5 gy-5">
                <div class="col-md-12 order-md-2">
                  <figure class="rounded">
                    <nuxt-img
                      src="/assets/img/photos/g6.jpg"
                      srcset="/assets/img/photos/g6@2x.jpg 2x"
                      alt="photo"
                    />
                  </figure>
                </div>
                <!--/column -->
                <div class="col-md-10">
                  <div class="card bg-pale-primary text-center">
                    <div class="card-body py-11 counter-wrapper">
                      <h3 class="counter text-nowrap">
                        <CommonCounter
                          parentClass=""
                          :min="20"
                          :max="5000"
                          :time="1500"
                        />
                        <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                        +
                      </h3>
                      <p class="mb-0">Satisfied Customers</p>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.card -->
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-5 mt-5">
          <div
            class="swiper-container dots-closer mb-6"
            data-margin="30"
            data-dots="true"
          >
            <Swiper
              :space-between="30"
              :pagination="{ el: '.spb8', clickable: true }"
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
                class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb8"
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
            href="#collapse-snippet-85"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-85"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-6&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-6 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7 position-relative&quot;&gt;
          &lt;div
            class&#x3D;&quot;shape bg-dot primary rellax w-18 h-18&quot;
            data-rellax-speed&#x3D;&quot;1&quot;
            style&#x3D;&quot;top: 0; left: -1.4rem; z-index: 0&quot;
          &gt;&lt;&#x2F;div&gt;
          &lt;div class&#x3D;&quot;row gx-md-5 gy-5&quot;&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded mt-md-10 position-relative&quot;&gt;
                &lt;nuxt-img
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g5.jpg&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g5@2x.jpg 2x&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;div class&#x3D;&quot;row gx-md-5 gy-5&quot;&gt;
                &lt;div class&#x3D;&quot;col-md-12 order-md-2&quot;&gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-img
                      src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g6.jpg&quot;
                      srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;g6@2x.jpg 2x&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                  &lt;&#x2F;figure&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;column --&gt;
                &lt;div class&#x3D;&quot;col-md-10&quot;&gt;
                  &lt;div class&#x3D;&quot;card bg-pale-primary text-center&quot;&gt;
                    &lt;div class&#x3D;&quot;card-body py-11 counter-wrapper&quot;&gt;
                      &lt;h3 class&#x3D;&quot;counter text-nowrap&quot;&gt;
                        &lt;CommonCounter
                          parentClass&#x3D;&quot;&quot;
                          :min&#x3D;&quot;20&quot;
                          :max&#x3D;&quot;5000&quot;
                          :time&#x3D;&quot;1500&quot;
                        &#x2F;&gt;
                        &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
                        +
                      &lt;&#x2F;h3&gt;
                      &lt;p class&#x3D;&quot;mb-0&quot;&gt;Satisfied Customers&lt;&#x2F;p&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!--&#x2F;.card-body --&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!--&#x2F;.card --&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;column --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.row --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5 mt-5&quot;&gt;
          &lt;div
            class&#x3D;&quot;swiper-container dots-closer mb-6&quot;
            data-margin&#x3D;&quot;30&quot;
            data-dots&#x3D;&quot;true&quot;
          &gt;
            &lt;Swiper
              :space-between&#x3D;&quot;30&quot;
              :pagination&#x3D;&quot;{ el: &#39;.spb8&#39;, clickable: true }&quot;
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
                class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb8&quot;
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
