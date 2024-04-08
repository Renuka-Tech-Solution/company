<template>
  <section id="snippet-5" class="wrapper bg-light wrapper-border">
    <div class="overflow-hidden">
      <div class="container py-14 py-md-16">
        <div class="row">
          <div class="col-xl-7 col-xxl-6 mx-auto text-center">
            <i class="icn-flower text-primary fs-30 opacity-25"></i>
            <h2 class="display-5 text-center mt-2 mb-10">
              Here are the latest posts from my blog that grabbed the most
              attention.
            </h2>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
        <div class="swiper-container nav-bottom nav-color mb-4">
          <Swiper
            class="mb-4"
            :space-between="30"
            :navigation="{
              prevEl: '.sbp1',
              nextEl: '.sbn1',
            }"
            :modules="[Navigation]"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }"
          >
            <SwiperSlide v-for="(elm, i) in blogs3" :key="i">
              <article>
                <div class="card shadow-lg mb-7">
                  <figure class="card-img-top overlay overlay-1">
                    <nuxt-link to="/blog-post">
                      <nuxt-img :src="elm.imageSrc" alt="photo" />
                      <span class="bg"></span
                    ></nuxt-link>
                    <figcaption>
                      <h5 class="from-top mb-0">
                        <nuxt-link to="/blog-post">Read More</nuxt-link>
                      </h5>
                    </figcaption>
                  </figure>
                  <div class="card-body p-6">
                    <div class="post-header">
                      <div class="post-category">
                        <a href="#" class="hover" rel="category">{{
                          elm.category
                        }}</a>
                      </div>
                      <!-- /.post-category -->
                      <h2 class="post-title h3 mt-1 mb-3">
                        <nuxt-link class="link-dark" to="/blog-post">{{
                          elm.postTitle
                        }}</nuxt-link>
                      </h2>
                    </div>
                    <!-- /.post-header -->
                    <div class="post-footer">
                      <ul class="post-meta d-flex mb-0">
                        <li class="post-date">
                          <i class="uil uil-calendar-alt"></i
                          ><span>{{ elm.postDate }}</span>
                        </li>
                        <li class="post-comments">
                          <a href="#"
                            ><i class="uil uil-comment"></i
                            >{{ elm.comments }}</a
                          >
                        </li>
                      </ul>
                      <!-- /.post-meta -->
                    </div>
                    <!-- /.post-footer -->
                  </div>
                  <!--/.card-body -->
                </div>
                <!-- /.card -->
              </article>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-controls">
            <div class="swiper-navigation">
              <div class="swiper-button swiper-button-prev sbp1"></div>
              <div class="swiper-button swiper-button-next sbn1"></div>
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
            href="#collapse-snippet-9"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-9"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-5&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;overflow-hidden&quot;&gt;
      &lt;div class&#x3D;&quot;container py-14 py-md-16&quot;&gt;
        &lt;div class&#x3D;&quot;row&quot;&gt;
          &lt;div class&#x3D;&quot;col-xl-7 col-xxl-6 mx-auto text-center&quot;&gt;
            &lt;i class&#x3D;&quot;icn-flower text-primary fs-30 opacity-25&quot;&gt;&lt;&#x2F;i&gt;
            &lt;h2 class&#x3D;&quot;display-5 text-center mt-2 mb-10&quot;&gt;
              Here are the latest posts from my blog that grabbed the most
              attention.
            &lt;&#x2F;h2&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;column --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;.row --&gt;
        &lt;div class&#x3D;&quot;swiper-container nav-bottom nav-color mb-4&quot;&gt;
          &lt;Swiper
            class&#x3D;&quot;mb-4&quot;
            :space-between&#x3D;&quot;30&quot;
            :navigation&#x3D;&quot;{
              prevEl: &#39;.sbp1&#39;,
              nextEl: &#39;.sbn1&#39;,
            }&quot;
            :modules&#x3D;&quot;[Navigation]&quot;
            :breakpoints&#x3D;&quot;{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }&quot;
          &gt;
            &lt;SwiperSlide v-for&#x3D;&quot;(elm, i) in blogs3&quot; :key&#x3D;&quot;i&quot;&gt;
              &lt;article&gt;
                &lt;div class&#x3D;&quot;card shadow-lg mb-7&quot;&gt;
                  &lt;figure class&#x3D;&quot;card-img-top overlay overlay-1&quot;&gt;
                    &lt;nuxt-link to&#x3D;&quot;&#x2F;blog-post&quot;&gt;
                      &lt;nuxt-img :src&#x3D;&quot;elm.imageSrc&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
                      &lt;span class&#x3D;&quot;bg&quot;&gt;&lt;&#x2F;span
                    &gt;&lt;&#x2F;nuxt-link&gt;
                    &lt;figcaption&gt;
                      &lt;h5 class&#x3D;&quot;from-top mb-0&quot;&gt;Read More&lt;&#x2F;h5&gt;
                    &lt;&#x2F;figcaption&gt;
                  &lt;&#x2F;figure&gt;
                  &lt;div class&#x3D;&quot;card-body p-6&quot;&gt;
                    &lt;div class&#x3D;&quot;post-header&quot;&gt;
                      &lt;div class&#x3D;&quot;post-category&quot;&gt;
                        &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;hover&quot; rel&#x3D;&quot;category&quot;&gt;&lbrace;&lbrace;
                          elm.category
                        &rbrace;&rbrace;&lt;&#x2F;a&gt;
                      &lt;&#x2F;div&gt;
                      &lt;!-- &#x2F;.post-category --&gt;
                      &lt;h2 class&#x3D;&quot;post-title h3 mt-1 mb-3&quot;&gt;
                        &lt;nuxt-link class&#x3D;&quot;link-dark&quot; to&#x3D;&quot;&#x2F;blog-post&quot;&gt;&lbrace;&lbrace;
                          elm.postTitle
                        &rbrace;&rbrace;&lt;&#x2F;nuxt-link&gt;
                      &lt;&#x2F;h2&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!-- &#x2F;.post-header --&gt;
                    &lt;div class&#x3D;&quot;post-footer&quot;&gt;
                      &lt;ul class&#x3D;&quot;post-meta d-flex mb-0&quot;&gt;
                        &lt;li class&#x3D;&quot;post-date&quot;&gt;
                          &lt;i class&#x3D;&quot;uil uil-calendar-alt&quot;&gt;&lt;&#x2F;i
                          &gt;&lt;span&gt;&lbrace;&lbrace; elm.postDate &rbrace;&rbrace;&lt;&#x2F;span&gt;
                        &lt;&#x2F;li&gt;
                        &lt;li class&#x3D;&quot;post-comments&quot;&gt;
                          &lt;a href&#x3D;&quot;#&quot;
                            &gt;&lt;i class&#x3D;&quot;uil uil-comment&quot;&gt;&lt;&#x2F;i
                            &gt;&lbrace;&lbrace; elm.comments &rbrace;&rbrace;&lt;&#x2F;a
                          &gt;
                        &lt;&#x2F;li&gt;
                      &lt;&#x2F;ul&gt;
                      &lt;!-- &#x2F;.post-meta --&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!-- &#x2F;.post-footer --&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!--&#x2F;.card-body --&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;.card --&gt;
              &lt;&#x2F;article&gt;
            &lt;&#x2F;SwiperSlide&gt;
          &lt;&#x2F;Swiper&gt;
          &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
            &lt;div class&#x3D;&quot;swiper-navigation&quot;&gt;
              &lt;div class&#x3D;&quot;swiper-button swiper-button-prev sbp1&quot;&gt;&lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;swiper-button swiper-button-next sbn1&quot;&gt;&lt;&#x2F;div&gt;
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
import { blogs3 } from &quot;~&#x2F;data&#x2F;blogs&quot;;
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
import { blogs3 } from "~/data/blogs";
</script>

<style lang="scss" scoped></style>
