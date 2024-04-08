<template>
  <section class="wrapper bg-gradient-primary">
    <div class="container pb-17 pb-md-20">
      <div class="row gx-0 mb-14 mb-md-16">
        <div class="col-9 col-sm-10 col-lg-9 mx-auto mt-n15 mt-md-n23">
          <nuxt-img
            class="img-fluid mx-auto rounded shadow-lg"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/demos/de1.jpg"
            srcset="/assets/img/demos/de1@2x.jpg 2x"
            alt="photo"
          />
          <nuxt-img
            class="position-absolute rounded shadow-lg"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/demos/de2.jpg"
            srcset="/assets/img/demos/de2@2x.jpg 2x"
            style="top: 25%; right: -12%; max-width: 30%; height: auto"
            alt="photo"
          />
          <nuxt-img
            class="position-absolute rounded shadow-lg"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/demos/de3.jpg"
            srcset="/assets/img/demos/de3@2x.jpg 2x"
            style="top: 15%; left: -15%; max-width: 30%; height: auto"
            alt="photo"
          />
          <nuxt-img
            class="position-absolute rounded shadow-lg"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/demos/de4.jpg"
            srcset="/assets/img/demos/de4@2x.jpg 2x"
            style="bottom: 15%; left: -13%; max-width: 30%; height: auto"
            alt="photo"
          />
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div
        class="row row-cols-2 row-cols-md-4 row-cols-lg-5 gx-md-8 gy-10 text-center justify-content-center"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay=""
      >
        <div v-for="feature in features" :key="feature.id" class="col">
          <nuxt-img
            :src="feature.imageSrc"
            :srcset="`${feature.imageSrcset} 2x`"
            class="mb-4"
            alt="photo"
          />
          <h4 v-html="feature.title"></h4>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
const features = ref([
  {
    id: 1,
    imageSrc: "/assets/img/demos/nuxt.png",
    imageSrcset: "/assets/img/demos/fi3@2x.png",
    title: "Latest Vue <br />NuxtJs",
  },
  {
    id: 2,
    imageSrc: "/assets/img/demos/fi1.png",
    imageSrcset: "/assets/img/demos/fi1@2x.png",
    title: "Built with Sass <br />& Bootstrap 5",
  },
  {
    id: 3,
    imageSrc: "/assets/img/demos/fi2.png",
    imageSrcset: "/assets/img/demos/fi2@2x.png",
    title: "SEO-friendly <br />Coding",
  },
  {
    id: 4,
    imageSrc: "/assets/img/demos/fi4.png",
    imageSrcset: "/assets/img/demos/fi4@2x.png",
    title: "Retina-ready <br />Graphics",
  },
  {
    id: 5,
    imageSrc: "/assets/img/demos/fi5.png",
    imageSrcset: "/assets/img/demos/fi5@2x.png",
    title: "One-page <br />Layout Option",
  },
  {
    id: 6,
    imageSrc: "/assets/img/demos/fi6.png",
    imageSrcset: "/assets/img/demos/fi6@2x.png",
    title: "Isotope <br />Filterable Gallery",
  },
  {
    id: 7,
    imageSrc: "/assets/img/demos/fi11.png",
    imageSrcset: "/assets/img/demos/fi11.png",
    title: "Server side <br />Compatible",
  },
  {
    id: 8,
    imageSrc: "/assets/img/demos/fi8.png",
    imageSrcset: "/assets/img/demos/fi8@2x.png",
    title: "Contact Form <br />w/o Page Refresh",
  },
  {
    id: 9,
    imageSrc: "/assets/img/demos/fi9.png",
    imageSrcset: "/assets/img/demos/fi9@2x.png",
    title: "Animations <br />on Page Scroll",
  },
  {
    id: 10,
    imageSrc: "/assets/img/demos/fi10.png",
    imageSrcset: "/assets/img/demos/fi10@2x.png",
    title: "Top-Notch Support <br />& Free Updates",
  },
]);
</script>

<style lang="scss" scoped></style>
