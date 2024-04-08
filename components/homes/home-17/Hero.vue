<template>
  <section class="wrapper bg-gray">
    <div class="container pt-12 pt-md-16 text-center">
      <div class="row">
        <div
          class="col-lg-8 col-xxl-7 mx-auto text-center"
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay=""
        >
          <h2 class="fs-16 text-uppercase ls-xl text-dark mb-4">
            Hello! This is Sandbox
          </h2>
          <h1 class="display-1 fs-58 mb-7">
            We bring rapid solutions for your business.
          </h1>
          <div
            class="d-flex justify-content-center mb-5 mb-md-0"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <span
              ><nuxt-link
                to="/projects"
                class="btn btn-lg btn-primary rounded-pill me-2"
                >Explore Now</nuxt-link
              ></span
            >
            <span
              ><nuxt-link
                to="/contact"
                class="btn btn-lg btn-outline-primary rounded-pill"
                >Contact Us</nuxt-link
              ></span
            >
          </div>
        </div>
        <!--/column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <figure class="position-absoute" style="bottom: 0; left: 0; z-index: 2">
      <nuxt-img src="/assets/img/photos/bg11.jpg" alt="photo" />
    </figure>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
