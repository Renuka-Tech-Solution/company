<template>
  <section class="wrapper bg-light">
    <div class="container py-15 py-md-17">
      <div class="row">
        <div class="col-lg-11 col-xl-10 mx-auto mb-10">
          <h2 class="fs-16 text-uppercase text-muted text-center mb-3">
            Our Projects
          </h2>
          <h3 class="display-3 text-center px-lg-5 px-xl-10 px-xxl-16 mb-0">
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
            v-for="(project, i) in projects6"
            :key="project.id"
            class="project item col-md-6 col-xl-4"
          >
            <figure class="rounded mb-6">
              <nuxt-img :src="project.image.src" alt="photo" />
              <div
                class="item-link cursor-pointer"
                @click="() => setActiveLightBox(true, i)"
              >
                <i class="uil uil-focus-add"></i>
              </div>
            </figure>
            <div
              class="project-details d-flex justify-content-center flex-column"
            >
              <div class="post-header">
                <h2 class="post-title h3 fs-22">
                  <nuxt-link to="/single-project3" class="link-dark">{{
                    project.title
                  }}</nuxt-link>
                </h2>
                <div class="post-category text-ash">{{ project.category }}</div>
              </div>
              <!-- /.post-header -->
            </div>
            <!-- /.project-details -->
          </div>
          <!-- /.item -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid -->
      <div class="text-center mt-10">
        <nuxt-link to="/projects" class="btn btn-lg btn-primary rounded-pill"
          >Start a Project</nuxt-link
        >
      </div>
    </div>
    <!-- /.container -->
  </section>
  <Lightbox
    :images="images"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
</template>

<script setup>
import { projects6 } from "~/data/projects";
const activeLightBox = ref(false);
const currentSlideIndex = ref();
const images = ref([]);
onMounted(() => {
  images.value = projects6.map((elm) => elm.fullImage);
});

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};
import Lightbox from "~/components/common/Lightbox.vue";
</script>

<style lang="scss" scoped></style>
