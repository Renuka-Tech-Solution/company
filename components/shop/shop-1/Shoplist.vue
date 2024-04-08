<template>
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="row align-items-center mb-10 position-relative zindex-1">
        <div class="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
          <h2 class="display-6">New Arrivals</h2>
          <nav class="d-inline-block" aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Shop</li>
            </ol>
          </nav>
          <!-- /nav -->
        </div>
        <!--/column -->
        <div class="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
          <div class="form-select-wrapper">
            <select class="form-select">
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="newness">Sort by newness</option>
              <option value="price: low to high">
                Sort by price: low to high
              </option>
              <option value="price: high to low">
                Sort by price: high to low
              </option>
            </select>
          </div>
          <!--/.form-select-wrapper -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="grid grid-view projects-masonry shop mb-13">
        <div class="row gx-md-8 gy-10 gy-md-13 isotope">
          <div
            v-for="(elm, i) in shoplist"
            :key="i"
            class="project item col-md-6 col-xl-4"
          >
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
              <div
                class="item-cart cursor-pointer"
                @click="() => addProductToCart(elm.id)"
              >
                <i class="uil uil-shopping-bag"></i>
                {{
                  isAddedToCartProducts(elm.id)
                    ? "Already Added"
                    : "Add To Cart"
                }}
              </div>
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
                  ><span class="amount">${{ elm.price.toFixed(2) }}</span></ins
                >
              </p>
            </div>
            <!-- /.post-header -->
          </div>
          <!-- /.item -->

          <!-- /.item -->

          <!-- /.item -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid -->
      <nav class="d-flex justify-content-center" aria-label="pagination">
        <CommonPagination />
        <!-- /.pagination -->
      </nav>
      <!-- /nav -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { shoplist } from "~/data/shop";
import {
  addProductToCart,
  isAddedToCartProducts,
} from "../../../composables/states";
</script>

<style lang="scss" scoped></style>
