<template>
  <section class="wrapper bg-gray">
    <div class="container pt-12 pt-md-14 pb-14 pb-md-16">
      <div class="row gy-10 gy-md-13 gy-lg-0 align-items-center">
        <div class="col-md-8 col-lg-5 d-flex position-relative mx-auto">
          <div class="img-mask mask-1">
            <nuxt-img
              src="/assets/img/photos/about17.jpg"
              srcset="/assets/img/photos/about17@2x.jpg 2x"
              alt="photo"
            />
          </div>
          <div
            class="card shadow-lg position-absolute"
            style="bottom: 10%; right: 2%"
          >
            <div class="card-body py-4 px-5">
              <div class="d-flex flex-row align-items-center">
                <div>
                  <nuxt-img
                    src="/assets/img/icons/lineal/check.svg"
                    class="icon-svg icon-svg-sm text-primary mx-auto me-3"
                    alt="photo"
                  />
                </div>
                <div>
                  <h3 class="counter mb-0 text-nowrap">
                    <CommonCounter
                      parentClass=""
                      :min="0"
                      :max="250"
                      :time="1500"
                    />+
                  </h3>
                  <p class="fs-14 lh-sm mb-0 text-nowrap">Projects Done</p>
                </div>
              </div>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!--/column -->
        <div
          class="col-lg-6 offset-lg-1 col-xxl-5 text-center text-lg-start"
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay="200"
        >
          <h1 class="display-1 mb-5">
            I'm User Interface Designer & Developer.
          </h1>
          <p class="lead fs-25 lh-sm mb-7 px-md-10 px-lg-0">
            Hello! I'm Julia, a freelance user interface designer & developer
            based in London. I’m very passionate about the work that I do.
          </p>
          <div
            class="d-flex justify-content-center justify-content-lg-start"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <span
              ><nuxt-link
                to="/projects"
                class="btn btn-lg btn-primary rounded-pill me-2"
                >See My Works</nuxt-link
              ></span
            >
            <span
              ><nuxt-link
                to="/contact"
                class="btn btn-lg btn-outline-primary rounded-pill"
                >Contact Me</nuxt-link
              ></span
            >
          </div>
        </div>
        <!--/column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
