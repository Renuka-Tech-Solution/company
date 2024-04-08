<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-10 pb-12 pt-md-14 pb-md-17">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div
          class="col-md-10 offset-md-1 offset-lg-0 col-lg-5 mt-lg-n2 text-center text-lg-start order-2 order-lg-0"
        >
          <h1
            class="display-1 mb-5 mx-md-10 mx-lg-0"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
          >
            Sandbox is effortless and powerful with <br /><span
              class="typer text-primary text-nowrap"
              data-delay="100"
              id="typewriter"
            ></span
            ><span class="cursor text-primary"></span>
          </h1>
          <p
            class="lead fs-lg mb-7"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          >
            Achieve your saving goals. Have all your recurring and one time
            expenses and incomes in one place.
          </p>
          <div
            class="d-flex justify-content-center justify-content-lg-start"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <span
              ><nuxt-link
                to="/signup"
                class="btn btn-lg btn-primary rounded me-2"
                >Get Started</nuxt-link
              ></span
            >
            <span
              ><nuxt-link to="/pricing" class="btn btn-lg btn-green rounded"
                >Free Trial</nuxt-link
              ></span
            >
          </div>
        </div>
        <!-- /column -->
        <div class="col-lg-7">
          <div class="row">
            <div class="col-3 offset-1 offset-lg-0 col-lg-4 d-flex flex-column">
              <div class="ms-auto mt-auto">
                <nuxt-img
                  class="img-fluid rounded shadow-lg"
                  src="/assets/img/photos/sa20.jpg"
                  srcset="/assets/img/photos/sa20@2x.jpg 2x"
                  alt="photo"
                />
              </div>
              <div class="ms-auto mt-5 mb-10">
                <nuxt-img
                  class="img-fluid rounded shadow-lg"
                  src="/assets/img/photos/sa18.jpg"
                  srcset="/assets/img/photos/sa18@2x.jpg 2x"
                  alt="photo"
                />
              </div>
            </div>
            <!-- /column -->
            <div class="col-4 col-lg-5">
              <div>
                <nuxt-img
                  class="w-100 img-fluid rounded shadow-lg"
                  src="/assets/img/photos/sa16.jpg"
                  srcset="/assets/img/photos/sa16@2x.jpg 2x"
                  alt="photo"
                />
              </div>
            </div>
            <!-- /column -->
            <div class="col-3 d-flex flex-column">
              <div class="mt-auto">
                <nuxt-img
                  class="img-fluid rounded shadow-lg"
                  src="/assets/img/photos/sa21.jpg"
                  srcset="/assets/img/photos/sa21@2x.jpg 2x"
                  alt="photo"
                />
              </div>
              <div class="mt-5">
                <nuxt-img
                  class="img-fluid rounded shadow-lg"
                  src="/assets/img/photos/sa19.jpg"
                  srcset="/assets/img/photos/sa19@2x.jpg 2x"
                  alt="photo"
                />
              </div>
              <div class="mt-5 mb-10">
                <nuxt-img
                  class="img-fluid rounded shadow-lg"
                  src="/assets/img/photos/sa17.jpg"
                  srcset="/assets/img/photos/sa17@2x.jpg 2x"
                  alt="photo"
                />
              </div>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import Typewriter from "typewriter-effect/dist/core";

onMounted(() => {
  new Typewriter("#typewriter", {
    strings: ["easy usage", "fast transactions", "secure payments"],
    autoStart: true,
    loop: true,
  });
});
</script>

<style lang="scss" scoped></style>
