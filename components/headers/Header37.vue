<template>
  <header class="wrapper bg-light">
    <nav
      :class="`navbar navbar-expand-lg center-nav navbar-light navbar-bg-light  ${
        addClass2 ? 'fixed navbar-clone' : ''
      } ${
        addClass ? 'navbar-clone navbar-stick navbar-light' : ' navbar-unstick'
      } `"
    >
      <div class="container flex-lg-row flex-nowrap align-items-center">
        <div class="navbar-brand w-100">
          <nuxt-link to="/">
            <nuxt-img
              src="/assets/img/logo.png"
              srcset="/assets/img/logo@2x.png 2x"
              alt="photo"
            />
          </nuxt-link>
        </div>
        <div
          class="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
          id="ofCanvasBody"
        >
          <div class="offcanvas-header d-lg-none">
            <h3 class="text-white fs-30 mb-0">Sandbox</h3>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              @click="menuClose"
            ></button>
          </div>
          <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul class="navbar-nav">
              <HeadersComponentsMenu />
            </ul>
            <!-- /.navbar-nav -->
            <div class="offcanvas-footer d-lg-none">
              <div>
                <a href="mailto:first.last@email.com" class="link-inverse"
                  >info@email.com</a
                >
                <br />
                00 (123) 456 78 90 <br />
                <nav class="nav social social-white mt-4">
                  <HeadersComponentsSocials />
                </nav>
                <!-- /.social -->
              </div>
            </div>
            <!-- /.offcanvas-footer -->
          </div>
          <!-- /.offcanvas-body -->
        </div>
        <!-- /.navbar-collapse -->
        <div class="navbar-other w-100 d-flex ms-auto">
          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-search"
                ><i class="uil uil-search"></i
              ></a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link position-relative d-flex flex-row align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-cart"
              >
                <i class="uil uil-shopping-cart"></i>
                <span class="badge badge-cart bg-primary">{{
                  pageItems.length
                }}</span>
              </a>
            </li>
            <li class="nav-item d-lg-none">
              <button class="hamburger offcanvas-nav-btn" @click="menuOpen">
                <span></span>
              </button>
            </li>
          </ul>
          <!-- /.navbar-nav -->
        </div>
        <!-- /.navbar-other -->
        <div
          id="offcanvasBackdrop"
          @click="menuClose"
          class="offcanvas-backdrop fade"
          style="display: none"
        ></div>
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.navbar -->
    <div
      class="offcanvas offcanvas-end bg-light"
      id="offcanvas-cart"
      data-bs-scroll="true"
    >
      <div class="offcanvas-header">
        <h3 class="mb-0">Your Cart</h3>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body d-flex flex-column">
        <div
          class="shopping-cart"
          style="max-height: calc(100vh - 280px); overflow-y: auto"
        >
          <div
            v-if="pageItems.length"
            v-for="(elm, i) in pageItems"
            :key="i"
            class="shopping-cart-item d-flex justify-content-between mb-4"
          >
            <div class="d-flex flex-row">
              <figure class="rounded w-17">
                <nuxt-link to="/shop-product"
                  ><nuxt-img :src="elm.imgSrc" alt="photo"
                /></nuxt-link>
              </figure>
              <div class="w-100 ms-4">
                <h3 class="post-title fs-16 lh-xs mb-1">
                  <nuxt-link to="/shop-product" class="link-dark">{{
                    elm.title
                  }}</nuxt-link>
                </h3>
                <p class="price fs-sm" v-if="elm.oldPrice">
                  <del
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
                <p class="price fs-sm" v-else>
                  <span class="amount">${{ elm.price.toFixed(2) }}</span>
                </p>
                <div class="form-select-wrapper">
                  <select
                    class="form-select form-select-sm"
                    @change="
                      (e) => {
                        handleQualtity(i, e.target.value);
                      }
                    "
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
              </div>
            </div>
            <div class="ms-2">
              <div
                class="link-dark cursor-pointer"
                @click="() => handleRemoveCart(elm.id)"
              >
                <i class="uil uil-trash-alt"></i>
              </div>
            </div>
          </div>
          <div v-else class="fs-22">Cart is empty</div>
          <!--/.shopping-cart-item -->

          <!--/.shopping-cart-item -->
        </div>
        <!-- /.shopping-cart-->
        <div class="offcanvas-footer flex-column text-center">
          <div class="d-flex w-100 justify-content-between mb-4">
            <span>Subtotal:</span>
            <span class="h6 mb-0">${{ totalPrice.toFixed(2) }}</span>
          </div>
          <nuxt-link
            to="/shop-checkout"
            v-if="pageItems.length"
            class="btn btn-primary btn-icon btn-icon-start rounded w-100 mb-4"
            ><i class="uil uil-credit-card fs-18"></i> Checkout</nuxt-link
          >
          <nuxt-link
            to="/shop"
            v-else
            class="btn btn-primary btn-icon btn-icon-start rounded w-100 mb-4"
            ><i class="uil uil-shopping-bag fs-18"></i> Shop Now</nuxt-link
          >
          <p class="fs-14 mb-0">Free shipping on all orders over $50</p>
        </div>
        <!-- /.offcanvas-footer-->
      </div>
      <!-- /.offcanvas-body -->
    </div>
    <!-- /.offcanvas -->
    <div
      class="offcanvas offcanvas-top bg-light"
      id="offcanvas-search"
      data-bs-scroll="true"
    >
      <div class="container d-flex flex-row py-6">
        <form @submit.prevent="() => {}" class="search-form w-100">
          <input
            type="text"
            class="form-control"
            placeholder="Type keyword and hit enter"
          />
        </form>
        <!-- /.search-form -->
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <!-- /.container -->
    </div>
    <!-- /.offcanvas -->
  </header>
</template>

<script setup>
const menuOpen = () => {
  document.getElementById("ofCanvasBody").classList.toggle("show");
  document.getElementById("offcanvasBackdrop").style.display = "block";
  document.getElementById("offcanvasBackdrop").classList.toggle("show");
};

const menuClose = () => {
  document.getElementById("ofCanvasBody").classList.toggle("show");
  document.getElementById("offcanvasBackdrop").classList.toggle("show");
  setTimeout(() => {
    document.getElementById("offcanvasBackdrop").style.display = "none";
  }, 300);
};

const addClass = ref(false);
const addClass2 = ref(false);

const handleScroll = () => {
  addClass2.value = window.scrollY >= 200;
  addClass.value = window.scrollY >= 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

import { cartProducts } from "../../composables/states";

const pageItems = ref([]);
const totalPrice = ref(0);

watch(cartProducts(), () => {
  totalPrice.value = cartProducts().value.reduce(
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
  totalPrice.value = cartProducts().value.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  pageItems.value = cartProducts().value;
});
const quantityOptions = ref([1, 2, 3, 4, 5, 6]);
</script>

<style lang="scss" scoped></style>
