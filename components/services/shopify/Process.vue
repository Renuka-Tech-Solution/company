<template>
  <section class="wrapper bg-soft-primary mt-25">
    <div class="container py-14 pt-md-16 pt-lg-0 pb-md-16">
      <div class="row text-center">
        <div class="col-lg-10 mx-auto">
          <div class="mt-lg-n20 mt-xl-n22 position-relative">
            <div
              class="shape bg-dot red rellax w-16 h-18"
              data-rellax-speed="1"
              style="top: 1rem; left: -3.9rem; pointer-events: none; z-index: 1"
            ></div>
            <div
              class="shape rounded-circle bg-line primary rellax w-18 h-18"
              data-rellax-speed="1"
              style="
                bottom: 2rem;
                right: -3rem;
                pointer-events: none;
                z-index: 1;
              "
            ></div>
            <CommonVideoPlayer
              :options="{
                autoplay: true,
                controls: true,
                sources: [
                  {
                    src: '/assets/media/movie.mp4',
                    type: 'video/mp4',
                  },
                ],
              }"
            />
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row text-center">
        <div class="col-lg-9 mx-auto">
          <h2 class="fs-15 text-uppercase text-muted mb-3 mt-12">
            Our Process
          </h2>
          <h3 class="display-4 mb-0 text-center px-xl-10 px-xxl-15">
            Find out everything you need to know about creating a business
            process model
          </h3>
          <div class="row gx-lg-8 gx-xl-12 process-wrapper text-center mt-9">
            <div class="col-md-4">
              <nuxt-img
                src="/assets/img/icons/lineal/light-bulb.svg"
                class="icon-svg icon-svg-md text-primary mb-3"
                alt="photo"
              />
              <h4 class="mb-1">1. Concept</h4>
              <p>
                Nulla vitae elit libero elit non porta gravida eget metus cras.
              </p>
            </div>
            <!--/column -->
            <div class="col-md-4">
              <nuxt-img
                src="/assets/img/icons/lineal/settings-3.svg"
                class="icon-svg icon-svg-md text-red mb-3"
                alt="photo"
              />
              <h4 class="mb-1">2. Prepare</h4>
              <p>
                Nulla vitae elit libero elit non porta gravida eget metus cras.
              </p>
            </div>
            <!--/column -->
            <div class="col-md-4">
              <nuxt-img
                src="/assets/img/icons/lineal/design.svg"
                class="icon-svg icon-svg-md text-leaf mb-3"
                alt="photo"
              />
              <h4 class="mb-1">3. Retouch</h4>
              <p>
                Nulla vitae elit libero elit non porta gravida eget metus cras.
              </p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
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
