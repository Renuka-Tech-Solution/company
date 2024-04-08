<template>
  <section id="snippet-4" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row align-items-center mb-10">
        <div class="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
          <h2 class="display-4 mb-0">
            Company news from our blog that got the most attention.
          </h2>
        </div>
        <!--/column -->
        <div class="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
          <a href="#" class="btn btn-soft-primary rounded-pill mb-0"
            >View All News</a
          >
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-11 gy-10 blog grid-view">
        <div class="col-lg-8">
          <article class="post">
            <div class="post-slider rounded mb-6">
              <div class="swiper-container dots-over">
                <Swiper
                  :space-between="5"
                  :pagination="{ el: '.pagi5', clickable: true }"
                  :modules="[Pagination]"
                  :breakpoints="{
                    500: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                    1200: { slidesPerView: 1 },
                  }"
                >
                  <SwiperSlide v-for="(elm, i) in blogs2" :key="i">
                    <nuxt-img :src="elm.image" alt="photo" />
                  </SwiperSlide>
                </Swiper>
                <div class="swiper-controls">
                  <div
                    class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagi5"
                  ></div>
                </div>

                <!-- /.swiper -->
              </div>
              <!-- /.swiper-container -->
            </div>
            <!-- /.post-slider -->
            <div class="post-header mb-5">
              <div class="post-category text-line">
                <a href="#" class="hover" rel="category">Ideas</a>
              </div>
              <!-- /.post-category -->
              <h2 class="post-title mt-1 mb-4">
                <nuxt-link class="link-dark" to="/blog-post"
                  >Fringilla Ligula Pharetra Amet</nuxt-link
                >
              </h2>
              <ul class="post-meta mb-0">
                <li class="post-date">
                  <i class="uil uil-calendar-alt"></i><span>5 Jul 2022</span>
                </li>
                <li class="post-author">
                  <a href="#"
                    ><i class="uil uil-user"></i><span>By Sandbox</span></a
                  >
                </li>
                <li class="post-comments">
                  <a href="#"
                    ><i class="uil uil-comment"></i>3<span> Comments</span></a
                  >
                </li>
              </ul>
              <!-- /.post-meta -->
            </div>
            <!-- /.post-header -->
            <div class="post-content">
              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel
                augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam
                eget risus varius blandit sit amet non magna. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus dolor auctor.
              </p>
            </div>
            <!-- /.post-content -->
          </article>
          <!-- /.post -->
        </div>
        <!-- /column -->
        <div class="col-lg-4">
          <div class="row gy-10">
            <div
              v-for="(elm, i) in blogs1.slice(0, 2)"
              :key="i"
              class="col-md-6 col-lg-12"
            >
              <article class="post">
                <figure class="overlay overlay-1 hover-scale rounded mb-5">
                  <a href="#"> <nuxt-img :src="elm.imageSrc" alt="photo" /></a>
                  <figcaption>
                    <h5 class="from-top mb-0">
                      <nuxt-link to="/blog-post">Read More</nuxt-link>
                    </h5>
                  </figcaption>
                </figure>
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
                <div class="post-footer">
                  <ul class="post-meta">
                    <li class="post-date">
                      <i class="uil uil-calendar-alt"></i
                      ><span>{{ elm.postDate }}</span>
                    </li>
                    <li class="post-comments">
                      <a href="#"
                        ><i class="uil uil-comment"></i>{{ elm.comments }}</a
                      >
                    </li>
                  </ul>
                  <!-- /.post-meta -->
                </div>
                <!-- /.post-footer -->
              </article>
              <!-- /.post -->
            </div>
            <!-- /column -->

            <!-- /column -->
          </div>
          <!-- /.row -->
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
            href="#collapse-snippet-109"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-109"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-4&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row align-items-center mb-10&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-0&quot;&gt;
            Company news from our blog that got the most attention.
          &lt;&#x2F;h2&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0&quot;&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-soft-primary rounded-pill mb-0&quot;
            &gt;View All News&lt;&#x2F;a
          &gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-11 gy-10 blog grid-view&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-8&quot;&gt;
          &lt;article class&#x3D;&quot;post&quot;&gt;
            &lt;div class&#x3D;&quot;post-slider rounded mb-6&quot;&gt;
              &lt;div class&#x3D;&quot;swiper-container dots-over&quot;&gt;
                &lt;Swiper
                  :space-between&#x3D;&quot;5&quot;
                  :pagination&#x3D;&quot;{ el: &#39;.pagi5&#39;, clickable: true }&quot;
                  :modules&#x3D;&quot;[Pagination]&quot;
                  :breakpoints&#x3D;&quot;{
                    500: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                    1200: { slidesPerView: 1 },
                  }&quot;
                &gt;
                  &lt;SwiperSlide v-for&#x3D;&quot;(elm, i) in blogs2&quot; :key&#x3D;&quot;i&quot;&gt;
                    &lt;nuxt-img :src&#x3D;&quot;elm.image&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
                  &lt;&#x2F;SwiperSlide&gt;
                &lt;&#x2F;Swiper&gt;
                &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
                  &lt;div
                    class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagi5&quot;
                  &gt;&lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;

                &lt;!-- &#x2F;.swiper --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.swiper-container --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.post-slider --&gt;
            &lt;div class&#x3D;&quot;post-header mb-5&quot;&gt;
              &lt;div class&#x3D;&quot;post-category text-line&quot;&gt;
                &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;hover&quot; rel&#x3D;&quot;category&quot;&gt;Ideas&lt;&#x2F;a&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.post-category --&gt;
              &lt;h2 class&#x3D;&quot;post-title mt-1 mb-4&quot;&gt;
                &lt;nuxt-link class&#x3D;&quot;link-dark&quot; to&#x3D;&quot;&#x2F;blog-post&quot;
                  &gt;Fringilla Ligula Pharetra Amet&lt;&#x2F;nuxt-link
                &gt;
              &lt;&#x2F;h2&gt;
              &lt;ul class&#x3D;&quot;post-meta mb-0&quot;&gt;
                &lt;li class&#x3D;&quot;post-date&quot;&gt;
                  &lt;i class&#x3D;&quot;uil uil-calendar-alt&quot;&gt;&lt;&#x2F;i&gt;&lt;span&gt;5 Jul 2022&lt;&#x2F;span&gt;
                &lt;&#x2F;li&gt;
                &lt;li class&#x3D;&quot;post-author&quot;&gt;
                  &lt;a href&#x3D;&quot;#&quot;
                    &gt;&lt;i class&#x3D;&quot;uil uil-user&quot;&gt;&lt;&#x2F;i&gt;&lt;span&gt;By Sandbox&lt;&#x2F;span&gt;&lt;&#x2F;a
                  &gt;
                &lt;&#x2F;li&gt;
                &lt;li class&#x3D;&quot;post-comments&quot;&gt;
                  &lt;a href&#x3D;&quot;#&quot;
                    &gt;&lt;i class&#x3D;&quot;uil uil-comment&quot;&gt;&lt;&#x2F;i&gt;3&lt;span&gt; Comments&lt;&#x2F;span&gt;&lt;&#x2F;a
                  &gt;
                &lt;&#x2F;li&gt;
              &lt;&#x2F;ul&gt;
              &lt;!-- &#x2F;.post-meta --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.post-header --&gt;
            &lt;div class&#x3D;&quot;post-content&quot;&gt;
              &lt;p&gt;
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel
                augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam
                eget risus varius blandit sit amet non magna. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus dolor auctor.
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.post-content --&gt;
          &lt;&#x2F;article&gt;
          &lt;!-- &#x2F;.post --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-4&quot;&gt;
          &lt;div class&#x3D;&quot;row gy-10&quot;&gt;
            &lt;div
              v-for&#x3D;&quot;(elm, i) in blogs1.slice(0, 2)&quot;
              :key&#x3D;&quot;i&quot;
              class&#x3D;&quot;col-md-6 col-lg-12&quot;
            &gt;
              &lt;article class&#x3D;&quot;post&quot;&gt;
                &lt;figure class&#x3D;&quot;overlay overlay-1 hover-scale rounded mb-5&quot;&gt;
                  &lt;a href&#x3D;&quot;#&quot;&gt; &lt;nuxt-img :src&#x3D;&quot;elm.imageSrc&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;&lt;&#x2F;a&gt;
                  &lt;figcaption&gt;
                    &lt;h5 class&#x3D;&quot;from-top mb-0&quot;&gt;Read More&lt;&#x2F;h5&gt;
                  &lt;&#x2F;figcaption&gt;
                &lt;&#x2F;figure&gt;
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
                &lt;div class&#x3D;&quot;post-footer&quot;&gt;
                  &lt;ul class&#x3D;&quot;post-meta&quot;&gt;
                    &lt;li class&#x3D;&quot;post-date&quot;&gt;
                      &lt;i class&#x3D;&quot;uil uil-calendar-alt&quot;&gt;&lt;&#x2F;i
                      &gt;&lt;span&gt;&lbrace;&lbrace; elm.postDate &rbrace;&rbrace;&lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li class&#x3D;&quot;post-comments&quot;&gt;
                      &lt;a href&#x3D;&quot;#&quot;
                        &gt;&lt;i class&#x3D;&quot;uil uil-comment&quot;&gt;&lt;&#x2F;i&gt;&lbrace;&lbrace; elm.comments &rbrace;&rbrace;&lt;&#x2F;a
                      &gt;
                    &lt;&#x2F;li&gt;
                  &lt;&#x2F;ul&gt;
                  &lt;!-- &#x2F;.post-meta --&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;.post-footer --&gt;
              &lt;&#x2F;article&gt;
              &lt;!-- &#x2F;.post --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;

            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.row --&gt;
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
import { blogs1, blogs2 } from &quot;~&#x2F;data&#x2F;blogs&quot;;
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
import { blogs1, blogs2 } from "~/data/blogs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
