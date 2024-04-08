<template>
  <section class="wrapper bg-light">
    <div class="container pt-9 pt-md-11 pb-14 pb-md-16">
      <div class="projects-overflow mt-md-10 mb-10 mb-lg-15">
        <div
          v-for="project in projects11"
          :key="project.id"
          class="project item"
        >
          <div class="row">
            <figure
              :class="project.figureClass"
              :style="project.figureStyle"
              class="rounded"
            >
              <nuxt-img :src="project.imageUrl" alt="photo" />
            </figure>
            <div :class="project.detailsClass" :style="project.detailsStyle">
              <div :class="project.cardClass" :style="project.cardStyle">
                <div class="card-body">
                  <div class="post-header">
                    <div :class="project.categoryClass">
                      {{ project.category }}
                    </div>
                    <h2 class="post-title mb-3">{{ project.title }}</h2>
                  </div>
                  <!-- /.post-header -->
                  <div class="post-content">
                    <p>{{ project.description }}</p>

                    <nuxt-link
                      to="/single-project"
                      :class="`more hover ${project.linkClass}`"
                      >See Project</nuxt-link
                    >
                  </div>
                  <!-- /.post-content -->
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!-- /.project-details -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.project -->
      </div>
      <!-- /.projects-overflow -->
      <nav class="d-flex justify-content-center" aria-label="pagination">
        <CommonPagination />
        <!-- /.pagination -->
      </nav>
      <!-- /nav -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { projects11 } from "~/data/projects";
</script>

<style lang="scss" scoped></style>
