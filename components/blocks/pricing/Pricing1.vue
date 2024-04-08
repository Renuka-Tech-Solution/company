<template>
  <section id="snippet-1" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gy-6">
        <div class="col-lg-4">
          <h2 class="display-4 mt-lg-18 mb-3">Our Pricing</h2>
          <p class="lead fs-lg">
            We offer <span class="underline">great prices</span>, premium and
            quality products for your business.
          </p>
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
              class="shape bg-dot primary rellax w-16 h-18"
              data-rellax-speed="1"
              style="bottom: -0.5rem; right: -1.6rem"
            ></div>
            <div
              class="shape rounded-circle bg-line red rellax w-18 h-18"
              data-rellax-speed="1"
              style="top: -1rem; left: -2rem"
            ></div>

            <!--/column -->
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
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-70"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-70"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-1&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gy-6&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-4&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mt-lg-18 mb-3&quot;&gt;Our Pricing&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg&quot;&gt;
            We offer &lt;span class&#x3D;&quot;underline&quot;&gt;great prices&lt;&#x2F;span&gt;, premium and
            quality products for your business.
          &lt;&#x2F;p&gt;
          &lt;p&gt;
            Enjoy a &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;hover&quot;&gt;free 30-day trial&lt;&#x2F;a&gt; and
            experience the full service. No credit card required!
          &lt;&#x2F;p&gt;
          &lt;nuxt-link to&#x3D;&quot;/pricing&quot; class&#x3D;&quot;btn btn-primary rounded-pill mt-2&quot;
            &gt;See All Prices&lt;&#x2F;nuxt-link
          &gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-7 offset-lg-1 pricing-wrapper&quot;&gt;
          &lt;div
            class&#x3D;&quot;pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end&quot;
          &gt;
            &lt;p class&#x3D;&quot;mb-0 pe-3&quot;&gt;Monthly&lt;&#x2F;p&gt;
            &lt;div
              class&#x3D;&quot;pricing-switchers&quot;
              @click&#x3D;&quot;() &#x3D;&gt; (isYearly &#x3D; !isYearly)&quot;
            &gt;
              &lt;div
                :class&#x3D;&quot;&#x60;pricing-switcher ${
                  isYearly ? &#39;&#39; : &#39;pricing-switcher-active&#39;
                } &#x60;&quot;
              &gt;&lt;&#x2F;div&gt;
              &lt;div
                :class&#x3D;&quot;&#x60;pricing-switcher ${
                  !isYearly ? &#39;&#39; : &#39;pricing-switcher-active&#39;
                } &#x60;&quot;
              &gt;&lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;switcher-button bg-primary&quot;&gt;&lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;p class&#x3D;&quot;mb-0 ps-3&quot;&gt;
              Yearly &lt;span class&#x3D;&quot;text-red&quot;&gt;(Save 30%)&lt;&#x2F;span&gt;
            &lt;&#x2F;p&gt;
          &lt;&#x2F;div&gt;
          &lt;div class&#x3D;&quot;row gy-6 position-relative mt-5&quot;&gt;
            &lt;div
              class&#x3D;&quot;shape bg-dot primary rellax w-16 h-18&quot;
              data-rellax-speed&#x3D;&quot;1&quot;
              style&#x3D;&quot;bottom: -0.5rem; right: -1.6rem&quot;
            &gt;&lt;&#x2F;div&gt;
            &lt;div
              class&#x3D;&quot;shape rounded-circle bg-line red rellax w-18 h-18&quot;
              data-rellax-speed&#x3D;&quot;1&quot;
              style&#x3D;&quot;top: -1rem; left: -2rem&quot;
            &gt;&lt;&#x2F;div&gt;

            &lt;!--&#x2F;column --&gt;
            &lt;div
              v-for&#x3D;&quot;(elm, i) in pricing.slice(1, 3)&quot;
              :key&#x3D;&quot;i&quot;
              :class&#x3D;&quot;&#x60;col-md-6 ${elm.populer ? &#39;popular&#39; : &#39;&#39;} &#x60;&quot;
            &gt;
              &lt;div class&#x3D;&quot;pricing card&quot;&gt;
                &lt;div class&#x3D;&quot;card-body pb-12&quot;&gt;
                  &lt;div class&#x3D;&quot;prices text-dark&quot;&gt;
                    &lt;div
                      :class&#x3D;&quot;&#x60;price ${
                        isYearly ? &#39;price-hidden&#39; : &#39;price-show&#39;
                      }  justify-content-start&#x60;&quot;
                    &gt;
                      &lt;span class&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span
                      &gt;&lt;span class&#x3D;&quot;price-value&quot;&gt;&lbrace;&lbrace; elm.monthlyPrice &rbrace;&rbrace;&lt;&#x2F;span&gt;
                      &lt;span class&#x3D;&quot;price-duration&quot;&gt;mo&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div
                      :class&#x3D;&quot;&#x60;price ${
                        !isYearly ? &#39;price-hidden&#39; : &#39;price-show&#39;
                      }  justify-content-start&#x60;&quot;
                    &gt;
                      &lt;span class&#x3D;&quot;price-currency&quot;&gt;$&lt;&#x2F;span
                      &gt;&lt;span class&#x3D;&quot;price-value&quot;&gt;&lbrace;&lbrace;
                        ((elm.monthlyPrice * 12 * 70) &#x2F; 100).toFixed(0)
                      &rbrace;&rbrace;&lt;&#x2F;span&gt;
                      &lt;span class&#x3D;&quot;price-duration&quot;&gt;yr&lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!--&#x2F;.prices --&gt;
                  &lt;h4 class&#x3D;&quot;card-title mt-2&quot;&gt;&lbrace;&lbrace; elm.category &rbrace;&rbrace;&lt;&#x2F;h4&gt;
                  &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-primary mt-7 mb-8&quot;&gt;
                    &lt;li&gt;
                      &lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i
                      &gt;&lt;span
                        &gt;&lt;strong&gt;&lbrace;&lbrace; elm.projects &rbrace;&rbrace;&lt;&#x2F;strong&gt; Projects
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li&gt;
                      &lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i
                      &gt;&lt;span
                        &gt;&lt;strong&gt;&lbrace;&lbrace; elm.apiAccess &rbrace;&rbrace;&lt;&#x2F;strong&gt; API Access
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li&gt;
                      &lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i
                      &gt;&lt;span
                        &gt;&lt;strong&gt;&lbrace;&lbrace; elm.storage &rbrace;&rbrace;&lt;&#x2F;strong&gt; Storage
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li&gt;
                      &lt;i
                        :class&#x3D;&quot;&#x60;uil ${
                          elm.weeklyReport ? &#39;uil-check&#39; : &#39;uil-times&#39;
                        } &#x60;&quot;
                      &gt;&lt;&#x2F;i
                      &gt;&lt;span&gt; Weekly &lt;strong&gt;Reports&lt;&#x2F;strong&gt;&lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                    &lt;li&gt;
                      &lt;i
                        :class&#x3D;&quot;&#x60;uil ${
                          elm.fulltimeSupport
                            ? &#39;uil-check&#39;
                            : &#39;uil-times bullet-soft-red&#39;
                        } &#x60;&quot;
                      &gt;&lt;&#x2F;i
                      &gt;&lt;span&gt; 7&#x2F;24 &lt;strong&gt;Support&lt;&#x2F;strong&gt;&lt;&#x2F;span&gt;
                    &lt;&#x2F;li&gt;
                  &lt;&#x2F;ul&gt;
                  &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary rounded-pill&quot;
                    &gt;Choose Plan&lt;&#x2F;a
                  &gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;.card-body --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.pricing --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { pricing } from &quot;~&#x2F;data&#x2F;pricing&quot;;
const isYearly &#x3D; ref(false);
&lt;&#x2F;script&gt;

&lt;style lang&#x3D;&quot;scss&quot; scoped&gt;&lt;&#x2F;style&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { pricing } from "~/data/pricing";
const isYearly = ref(false);
</script>

<style lang="scss" scoped></style>
