<template>
  <section id="about" class="scrollSpysection">
    <div class="wrapper bg-light">
      <div class="container py-14 py-md-17">
        <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div class="col-lg-4">
            <h2
              class="fs-15 text-uppercase text-line text-primary text-center mb-3"
            >
              Meet the Team
            </h2>
            <h3 class="display-5 mb-5">
              Save your time and money by choosing our professional team.
            </h3>
            <p>
              Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros tempus porttitor.
            </p>
            <a href="#" class="btn btn-primary rounded-pill mt-3"
              >See All Members</a
            >
          </div>
          <!--/column -->
          <div class="col-lg-8">
            <div class="swiper-container text-center mb-6">
              <Swiper
                :space-between="30"
                :pagination="{ el: '.spb2', clickable: true }"
                :modules="[Pagination]"
                :grab-cursor="true"
                :breakpoints="{
                  500: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1200: { slidesPerView: 3 },
                }"
              >
                <SwiperSlide v-for="(elm, i) in teamMembers3" :key="i">
                  <nuxt-img
                    class="rounded-circle w-20 mx-auto mb-4"
                    :src="elm.avatarSrc"
                    alt="photo"
                  />
                  <h4 class="mb-1">{{ elm.name }}</h4>
                  <div class="meta mb-2">{{ elm.position }}</div>
                  <p class="mb-2">{{ elm.description }}</p>
                  <nav
                    class="nav social justify-content-center text-center mb-0"
                  >
                    <a
                      v-for="(elm2, i2) in elm.socialLinks"
                      :key="i2"
                      :href="elm2.link"
                      ><i :class="elm2.iconClass"></i
                    ></a>
                  </nav>
                </SwiperSlide>
              </Swiper>
              <div class="swiper-controls">
                <div
                  class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb2"
                ></div>
              </div>
              <!-- /.swiper -->
            </div>
            <!-- /.swiper-container -->
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { teamMembers3 } from "~/data/team";
</script>

<style lang="scss" scoped></style>
