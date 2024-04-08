<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-10 pt-md-14 pb-14 pb-md-0">
      <div class="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-13">
        <div class="col-lg-6">
          <h1
            class="display-1 fs-66 lh-xxs mb-0"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
          >
            We bring rapid solutions for your business.
          </h1>
        </div>
        <!-- /column -->
        <div class="col-lg-6">
          <p
            class="lead fs-25 my-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          >
            We are an award winning branding design agency that strongly
            believes in the power of creative ideas.
          </p>
          <nuxt-link
            to="/blog"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
            class="more hover"
            >Learn More</nuxt-link
          >
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="position-relative">
        <div
          class="shape bg-dot primary rellax w-17 h-21"
          data-rellax-speed="1"
          style="top: -2.5rem; right: -2.7rem"
        ></div>
        <figure class="rounded mb-md-n20">
          <nuxt-img
            src="/assets/img/photos/about18.jpg"
            srcset="/assets/img/photos/about18@2x.jpg 2x"
            alt="photo"
          />
        </figure>
      </div>
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
