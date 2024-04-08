<template>
  <div class="widget">
    <h4 class="widget-title mb-3">Popular Posts</h4>
    <ul class="image-list">
      <li v-for="(post, index) in additionalPosts" :key="index">
        <figure class="rounded">
          <nuxt-link to="/blog-post"
            ><nuxt-img :src="post.imageSrc" alt="photo"
          /></nuxt-link>
        </figure>
        <div class="post-content">
          <h6 class="mb-2">
            <nuxt-link class="link-dark" to="/blog-post">{{
              post.postTitle
            }}</nuxt-link>
          </h6>
          <ul class="post-meta">
            <li class="post-date">
              <i class="uil uil-calendar-alt"></i
              ><span>{{ post.postDate }}</span>
            </li>
            <li class="post-comments">
              <a href="#"><i class="uil uil-comment"></i>{{ post.comments }}</a>
            </li>
          </ul>
          <!-- /.post-meta -->
        </div>
      </li>
    </ul>
    <!-- /.image-list -->
  </div>
</template>

<script setup>
const additionalPosts = [
  {
    id: 1,
    imageSrc: "/assets/img/photos/a4.jpg",

    postTitle: "Magna Mollis Ultricies",
    postDate: "26 Mar 2022",
    comments: 3,
  },
  {
    id: 2,
    imageSrc: "/assets/img/photos/a5.jpg",

    postTitle: "Ornare Nullam Risus",
    postDate: "16 Feb 2022",
    comments: 6,
  },
  {
    id: 3,
    imageSrc: "/assets/img/photos/a6.jpg",

    postTitle: "Euismod Nullam Fusce",
    postDate: "8 Jan 2022",
    comments: 5,
  },
];
</script>

<style lang="scss" scoped></style>
