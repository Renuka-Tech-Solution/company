<template>
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16 pt-12">
      <div class="row gy-10">
        <div class="col-lg-9 order-lg-2">
          <div class="row align-items-center mb-10 position-relative zindex-1">
            <div class="col-md-7 col-xl-8 pe-xl-20">
              <h2 class="display-6 mb-1">New Arrivals</h2>
              <p class="mb-0 text-muted">Showing 1–9 of 30 results</p>
            </div>
            <!--/column -->
            <div class="col-md-5 col-xl-4 ms-md-auto text-md-end mt-5 mt-md-0">
              <div class="form-select-wrapper">
                <select class="form-select">
                  <option
                    v-for="(option, index) in sortOptions"
                    :key="index"
                    :value="option.value"
                  >
                    {{ option.label }}
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
              <!-- /.item -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.grid -->
          <nav class="d-flex" aria-label="pagination">
            <CommonPagination />
            <!-- /.pagination -->
          </nav>
          <!-- /nav -->
        </div>
        <!-- /column -->
        <aside class="col-lg-3 sidebar">
          <div class="widget mt-1">
            <h4 class="widget-title mb-3">Categories</h4>
            <ul class="list-unstyled ps-0">
              <li
                v-for="(category, index) in categories"
                :key="index"
                class="mb-1"
              >
                <div
                  class="align-items-center rounded cursor-pointer"
                  :class="{ collapsed: !category.expanded }"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#' + category.collapseId"
                  :aria-expanded="category.expanded ? 'true' : 'false'"
                  @click="toggleCategory(index)"
                >
                  {{ category.name }}
                  <span class="fs-sm text-muted ms-1"
                    >({{ category.count }})</span
                  >
                </div>
                <div
                  :class="{
                    'collapse show': category.expanded,
                    collapse: !category.expanded,
                  }"
                  :id="category.collapseId"
                >
                  <ul class="btn-toggle-nav list-unstyled ps-2">
                    <li
                      v-for="(subcategory, subIndex) in category.subcategories"
                      :key="subIndex"
                    >
                      <a href="#" class="link-body">{{ subcategory }}</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <!-- /.widget -->
          <div class="widget">
            <h4 class="widget-title mb-3">Rating</h4>
            <div
              v-for="(rating, index) in ratings"
              :key="index"
              class="form-check mb-1"
            >
              <input
                class="form-check-input"
                type="radio"
                :name="rating.name"
                :id="rating.id"
                :checked="rating.checked"
              />
              <label class="form-check-label" :for="rating.id">
                <span :class="rating.spanClass"></span>
              </label>
            </div>
            <!-- /.form-check -->
          </div>
          <!-- /.widget -->
          <div class="widget">
            <h4 class="widget-title mb-3">Size</h4>
            <div
              v-for="(size, index) in sizes"
              :key="index"
              class="form-check mb-1"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :id="size.id"
                :checked="size.checked"
              />
              <label class="form-check-label" :for="size.id">
                {{ size.label }}
                <span class="fs-sm text-muted ms-1">({{ size.count }})</span>
              </label>
            </div>
          </div>
          <!-- /.widget -->
          <div class="widget">
            <h4 class="widget-title mb-3">Price</h4>
            <div
              v-for="(priceRange, index) in priceRanges"
              :key="index"
              class="form-check mb-1"
            >
              <input
                class="form-check-input"
                type="radio"
                :name="priceRange.name"
                :id="priceRange.id"
                :checked="priceRange.checked"
              />
              <label class="form-check-label" :for="priceRange.id">
                {{ priceRange.label }}
              </label>
            </div>
            <!-- /.form-check -->
            <div class="row">
              <div class="col-7 col-md-5 col-lg-12 col-xl-10 col-xxl-10">
                <div class="d-flex align-items-center mt-4">
                  <input
                    type="number"
                    class="form-control form-control-sm"
                    placeholder="$0.00"
                    min="0"
                  />
                  <div class="text-muted mx-2">‒</div>
                  <input
                    type="number"
                    class="form-control form-control-sm"
                    placeholder="$50.00"
                    max="50"
                  />
                </div>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.widget -->
        </aside>
        <!-- /column .sidebar -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { shoplist } from "~/data/shop";
const sortOptions = ref([
  { label: "Sort by popularity", value: "popularity" },
  { label: "Sort by average rating", value: "rating" },
  { label: "Sort by newness", value: "newness" },
  { label: "Sort by price: low to high", value: "price_low_high" },
  { label: "Sort by price: high to low", value: "price_high_low" },
]);

const ratings = ref([
  { name: "rating", id: "rating5", checked: true, spanClass: "ratings five" },
  { name: "rating", id: "rating4", checked: false, spanClass: "ratings four" },
  { name: "rating", id: "rating3", checked: false, spanClass: "ratings three" },
  { name: "rating", id: "rating2", checked: false, spanClass: "ratings two" },
  { name: "rating", id: "rating1", checked: false, spanClass: "ratings one" },
]);

const sizes = ref([
  { id: "xs", label: "XS", checked: true, count: 23 },
  { id: "s", label: "S", checked: false, count: 253 },
  { id: "m", label: "M", checked: false, count: 65 },
  { id: "l", label: "L", checked: false, count: 156 },
  { id: "xl", label: "XL", checked: false, count: 74 },
]);

const priceRanges = ref([
  { name: "price", id: "price1", label: "$0.00 - $50.00", checked: true },
  { name: "price", id: "price2", label: "$50.00 - $100.00", checked: false },
  { name: "price", id: "price3", label: "$100.00 - $150.00", checked: false },
  { name: "price", id: "price4", label: "$150.00 - $200.00", checked: false },
]);

const categories = ref([
  {
    name: "Clothing",
    count: 21,
    collapseId: "clothing-collapse",
    expanded: true,
    subcategories: ["Dresses", "Knitwear", "Jeans"],
  },
  {
    name: "Electronics",
    count: 19,
    collapseId: "electronics-collapse",
    expanded: false,
    subcategories: ["Headphones", "Computers", "Cameras", "Annually"],
  },
  {
    name: "Shoes",
    count: 12,
    collapseId: "shoes-collapse",
    expanded: false,
    subcategories: ["Sneakers", "Sandals", "Boots"],
  },
  {
    name: "Home & Kitchen",
    count: 16,
    collapseId: "home-collapse",
    expanded: false,
    subcategories: ["Clocks", "Kettles", "Kitchenware"],
  },
]);

function toggleCategory(index) {
  categories.value[index].expanded = !categories.value[index].expanded;
}
import {
  addProductToCart,
  isAddedToCartProducts,
} from "../../../composables/states";
</script>

<style lang="scss" scoped></style>
