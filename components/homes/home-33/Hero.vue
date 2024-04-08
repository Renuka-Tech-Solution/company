<template>
  <section class="section-frame mx-xxl-11 overflow-hidden">
    <div
      class="wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500"
      style="background-image: url(/assets/img/photos/bg23.png)"
    >
      <div class="container py-16 py-md-18 text-center position-relative">
        <div
          class="position-absolute shape yellow d-none d-lg-block w-5"
          style="top: 18%; left: 5%"
        >
          <nuxt-img
            src="/assets/img/svg/pie.svg"
            class="icon-svg w-100 h-100"
            alt="photo"
          />
        </div>
        <div
          class="position-absolute shape leaf d-none d-lg-block w-10"
          style="bottom: 30%; left: 2%"
        >
          <nuxt-img
            src="/assets/img/svg/scribble.svg"
            class="icon-svg w-100 h-100"
            alt="photo"
          />
        </div>
        <div
          class="position-absolute shape fuchsia d-none d-lg-block w-6"
          style="top: 20%; right: 2%; transform: rotate(70deg)"
        >
          <nuxt-img
            src="/assets/img/svg/tri.svg"
            class="icon-svg w-100 h-100"
            alt="photo"
          />
        </div>
        <div
          class="position-absolute shape grape d-none d-lg-block w-6"
          style="bottom: 28%; right: 5%"
        >
          <nuxt-img
            src="/assets/img/svg/circle.svg"
            class="icon-svg w-100 h-100"
            alt="photo"
          />
        </div>
        <div class="row">
          <div class="col-lg-9 col-xxl-8 mx-auto">
            <h1 class="display-1 fs-70 px-md-10 px-lg-0 px-xl-8 mb-5">
              👋 Hello! I'm
              <nuxt-img
                class="d-inline w-12 mx-1"
                src="/assets/img/avatars/avatar.png"
                alt="photo"
              />
              Camille, a product designer.
            </h1>
            <p
              class="lead fs-24 px-md-10 px-lg-0 mx-lg-n10 mx-xl-0 mb-8"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay=""
            >
              I’m very passionate about the work that I do, and if you are
              curious you can find my works on
              <a href="#" class="hover" style="color: var(--bs-dribbble)"
                >Dribbble</a
              >, my portfolio on
              <a href="#" class="hover" style="color: var(--bs-behance)"
                >Behance</a
              >.
            </p>
            <nuxt-link
              to="/projects"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="300"
              class="btn btn-lg btn-primary btn-icon btn-icon-end"
              >See My Works <i class="uil uil-arrow-up-right"></i
            ></nuxt-link>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
