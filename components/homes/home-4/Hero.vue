<template>
  <section
    class="wrapper bg-light position-relative min-vh-70 d-lg-flex align-items-center"
  >
    <div
      class="rounded-4-lg-start col-lg-6 order-lg-2 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100 min-vh-50"
      style="background-image: url(/assets/img/photos/about16.jpg)"
    ></div>
    <!--/column -->
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div
            class="mt-10 mt-md-11 mt-lg-n10 px-10 px-md-11 ps-lg-0 pe-lg-13 text-center text-lg-start"
          >
            <h1
              class="display-1 mb-5"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay=""
            >
              Just sit & relax while we take care of your business needs.
            </h1>
            <p
              class="lead fs-25 lh-sm mb-7 pe-md-10"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="100"
            >
              We make your spending stress-free for you to have the perfect
              control.
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
                  to="/contact"
                  class="btn btn-lg btn-outline-primary rounded-pill"
                  >Contact Us</nuxt-link
                ></span
              >
            </div>
          </div>
          <!--/div -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
