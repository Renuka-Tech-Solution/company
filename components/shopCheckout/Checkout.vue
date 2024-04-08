<template>
  <section class="wrapper bg-light">
    <div class="container pt-12 pt-md-14 pb-14 pb-md-16">
      <div class="row gx-md-8 gx-xl-12 gy-12">
        <div class="col-lg-8">
          <div class="alert alert-primary alert-icon mb-6" role="alert">
            <i class="uil uil-exclamation-circle"></i> Already have an account?
            <a
              href="#"
              data-bs-target="#modal-signin"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
              class="alert-link hover"
              >Sign in</a
            >
            for faster checkout experience.
          </div>
          <h3 class="mb-4">Billing address</h3>
          <form class="needs-validation" @submit.prevent="() => {}">
            <div class="row g-3">
              <div class="col-sm-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    value=""
                    required
                  />
                  <label class="form-label">First name</label>
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    value=""
                    required
                  />
                  <label class="form-label">Last name</label>
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="you@example.com"
                    required
                  />
                  <label class="form-label">Email</label>
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="1234 Main St"
                    required
                  />
                  <label class="form-label">Address</label>
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Apartment or suite"
                  />
                  <label class="form-label"
                    >Address 2 <span class="text-muted">(Optional)</span></label
                  >
                </div>
              </div>
              <div class="col-md-5">
                <div class="form-select-wrapper">
                  <select class="form-select" id="country" required>
                    <option value="">Country</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-select-wrapper">
                  <select class="form-select" id="state" required>
                    <option value="">State</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Zip Code"
                    required
                  />
                  <label class="form-label">Zip Code</label>
                  <div class="invalid-feedback">Zip code required.</div>
                </div>
              </div>
            </div>
            <hr class="mt-7 mb-6" />
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="same-address"
              />
              <label class="form-check-label"
                >Shipping address is the same as my billing address</label
              >
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label"
                >Save this information for next time</label
              >
            </div>
            <hr class="mt-7 mb-6" />
            <h3 class="mb-4">Payment</h3>
            <div class="mt-3 mb-6">
              <div class="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  checked
                  required
                />
                <label class="form-check-label">Credit card</label>
              </div>
              <div class="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  required
                />
                <label class="form-check-label" for="debit">Debit card</label>
              </div>
              <div class="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  required
                />
                <label class="form-check-label" for="paypal">PayPal</label>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-8">
                <div class="row gy-3 gx-3">
                  <div class="col-md-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="cc-number"
                        placeholder="Credit card number"
                        required
                      />
                      <label for="cc-number" class="form-label"
                        >Credit card number</label
                      >
                      <div class="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="cc-name"
                        placeholder="Name on card"
                        required
                      />
                      <label for="cc-name" class="form-label"
                        >Name on card</label
                      >
                      <div class="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="cc-expiration"
                        placeholder="Expiration"
                        required
                      />
                      <label for="cc-expiration" class="form-label"
                        >Expiration</label
                      >
                      <div class="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="cc-cvv"
                        placeholder="CVV"
                        required
                      />
                      <label for="cc-cvv" class="form-label">CVV</label>
                      <div class="invalid-feedback">Security code required</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <!-- /column -->
        <div class="col-lg-4">
          <h3 class="mb-4">Order Summary</h3>
          <div class="shopping-cart mb-7">
            <div
              v-for="(elm, i) in pageItems"
              :key="i"
              class="shopping-cart-item d-flex justify-content-between mb-4"
            >
              <div class="d-flex flex-row d-flex align-items-center">
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
              </div>
              <div class="ms-2 d-flex align-items-center">
                <p class="price fs-sm">
                  <span class="amount">${{ elm.price }}</span>
                </p>
              </div>
            </div>

            <!--/.shopping-cart-item -->
          </div>
          <!-- /.shopping-cart-->
          <hr class="my-4" />
          <h3 class="mb-2">Shipping</h3>
          <div class="mb-5">
            <div class="form-check mb-2">
              <input
                id="standart"
                name="shippingMethod"
                :value="false"
                type="radio"
                class="form-check-input"
                v-model="expressDelivery"
                required
              />
              <label class="form-check-label" for="standart"
                >Free - Standart delivery</label
              >
              <small class="text-muted d-block"
                >Shipment may take 5-6 business days</small
              >
            </div>
            <div class="form-check">
              <input
                id="express"
                name="shippingMethod"
                type="radio"
                :disabled="pageItems.length < 1"
                :value="true"
                v-model="expressDelivery"
                class="form-check-input"
                required
              />
              <label class="form-check-label" for="express"
                >$10 - Express delivery</label
              >
              <small class="text-muted d-block"
                >Shipment may take 2-3 business days</small
              >
            </div>
          </div>
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
                <tr v-if="expressDelivery">
                  <td class="ps-0">
                    <strong class="text-dark">Shipping</strong>
                  </td>
                  <td class="pe-0 text-end">
                    <p class="price">$10</p>
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
          <a href="#" class="btn btn-primary rounded w-100 mt-4">Place Order</a>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
  <div class="modal fade" id="modal-signin" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content text-center">
        <div class="modal-body">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <h2 class="mb-3 text-start">Welcome Back</h2>
          <p class="lead mb-6 text-start">
            Fill your email and password to sign in.
          </p>
          <form class="text-start mb-3" @submit.prevent="() => {}">
            <div class="form-floating mb-4">
              <input type="email" class="form-control" placeholder="Email" />
              <label>Email</label>
            </div>
            <div class="form-floating password-field mb-4">
              <input
                type="password"
                autocomplete="password"
                class="form-control"
                placeholder="Password"
              />
              <span class="password-toggle"><i class="uil uil-eye"></i></span>
              <label>Password</label>
            </div>
            <a class="btn btn-primary rounded-pill btn-login w-100 mb-2"
              >Sign In</a
            >
          </form>
          <!-- /form -->
          <p class="mb-1"><a href="#" class="hover">Forgot Password?</a></p>
          <p class="mb-0">
            Don't have an account?
            <a
              href="#"
              data-bs-target="#modal-signup"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
              class="hover"
              >Sign up</a
            >
          </p>
          <div class="divider-icon my-4">or</div>
          <nav class="nav social justify-content-center text-center">
            <a href="#" class="btn btn-circle btn-sm btn-google"
              ><i class="uil uil-google"></i
            ></a>
            <a href="#" class="btn btn-circle btn-sm btn-facebook-f"
              ><i class="uil uil-facebook-f"></i
            ></a>
            <a href="#" class="btn btn-circle btn-sm btn-twitter"
              ><i class="uil uil-twitter"></i
            ></a>
          </nav>
          <!--/.social -->
        </div>
        <!--/.modal-content -->
      </div>
      <!--/.modal-body -->
    </div>
    <!--/.modal-dialog -->
  </div>
  <!--/.modal -->
  <div class="modal fade" id="modal-signup" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content text-center">
        <div class="modal-body">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <h2 class="mb-3 text-start">Sign up to Sandbox</h2>
          <p class="lead mb-6 text-start">
            Registration takes less than a minute.
          </p>
          <form class="text-start mb-3" @submit.prevent="() => {}">
            <div class="form-floating mb-4">
              <input type="text" class="form-control" placeholder="Name" />
              <label>Name</label>
            </div>
            <div class="form-floating mb-4">
              <input type="email" class="form-control" placeholder="Email" />
              <label>Email</label>
            </div>
            <div class="form-floating password-field mb-4">
              <input
                type="password"
                autocomplete="password"
                class="form-control"
                placeholder="Password"
              />
              <span class="password-toggle"><i class="uil uil-eye"></i></span>
              <label>Password</label>
            </div>
            <div class="form-floating password-field mb-4">
              <input
                type="password"
                autocomplete="password"
                class="form-control"
                placeholder="Confirm Password"
              />
              <span class="password-toggle"><i class="uil uil-eye"></i></span>
              <label>Confirm Password</label>
            </div>
            <a class="btn btn-primary rounded-pill btn-login w-100 mb-2"
              >Sign Up</a
            >
          </form>
          <!-- /form -->
          <p class="mb-0">
            Already have an account?
            <a
              href="#"
              data-bs-target="#modal-signin"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
              class="hover"
              >Sign in</a
            >
          </p>
          <div class="divider-icon my-4">or</div>
          <nav class="nav social justify-content-center text-center">
            <a href="#" class="btn btn-circle btn-sm btn-google"
              ><i class="uil uil-google"></i
            ></a>
            <a href="#" class="btn btn-circle btn-sm btn-facebook-f"
              ><i class="uil uil-facebook-f"></i
            ></a>
            <a href="#" class="btn btn-circle btn-sm btn-twitter"
              ><i class="uil uil-twitter"></i
            ></a>
          </nav>
          <!--/.social -->
        </div>
        <!--/.modal-content -->
      </div>
      <!--/.modal-body -->
    </div>
    <!--/.modal-dialog -->
  </div>
</template>

<script setup>
import { cartProducts } from "../../composables/states";
const expressDelivery = ref(false);

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
  () =>
    subTotalPrice.value -
    discount.value +
    ((expressDelivery.value && pageItems.value.length > 0) / 1) * 10
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
