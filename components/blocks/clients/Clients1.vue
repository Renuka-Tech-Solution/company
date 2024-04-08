<template>
  <section id="snippet-1" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <p class="text-center mb-8">
        Trusted by over 2K+ clients across the world
      </p>
      <div class="swiper-container clients mb-0">
        <Swiper
          :space-between="30"
          :modules="[Autoplay]"
          :autoplay="true"
          :grab-cursor="true"
          :on-autoplay-time-left="1"
          :loop="true"
          :speed="400"
          :breakpoints="{
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
            1500: { slidesPerView: 7 },
          }"
        >
          <SwiperSlide v-for="(elm, i) in clients1" :key="i">
            <div class="swiper-slide px-5">
              <nuxt-img :src="elm.src" alt="photo" />
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- /.swiper -->
      </div>
      <!-- /.swiper-container -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-14"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-14"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-1&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;p class&#x3D;&quot;text-center mb-8&quot;&gt;
        Trusted by over 2K+ clients across the world
      &lt;&#x2F;p&gt;
      &lt;div class&#x3D;&quot;swiper-container clients mb-0&quot;&gt;
        &lt;Swiper
          :space-between&#x3D;&quot;30&quot;
          :modules&#x3D;&quot;[Autoplay]&quot;
          :autoplay&#x3D;&quot;true&quot;
          :grab-cursor&#x3D;&quot;true&quot;
          :on-autoplay-time-left&#x3D;&quot;1&quot;
          :loop&#x3D;&quot;true&quot;
          :speed&#x3D;&quot;400&quot;
          :breakpoints&#x3D;&quot;{
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
            1500: { slidesPerView: 7 },
          }&quot;
        &gt;
          &lt;SwiperSlide v-for&#x3D;&quot;(elm, i) in clients1&quot; :key&#x3D;&quot;i&quot;&gt;
            &lt;div class&#x3D;&quot;swiper-slide px-5&quot;&gt;
              &lt;nuxt-img :src&#x3D;&quot;elm.src&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;SwiperSlide&gt;
        &lt;&#x2F;Swiper&gt;

        &lt;!-- &#x2F;.swiper --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.swiper-container --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { Swiper, SwiperSlide } from &quot;swiper&#x2F;vue&quot;;
import { Navigation, Pagination, Autoplay } from &quot;swiper&#x2F;modules&quot;;
import { clients1 } from &quot;~&#x2F;data&#x2F;clients&quot;;
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
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { clients1 } from "~/data/clients";
</script>

<style lang="scss" scoped></style>
