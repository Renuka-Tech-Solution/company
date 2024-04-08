<template>
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-17">
      <div class="row mb-8 text-center">
        <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          <h2 class="fs-16 text-uppercase text-primary mb-3">Our Projects</h2>
          <h3 class="display-4">
            Check out some of our awesome projects with creative ideas and great
            design.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="grid grid-view projects-masonry">
        <div class="row gx-md-8 gy-10 gy-md-13 isotope">
          <div
            v-for="(project, index) in projects9"
            :key="index"
            :class="[
              'project',
              'item',
              project.category,
              'col-md-6',
              'col-xl-4',
            ]"
          >
            <figure class="lift rounded mb-6">
              <nuxt-link to="/single-project">
                <nuxt-img :src="project.imageSrc" :alt="project.imageAlt" />
              </nuxt-link>
            </figure>
            <div
              class="project-details d-flex justify-content-center flex-column"
            >
              <div class="post-header">
                <div
                  :class="[
                    'post-category',
                    'mb-2',
                    'text-' + project.categoryColor,
                  ]"
                >
                  {{ project.categoryName }}
                </div>
                <h2 class="post-title h3">{{ project.title }}</h2>
              </div>
            </div>
          </div>
          <!-- /.project -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { projects9 } from "~/data/projects";
</script>

<style lang="scss" scoped></style>
