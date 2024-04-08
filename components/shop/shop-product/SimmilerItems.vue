<template>
  <section class="wrapper bg-gray">
    <div class="container py-14 py-md-16">
      <h3 class="h2 mb-6 text-center">You Might Also Like</h3>
      <div class="swiper-container blog grid-view shop mb-6">
        <Swiper
          :space-between="30"
          :pagination="{ el: '.ssipb', clickable: true }"
          :modules="[Pagination]"
          :grab-cursor="true"
          :breakpoints="{
            500: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }"
        >
          <SwiperSlide v-for="(elm, i) in shoplist" :key="i">
            <div class="project item">
              <figure class="rounded mb-6">
                <nuxt-img :src="elm.imgSrc" alt="photo" />
                <a
                  class="item-like"
                  href="#"
                  data-bs-toggle="white-tooltip"
                  title="Add to wishlist"
                  ><i class="uil uil-heart"></i
                ></a>
                <a
                  class="item-view"
                  href="#"
                  data-bs-toggle="white-tooltip"
                  title="Quick view"
                  ><i class="uil uil-eye"></i
                ></a>
                <a
                  href="#"
                  class="item-cart"
                  @click="() => addProductToCart(elm.id)"
                  ><i class="uil uil-shopping-bag"></i>
                  {{
                    isAddedToCartProducts(elm.id)
                      ? "Already Added"
                      : "Add To Cart"
                  }}</a
                >
                <span
                  v-if="elm.sale"
                  class="avatar bg-pink text-white w-10 h-10 position-absolute text-uppercase fs-13"
                  style="top: 1rem; left: 1rem"
                  ><span>Sale!</span></span
                >

                <span
                  v-if="elm.new"
                  class="avatar bg-aqua text-white w-10 h-10 position-absolute text-uppercase fs-13"
                  style="top: 1rem; left: 1rem"
                  ><span>New!</span></span
                >
              </figure>
              <div class="post-header">
                <div
                  class="d-flex flex-row align-items-center justify-content-between mb-2"
                >
                  <div class="post-category text-ash mb-0">Shoes</div>
                  <span
                    v-if="elm.ratings"
                    :class="`ratings ${elm.ratings}`"
                  ></span>
                </div>
                <h2 class="post-title h3 fs-22">
                  <nuxt-link to="/shop-product" class="link-dark">{{
                    elm.title
                  }}</nuxt-link>
                </h2>
                <p class="price">
                  <del v-if="elm.oldPrice"
                    ><span class="amount"
                      >${{ elm.oldPrice.toFixed(2) }}</span
                    ></del
                  >
                  {{ "  " }}
                  <ins
                    ><span class="amount"
                      >${{ elm.price.toFixed(2) }}</span
                    ></ins
                  >
                </p>
              </div>
              <!-- /.post-header -->
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-controls">
          <div
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal ssipb"
          ></div>
        </div>

        <!-- /.swiper -->
      </div>
      <!-- /.swiper-container -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { shoplist } from "~/data/shop";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import {
  addProductToCart,
  isAddedToCartProducts,
} from "../../../composables/states";
</script>

<style lang="scss" scoped></style>
