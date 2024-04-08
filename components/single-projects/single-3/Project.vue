<template>
  <section class="wrapper bg-light wrapper-border">
    <div class="container pt-14 pt-md-16 pb-13 pb-md-15">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <article>
            <h2 class="display-6 mb-4">About the Project</h2>
            <div class="row gx-0">
              <div class="col-md-9 text-justify">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Integer posuere
                  erat a ante venenatis. Etiam porta sem malesuada magna mollis
                  euismod. Aenean lacinia bibendum.
                </p>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Cras mattis
                  consectetur purus sit amet fermentum. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur et. Donec sed odio
                  dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Sed posuere consectetur est at lobortis.
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor.
                </p>
              </div>
              <!--/column -->
              <div class="col-md-2 ms-auto">
                <ul class="list-unstyled">
                  <li>
                    <h5 class="mb-1">Date</h5>
                    <p>17 May 2018</p>
                  </li>
                  <li>
                    <h5 class="mb-1">Client Name</h5>
                    <p>Cool House</p>
                  </li>
                </ul>

                <nuxt-link to="/single-project" class="more hover"
                  >See Project</nuxt-link
                >
              </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </article>
          <!-- /.project -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="container-fluid px-md-6">
      <div class="swiper-container blog grid-view mb-17 mb-md-19">
        <Swiper
          :space-between="30"
          :pagination="{ el: '.pagi4', clickable: true }"
          :modules="[Pagination, Navigation]"
          :navigation="{
            prevEl: '.snpb1',
            nextEl: '.snnb1',
          }"
          :breakpoints="{
            500: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }"
          :grab-cursor="true"
        >
          <SwiperSlide v-for="(elm, i) in projects3" :key="i">
            <figure class="rounded">
              <nuxt-img :src="elm.image.src" alt="photo" />
            </figure>
          </SwiperSlide>
        </Swiper>

        <div class="swiper-controls">
          <div class="swiper-navigation">
            <div class="swiper-button swiper-button-prev snpb1"></div>
            <div class="swiper-button swiper-button-next snnb1"></div>
          </div>
          <div
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagi4"
          ></div>
        </div>
        <!-- /.swiper -->
      </div>
      <!-- /.swiper-container -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { projects3 } from "~/data/projects";
</script>

<style lang="scss" scoped></style>
