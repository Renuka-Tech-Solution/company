<template>
  <section id="snippet-4" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-11 pb-md-12">
      <h2 class="display-4 mb-3">Our Pricing</h2>
      <p class="lead fs-lg">
        We offer <span class="underline">great prices</span>, premium and
        quality products for your business.
      </p>
      <div class="row">
        <div class="col-lg-4">
          <p>
            Enjoy a <a href="#" class="hover">free 30-day trial</a> and
            experience the full service. No credit card required!
          </p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <nuxt-link to="/pricing" class="btn btn-primary rounded-pill mt-2"
        >See All Prices</nuxt-link
      >
      <div class="table-responsive mt-10 mt-lg-0">
        <table class="table table-borderless table-striped text-center">
          <thead>
            <tr>
              <th class="w-25"></th>
              <th v-for="(elm, i) in pricing" :key="i">
                <div class="h4 mb-1">{{ elm.category }} Plan</div>
                <div class="fs-15 fw-normal text-secondary">
                  ${{ elm.monthlyPrice }} / Monthly
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="option text-start">Project</td>
              <td v-for="(elm, i) in pricing" :key="i">{{ elm.projects }}</td>
            </tr>
            <tr>
              <td class="option text-start">API Access</td>
              <td v-for="(elm, i) in pricing" :key="i">{{ elm.apiAccess }}</td>
            </tr>
            <tr>
              <td class="option text-start">Storage</td>
              <td v-for="(elm, i) in pricing" :key="i">{{ elm.storage }}</td>
            </tr>
            <tr>
              <td class="option text-start">Weekly Reports</td>

              <td v-for="(elm, i) in pricing" :key="i">
                <i
                  class="uil uil-check bg-pale-primary text-primary rounded-circle p-1"
                  v-if="elm.weeklyReport"
                ></i>
                <span v-else>-</span>
              </td>
            </tr>
            <tr>
              <td class="option text-start">24/7 Support</td>
              <td v-for="(elm, i) in pricing" :key="i">
                <i
                  class="uil uil-check bg-pale-primary text-primary rounded-circle p-1"
                  v-if="elm.fulltimeSupport"
                ></i>
                <span v-else>-</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th class="w-25"></th>
              <th>
                <a href="#" class="btn btn-soft-primary rounded-pill mt-1"
                  >Choose Plan</a
                >
              </th>
              <th>
                <a href="#" class="btn btn-soft-primary rounded-pill mt-1"
                  >Choose Plan</a
                >
              </th>
              <th>
                <a href="#" class="btn btn-soft-primary rounded-pill mt-1"
                  >Choose Plan</a
                >
              </th>
              <th>
                <a href="#" class="btn btn-soft-primary rounded-pill mt-1"
                  >Choose Plan</a
                >
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
      <!-- /.table-responsive -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-180"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-180"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-4&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-11 pb-md-12&quot;&gt;
      &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;Our Pricing&lt;&#x2F;h2&gt;
      &lt;p class&#x3D;&quot;lead fs-lg&quot;&gt;
        We offer &lt;span class&#x3D;&quot;underline&quot;&gt;great prices&lt;&#x2F;span&gt;, premium and
        quality products for your business.
      &lt;&#x2F;p&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-4&quot;&gt;
          &lt;p&gt;
            Enjoy a &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;hover&quot;&gt;free 30-day trial&lt;&#x2F;a&gt; and
            experience the full service. No credit card required!
          &lt;&#x2F;p&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;nuxt-link to&#x3D;&quot;/pricing&quot; class&#x3D;&quot;btn btn-primary rounded-pill mt-2&quot;&gt;See All Prices&lt;&#x2F;nuxt-link&gt;
      &lt;div class&#x3D;&quot;table-responsive mt-10 mt-lg-0&quot;&gt;
        &lt;table class&#x3D;&quot;table table-borderless table-striped text-center&quot;&gt;
          &lt;thead&gt;
            &lt;tr&gt;
              &lt;th class&#x3D;&quot;w-25&quot;&gt;&lt;&#x2F;th&gt;
              &lt;th v-for&#x3D;&quot;(elm, i) in pricing&quot; :key&#x3D;&quot;i&quot;&gt;
                &lt;div class&#x3D;&quot;h4 mb-1&quot;&gt;&lbrace;&lbrace; elm.category &rbrace;&rbrace; Plan&lt;&#x2F;div&gt;
                &lt;div class&#x3D;&quot;fs-15 fw-normal text-secondary&quot;&gt;
                  $&lbrace;&lbrace; elm.monthlyPrice &rbrace;&rbrace; &#x2F; Monthly
                &lt;&#x2F;div&gt;
              &lt;&#x2F;th&gt;
            &lt;&#x2F;tr&gt;
          &lt;&#x2F;thead&gt;
          &lt;tbody&gt;
            &lt;tr&gt;
              &lt;td class&#x3D;&quot;option text-start&quot;&gt;Project&lt;&#x2F;td&gt;
              &lt;td v-for&#x3D;&quot;(elm, i) in pricing&quot; :key&#x3D;&quot;i&quot;&gt;&lbrace;&lbrace; elm.projects &rbrace;&rbrace;&lt;&#x2F;td&gt;
            &lt;&#x2F;tr&gt;
            &lt;tr&gt;
              &lt;td class&#x3D;&quot;option text-start&quot;&gt;API Access&lt;&#x2F;td&gt;
              &lt;td v-for&#x3D;&quot;(elm, i) in pricing&quot; :key&#x3D;&quot;i&quot;&gt;&lbrace;&lbrace; elm.apiAccess &rbrace;&rbrace;&lt;&#x2F;td&gt;
            &lt;&#x2F;tr&gt;
            &lt;tr&gt;
              &lt;td class&#x3D;&quot;option text-start&quot;&gt;Storage&lt;&#x2F;td&gt;
              &lt;td v-for&#x3D;&quot;(elm, i) in pricing&quot; :key&#x3D;&quot;i&quot;&gt;&lbrace;&lbrace; elm.storage &rbrace;&rbrace;&lt;&#x2F;td&gt;
            &lt;&#x2F;tr&gt;
            &lt;tr&gt;
              &lt;td class&#x3D;&quot;option text-start&quot;&gt;Weekly Reports&lt;&#x2F;td&gt;

              &lt;td v-for&#x3D;&quot;(elm, i) in pricing&quot; :key&#x3D;&quot;i&quot;&gt;
                &lt;i
                  class&#x3D;&quot;uil uil-check bg-pale-primary text-primary rounded-circle p-1&quot;
                  v-if&#x3D;&quot;elm.weeklyReport&quot;
                &gt;&lt;&#x2F;i&gt;
                &lt;span v-else&gt;-&lt;&#x2F;span&gt;
              &lt;&#x2F;td&gt;
            &lt;&#x2F;tr&gt;
            &lt;tr&gt;
              &lt;td class&#x3D;&quot;option text-start&quot;&gt;24&#x2F;7 Support&lt;&#x2F;td&gt;
              &lt;td v-for&#x3D;&quot;(elm, i) in pricing&quot; :key&#x3D;&quot;i&quot;&gt;
                &lt;i
                  class&#x3D;&quot;uil uil-check bg-pale-primary text-primary rounded-circle p-1&quot;
                  v-if&#x3D;&quot;elm.fulltimeSupport&quot;
                &gt;&lt;&#x2F;i&gt;
                &lt;span v-else&gt;-&lt;&#x2F;span&gt;
              &lt;&#x2F;td&gt;
            &lt;&#x2F;tr&gt;
          &lt;&#x2F;tbody&gt;
          &lt;tfoot&gt;
            &lt;tr&gt;
              &lt;th class&#x3D;&quot;w-25&quot;&gt;&lt;&#x2F;th&gt;
              &lt;th&gt;
                &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-soft-primary rounded-pill mt-1&quot;
                  &gt;Choose Plan&lt;&#x2F;a
                &gt;
              &lt;&#x2F;th&gt;
              &lt;th&gt;
                &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-soft-primary rounded-pill mt-1&quot;
                  &gt;Choose Plan&lt;&#x2F;a
                &gt;
              &lt;&#x2F;th&gt;
              &lt;th&gt;
                &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-soft-primary rounded-pill mt-1&quot;
                  &gt;Choose Plan&lt;&#x2F;a
                &gt;
              &lt;&#x2F;th&gt;
              &lt;th&gt;
                &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-soft-primary rounded-pill mt-1&quot;
                  &gt;Choose Plan&lt;&#x2F;a
                &gt;
              &lt;&#x2F;th&gt;
            &lt;&#x2F;tr&gt;
          &lt;&#x2F;tfoot&gt;
        &lt;&#x2F;table&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.table-responsive --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!--&#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { pricing } from &quot;~&#x2F;data&#x2F;pricing&quot;;
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
    <!--/.container -->
  </section>
</template>

<script setup>
import { pricing } from "~/data/pricing";
</script>

<style lang="scss" scoped></style>
