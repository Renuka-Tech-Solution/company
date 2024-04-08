<template>
  <div
    class="row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mb-7 mb-md-10 mb-lg-16 align-items-center"
  >
    <div
      class="col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2"
    >
      <div
        class="shape bg-dot primary rellax w-17 h-19"
        style="top: -1.7rem; left: -1.5rem"
      ></div>
      <div
        class="shape rounded bg-soft-primary rellax d-md-block"
        style="bottom: -1.8rem; right: -0.8rem; width: 85%; height: 90%"
      ></div>
      <figure class="rounded">
        <nuxt-img
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="300"
          src="/assets/img/photos/about7.jpg"
          srcset="/assets/img/photos/about7@2x.jpg 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-5 mt-lg-n10 text-center text-lg-start">
      <h1
        class="display-1 mb-5"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay=""
      >
        We bring solutions to make life easier for our customers.
      </h1>
      <p
        class="lead fs-25 lh-sm mb-7 px-md-10 px-lg-0"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="200"
      >
        We have considered our solutions to support every stage of your growth.
      </p>
      <div
        class="d-flex justify-content-center justify-content-lg-start"
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
            to="/pricing"
            class="btn btn-lg btn-outline-primary rounded-pill"
            >Free Trial</nuxt-link
          ></span
        >
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
