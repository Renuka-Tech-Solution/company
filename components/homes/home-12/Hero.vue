<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-10 pb-15 pt-md-14 pb-md-20">
      <div class="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
        <div
          class="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
        >
          <h1 class="display-1 mb-5 mx-md-n5 mx-lg-0">
            Creative. Smart. Awesome.
          </h1>
          <p class="lead fs-lg mb-7">
            We specialize in web, mobile and identity design. We love to turn
            ideas into beautiful things.
          </p>
          <div
            class="d-flex justify-content-center justify-content-lg-start"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
          >
            <span
              ><nuxt-link
                to="/single-project"
                class="btn btn-primary rounded me-2"
                >See Project</nuxt-link
              ></span
            >
            <span><a class="btn btn-yellow rounded">Learn More</a></span>
          </div>
        </div>
        <!-- /column -->
        <div
          class="col-lg-7"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay=""
        >
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/i6.png"
              srcset="/assets/img/illustrations/i6@2x.png 2x"
              alt="photo"
            />
          </figure>
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
