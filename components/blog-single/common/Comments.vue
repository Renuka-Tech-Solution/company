<template>
  <div id="comments">
    <h3 class="mb-6">5 Comments</h3>
    <ol id="singlecomments" class="commentlist">
      <li v-for="(elm, i) in comments" :key="i" class="comment">
        <div class="comment-header d-md-flex align-items-center">
          <div class="d-flex align-items-center">
            <figure class="user-avatar">
              <nuxt-img class="rounded-circle" alt="photo" :src="elm.avatar" />
            </figure>
            <div>
              <h6 class="comment-author">
                <a :href="elm.authorLink" class="link-dark">{{ elm.author }}</a>
              </h6>
              <ul class="post-meta">
                <li><i class="uil uil-calendar-alt"></i>{{ elm.date }}</li>
              </ul>
              <!-- /.post-meta -->
            </div>
            <!-- /div -->
          </div>
          <!-- /div -->
          <div class="mt-3 mt-md-0 ms-auto">
            <a
              href="#"
              class="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"
              ><i class="uil uil-comments"></i> Reply</a
            >
          </div>
          <!-- /div -->
        </div>
        <!-- /.comment-header -->
        <p>
          {{ elm.content }}
        </p>
        <ul class="children" v-if="elm.children">
          <li class="comment" v-for="(elm2, i2) in elm.children" :key="i2">
            <div class="comment-header d-md-flex align-items-center">
              <div class="d-flex align-items-center">
                <figure class="user-avatar">
                  <nuxt-img class="rounded-circle" alt="photo" :src="elm2.avatar" />
                </figure>
                <div>
                  <h6 class="comment-author">
                    <a :href="elm2.authorLink" class="link-dark">{{
                      elm2.author
                    }}</a>
                  </h6>
                  <ul class="post-meta">
                    <li><i class="uil uil-calendar-alt"></i>{{ elm2.date }}</li>
                  </ul>
                  <!-- /.post-meta -->
                </div>
                <!-- /div -->
              </div>
              <!-- /div -->
              <div class="mt-3 mt-md-0 ms-auto">
                <a
                  href="#"
                  class="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"
                  ><i class="uil uil-comments"></i> Reply</a
                >
              </div>
              <!-- /div -->
            </div>
            <!-- /.comment-header -->
            <p>
              {{ elm2.content }}
            </p>
            <ul class="children" v-if="elm2.children">
              <li class="comment" v-for="(elm3, i3) in elm2.children" :key="i3">
                <div class="comment-header d-md-flex align-items-center">
                  <div class="d-flex align-items-center">
                    <figure class="user-avatar">
                      <nuxt-img
                        class="rounded-circle"
                        alt="photo"
                        :src="elm3.avatar"
                      />
                    </figure>
                    <div>
                      <h6 class="comment-author">
                        <a :href="elm3.authorLink" class="link-dark">{{
                          elm3.author
                        }}</a>
                      </h6>
                      <ul class="post-meta">
                        <li>
                          <i class="uil uil-calendar-alt"></i>{{ elm3.date }}
                        </li>
                      </ul>
                      <!-- /.post-meta -->
                    </div>
                    <!-- /div -->
                  </div>
                  <!-- /div -->
                  <div class="mt-3 mt-md-0 ms-auto">
                    <a
                      href="#"
                      class="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"
                      ><i class="uil uil-comments"></i> Reply</a
                    >
                  </div>
                  <!-- /div -->
                </div>
                <!-- /.comment-header -->
                <p>
                  {{ elm3.content }}
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { comments } from "~/data/blogs";
</script>

<style lang="scss" scoped></style>
