<template>
  <section class="wrapper bg-gradient-primary">
    <div class="container pt-10 pt-md-14 pb-8 text-center">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7">
          <figure>
            <nuxt-img
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-delay="300"
              class="w-auto"
              src="/assets/img/illustrations/i2.png"
              srcset="/assets/img/illustrations/i2@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!-- /column -->
        <div
          class="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start"
        >
          <h1
            class="display-1 mb-5 mx-md-n5 mx-lg-0"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
          >
            Grow Your Business with Our Solutions.
          </h1>
          <p
            class="lead fs-lg mb-7"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="100"
          >
            We help our clients to increase their website traffic, rankings and
            visibility in search results.
          </p>
          <span data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
            <nuxt-link to="/signup" class="btn btn-primary rounded-pill me-2"
              >Try It For Free</nuxt-link
            ></span
          >
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
