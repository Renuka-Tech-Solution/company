<template>
  <div class="row text-center">
    <div class="col-md-10 col-lg-8 col-xl-9 col-xxl-8 mx-auto">
      <h2 class="fs-15 text-uppercase text-muted mb-3">Our Pricing</h2>
      <h3 class="display-3 ls-sm mb-10 px-xl-15">
        We offer great prices and quality service for your business.
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="pricing-wrapper mb-10 mb-md-14">
    <div class="row gx-0 gy-6">
      <div v-for="(elm, i) in pricing" :key="i" class="col-md-6 col-lg-3">
        <div
          :class="`pricing card ${
            elm.category == 'Corporate' ? 'bg-gray' : 'shadow-none'
          }`"
        >
          <div class="card-body">
            <h4 class="card-title">{{ elm.category }} Plan</h4>
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
            <ul class="icon-list bullet-green mt-7 mb-8">
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
                    elm.weeklyReport ? 'uil-check' : 'uil-times text-red'
                  } `"
                ></i
                ><span> Weekly <strong>Reports</strong></span>
              </li>
              <li>
                <i
                  :class="`uil ${
                    elm.fulltimeSupport ? 'uil-check' : 'uil-times text-red'
                  } `"
                ></i
                ><span> 7/24 <strong>Support</strong></span>
              </li>
            </ul>
            <a
              href="#"
              :class="`btn ${
                elm.category == 'Corporate' ? 'btn-primary' : 'btn-soft-primary'
              } rounded`"
              >Choose Plan</a
            >
          </div>
          <!--/.card-body -->
        </div>
        <!--/.pricing -->
      </div>
    </div>
    <!--/.row -->
  </div>
</template>

<script setup>
import { pricing } from "~/data/pricing";
const isYearly = ref(false);
</script>

<style lang="scss" scoped></style>
