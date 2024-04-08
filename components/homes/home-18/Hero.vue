<template>
  <section class="wrapper bg-light">
    <div class="container-card">
      <div
        class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 mt-2 mb-5"
        style="background-image: url(/assets/img/photos/bg22.png)"
      >
        <div class="card-body py-14 px-0">
          <div class="container">
            <div
              class="row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start"
            >
              <div class="col-lg-6">
                <h1
                  class="display-2 mb-4 me-xl-5 me-xxl-0"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay=""
                >
                  Networking
                  <span class="text-gradient gradient-1">solutions</span> for
                  worldwide communication
                </h1>
                <p
                  class="lead fs-23 lh-sm mb-7 pe-xxl-15"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="200"
                >
                  We're a company that focuses on establishing long-term
                  relationships with customers.
                </p>
                <div>
                  <nuxt-link
                    to="/projects"
                    class="btn btn-lg btn-gradient gradient-1 rounded"
                    >Explore Now</nuxt-link
                  >
                </div>
              </div>
              <!--/column -->
              <div class="col-lg-6">
                <nuxt-img
                  class="img-fluid mb-n18"
                  src="/assets/img/illustrations/3d6.png"
                  srcset="/assets/img/illustrations/3d6@2x.png 2x"
                  data-aos="fade"
                  data-aos-once="true"
                  data-aos-delay="300"
                />
              </div>
              <!--/column -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container -->
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
    </div>
    <!-- /.container-card -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
