<template>
  <div class="blog classic-view">
    <article v-for="(elm, i) in posts" :key="i" class="post">
      <div class="card shadow-lg">
        <figure v-if="elm.imageSrc" class="card-img-top overlay overlay-1">
          <nuxt-link href="/blog-post"
            ><nuxt-img :src="elm.imageSrc" alt="photo" />

            <span class="bg"></span>
          </nuxt-link>
          <figcaption>
            <h5 class="from-top mb-0">
              <nuxt-link to="/blog-post">Read More</nuxt-link>
            </h5>
          </figcaption>
        </figure>
        <div v-if="elm.videoEmbedId" class="card-img-top">
          <div
            class="player"
            data-plyr-provider="youtube"
            data-plyr-embed-id="hxeITyt_XfU"
          ></div>
        </div>
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
            <h2 class="post-title mt-1 mb-0">
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
            <li class="post-author">
              <a href="#"
                ><i class="uil uil-user"></i><span>By {{ elm.author }}</span></a
              >
            </li>
            <li class="post-comments">
              <a href="#"
                ><i class="uil uil-comment"></i>{{ elm.comments
                }}<span> Comments</span></a
              >
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
</template>

<script setup>
const posts = [
  {
    id: 1,
    imageSrc: "/assets/img/photos/tb8.jpg",

    category: {
      name: "Architecture",
      class: "link-grape",
    },
    postTitle: "Amet Dolor Bibendum Parturient Cursus",
    postContent: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                   Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
                   Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
                   Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                   tortor mauris condimentum nibh. Cras mattis consectetur purus.`,
    postDate: "5 Jul 2022",
    author: "Sandbox",
    comments: 3,
    likes: 3,
    loved: 3,
  },
  {
    id: 2,
    imageSrc: "/assets/img/photos/tb9.jpg",

    category: {
      name: "Restaurants",
      class: "link-fuchsia",
    },
    postTitle: "Fringilla Ligula Pharetra Amet",
    postContent: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                   Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
                   Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
                   Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                   tortor mauris condimentum nibh. Cras mattis consectetur purus.`,
    postDate: "25 Jun 2022",
    author: "Sandbox",
    comments: 5,
    likes: 4,
    loved: 5,
  },
  {
    id: 3,
    videoEmbedId: "hxeITyt_XfU",
    category: {
      name: "Nature",
      class: "link-sky",
    },
    postTitle: "Consectetur Bibendum Sollicitudin Vulputate",
    postContent: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                   Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
                   Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
                   Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                   tortor mauris condimentum nibh. Cras mattis consectetur purus.`,
    postDate: "18 May 2022",
    author: "Sandbox",
    comments: 8,
    likes: 6,
    loved: 7,
  },
];
</script>

<style lang="scss" scoped></style>
