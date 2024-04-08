<template>
  <section class="wrapper bg-light">
    <div class="container pt-12 pt-md-13 pb-13 pb-md-15">
      <div class="row mb-3">
        <div class="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
          <nuxt-img
            src="/assets/img/icons/lineal/team.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="photo"
          />
          <h2 class="display-4 mb-3 px-lg-14">
            Save your time and money by choosing our professional team.
          </h2>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="position-relative">
        <div
          class="shape rounded-circle bg-soft-yellow rellax w-16 h-16"
          data-rellax-speed="1"
          style="bottom: 0.5rem; right: -1.7rem"
        ></div>
        <div
          class="shape rounded-circle bg-line red rellax w-16 h-16"
          data-rellax-speed="1"
          style="top: 0.5rem; left: -1.7rem"
        ></div>
        <div class="swiper-container dots-closer mb-6">
          <Swiper
            :space-between="5"
            :pagination="{ el: '.spb1', clickable: true }"
            :modules="[Pagination]"
            :grab-cursor="true"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }"
          >
            <SwiperSlide v-for="(item, i) in teamMembers2" :key="i">
              <div class="item-inner">
                <div class="card">
                  <div class="card-body">
                    <nuxt-img
                      class="rounded-circle w-15 mb-4"
                      :src="item.avatarSrc"
                      alt="photo"
                    />
                    <h4 class="mb-1">{{ item.name }}</h4>
                    <div class="meta mb-2">{{ item.position }}</div>
                    <p class="mb-2">{{ item.description }}</p>
                    <nav class="nav social mb-0">
                      <a
                        v-for="(social, i) in item.socialLinks"
                        :key="i"
                        :href="social.link"
                      >
                        <i :class="social.iconClass"></i>
                      </a>
                    </nav>
                  </div>
                </div></div
            ></SwiperSlide>
          </Swiper>
          <div class="swiper-controls">
            <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb1"
            ></div>
          </div>

          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.position-relative -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { teamMembers2 } from "~/data/team";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
