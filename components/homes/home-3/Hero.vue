<template>
  <section class="wrapper bg-dark angled lower-start">
    <div class="container pt-7 pt-md-11 pb-8">
      <div class="row gx-0 gy-10 align-items-center">
        <div class="col-lg-6" data-group="page-title" data-delay="600">
          <h1
            class="display-1 text-white mb-4"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
          >
            Sandbox focuses on <br /><span
              id="typewriter"
              class="typer text-primary text-nowrap"
            ></span
            ><span class="cursor text-primary"></span>
          </h1>

          <p
            class="lead fs-24 lh-sm text-white mb-7 pe-md-18 pe-lg-0 pe-xxl-15"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          >
            We carefully consider our solutions to support each and every stage
            of your growth.
          </p>
          <div>
            <nuxt-link
              to="/signup"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="300"
              class="btn btn-lg btn-primary rounded"
              >Get Started</nuxt-link
            >
          </div>
        </div>
        <!-- /column -->
        <div class="col-lg-5 offset-lg-1 mb-n18">
          <div class="position-relative">
            <div
              class="btn btn-circle btn-primary btn-play ripple mx-auto mb-6 position-absolute cursor-pointer"
              @click="
                () => {
                  modalOpen = true;
                }
              "
              style="
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 3;
              "
              data-glightbox
            >
              <i class="icn-caret-right"></i>
            </div>
            <figure class="rounded shadow-lg">
              <nuxt-img
                src="/assets/img/photos/about13.jpg"
                srcset="/assets/img/photos/about13@2x.jpg 2x"
                alt="photo"
              />
            </figure>
          </div>
          <!-- /div -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <CommonModalVideo :modalOpen="modalOpen" @modalClose="modalClose" />
</template>

<script setup>
import Typewriter from "typewriter-effect/dist/core";

onMounted(() => {
  new Typewriter("#typewriter", {
    strings: ["customer satisfaction", "business needs", "creative ideas"],
    autoStart: true,
    loop: true,
  });
});

const modalOpen = ref(false);
const modalClose = () => {
  modalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
