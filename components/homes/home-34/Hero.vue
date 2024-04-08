<template>
  <section class="wrapper bg-gradient-primary">
    <div class="container pt-10 pt-md-14">
      <div class="row gx-2 gy-10 align-items-center">
        <div
          class="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0"
        >
          <h1
            class="display-1 mb-5 mx-md-10 mx-lg-0"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
          >
            Create a powerful but effortless website for <br /><span
              class="typer text-primary text-nowrap"
              data-delay="100"
              id="typewriter"
            ></span
            ><span class="cursor text-primary" data-owner="typer"></span>
          </h1>
          <p
            class="lead fs-23 mb-7"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          >
            Build your website in minutes with the help of countless amazing
            features of Sandbox.
          </p>
          <div
            class="d-flex justify-content-center justify-content-lg-start mb-4"
          >
            <span
              ><nuxt-link
                class="btn btn-lg btn-primary rounded-pill me-2 scroll"
                to="/"
                >Check Demos</nuxt-link
              ></span
            >
          </div>
        </div>
        <!-- /column -->
        <div class="col-lg-6 ms-auto position-relative">
          <div class="row g-4">
            <div class="col-4 d-flex flex-column ms-auto">
              <div class="ms-auto mt-6">
                <nuxt-img
                  class="img-fluid rounded shadow-lg"
                  src="/assets/img/demos/vc1.jpg"
                  srcset="/assets/img/demos/vc1@2x.jpg 2x"
                  alt="photo"
                />
              </div>
              <div class="ms-auto mt-4">
                <nuxt-img
                  class="img-fluid rounded shadow-lg"
                  src="/assets/img/demos/vc2.jpg"
                  srcset="/assets/img/demos/vc2@2x.jpg 2x"
                  alt="photo"
                />
              </div>
              <div class="ms-auto mt-4">
                <nuxt-img
                  class="img-fluid rounded shadow-lg"
                  src="/assets/img/demos/vc3.jpg"
                  srcset="/assets/img/demos/vc3@2x.jpg 2x"
                  alt="photo"
                />
              </div>
            </div>
            <!-- /column -->
            <div class="col-4">
              <div>
                <nuxt-img
                  class="w-100 img-fluid rounded shadow-lg"
                  src="/assets/img/demos/vc4.jpg"
                  srcset="/assets/img/demos/vc4@2x.jpg 2x"
                  alt="photo"
                />
              </div>
              <div>
                <nuxt-img
                  class="w-100 img-fluid rounded shadow-lg mt-4"
                  src="/assets/img/demos/vc5.jpg"
                  srcset="/assets/img/demos/vc5@2x.jpg 2x"
                  alt="photo"
                />
              </div>
              <div>
                <nuxt-img
                  class="w-100 img-fluid rounded shadow-lg mt-4"
                  src="/assets/img/demos/vc6.jpg"
                  srcset="/assets/img/demos/vc6@2x.jpg 2x"
                  alt="photo"
                />
              </div>
            </div>
            <!-- /column -->
            <div class="col-4 d-flex flex-column">
              <div class="mt-8">
                <nuxt-img
                  class="img-fluid rounded shadow-lg"
                  src="/assets/img/demos/vc7.jpg"
                  srcset="/assets/img/demos/vc7@2x.jpg 2x"
                  alt="photo"
                />
              </div>
              <div class="mt-4 mb-10">
                <nuxt-img
                  class="img-fluid rounded shadow-lg"
                  src="/assets/img/demos/vc8.jpg"
                  srcset="/assets/img/demos/vc8@2x.jpg 2x"
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
    strings: [
      "your business.",
      "your portfolio.",
      "your startup.",
      "digital marketing.",
    ],
    autoStart: true,
    loop: true,
  });
});
</script>

<style lang="scss" scoped></style>
