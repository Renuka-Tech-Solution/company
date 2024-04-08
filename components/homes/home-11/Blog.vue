<template>
  <div class="row text-center">
    <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
      <h2 class="fs-15 text-uppercase text-primary mb-3">Case Studies</h2>
      <h3 class="display-4 mb-6">
        Check out some of our awesome projects with creative ideas and great
        design.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="position-relative">
    <div
      class="shape bg-dot primary rellax w-17 h-20"
      data-rellax-speed="1"
      style="top: 0; left: -1.7rem"
    ></div>
    <div class="swiper-container dots-closer blog grid-view mb-6">
      <Swiper
        :space-between="0"
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
                        ><i class="uil uil-comment"></i>{{ elm.comments }}</a
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
      <!--/.swiper -->
    </div>
    <!-- /.swiper-container -->
  </div>
</template>

<script setup>
import { blogs1 } from "~/data/blogs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
