<template>
  <div class="widget">
    <form @submit.prevent="() => {}" class="search-form">
      <div class="form-floating mb-0">
        <input type="text" class="form-control" placeholder="Search" />
        <label>Search</label>
      </div>
    </form>
    <!-- /.search-form -->
  </div>
  <!-- /.widget -->
  <div class="widget">
    <h4 class="widget-title mb-3">About Us</h4>
    <p>
      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
      ut fermentum. Nulla vitae elit libero, a pharetra augue. Donec id elit non
      mi porta gravida at eget metus.
    </p>
    <nav class="nav social">
      <BlogsCommonSocials />
    </nav>
    <!-- /.social -->
  </div>
  <!-- /.widget -->
  <div class="widget">
    <h4 class="widget-title mb-3">Popular Posts</h4>
    <ul class="image-list">
      <li v-for="(post, index) in posts" :key="index">
        <figure class="rounded">
          <nuxt-link to="/blog-post"
            ><nuxt-img :src="post.image" alt="photo"
          /></nuxt-link>
        </figure>
        <div class="post-content">
          <h6 class="mb-2">
            <nuxt-link to="/blog-post" class="link-dark">{{
              post.title
            }}</nuxt-link>
          </h6>
          <ul class="post-meta">
            <li class="post-date">
              <i class="uil uil-calendar-alt"></i><span>{{ post.date }}</span>
            </li>
            <li class="post-comments">
              <a :href="post.commentsLink"
                ><i class="uil uil-comment"></i>{{ post.comments }}</a
              >
            </li>
          </ul>
          <!-- /.post-meta -->
        </div>
      </li>
    </ul>
    <!-- /.image-list -->
  </div>
  <!-- /.widget -->
  <div class="widget">
    <h4 class="widget-title mb-3">Categories</h4>
    <ul class="unordered-list bullet-primary text-reset">
      <li v-for="(category, index) in categories" :key="index">
        <a :href="category.link">{{ category.name }} ({{ category.count }})</a>
      </li>
    </ul>
  </div>
  <!-- /.widget -->
  <div class="widget">
    <h4 class="widget-title mb-3">Tags</h4>
    <ul class="list-unstyled tag-list">
      <li v-for="(category, index) in tags" :key="index">
        <a :href="category.link" class="btn btn-soft-ash btn-sm rounded-pill">{{
          category.name
        }}</a>
      </li>
    </ul>
  </div>
  <!-- /.widget -->
  <div class="widget">
    <h4 class="widget-title mb-3">Archive</h4>
    <ul class="unordered-list bullet-primary text-reset">
      <li v-for="(month, index) in months" :key="index">
        <a :href="month.link">{{ month.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { posts, categories, tags, months } from "~/data/blogs";
</script>

<style lang="scss" scoped></style>
