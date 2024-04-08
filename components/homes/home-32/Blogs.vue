<template>
  <section class="wrapper bg-gray">
    <div class="container py-15 py-md-17">
      <div class="row text-center">
        <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
          <h2 class="fs-16 text-uppercase text-primary mb-3">Case Studies</h2>
          <h3 class="display-3 mb-10">
            Check out some of our awesome projects with creative ideas and great
            design.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row grid-view gy-6">
        <div
          class="col-md-6 col-lg-4"
          v-for="(elm, i) in blogs1.slice(0, 3)"
          :key="i"
        >
          <article>
            <div class="card shadow-lg">
              <figure class="card-img-top overlay overlay-1 hover-scale">
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
                  <h2 class="post-title h3 mt-1 mb-3">
                    <nuxt-link to="/blog-post" class="link-dark">{{
                      elm.postTitle
                    }}</nuxt-link>
                  </h2>
                </div>
                <!-- /.post-header -->
                <div class="post-content">
                  <p>
                    {{ elm.desc }}
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
                    <a href="#"
                      ><i class="uil uil-file-alt fs-15"></i
                      >{{ elm.category }}</a
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
        <!-- /column -->

        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { blogs1 } from "~/data/blogs";
</script>

<style lang="scss" scoped></style>
