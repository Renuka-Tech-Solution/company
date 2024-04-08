<template>
  <div class="blog grid grid-view">
    <div class="row isotope gx-md-8 gy-8 mb-8" ref="isotopeContainer">
      <article
        v-for="(elm, i) in morePosts"
        :key="i"
        class="item post col-md-6"
      >
        <div class="card shadow-lg">
          <figure class="card-img-top overlay overlay-1">
            <a href="#">
              <nuxt-img :src="elm.imageSrc" alt="photo" />
              <span class="bg"></span>
            </a>
            <figcaption>
              <h5 class="from-top mb-0">
                <nuxt-link to="/blog-post">Read More</nuxt-link>
              </h5>
            </figcaption>
          </figure>
          <div class="card-body">
            <div class="post-header">
              <div class="post-category">
                <a
                  href="#"
                  :class="`hover ${elm.category.class}`"
                  rel="category"
                  >{{ elm.category.name }}</a
                >
              </div>
              <!-- /.post-category -->
              <h2 class="post-title h3 mt-1 mb-3">
                <nuxt-link to="/blog-post" class="link-navy">{{
                  elm.postTitle
                }}</nuxt-link>
              </h2>
            </div>
            <!-- /.post-header -->
            <div class="post-content">
              <p>
                {{ elm.postContent }}
              </p>
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
                <a href="#"><i class="uil uil-comment"></i>{{ elm.likes }}</a>
              </li>
              <li class="post-likes ms-auto">
                <a href="#"><i class="uil uil-heart-alt"></i>{{ elm.loved }}</a>
              </li>
            </ul>
            <!-- /.post-meta -->
          </div>
          <!-- /.card-footer -->
        </div>
        <!-- /.card -->
      </article>
      <!-- /.post -->

      <!-- /.post -->

      <!-- /.post -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script setup>
import imagesLoaded from "imagesloaded";
const isotopeContainer = ref();
const isotope = ref();
const initIsotop = async () => {
  const Isotope = (await import("isotope-layout")).default;
  // Initialize Isotope in the mounted hook
  isotope.value = new Isotope(isotopeContainer.value, {
    itemSelector: ".item",
    layoutMode: "masonry", // or 'fitRows', depending on your layout needs
  });
  imagesLoaded(isotopeContainer.value).on(
    "progress",
    function (instance, image) {
      // Trigger Isotope layout
      isotope.value.layout();
    }
  );
};
onMounted(() => {
  initIsotop();
});
const morePosts = [
  {
    id: 4,
    imageSrc: "/assets/img/photos/tb10.jpg",
    link: "#",
    category: {
      name: "Roadtrip",
      class: "link-yellow",
    },
    postTitle: "Ligula tristique quis risus",
    postContent: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.
                   Aenean lacinia bibendum nulla sed.`,
    postDate: "14 Apr 2022",
    comments: 4,
    likes: 5,
    loved: 6,
  },
  {
    id: 5,
    imageSrc: "/assets/img/photos/tb11.jpg",
    link: "#",
    category: {
      name: "Historic",
      class: "link-aqua",
    },
    postTitle: "Nullam id dolor elit id nibh",
    postContent: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.
                   Aenean lacinia bibendum nulla sed.`,
    postDate: "29 Mar 2022",
    comments: 3,
    likes: 3,
    loved: 6,
  },
  {
    id: 6,
    imageSrc: "/assets/img/photos/tb12.jpg",
    link: "#",
    category: {
      name: "Cities",
      class: "link-orange",
    },
    postTitle: "Ultricies fusce porta elit",
    postContent: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.
                   Aenean lacinia bibendum nulla sed.`,
    postDate: "26 Feb 2022",
    comments: 6,
    likes: 3,
    loved: 6,
  },
  {
    id: 7,
    imageSrc: "/assets/img/photos/tb13.jpg",
    link: "#",
    category: {
      name: "Beaches",
      class: "link-leaf",
    },
    postTitle: "Morbi leo risus porta eget",
    postContent: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.
                   Aenean lacinia bibendum nulla sed.`,
    postDate: "7 Jan 2022",
    comments: 2,
    likes: 5,
    loved: 6,
  },
];
</script>

<style lang="scss" scoped></style>
