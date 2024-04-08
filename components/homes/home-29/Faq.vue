<template>
  <section
    class="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 bg-content mt-20"
    style="background-image: url(/assets/img/photos/bg23.png)"
  >
    <div
      class="container py-14 pt-md-16 pt-lg-0 pb-md-17 position-relative"
      style="z-index: 2"
    >
      <div class="row">
        <div class="col-xl-11 col-xxl-10 mx-auto">
          <div class="mt-lg-n20 mt-xl-n22 mb-14 mb-md-16 rounded-xl">
            <div
              class="player"
              data-plyr-provider="vimeo"
              data-plyr-embed-id="165101721"
            ></div>
          </div>
          <div class="position-relative">
            <nuxt-img
              src="/assets/img/svg/doodle7.svg"
              class="h-7 position-absolute d-none d-lg-block"
              data-delay="1800"
              style="top: -90%; right: -3%"
              alt="photo"
            />
            <nuxt-img
              src="/assets/img/svg/doodle8.svg"
              class="h-14 position-absolute d-none d-lg-block"
              data-delay="1800"
              style="top: -20%; left: -12%"
              alt="photo"
            />
            <h2 class="fs-16 text-uppercase text-muted mb-3 text-center">
              FAQ
            </h2>
            <h3 class="display-3 mb-11 px-lg-8 px-xl-11 text-center">
              If you don't see an
              <span class="text-gradient gradient-7">answer</span> to your
              question, you can send us an email from our contact form.
            </h3>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-0">
              <div id="accordionExample-4" class="accordion-wrapper">
                <div
                  v-for="(elm, i) in faq3.slice(0, 3)"
                  :key="i"
                  class="card accordion-item shadow-lg"
                >
                  <div class="card-header" :id="`heading4-${elm.id}`">
                    <button
                      class="collapsed"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse4-${elm.id}`"
                      aria-expanded="false"
                      :aria-controls="`collapse4-${elm.id}`"
                    >
                      {{ elm.question }}
                    </button>
                  </div>
                  <!--/.card-header -->
                  <div
                    :id="`collapse4-${elm.id}`"
                    class="collapse"
                    :aria-labelledby="`heading4-${elm.id}`"
                    data-bs-parent="#accordionExample-4"
                  >
                    <div class="card-body">
                      <p>{{ elm.answer }}</p>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.accordion-collapse -->
                </div>
                <!-- /.card -->
              </div>
              <!-- /.accordion-wrapper -->
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <div id="accordionExample-3" class="accordion-wrapper">
                <div
                  v-for="(elm, i) in faq2.slice(0, 3)"
                  :key="i"
                  class="card accordion-item"
                >
                  <div class="card-header" :id="`heading3-${elm.id}`">
                    <button
                      class="collapsed"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse3-${elm.id}`"
                      aria-expanded="false"
                      :aria-controls="`collapse3-${elm.id}`"
                    >
                      {{ elm.question }}
                    </button>
                  </div>
                  <!--/.card-header -->
                  <div
                    :id="`collapse3-${elm.id}`"
                    class="collapse"
                    :aria-labelledby="`heading3-${elm.id}`"
                    data-bs-parent="#accordionExample-3"
                  >
                    <div class="card-body">
                      <p>{{ elm.answer }}</p>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.accordion-collapse -->
                </div>
                <!-- /.card -->
              </div>
              <!-- /.accordion-wrapper -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { faq2, faq3 } from "~/data/faq";
</script>

<style lang="scss" scoped></style>
