<template>
  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <h2 class="display-5 mb-7 text-center">Our Pricing</h2>
      <div class="pricing-wrapper">
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
          <p class="mb-0 ps-3">
            Yearly <span class="text-red">(Save 30%)</span>
          </p>
        </div>
        <div class="row gx-0 gy-6 mt-2">
          <div v-for="(elm, i) in pricing" :key="i" class="col-md-6 col-lg-3">
            <div
              :class="`pricing card ${
                elm.category == 'Corporate' ? 'bg-soft-primary' : 'shadow-none'
              }`"
            >
              <div class="card-body">
                <div
                  :class="`icon btn btn-circle btn-lg ${
                    elm.category == 'Corporate'
                      ? 'btn-primary'
                      : 'btn-soft-primary'
                  }   pe-none`"
                >
                  <i :class="elm.iconClass"></i>
                </div>
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
                <a href="#" class="btn btn-soft-primary rounded-pill"
                  >Choose Plan</a
                >
              </div>
              <!--/.card-body -->
            </div>
            <!--/.pricing -->
          </div>
          <!--/column -->

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
            href="#collapse-snippet-71"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-71"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-3&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;h2 class&#x3D;&quot;display-5 mb-7 text-center&quot;&gt;Our Pricing&lt;&#x2F;h2&gt;
      &lt;div class&#x3D;&quot;pricing-wrapper&quot;&gt;
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
          &lt;p class&#x3D;&quot;mb-0 ps-3&quot;&gt;
            Yearly &lt;span class&#x3D;&quot;text-red&quot;&gt;(Save 30%)&lt;&#x2F;span&gt;
          &lt;&#x2F;p&gt;
        &lt;&#x2F;div&gt;
        &lt;div class&#x3D;&quot;row gx-0 gy-6 mt-2&quot;&gt;
          &lt;div v-for&#x3D;&quot;(elm, i) in pricing&quot; :key&#x3D;&quot;i&quot; class&#x3D;&quot;col-md-6 col-lg-3&quot;&gt;
            &lt;div
              :class&#x3D;&quot;&#x60;pricing card ${
                elm.category &#x3D;&#x3D; &#39;Corporate&#39; ? &#39;bg-soft-primary&#39; : &#39;shadow-none&#39;
              }&#x60;&quot;
            &gt;
              &lt;div class&#x3D;&quot;card-body&quot;&gt;
                &lt;div
                  :class&#x3D;&quot;&#x60;icon btn btn-circle btn-lg ${
                    elm.category &#x3D;&#x3D; &#39;Corporate&#39;
                      ? &#39;btn-primary&#39;
                      : &#39;btn-soft-primary&#39;
                  }   pe-none&#x60;&quot;
                &gt;
                  &lt;i :class&#x3D;&quot;elm.iconClass&quot;&gt;&lt;&#x2F;i&gt;
                &lt;&#x2F;div&gt;
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
                &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-soft-primary rounded-pill&quot;
                  &gt;Choose Plan&lt;&#x2F;a
                &gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.card-body --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.pricing --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;column --&gt;

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
