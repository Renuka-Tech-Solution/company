<template>
  <section id="snippet-6" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div class="card">
            <div class="row gx-0">
              <div class="col-lg-6 align-self-stretch">
                <div class="map map-full rounded-top rounded-lg-start">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str"
                    style="width: 100%; height: 100%; border: 0"
                    allowfullscreen
                  ></iframe>
                </div>
                <!-- /.map -->
              </div>
              <!--/column -->
              <div class="col-lg-6">
                <div class="p-10 p-md-11 p-lg-14">
                  <div
                    v-for="item in contactInfo"
                    :key="item.id"
                    class="d-flex flex-row"
                  >
                    <div>
                      <div class="icon text-primary fs-28 me-6 mt-n1">
                        <i :class="item.iconClass"></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="mb-1">{{ item.title }}</h5>

                      <address v-if="item.address">
                        {{ item.address.line1
                        }}<br class="d-none d-md-block" />{{
                          item.address.line2
                        }}
                      </address>

                      <p v-if="item.content">{{ item.content }}</p>
                      <a v-if="item.mail" :href="item.mail" class="link-body">{{
                        item.mail
                      }}</a>
                    </div>
                  </div>
                  <!--/div -->
                </div>
                <!--/div -->
              </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-19"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-19"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-6&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-xl-10 mx-auto&quot;&gt;
          &lt;div class&#x3D;&quot;card&quot;&gt;
            &lt;div class&#x3D;&quot;row gx-0&quot;&gt;
              &lt;div class&#x3D;&quot;col-lg-6 align-self-stretch&quot;&gt;
                &lt;div class&#x3D;&quot;map map-full rounded-top rounded-lg-start&quot;&gt;
                  &lt;iframe
                    src&#x3D;&quot;https:&#x2F;&#x2F;www.google.com&#x2F;maps&#x2F;embed?pb&#x3D;!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str&quot;
                    style&#x3D;&quot;width: 100%; height: 100%; border: 0&quot;
                    allowfullscreen
                  &gt;&lt;&#x2F;iframe&gt;
                &lt;&#x2F;div&gt;
                &lt;!-- &#x2F;.map --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;column --&gt;
              &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
                &lt;div class&#x3D;&quot;p-10 p-md-11 p-lg-14&quot;&gt;
                  &lt;div
                    v-for&#x3D;&quot;item in contactInfo&quot;
                    :key&#x3D;&quot;item.id&quot;
                    class&#x3D;&quot;d-flex flex-row&quot;
                  &gt;
                    &lt;div&gt;
                      &lt;div class&#x3D;&quot;icon text-primary fs-28 me-6 mt-n1&quot;&gt;
                        &lt;i :class&#x3D;&quot;item.iconClass&quot;&gt;&lt;&#x2F;i&gt;
                      &lt;&#x2F;div&gt;
                    &lt;&#x2F;div&gt;
                    &lt;div&gt;
                      &lt;h5 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h5&gt;

                      &lt;address v-if&#x3D;&quot;item.address&quot;&gt;
                        &lbrace;&lbrace; item.address.line1
                        &rbrace;&rbrace;&lt;br class&#x3D;&quot;d-none d-md-block&quot; &#x2F;&gt;&lbrace;&lbrace;
                          item.address.line2
                        &rbrace;&rbrace;
                      &lt;&#x2F;address&gt;

                      &lt;p v-if&#x3D;&quot;item.content&quot;&gt;&lbrace;&lbrace; item.content &rbrace;&rbrace;&lt;&#x2F;p&gt;
                      &lt;a v-if&#x3D;&quot;item.mail&quot; :href&#x3D;&quot;item.mail&quot; class&#x3D;&quot;link-body&quot;&gt;&lbrace;&lbrace;
                        item.mail
                      &rbrace;&rbrace;&lt;&#x2F;a&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;div&gt;
                  &lt;!--&#x2F;div --&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;div --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;column --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.row --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.card --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { contactInfo } from &quot;~&#x2F;data&#x2F;contact&quot;;
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
import { contactInfo } from "~/data/contact";
</script>

<style lang="scss" scoped></style>
