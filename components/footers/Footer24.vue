<template>
  <footer class="bg-dark text-inverse">
    <div class="container py-13 py-md-15">
      <div class="row gy-6 gy-lg-0">
        <div class="col-md-4 col-lg-3">
          <h4 class="widget-title text-white mb-3">Popular Posts</h4>
          <ul class="image-list">
            <li
              v-for="(item, index) in posts"
              :key="index"
              :class="{ 'mt-5': index !== 0 }"
            >
              <figure class="rounded">
                <nuxt-link to="/blog-post"
                  ><nuxt-img :src="item.imageSrc" alt="photo"
                /></nuxt-link>
              </figure>
              <div class="post-content">
                <h6 class="mb-2">
                  <nuxt-link to="/blog-post">{{ item.title }}</nuxt-link>
                </h6>
                <ul class="post-meta">
                  <li class="post-date">
                    <i class="uil uil-calendar-alt"></i
                    ><span>{{ item.date }}</span>
                  </li>
                </ul>
                <!-- /.post-meta -->
              </div>
            </li>
          </ul>
          <!-- /.image-list -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Tags</h4>
            <ul class="list-unstyled tag-list">
              <li v-for="(tag, index) in tags" :key="index">
                <a
                  :href="tag.link"
                  class="btn btn-soft-ash text-white btn-sm rounded-pill"
                  >{{ tag.name }}</a
                >
              </li>
            </ul>
          </div>
          <!-- /.widget -->
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Categories</h4>
            <ul class="unordered-list text-reset bullet-white">
              <li v-for="(category, index) in categories" :key="index">
                <a :href="category.link"
                  >{{ category.name }} ({{ category.count }})</a
                >
              </li>
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Get in Touch</h4>
            <address class="pe-xl-15 pe-xxl-17">
              Moonshine St. 14/05 Light City, London, United Kingdom
            </address>
            <a href="mailto:#">info@email.com</a><br />
            00 (123) 456 78 90
          </div>
          <!-- /.widget -->
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Elsewhere</h4>
            <nav class="nav social social-white">
              <FootersComponentsSocials />
            </nav>
            <!-- /.social -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Learn More</h4>
            <ul class="list-unstyled text-reset mb-0">
              <li v-for="(item, index) in menuItems" :key="index">
                <a :href="item.link">{{ item.title }}</a>
              </li>
            </ul>
          </div>
          <!-- /.widget -->
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Need Help?</h4>
            <ul class="list-unstyled text-reset mb-0">
              <li v-for="(item, index) in menuItems2" :key="index">
                <a :href="item.link">{{ item.title }}</a>
              </li>
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
      </div>
      <!--/.row -->
      <p class="mt-6 mb-0 text-center">
        © {{ new Date().getFullYear() }} Sandbox. All rights reserved.
      </p>
    </div>
    <!-- /.container -->
  </footer>
  <CommonScrolltop />
</template>

<script setup>
const posts = [
  {
    title: "Magna Mollis Ultricies",

    imageSrc: "/assets/img/photos/a4.jpg",
    date: "26 Mar 2022",
  },
  {
    title: "Ornare Nullam Risus",

    imageSrc: "/assets/img/photos/a5.jpg",
    date: "16 Feb 2022",
  },
  {
    title: "Euismod Nullam Fusce",

    imageSrc: "/assets/img/photos/a6.jpg",
    date: "8 Jan 2022",
  },
];
const tags = [
  { name: "Still Life", link: "#" },
  { name: "Urban", link: "#" },
  { name: "Nature", link: "#" },
  { name: "Landscape", link: "#" },
];
const categories = [
  { name: "Lifestyle", count: 21, link: "#" },
  { name: "Photography", count: 19, link: "#" },
  { name: "Journal", count: 16, link: "#" },
];

const menuItems = [
  { title: "About Us", link: "#" },
  { title: "Our Story", link: "#" },
  { title: "Projects", link: "#" },
];

const menuItems2 = [
  { title: "Support", link: "#" },
  { title: "Get Started", link: "#" },
  { title: "Contact Us", link: "#" },
];
</script>

<style lang="scss" scoped></style>
