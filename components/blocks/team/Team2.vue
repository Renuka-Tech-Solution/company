<template>
  <section id="snippet-2" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row mb-3">
        <div class="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
          <nuxt-img
            src="/assets/img/icons/lineal/team.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="photo"
          />
          <h2 class="display-4 mb-3 px-lg-14">
            Save your time and money by choosing our professional team.
          </h2>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="position-relative">
        <div
          class="shape rounded-circle bg-soft-yellow rellax w-16 h-16"
          data-rellax-speed="1"
          style="bottom: 0.5rem; right: -1.7rem"
        ></div>
        <div
          class="shape rounded-circle bg-line red rellax w-16 h-16"
          data-rellax-speed="1"
          style="top: 0.5rem; left: -1.7rem"
        ></div>
        <div class="swiper-container dots-closer mb-6">
          <Swiper
            :space-between="5"
            :pagination="{ el: '.spb1', clickable: true }"
            :modules="[Pagination]"
            :grab-cursor="true"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }"
          >
            <SwiperSlide v-for="(item, i) in teamMembers2" :key="i">
              <div class="item-inner">
                <div class="card">
                  <div class="card-body">
                    <nuxt-img
                      class="rounded-circle w-15 mb-4"
                      :src="item.avatarSrc"
                      alt="photo"
                    />
                    <h4 class="mb-1">{{ item.name }}</h4>
                    <div class="meta mb-2">{{ item.position }}</div>
                    <p class="mb-2">{{ item.description }}</p>
                    <nav class="nav social mb-0">
                      <a
                        v-for="(social, i) in item.socialLinks"
                        :key="i"
                        :href="social.link"
                      >
                        <i :class="social.iconClass"></i>
                      </a>
                    </nav>
                  </div>
                </div></div
            ></SwiperSlide>
          </Swiper>
          <div class="swiper-controls">
            <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb1"
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
            href="#collapse-snippet-189"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-189"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-2&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row mb-3&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-10 col-xl-9 col-xxl-7 mx-auto text-center&quot;&gt;
          &lt;nuxt-img
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;team.svg&quot;
            class&#x3D;&quot; icon-svg icon-svg-md mb-4&quot;
            alt&#x3D;&quot;&quot;
          &#x2F;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-3 px-lg-14&quot;&gt;
            Save your time and money by choosing our professional team.
          &lt;&#x2F;h2&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;position-relative&quot;&gt;
        &lt;div
          class&#x3D;&quot;shape rounded-circle bg-soft-yellow rellax w-16 h-16&quot;
          data-rellax-speed&#x3D;&quot;1&quot;
          style&#x3D;&quot;bottom: 0.5rem; right: -1.7rem&quot;
        &gt;&lt;&#x2F;div&gt;
        &lt;div
          class&#x3D;&quot;shape rounded-circle bg-line red rellax w-16 h-16&quot;
          data-rellax-speed&#x3D;&quot;1&quot;
          style&#x3D;&quot;top: 0.5rem; left: -1.7rem&quot;
        &gt;&lt;&#x2F;div&gt;
        &lt;div class&#x3D;&quot;swiper-container dots-closer mb-6&quot;&gt;
          &lt;Swiper
            :space-between&#x3D;&quot;5&quot;
            :pagination&#x3D;&quot;{ el: &#39;.spb1&#39;, clickable: true }&quot;
            :modules&#x3D;&quot;[Pagination]&quot;
            :grab-cursor&#x3D;&quot;true&quot;
            :breakpoints&#x3D;&quot;{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }&quot;
          &gt;
            &lt;SwiperSlide v-for&#x3D;&quot;(item, i) in teamMembers2&quot; :key&#x3D;&quot;i&quot;&gt;
              &lt;div class&#x3D;&quot;item-inner&quot;&gt;
                &lt;div class&#x3D;&quot;card&quot;&gt;
                  &lt;div class&#x3D;&quot;card-body&quot;&gt;
                    &lt;nuxt-img
                      class&#x3D;&quot;rounded-circle w-15 mb-4&quot;
                      :src&#x3D;&quot;item.avatarSrc&quot;
                      alt&#x3D;&quot;&quot;
                    &#x2F;&gt;
                    &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.name &rbrace;&rbrace;&lt;&#x2F;h4&gt;
                    &lt;div class&#x3D;&quot;meta mb-2&quot;&gt;&lbrace;&lbrace; item.position &rbrace;&rbrace;&lt;&#x2F;div&gt;
                    &lt;p class&#x3D;&quot;mb-2&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
                    &lt;nav class&#x3D;&quot;nav social mb-0&quot;&gt;
                      &lt;a
                        v-for&#x3D;&quot;(social, i) in item.socialLinks&quot;
                        :key&#x3D;&quot;i&quot;
                        :href&#x3D;&quot;social.link&quot;
                      &gt;
                        &lt;i :class&#x3D;&quot;social.iconClass&quot;&gt;&lt;&#x2F;i&gt;
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;nav&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;div&gt;&lt;&#x2F;div
            &gt;&lt;&#x2F;SwiperSlide&gt;
          &lt;&#x2F;Swiper&gt;
          &lt;div class&#x3D;&quot;swiper-controls&quot;&gt;
            &lt;div
              class&#x3D;&quot;swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb1&quot;
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
import { teamMembers2 } from &quot;~&#x2F;data&#x2F;team&quot;;
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
import { teamMembers2 } from "~/data/team";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
