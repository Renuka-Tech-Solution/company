<template>
  <div class="grid grid-view projects-masonry mt-md-n20 mt-lg-n22 mb-20">
    <div class="row g-8 g-lg-10 isotope">
      <div
        v-for="project in projects"
        :key="project.id"
        :class="['project', 'item', project.category, `col-md-6 col-xl-4`]"
      >
        <div class="card shadow-lg">
          <figure
            class="card-img-top itooltip"
            :class="`itooltip-${project.tooltipColor}`"
            v-tippy="{
              content: `<h5 class='mb-0 bg-${project.tooltipColor} py-2 px-2 text-white rounded'>Click to see the project</h5>`,
              allowHTML: true,
              followCursor: true,
            }"
          >
            <nuxt-link to="/single-project">
              <nuxt-img :src="project.imageSrc" alt="photo" />
            </nuxt-link>
          </figure>
          <div class="card-body p-7">
            <div class="post-header">
              <div
                :class="[
                  'post-category',
                  'text-line',
                  `mb-2 text-${project.category}`,
                ]"
              >
                {{ project.category }}
              </div>
              <h3 class="mb-0">{{ project.title }}</h3>
            </div>
            <!-- /.post-header -->
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.project -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script setup>
import { directive as VTippy } from "vue-tippy";

const projects = ref([
  {
    id: 1,
    category: "workshop",
    tooltipColor: "aqua",
    imageSrc: "/assets/img/photos/pd6.jpg",
    title: "Ipsum Mollis Vulputate",
  },
  {
    id: 2,
    category: "product",
    tooltipColor: "purple",
    imageSrc: "/assets/img/photos/pd4.jpg",
    title: "Inceptos Euismod Egestas",
  },
  {
    id: 3,
    category: "product",
    tooltipColor: "yellow",
    imageSrc: "/assets/img/photos/pd1.jpg",
    title: "Cras Fermentum Sem",
  },
  {
    id: 4,
    category: "workshop",
    tooltipColor: "red",
    imageSrc: "/assets/img/photos/pd2.jpg",
    title: "Mollis Ipsum Mattis",
  },
  {
    id: 5,
    category: "still-life",
    tooltipColor: "orange",
    imageSrc: "/assets/img/photos/pd3.jpg",
    title: "Ipsum Ultricies Cursus",
  },
  {
    id: 6,
    category: "product",
    tooltipColor: "leaf",
    imageSrc: "/assets/img/photos/pd5.jpg",
    title: "Sollicitudin Ornare Porta",
  },
]);
</script>

<style lang="scss" scoped></style>
