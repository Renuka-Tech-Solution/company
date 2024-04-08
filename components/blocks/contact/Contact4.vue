<template>
  <section id="snippet-4" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
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
          <h2
            class="fs-15 text-uppercase text-line text-primary text-center mb-3"
          >
            Get In Touch
          </h2>
          <h3 class="display-5 mb-7">
            Got any questions? Don't hesitate to get in touch.
          </h3>
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
                {{ item.address.line1 }}<br class="d-none d-md-block" />{{
                  item.address.line2
                }}
              </address>

              <p v-if="item.content">{{ item.content }}</p>
              <a v-if="item.mail" :href="item.mail" class="link-body">{{
                item.mail
              }}</a>
            </div>
          </div>
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
            href="#collapse-snippet-18"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-18"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-4&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7&quot;&gt;
          &lt;figure&gt;
            &lt;nuxt-img
              class&#x3D;&quot;w-auto&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i5.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i5@2x.png 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5&quot;&gt;
          &lt;h2
            class&#x3D;&quot;fs-15 text-uppercase text-line text-primary text-center mb-3&quot;
          &gt;
            Get In Touch
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-5 mb-7&quot;&gt;
            Got any questions? Don&#39;t hesitate to get in touch.
          &lt;&#x2F;h3&gt;
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
                &lbrace;&lbrace; item.address.line1 &rbrace;&rbrace;&lt;br class&#x3D;&quot;d-none d-md-block&quot; &#x2F;&gt;&lbrace;&lbrace;
                  item.address.line2
                &rbrace;&rbrace;
              &lt;&#x2F;address&gt;

              &lt;p v-if&#x3D;&quot;item.content&quot;&gt;&lbrace;&lbrace; item.content &rbrace;&rbrace;&lt;&#x2F;p&gt;
              &lt;a v-if&#x3D;&quot;item.mail&quot; :href&#x3D;&quot;item.mail&quot; class&#x3D;&quot;link-body&quot;&gt;&lbrace;&lbrace;
                item.mail
              &rbrace;&rbrace;&lt;&#x2F;a&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
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
