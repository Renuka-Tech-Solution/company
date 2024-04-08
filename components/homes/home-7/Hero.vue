<template>
  <section class="wrapper bg-gradient-primary">
    <div class="container py-14 pt-md-15 pb-md-18">
      <div class="row text-center">
        <div class="col-lg-9 col-xxl-7 mx-auto">
          <h2
            class="display-1 mb-4"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
          >
            Creative. Smart. Awesome.
          </h2>
          <p
            class="lead fs-24 lh-sm px-md-5 px-xl-15 px-xxl-10 mb-7"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          >
            We are an award winning web & mobile design agency that strongly
            believes in the power of creative ideas.
          </p>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div
        class="d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="400"
      >
        <span>
          <nuxt-link
            to="/single-project"
            class="btn btn-lg btn-primary rounded-pill mx-1"
            >See Project</nuxt-link
          ></span
        >
        <span
          ><a class="btn btn-lg btn-outline-primary rounded-pill mx-1"
            >Contact Us</a
          ></span
        >
      </div>
      <!-- /div -->
      <div class="row mt-12">
        <div class="col-lg-8 mx-auto">
          <figure>
            <nuxt-img
              class="img-fluid"
              src="/assets/img/illustrations/i12.png"
              srcset="/assets/img/illustrations/i12@2x.png 2x"
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
