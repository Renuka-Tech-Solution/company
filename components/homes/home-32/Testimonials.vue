<template>
  <section class="wrapper gradient-8 bg-lines">
    <div class="container py-15 pt-md-0 pb-md-17 text-center">
      <div class="row text-center">
        <div class="col-xl-9 mx-auto">
          <div class="card shadow-lg mt-md-n16 mb-15 mb-md-17">
            <div class="card-body p-9 p-xl-12">
              <div class="row gx-0">
                <div class="col-xxl-9 mx-auto">
                  <div
                    class="swiper-container dots-closer mb-6"
                    data-margin="30"
                    data-dots="true"
                  >
                    <Swiper
                      :space-between="30"
                      :pagination="{ el: '.spb11', clickable: true }"
                      :modules="[Pagination]"
                      :grab-cursor="true"
                      :breakpoints="{
                        500: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                        1200: { slidesPerView: 1 },
                      }"
                    >
                      <SwiperSlide
                        v-for="(elm, i) in testimonials2.slice(0, 3)"
                        :key="i"
                      >
                        <span class="ratings five mb-3"></span>
                        <blockquote class="border-0 fs-lg mb-2">
                          <p>{{ elm.quote }}</p>
                          <div
                            class="blockquote-details justify-content-center text-center"
                          >
                            <nuxt-img
                              class="rounded-circle w-12"
                              :src="elm.avatarSrc"
                              alt="photo"
                            />
                            <div class="info">
                              <h5 class="mb-1">{{ elm.name }}</h5>
                              <p class="mb-0">{{ elm.role }}</p>
                            </div>
                          </div>
                        </blockquote></SwiperSlide
                      >
                    </Swiper>
                    <div class="swiper-controls">
                      <div
                        class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb11"
                      ></div>
                    </div>

                    <!--/.swiper -->
                  </div>
                  <!-- /.swiper-container -->
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
          <h2 class="fs-16 text-uppercase text-white mb-3">
            Join Our Community
          </h2>
          <h3 class="display-3 text-white mb-6">
            We are
            <span class="underline-2 underline-gradient-6"
              ><em>trusted</em></span
            >
            by over 5000+ clients. Join them now and grow your business.
          </h3>
          <nuxt-link to="/signup" class="btn btn-white">Join Us</nuxt-link>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { testimonials2 } from "~/data/testimonials";
</script>

<style lang="scss" scoped></style>
