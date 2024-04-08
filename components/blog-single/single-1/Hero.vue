<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
      <div class="row">
        <div class="col-md-10 col-xl-8 mx-auto">
          <div class="post-header">
            <div class="post-category text-line">
              <a href="#" class="hover" rel="category">Teamwork</a>
            </div>
            <!-- /.post-category -->
            <h1 class="display-1 mb-4">
              Commodo Dolor Bibendum Parturient Cursus Mollis
            </h1>
            <ul class="post-meta mb-5">
              <li
                v-for="item in postDetails"
                :key="item.id"
                :class="item.class"
              >
                <i :class="item.iconClass"></i><span>{{ item.content }}</span>
              </li>
            </ul>
            <!-- /.post-meta -->
          </div>
          <!-- /.post-header -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
const postDetails = ref([
  {
    id: 1,
    class: "post-date",
    iconClass: "uil uil-calendar-alt",
    content: "5 Jul 2022",
  },
  {
    id: 2,
    class: "post-author",
    iconClass: "uil uil-user",
    content: "By Sandbox",
  },
  {
    id: 3,
    class: "post-comments",
    iconClass: "uil uil-comment",
    content: "3 Comments",
  },
  {
    id: 4,
    class: "post-likes",
    iconClass: "uil uil-heart-alt",
    content: "3 Likes",
  },
]);
</script>

<style lang="scss" scoped></style>
