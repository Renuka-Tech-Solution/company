<template>
  <div class="blog classic-view mt-n17">
    <article v-for="(post, index) in blogs4" :key="index" class="post">
      <div class="card">
        <template v-if="post?.images?.length === 1">
          <figure class="card-img-top overlay overlay-1 hover-scale">
            <nuxt-link to="/blog-post" class="link-dark">
              <nuxt-img :src="post.images[0]" alt="photo" />
              <span class="bg"></span>
            </nuxt-link>
            <figcaption>
              <h5 class="from-top mb-0">
                <nuxt-link to="/blog-post">Read More</nuxt-link>
              </h5>
            </figcaption>
          </figure>
        </template>
        <template v-else-if="post.video">
          <div class="card-img-top position-relative">
            <div class="player position-relative" style="overflow: visible">
              <CommonVideoPlayer />
            </div>
          </div>
        </template>
        <template v-else>
          <div class="post-slider card-img-top">
            <div class="swiper-container dots-over">
              <Swiper
                :space-between="5"
                :pagination="{ el: '.pagi4', clickable: true }"
                :modules="[Pagination, Navigation]"
                :navigation="{
                  prevEl: '.snpb1',
                  nextEl: '.snnb1',
                }"
                @slides-per-view="1"
                :grab-cursor="true"
              >
                <SwiperSlide v-for="(image, i) in post.images" :key="i">
                  <nuxt-img :src="image" alt="photo" />
                </SwiperSlide>
              </Swiper>

              <div class="swiper-controls">
                <div class="swiper-navigation">
                  <div class="swiper-button swiper-button-prev snpb1"></div>
                  <div class="swiper-button swiper-button-next snnb1"></div>
                </div>
                <div
                  class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagi4"
                ></div>
              </div>
            </div>
          </div>
        </template>
        <div class="card-body">
          <div class="post-header">
            <div class="post-category text-line">
              <a href="#" class="hover" rel="category">{{ post.category }}</a>
            </div>
            <h2 class="post-title mt-1 mb-0">
              <nuxt-link to="/blog-post" class="link-dark">{{
                post.title
              }}</nuxt-link>
            </h2>
          </div>
          <div class="post-content">
            <p>{{ post.content }}</p>
          </div>
        </div>
        <div class="card-footer">
          <ul class="post-meta d-flex mb-0">
            <li class="post-date">
              <i class="uil uil-calendar-alt"></i><span>{{ post.date }}</span>
            </li>
            <li class="post-author">
              <a href="#"
                ><i class="uil uil-user"></i><span>{{ post.author }}</span></a
              >
            </li>
            <li class="post-comments">
              <a href="#"
                ><i class="uil uil-comment"></i>{{ post.comments
                }}<span>Comments</span></a
              >
            </li>
            <li class="post-likes ms-auto">
              <a href="#"><i class="uil uil-heart-alt"></i>{{ post.likes }}</a>
            </li>
          </ul>
        </div>
      </div>
    </article>

    <!-- /.post -->
  </div>
  <!-- /.blog -->
  <div class="blog grid grid-view">
    <div class="row isotope gx-md-8 gy-8 mb-8">
      <article
        v-for="(post, index) in blogs5"
        :key="index"
        :id="'post_' + post.id"
        class="item post col-md-6"
      >
        <div class="card">
          <figure class="card-img-top overlay overlay-1 hover-scale">
            <nuxt-link to="/blog-post">
              <nuxt-img :src="post.image" alt="photo" />
              <span class="bg"></span>
            </nuxt-link>
            <figcaption>
              <h5 class="from-top mb-0">Read More</h5>
            </figcaption>
          </figure>
          <div class="card-body">
            <div class="post-header">
              <div class="post-category text-line">
                <a :href="post.categoryLink" class="hover" rel="category">{{
                  post.category
                }}</a>
              </div>
              <h2 class="post-title h3 mt-1 mb-3">
                <nuxt-link to="/blog-post" class="link-dark">{{
                  post.title
                }}</nuxt-link>
              </h2>
            </div>
            <div class="post-content">
              <p>{{ post.content }}</p>
            </div>
          </div>
          <div class="card-footer">
            <ul class="post-meta d-flex mb-0">
              <li class="post-date">
                <i class="uil uil-calendar-alt"></i><span>{{ post.date }}</span>
              </li>
              <li class="post-comments">
                <a :href="post.commentsLink"
                  ><i class="uil uil-comment"></i>{{ post.comments }}</a
                >
              </li>
              <li class="post-likes ms-auto">
                <a :href="post.likesLink"
                  ><i class="uil uil-heart-alt"></i>{{ post.likes }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </article>
      <!-- /.post -->
    </div>
    <!-- /.row -->
  </div>
  <!-- /.blog -->
  <nav class="d-flex" aria-label="pagination">
    <CommonPagination />
    <!-- /.pagination -->
  </nav>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { blogs4, blogs5 } from "~/data/blogs";
</script>

<style lang="scss" scoped></style>
