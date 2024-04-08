<template>
  <section class="wrapper bg-light angled upper-end lower-end">
    <div class="container py-14 pt-md-14 pb-md-18">
      <div class="row gy-6 mb-14 mb-md-18">
        <div class="col-lg-4">
          <h2 class="fs-16 text-uppercase text-muted mt-lg-18 mb-3">
            Our Pricing
          </h2>
          <h3 class="display-4 mb-3">We offer great and premium prices.</h3>
          <p>
            Enjoy a <a href="#" class="hover">free 30-day trial</a> and
            experience the full service. No credit card required!
          </p>
          <nuxt-link to="/pricing" class="btn btn-primary rounded-pill mt-2"
            >See All Prices</nuxt-link
          >
        </div>
        <!--/column -->
        <div class="col-lg-7 offset-lg-1 pricing-wrapper">
          <div
            class="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end"
          >
            <p class="mb-0 pe-3">Monthly</p>
            <div
              class="pricing-switchers"
              @click="() => (isYearly = !isYearly)"
            >
              <div
                :class="`pricing-switcher ${
                  isYearly ? '' : 'pricing-switcher-active'
                } `"
              ></div>
              <div
                :class="`pricing-switcher ${
                  !isYearly ? '' : 'pricing-switcher-active'
                } `"
              ></div>
              <div class="switcher-button bg-primary"></div>
            </div>
            <p class="mb-0 ps-3">
              Yearly <span class="text-red">(Save 30%)</span>
            </p>
          </div>
          <div class="row gy-6 position-relative mt-5">
            <div
              class="shape bg-dot red rellax w-16 h-18"
              data-rellax-speed="1"
              style="bottom: -0.5rem; right: -1.6rem"
            ></div>
            <div
              v-for="(elm, i) in pricing.slice(1, 3)"
              :key="i"
              :class="`col-md-6 ${elm.populer ? 'popular' : ''} `"
            >
              <div class="pricing card">
                <div class="card-body pb-12">
                  <div class="prices text-dark">
                    <div
                      :class="`price ${
                        isYearly ? 'price-hidden' : 'price-show'
                      }  justify-content-start`"
                    >
                      <span class="price-currency">$</span
                      ><span class="price-value">{{ elm.monthlyPrice }}</span>
                      <span class="price-duration">mo</span>
                    </div>
                    <div
                      :class="`price ${
                        !isYearly ? 'price-hidden' : 'price-show'
                      }  justify-content-start`"
                    >
                      <span class="price-currency">$</span
                      ><span class="price-value">{{
                        ((elm.monthlyPrice * 12 * 70) / 100).toFixed(0)
                      }}</span>
                      <span class="price-duration">yr</span>
                    </div>
                  </div>
                  <!--/.prices -->
                  <h4 class="card-title mt-2">{{ elm.category }} Plan</h4>
                  <ul class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8">
                    <li>
                      <i class="uil uil-check"></i
                      ><span
                        ><strong>{{ elm.projects }}</strong> Projects
                      </span>
                    </li>
                    <li>
                      <i class="uil uil-check"></i
                      ><span
                        ><strong>{{ elm.apiAccess }}</strong> API Access
                      </span>
                    </li>
                    <li>
                      <i class="uil uil-check"></i
                      ><span
                        ><strong>{{ elm.storage }}</strong> Storage
                      </span>
                    </li>
                    <li>
                      <i
                        :class="`uil ${
                          elm.weeklyReport ? 'uil-check' : 'uil-times'
                        } `"
                      ></i
                      ><span> Weekly <strong>Reports</strong></span>
                    </li>
                    <li>
                      <i
                        :class="`uil ${
                          elm.fulltimeSupport
                            ? 'uil-check'
                            : 'uil-times bullet-soft-red'
                        } `"
                      ></i
                      ><span> 7/24 <strong>Support</strong></span>
                    </li>
                  </ul>
                  <a href="#" class="btn btn-primary rounded-pill"
                    >Choose Plan</a
                  >
                </div>
                <!--/.card-body -->
              </div>
              <!--/.pricing -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-14 align-items-center">
        <div class="col-lg-7">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/i5.png"
              srcset="/assets/img/illustrations/i5@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="fs-16 text-uppercase text-muted mb-3">Let’s Talk</h2>
          <h3 class="display-4 mb-3">
            Let's make something great together. We are trusted by over 5000+
            clients.
          </h3>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
            massa justo sit amet risus.
          </p>
          <nuxt-link to="/signup" class="btn btn-primary rounded-pill mt-2"
            >Join Us</nuxt-link
          >
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="px-lg-5">
        <div class="row gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center">
          <div
            v-for="(elm, i) in clients1.slice(0, 6)"
            :key="i"
            class="col-4 col-md-2"
          >
            <figure class="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
              <nuxt-img :src="elm.src" alt="photo" />
            </figure>
          </div>
          <!--/column -->

          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /div -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { pricing } from "~/data/pricing";
const isYearly = ref(false);
import { clients1 } from "~/data/clients";
</script>

<style lang="scss" scoped></style>
