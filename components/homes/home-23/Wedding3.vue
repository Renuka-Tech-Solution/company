<template>
  <section class="wrapper bg-soft-primary">
    <div class="overflow-hidden">
      <div class="container py-14 py-md-16">
        <div class="row">
          <div class="col-xl-7 col-xxl-6 mx-auto text-center">
            <i class="icn-flower text-leaf fs-30 opacity-25"></i>
            <h2 class="display-5 text-center mt-2 mb-10">
              Here are the latest posts from my blog that grabbed the most
              attention.
            </h2>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
        <div class="swiper-container nav-bottom nav-color mb-14">
          <Swiper
            class="swiper overflow-visible pb-1"
            :space-between="30"
            :navigation="{
              prevEl: '.sbp33',
              nextEl: '.sbn33',
            }"
            :modules="[Navigation]"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }"
          >
            <SwiperSlide v-for="(post, i) in posts" :key="i">
              <article>
                <div class="card shadow-lg">
                  <figure class="card-img-top overlay overlay-1">
                    <a :href="post.link">
                      <nuxt-img
                        :src="post.imageSrc"
                        :srcset="`${post.imageSrc} 2x`"
                        alt="photo"
                      />
                      <span class="bg"></span>
                    </a>
                    <figcaption>
                      <h5 class="from-top mb-0">
                        <nuxt-link to="/blog-post">Read More</nuxt-link>
                      </h5>
                    </figcaption>
                  </figure>
                  <div class="card-body p-6">
                    <div class="post-header">
                      <div class="post-category">
                        <a
                          :href="post.categoryLink"
                          class="hover"
                          rel="category"
                          >{{ post.category }}</a
                        >
                      </div>
                      <!-- /.post-category -->
                      <h2 class="post-title h3 mt-1 mb-3">
                        <nuxt-link to="/blog-post" class="link-dark">{{
                          post.title
                        }}</nuxt-link>
                      </h2>
                    </div>
                    <!-- /.post-header -->
                    <div class="post-footer">
                      <ul class="post-meta d-flex mb-0">
                        <li class="post-date">
                          <i class="uil uil-calendar-alt"></i
                          ><span>{{ post.date }}</span>
                        </li>
                        <li class="post-comments">
                          <a :href="post.commentsLink"
                            ><i class="uil uil-comment"></i
                            >{{ post.comments }}</a
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
              <div class="swiper-button swiper-button-prev sbp33"></div>
              <div class="swiper-button swiper-button-next sbn33"></div>
            </div>
          </div>

          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.overflow-hidden -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
const posts = ref([
  {
    link: "#",
    imageSrc: "/assets/img/photos/b12.jpg",
    category: "Wedding",
    categoryLink: "#",
    title: "Ligula tristique quis risus",

    date: "14 Apr 2022",
    comments: 4,
    commentsLink: "#",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/b13.jpg",
    category: "Engagement",
    categoryLink: "#",
    title: "Nullam id dolor elit id nibh",

    date: "29 Mar 2022",
    comments: 3,
    commentsLink: "#",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/b14.jpg",
    category: "Couples",
    categoryLink: "#",
    title: "Ultricies fusce porta elit",

    date: "26 Feb 2022",
    comments: 6,
    commentsLink: "#",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/b15.jpg",
    category: "Engagement",
    categoryLink: "#",
    title: "Morbi leo risus porta eget",

    date: "17 Jan 2022",
    comments: 3,
    commentsLink: "#",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/b16.jpg",
    category: "Couples",
    categoryLink: "#",
    title: "Nulla vitae elit libero",

    date: "7 Jan 2022",
    comments: 1,
    commentsLink: "#",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/b17.jpg",
    category: "Wedding",
    categoryLink: "#",
    title: "Pharetra augue elit sem",

    date: "2 Jan 2022",
    comments: 2,
    commentsLink: "#",
  },
]);
</script>

<style lang="scss" scoped></style>
