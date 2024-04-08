<template>
  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          <h2 class="fs-15 text-uppercase text-primary text-center">
            Our News
          </h2>
          <h3 class="display-4 mb-6 text-center">
            Here are the latest company news from our blog that got the most
            attention.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="position-relative">
        <div
          class="shape bg-dot primary rellax w-17 h-20"
          style="top: 0; left: -1.7rem"
        ></div>
        <div class="swiper-container dots-closer blog grid-view mb-6">
          <Swiper
            :space-between="6"
            :pagination="{ el: '.pagi3', clickable: true }"
            :modules="[Pagination]"
            :grab-cursor="true"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }"
          >
            <SwiperSlide v-for="(elm, i) in blogs1" :key="i">
              <div class="item-inner">
                <article>
                  <div class="card">
                    <figure class="card-img-top overlay overlay-1 hover-scale">
                      <nuxt-link to="/blog-post">
                        <nuxt-img :src="elm.imageSrc" alt="photo" />
                        <span class="bg"></span>
                      </nuxt-link>
                      <figcaption>
                        <h5 class="from-top mb-0">
                          <nuxt-link to="/blog-post">Read More</nuxt-link>
                        </h5>
                      </figcaption>
                    </figure>
                    <div class="card-body">
                      <div class="post-header">
                        <div class="post-category text-line">
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
                      <div class="post-content">
                        <p>{{ elm.desc }}</p>
                      </div>
                      <!-- /.post-content -->
                    </div>
                    <!--/.card-body -->
                    <div class="card-footer">
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
                        <li class="post-likes ms-auto">
                          <a href="#"
                            ><i class="uil uil-heart-alt"></i>{{ elm.likes }}</a
                          >
                        </li>
                      </ul>
                      <!-- /.post-meta -->
                    </div>
                    <!-- /.card-footer -->
                  </div>
                  <!-- /.card -->
                </article>
                <!-- /article -->
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-controls">
            <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagi3"
            ></div>
          </div>

          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.position-relative -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-8"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-8"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-3&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-9 col-xl-8 col-xxl-7 mx-auto&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-primary text-center&quot;&gt;
            Our News
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-6 text-center&quot;&gt;
            Here are the latest company news from our blog that got the most
            attention.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;position-relative&quot;&gt;
        &lt;div
          class&#x3D;&quot;shape bg-dot primary rellax w-17 h-20&quot;
          style&#x3D;&quot;top: 0; left: -1.7rem&quot;
        &gt;&lt;&#x2F;div&gt;
        &lt;div class&#x3D;&quot;swiper-container dots-closer blog grid-view mb-6&quot;&gt;
          &lt;Swiper
            :space-between&#x3D;&quot;6&quot;
            :pagination&#x3D;&quot;{ el: &#39;.pagi3&#39;, clickable: true }&quot;
            :modules&#x3D;&quot;[Pagination]&quot;
            :grab-cursor&#x3D;&quot;true&quot;
            :breakpoints&#x3D;&quot;{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }&quot;
          &gt;
            &lt;SwiperSlide v-for&#x3D;&quot;(elm, i) in blogs1&quot; :key&#x3D;&quot;i&quot;&gt;
              &lt;div class&#x3D;&quot;item-inner&quot;&gt;
                &lt;article&gt;
                  &lt;div class&#x3D;&quot;card&quot;&gt;
                    &lt;figure class&#x3D;&quot;card-img-top overlay overlay-1 hover-scale&quot;&gt;
                      &lt;nuxt-link to&#x3D;&quot;&#x2F;blog-post&quot;&gt;
                        &lt;nuxt-img :src&#x3D;&quot;elm.imageSrc&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
                        &lt;span class&#x3D;&quot;bg&quot;&gt;&lt;&#x2F;span&gt;
                      &lt;&#x2F;nuxt-link&gt;
                      &lt;figcaption&gt;
                        &lt;h5 class&#x3D;&quot;from-top mb-0&quot;&gt;Read More&lt;&#x2F;h5&gt;
                      &lt;&#x2F;figcaption&gt;
                    &lt;&#x2F;figure&gt;
                    &lt;div class&#x3D;&quot;card-body&quot;&gt;
                      &lt;div class&#x3D;&quot;post-header&quot;&gt;
                        &lt;div class&#x3D;&quot;post-category text-line&quot;&gt;
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
                      &lt;div class&#x3D;&quot;post-content&quot;&gt;
                        &lt;p&gt;&lbrace;&lbrace; elm.desc &rbrace;&rbrace;&lt;&#x2F;p&gt;
                      &lt;&#x2F;div&gt;
                      &lt;!-- &#x2F;.post-content --&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!--&#x2F;.card-body --&gt;
                    &lt;div class&#x3D;&quot;card-footer&quot;&gt;
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
                        &lt;li class&#x3D;&quot;post-likes ms-auto&quot;&gt;
                          &lt;a href&#x3D;&quot;#&quot;
                            &gt;&lt;i class&#x3D;&quot;uil uil-heart-alt&quot;&gt;&lt;&#x2F;i&gt;&lbrace;&lbrace; elm.likes &rbrace;&rbrace;&lt;&#x2F;a
                          &gt;
                        &lt;&#x2F;li&gt;
                      &lt;&#x2F;ul&gt;
                      &lt;!-- &#x2F;.post-meta --&gt;
                    &lt;&#x2F;div&gt;
                    &lt;!-- &#x2F;.card-footer --&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!-- &#x2F;.card --&gt;
                &lt;&#x2F;article&gt;
                &lt;!-- &#x2F;article --&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;SwiperSlide&gt;
          &lt;&#x2F;Swiper&gt;
          &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
            &lt;div
              class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagi3&quot;
            &gt;&lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;

          &lt;!-- &#x2F;.swiper --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.swiper-container --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.position-relative --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
    
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { blogs1 } from &quot;~&#x2F;data&#x2F;blogs&quot;;
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
</template>

<script setup>
import { blogs1 } from "~/data/blogs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
