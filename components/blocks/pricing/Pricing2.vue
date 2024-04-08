<template>
  <section id="snippet-2" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
          <h2 class="fs-15 text-uppercase text-muted mb-3">Our Pricing</h2>
          <h3 class="display-4 mb-15 mb-md-6 px-lg-10">
            We offer great prices, premium products and quality service for your
            business.
          </h3>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="pricing-wrapper position-relative">
        <div
          class="shape bg-dot primary rellax w-16 h-18"
          data-rellax-speed="1"
          style="top: 2rem; right: -2.4rem"
        ></div>
        <div
          class="shape rounded-circle bg-line red rellax w-18 h-18 d-none d-lg-block"
          data-rellax-speed="1"
          style="bottom: 0.5rem; left: -2.5rem"
        ></div>
        <div class="pricing-switcher-wrapper switcher">
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
          <p class="mb-0 ps-3">Yearly</p>
        </div>
        <div class="row gy-6 mt-3 mt-md-5">
          <div
            v-for="(elm, i) in pricing.slice(0, 3)"
            :key="i"
            :class="`col-md-6 col-lg-4 ${i == 1 ? 'popular' : ''} ${
              i == 2 ? 'offset-md-3 col-lg-4 offset-lg-0' : ''
            } `"
          >
            <div class="pricing card text-center">
              <div class="card-body">
                <nuxt-img
                  :src="elm.iconOne"
                  class="icon-svg icon-svg-md text-primary mb-3"
                  alt="photo"
                />
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
                <ul
                  class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start"
                >
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

          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!--/.pricing-wrapper -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-176"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-176"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-2&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;Our Pricing&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-15 mb-md-6 px-lg-10&quot;&gt;
            We offer great prices, premium products and quality service for your
            business.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;pricing-wrapper position-relative&quot;&gt;
        &lt;div
          class&#x3D;&quot;shape bg-dot primary rellax w-16 h-18&quot;
          data-rellax-speed&#x3D;&quot;1&quot;
          style&#x3D;&quot;top: 2rem; right: -2.4rem&quot;
        &gt;&lt;&#x2F;div&gt;
        &lt;div
          class&#x3D;&quot;shape rounded-circle bg-line red rellax w-18 h-18 d-none d-lg-block&quot;
          data-rellax-speed&#x3D;&quot;1&quot;
          style&#x3D;&quot;bottom: 0.5rem; left: -2.5rem&quot;
        &gt;&lt;&#x2F;div&gt;
        &lt;div class&#x3D;&quot;pricing-switcher-wrapper switcher&quot;&gt;
          &lt;p class&#x3D;&quot;mb-0 pe-3&quot;&gt;Monthly&lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;pricing-switchers&quot; @click&#x3D;&quot;() &#x3D;&gt; (isYearly &#x3D; !isYearly)&quot;&gt;
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
          &lt;p class&#x3D;&quot;mb-0 ps-3&quot;&gt;Yearly&lt;&#x2F;p&gt;
        &lt;&#x2F;div&gt;
        &lt;div class&#x3D;&quot;row gy-6 mt-3 mt-md-5&quot;&gt;
          &lt;div
            v-for&#x3D;&quot;(elm, i) in pricing.slice(0, 3)&quot;
            :key&#x3D;&quot;i&quot;
            :class&#x3D;&quot;&#x60;col-md-6 col-lg-4 ${i &#x3D;&#x3D; 1 ? &#39;popular&#39; : &#39;&#39;} ${
              i &#x3D;&#x3D; 2 ? &#39;offset-md-3 col-lg-4 offset-lg-0&#39; : &#39;&#39;
            } &#x60;&quot;
          &gt;
            &lt;div class&#x3D;&quot;pricing card text-center&quot;&gt;
              &lt;div class&#x3D;&quot;card-body&quot;&gt;
                &lt;nuxt-img
                  :src&#x3D;&quot;elm.iconOne&quot;
                  class&#x3D;&quot;icon-svg icon-svg-md text-primary mb-3&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
                &lt;h4 class&#x3D;&quot;card-title&quot;&gt;&lbrace;&lbrace; elm.category &rbrace;&rbrace; Plan&lt;&#x2F;h4&gt;
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
                &lt;ul
                  class&#x3D;&quot;icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start&quot;
                &gt;
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
                &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary rounded-pill&quot;&gt;Choose Plan&lt;&#x2F;a&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.card-body --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.pricing --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;column --&gt;

          &lt;!--&#x2F;column --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;.row --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.pricing-wrapper --&gt;
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
