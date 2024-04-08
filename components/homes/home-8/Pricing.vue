<template>
  <div class="row gy-6 align-items-center mb-14 mb-md-18">
    <div class="col-lg-4">
      <h3 class="display-4 mb-5">We offer great and premium prices.</h3>
      <p class="lead fs-lg mb-5">
        Enjoy a <span class="underline">free 30-day trial</span> and experience
        the full service. No credit card required!
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
        <div class="pricing-switchers" @click="() => (isYearly = !isYearly)">
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
        <p class="mb-0 ps-3">Yearly <span class="text-red">(Save 30%)</span></p>
      </div>
      <div class="row gy-6 mt-5">
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
              <a href="#" class="btn btn-primary rounded-pill">Choose Plan</a>
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
</template>

<script setup>
import { pricing } from "~/data/pricing";
const isYearly = ref(false);
</script>

<style lang="scss" scoped></style>
