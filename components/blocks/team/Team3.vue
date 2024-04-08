<template>
  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-4">
          <h2
            class="fs-15 text-uppercase text-line text-primary text-center mb-3"
          >
            Meet the Team
          </h2>
          <h3 class="display-5 mb-5">
            Save your time and money by choosing our professional team.
          </h3>
          <p>
            Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros tempus porttitor.
          </p>
          <a href="#" class="btn btn-primary rounded-pill mt-3"
            >See All Members</a
          >
        </div>
        <!--/column -->
        <div class="col-lg-8">
          <div
            class="swiper-container text-center mb-6"
            data-margin="30"
            data-dots="true"
            data-items-xl="3"
            data-items-md="2"
            data-items-xs="1"
          >
            <Swiper
              :space-between="30"
              :pagination="{ el: '.spb2', clickable: true }"
              :modules="[Pagination]"
              :grab-cursor="true"
              :breakpoints="{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
              }"
            >
              <SwiperSlide v-for="(elm, i) in teamMembers3" :key="i">
                <nuxt-img
                  class="rounded-circle w-20 mx-auto mb-4"
                  :src="elm.avatarSrc"
                  alt="photo"
                />
                <h4 class="mb-1">{{ elm.name }}</h4>
                <div class="meta mb-2">{{ elm.position }}</div>
                <p class="mb-2">{{ elm.description }}</p>
                <nav class="nav social justify-content-center text-center mb-0">
                  <a
                    v-for="(elm2, i2) in elm.socialLinks"
                    :key="i2"
                    :href="elm2.link"
                    ><i :class="elm2.iconClass"></i
                  ></a>
                </nav>
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
            href="#collapse-snippet-81"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-81"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-3&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-4&quot;&gt;
          &lt;h2
            class&#x3D;&quot;fs-15 text-uppercase text-line text-primary text-center mb-3&quot;
          &gt;
            Meet the Team
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-5 mb-5&quot;&gt;
            Save your time and money by choosing our professional team.
          &lt;&#x2F;h3&gt;
          &lt;p&gt;
            Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros tempus porttitor.
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary rounded-pill mt-3&quot;
            &gt;See All Members&lt;&#x2F;a
          &gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-8&quot;&gt;
          &lt;div
            class&#x3D;&quot;swiper-container text-center mb-6&quot;
            data-margin&#x3D;&quot;30&quot;
            data-dots&#x3D;&quot;true&quot;
            data-items-xl&#x3D;&quot;3&quot;
            data-items-md&#x3D;&quot;2&quot;
            data-items-xs&#x3D;&quot;1&quot;
          &gt;
            &lt;Swiper
              :space-between&#x3D;&quot;30&quot;
              :pagination&#x3D;&quot;{ el: &#39;.spb2&#39;, clickable: true }&quot;
              :modules&#x3D;&quot;[Pagination]&quot;
              :grab-cursor&#x3D;&quot;true&quot;
              :breakpoints&#x3D;&quot;{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
              }&quot;
            &gt;
              &lt;SwiperSlide v-for&#x3D;&quot;(elm, i) in teamMembers3&quot; :key&#x3D;&quot;i&quot;&gt;
                &lt;nuxt-img
                  class&#x3D;&quot;rounded-circle w-20 mx-auto mb-4&quot;
                  :src&#x3D;&quot;elm.avatarSrc&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
                &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; elm.name &rbrace;&rbrace;&lt;&#x2F;h4&gt;
                &lt;div class&#x3D;&quot;meta mb-2&quot;&gt;&lbrace;&lbrace; elm.position &rbrace;&rbrace;&lt;&#x2F;div&gt;
                &lt;p class&#x3D;&quot;mb-2&quot;&gt;&lbrace;&lbrace; elm.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
                &lt;nav class&#x3D;&quot;nav social justify-content-center text-center mb-0&quot;&gt;
                  &lt;a
                    v-for&#x3D;&quot;(elm2, i2) in elm.socialLinks&quot;
                    :key&#x3D;&quot;i2&quot;
                    :href&#x3D;&quot;elm2.link&quot;
                    &gt;&lt;i :class&#x3D;&quot;elm2.iconClass&quot;&gt;&lt;&#x2F;i
                  &gt;&lt;&#x2F;a&gt;
                &lt;&#x2F;nav&gt;
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
import { teamMembers3 } from &quot;~&#x2F;data&#x2F;team&quot;;
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
import { teamMembers3 } from "~/data/team";
</script>

<style lang="scss" scoped></style>
