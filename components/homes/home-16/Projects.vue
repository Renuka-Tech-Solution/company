<template>
  <section class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row align-items-center mb-10">
        <div class="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
          <h2 class="display-4 mb-3">Latest Projects</h2>
          <p class="lead fs-20 mb-0">
            Check out some of my latest projects with creative ideas.
          </p>
        </div>
        <!--/column -->
        <div class="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
          <a href="#" class="btn btn-primary rounded-pill mb-0"
            >See All Projects</a
          >
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="`card ${card.bgClass} mb-10`"
      >
        <div class="card-body p-12 pb-0">
          <div class="row">
            <div class="col-lg-4 pb-12 align-self-center">
              <div :class="`post-category mb-3 text-${card.categoryColor}`">
                {{ card.category }}
              </div>
              <h3 class="h1 post-title mb-3">{{ card.title }}</h3>
              <p>{{ card.description }}</p>

              <nuxt-link
                to="/single-project"
                :class="`more hover link-{${card.categoryColor}‍`"
                >See Project</nuxt-link
              >
            </div>
            <div class="col-lg-7 offset-lg-1 align-self-end">
              <figure>
                <nuxt-img
                  class="img-fluid"
                  :src="card.image.src"
                  :srcset="card.image.srcset"
                  alt="photo"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <!--/.card -->
      <div class="row gx-md-8 gx-xl-10">
        <div v-for="(project, index) in projects" :key="index" class="col-lg-6">
          <div :class="project.cardClass">
            <div class="card-body p-12 pb-0">
              <div :class="project.categoryClass">{{ project.category }}</div>
              <h3 class="h1 post-title mb-3">{{ project.title }}</h3>
              <p>{{ project.description }}</p>

              ><nuxt-link
                to="/single-project"
                :class="`more hover ${project.linkClass}`"
                >{{ project.linkLabel }}</nuxt-link
              >
            </div>
            <!--/.card-body -->
            <nuxt-img
              class="card-img-bottom"
              :src="project.imageSrc"
              :srcset="project.imageSrcset"
              alt="photo"
            />
          </div>
          <!--/.card -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    cardClass: "card bg-soft-leaf mb-10 mb-lg-0",
    categoryClass: "post-category mb-3 text-leaf",
    category: "Web Design",
    title: "Missio Theme",
    description:
      "Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque id ligula felis.",
    link: "#",
    linkClass: "link-leaf mb-8",
    linkLabel: "See Project",
    imageSrc: "/assets/img/photos/f3.png",
    imageSrcset: "/assets/img/photos/f3@2x.png 2x",
  },
  {
    id: 2,
    cardClass: "card bg-soft-pink mb-lg-0",
    categoryClass: "post-category mb-3 text-pink",
    category: "Mobile Design",
    title: "Storage App",
    description:
      "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper.",
    link: "#",
    linkClass: "link-pink mb-8",
    linkLabel: "See Project",
    imageSrc: "/assets/img/photos/f4.png",
    imageSrcset: "/assets/img/photos/f4@2x.png 2x",
  },
];
const cards = [
  {
    bgClass: "bg-soft-violet",
    category: "Web Design",
    categoryColor: "violet",
    title: "Snowlake Theme",
    description:
      "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.",
    link: "#",
    image: {
      src: "/assets/img/photos/f1.png",
      srcset: "/assets/img/photos/f1@2x.png 2x",
    },
  },
  {
    bgClass: "bg-soft-blue",
    category: "Mobile Design",
    categoryColor: "blue",
    title: "Budget App",
    description:
      "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.",
    link: "#",
    image: {
      src: "/assets/img/photos/f2.png",
      srcset: "/assets/img/photos/f2@2x.png 2x",
    },
  },
  // Add more cards as needed
];
</script>

<style lang="scss" scoped></style>
