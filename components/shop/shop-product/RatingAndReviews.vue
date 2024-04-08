<template>
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="row gx-md-8 gx-xl-12 gy-10">
        <aside class="col-lg-4 sidebar">
          <div class="widget mt-1">
            <h4 class="widget-title mb-3">Ratings Distribution</h4>
            <div class="mb-5">
              <span class="ratings four"></span><span>4.2 out of 5</span>
            </div>
            <ul class="progress-list">
              <li v-for="rating in ratings" :key="rating.value">
                <p>{{ rating.label }}</p>
                <div class="progressbar line blue">
                  <CommonLineProgressbar :max="rating.percentage" />
                </div>
              </li>
            </ul>
            <!-- /.progress-list -->
          </div>
          <!-- /.widget -->
          <div class="widget mt-10">
            <h4 class="widget-title mb-3">Review this product</h4>
            <p class="mb-5">Aenean eu leo quam ornare sem lacinia quam.</p>
            <a href="#" class="btn btn-primary rounded w-100">Write a Review</a>
          </div>
          <!-- /.widget -->
        </aside>
        <!-- /column .sidebar -->
        <div class="col-lg-8">
          <div class="row align-items-center mb-10 position-relative zindex-1">
            <div class="col-md-7 col-xl-8 pe-xl-20">
              <h2 class="display-6 mb-0">Ratings & Reviews</h2>
            </div>
            <!--/column -->
            <div class="col-md-5 col-xl-4 ms-md-auto text-md-end mt-5 mt-md-0">
              <div class="form-select-wrapper">
                <select v-model="selectedSortOption" class="form-select">
                  <option
                    v-for="option in sortOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>
              <!--/.form-select-wrapper -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <div id="comments">
            <ol id="singlecomments" class="commentlist">
              <li v-for="comment in comments" :key="comment.id" class="comment">
                <div class="comment-header d-md-flex align-items-center">
                  <figure class="user-avatar">
                    <nuxt-img
                      class="rounded-circle"
                      :alt="comment.author"
                      :src="comment.avatar"
                    />
                  </figure>
                  <div>
                    <h6 class="comment-author">
                      <a :href="comment.authorLink" class="link-dark">{{
                        comment.author
                      }}</a>
                    </h6>
                    <ul class="post-meta">
                      <li>
                        <i class="uil uil-calendar-alt"></i>{{ comment.date }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="d-flex flex-row align-items-center mt-5 mb-2">
                  <span
                    :class="['ratings', comment.rating.toLowerCase()]"
                  ></span>
                  <h6 class="mb-0">{{ comment.title }}</h6>
                </div>
                <p>{{ comment.content }}</p>
                <div class="d-flex flex-row align-items-center pb-3">
                  <p class="text-muted fs-15 mb-0 me-5">
                    Was this review helpful?
                  </p>
                  <div>
                    <a href="#" class="link-dark me-3"
                      ><i class="uil uil-thumbs-up"></i> {{ comment.likes }}</a
                    >
                    <a href="#" class="link-dark"
                      ><i class="uil uil-thumbs-down"></i>
                      {{ comment.dislikes }}</a
                    >
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <!-- /#comments -->
          <nav class="d-flex mt-10" aria-label="pagination">
            <CommonPagination />
            <!-- /.pagination -->
          </nav>
          <!-- /nav -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
const ratings = ref([
  { label: "5 Stars", percentage: 82 },
  { label: "4 Stars", percentage: 8 },
  { label: "3 Stars", percentage: 5 },
  { label: "2 Stars", percentage: 3 },
  { label: "1 Star", percentage: 2 },
]);
const sortOptions = ref([
  { label: "Sort by newest", value: "newest" },
  { label: "Sort by oldest", value: "oldest" },
  { label: "Sort by popularity", value: "popular" },
  { label: "Sort by high rating", value: "high-rating" },
  { label: "Sort by low rating", value: "low-rating" },
]);

const selectedSortOption = ref("newest"); // Set the default selected option

import { comments } from "~/data/shop";
</script>

<style lang="scss" scoped></style>
