<template>
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-12 col-xl-10 col-xxl-7 mx-auto text-center">
          <i class="icn-flower text-leaf fs-30 opacity-25"></i>
          <h2 class="display-5 text-center mt-2 mb-10">
            I absolutely love shooting weddings and couples because there are so
            many feelings to capture.
          </h2>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 text-center">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="col-sm-8 col-md-6 col-lg-4 mx-auto"
        >
          <div class="card shadow-lg">
            <figure class="card-img-top overlay overlay-1">
              <a :href="card.link">
                <nuxt-img
                  :class="'img-fluid'"
                  :src="card.imageSrc"
                  :srcset="`${card.imageSrc} 2x`"
                  :alt="card.altText"
                />
                <span class="bg"></span>
              </a>
              <figcaption>
                <h5 class="from-top mb-0">View Gallery</h5>
              </figcaption>
            </figure>
            <div class="card-body p-6">
              <h3 class="fs-21 mb-0">{{ card.title }}</h3>
            </div>
            <!--/.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
const cards = ref([
  {
    link: "#",
    imageSrc: "/assets/img/photos/fs1.jpg",
    altText: "",
    title: "Wedding",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/fs2.jpg",
    altText: "",
    title: "Couples",
  },
  {
    link: "#",
    imageSrc: "/assets/img/photos/fs3.jpg",
    altText: "",
    title: "Engagement",
  },
]);
</script>

<style lang="scss" scoped></style>
