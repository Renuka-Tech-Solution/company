<template>
  <section class="wrapper bg-light">
    <div class="container pt-12 pt-md-14 pb-14 pb-md-16">
      <div class="row gx-md-8 gx-xl-12 gy-12">
        <div class="col-lg-8">
          <div class="table-responsive">
            <table class="table text-center shopping-cart">
              <thead>
                <tr>
                  <th class="ps-0 w-25">
                    <div class="h4 mb-0 text-start">Product</div>
                  </th>
                  <th>
                    <div class="h4 mb-0">Price</div>
                  </th>
                  <th>
                    <div class="h4 mb-0">Quantity</div>
                  </th>
                  <th>
                    <div class="h4 mb-0">Total</div>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(elm, i) in pageItems" :key="i">
                  <td
                    class="option text-start d-flex flex-row align-items-center ps-0"
                  >
                    <figure class="rounded w-17">
                      <nuxt-link to="/shop-product"
                        ><nuxt-img :src="elm.imgSrc" alt="photo"
                      /></nuxt-link>
                    </figure>
                    <div class="w-100 ms-4">
                      <h3 class="post-title h6 lh-xs mb-1">
                        <nuxt-link to="/shop-product" class="link-dark">{{
                          elm.title
                        }}</nuxt-link>
                      </h3>
                      <div class="small">Color: Black</div>
                      <div class="small">Size: 43</div>
                    </div>
                  </td>
                  <td>
                    <p class="price" v-if="elm.oldPrice">
                      <del
                        ><span class="amount"
                          >${{ elm.oldPrice.toFixed(2) }}</span
                        ></del
                      >
                      <ins
                        ><span class="amount"
                          >${{ elm.price.toFixed(2) }}</span
                        ></ins
                      >
                    </p>
                    <p class="price" v-else>
                      <span class="amount">${{ elm.price.toFixed(2) }}</span>
                    </p>
                  </td>
                  <td>
                    <div class="form-select-wrapper">
                      <select
                        @change="
                          (e) => {
                            handleQualtity(i, e.target.value);
                          }
                        "
                        class="form-select form-select-sm mx-auto"
                      >
                        <option
                          v-for="(elm2, i2) in quantityOptions"
                          :value="elm2"
                          :key="i2"
                          :selected="elm2 == elm.quantity ? true : false"
                        >
                          {{ elm2 }}
                        </option>
                      </select>
                    </div>
                    <!--/.form-select-wrapper -->
                  </td>
                  <td>
                    <p class="price">
                      <span class="amount"
                        >${{ (elm.price * elm.quantity).toFixed(2) }}</span
                      >
                    </p>
                  </td>
                  <td class="pe-0">
                    <div
                      class="link-dark cursor-pointer"
                      @click="
                        () => {
                          handleRemoveCart(elm.id);
                        }
                      "
                    >
                      <i class="uil uil-trash-alt"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mb-5 fs-18" v-if="!pageItems.length">Cart is Empty</div>
            <nuxt-link
              to="/shop"
              v-if="!pageItems.length"
              class="btn btn-primary btn-icon btn-icon-start rounded mb-4"
              style="width: fit-content"
              ><i class="uil uil-shopping-bag fs-18"></i> Shop Now</nuxt-link
            >
          </div>
          <!-- /.table-responsive -->
          <div class="row mt-0 gy-4">
            <div class="col-md-8 col-lg-7">
              <div class="form-floating input-group">
                <input
                  type="url"
                  class="form-control"
                  placeholder="Enter promo code"
                />
                <label>Enter promo code</label>
                <button class="btn btn-primary" type="button">Apply</button>
              </div>
              <!-- /.input-group -->
            </div>
            <!-- /column -->
            <div class="col-md-4 col-lg-5 ms-auto ms-lg-0 text-md-end">
              <a href="#" class="btn btn-primary rounded">Update Cart</a>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /column -->
        <div class="col-lg-4">
          <h3 class="mb-4">Order Summary</h3>
          <div class="table-responsive">
            <table class="table table-order">
              <tbody>
                <tr>
                  <td class="ps-0">
                    <strong class="text-dark">Subtotal</strong>
                  </td>
                  <td class="pe-0 text-end">
                    <p class="price">${{ subTotalPrice.toFixed(2) }}</p>
                  </td>
                </tr>
                <tr>
                  <td class="ps-0">
                    <strong class="text-dark">Discount (5%)</strong>
                  </td>
                  <td class="pe-0 text-end">
                    <p class="price text-red">-${{ discount.toFixed(2) }}</p>
                  </td>
                </tr>
                <tr>
                  <td class="ps-0">
                    <strong class="text-dark">Shipping</strong>
                  </td>
                  <td class="pe-0 text-end">
                    <p class="price">${{ totalQuantity * 10 }}</p>
                  </td>
                </tr>
                <tr>
                  <td class="ps-0">
                    <strong class="text-dark">Grand Total</strong>
                  </td>
                  <td class="pe-0 text-end">
                    <p class="price text-dark fw-bold">
                      ${{ finalPrice.toFixed(2) }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nuxt-link to="/shop-checkout" class="btn btn-primary rounded w-100 mt-4"
            >Proceed to Checkout</nuxt-link
          >
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { cartProducts } from "../../composables/states";

const pageItems = ref([]);
const subTotalPrice = ref(0);
const discount = computed(() => (subTotalPrice.value / 100) * 5);
const totalQuantity = computed(() =>
  pageItems.value.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity / 1,
    0
  )
);

const finalPrice = computed(
  () => subTotalPrice.value - discount.value + (totalQuantity.value / 1) * 10
);
watch(cartProducts(), () => {
  subTotalPrice.value = cartProducts().value.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  pageItems.value = cartProducts().value;
});

const handleRemoveCart = (id) => {
  cartProducts().value = cartProducts().value.filter((elm) => elm.id != id);
};

const handleQualtity = (index, quantity) => {
  const items = [...cartProducts().value];
  items[index].quantity = quantity;
  cartProducts().value = items;
};

onMounted(() => {
  subTotalPrice.value = cartProducts().value.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  pageItems.value = cartProducts().value;
});

const quantityOptions = ref([1, 2, 3, 4, 5, 6]);
</script>

<style lang="scss" scoped></style>
