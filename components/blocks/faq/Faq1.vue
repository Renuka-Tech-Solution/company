<template>
  <section id="snippet-1" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10">
        <div class="col-lg-6">
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
        <div class="col-lg-6">
          <h2 class="display-4 mb-3">Common Questions</h2>
          <p class="lead fs-lg mb-6 pe-xxl-10">
            If you don't see an
            <span class="underline">answer to your question</span>, you can send
            us an email from our contact form.
          </p>
          <div class="accordion accordion-wrapper" id="accordionExample-1">
            <div
              v-for="(elm, i) in faq1"
              :key="i"
              class="card plain accordion-item"
            >
              <div class="card-header" :id="`heading1-${elm.id}`">
                <button
                  :class="`${!i ? 'accordion-button' : 'collapsed'}`"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse1-${elm.id}`"
                  aria-expanded="true"
                  :aria-controls="`collapse1-${elm.id}`"
                >
                  {{ elm.question }}
                </button>
              </div>
              <!--/.card-header -->
              <div
                :id="`collapse1-${elm.id}`"
                :class="`accordion-collapse collapse ${!i ? 'show' : ''} `"
                :aria-labelledby="`heading1-${elm.id}`"
                data-bs-parent="#accordionExample-1"
              >
                <div class="card-body">
                  <p>{{ elm.answer }}</p>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.accordion-collapse -->
            </div>
            <!--/.accordion-item -->

            <!--/.accordion-item -->
          </div>
          <!--/.accordion -->
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
            href="#collapse-snippet-129"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-129"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-1&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
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
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;Common Questions&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg mb-6 pe-xxl-10&quot;&gt;
            If you don&#39;t see an
            &lt;span class&#x3D;&quot;underline&quot;&gt;answer to your question&lt;&#x2F;span&gt;, you can send
            us an email from our contact form.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;accordion accordion-wrapper&quot; id&#x3D;&quot;accordionExample-1&quot;&gt;
            &lt;div
              v-for&#x3D;&quot;(elm, i) in faq1&quot;
              :key&#x3D;&quot;i&quot;
              class&#x3D;&quot;card plain accordion-item&quot;
            &gt;
              &lt;div class&#x3D;&quot;card-header&quot; :id&#x3D;&quot;&#x60;heading1-${elm.id}&#x60;&quot;&gt;
                &lt;button
                  :class&#x3D;&quot;&#x60;${!i ? &#39;accordion-button&#39; : &#39;collapsed&#39;}&#x60;&quot;
                  data-bs-toggle&#x3D;&quot;collapse&quot;
                  :data-bs-target&#x3D;&quot;&#x60;#collapse1-${elm.id}&#x60;&quot;
                  aria-expanded&#x3D;&quot;true&quot;
                  :aria-controls&#x3D;&quot;&#x60;collapse1-${elm.id}&#x60;&quot;
                &gt;
                  &lbrace;&lbrace; elm.question &rbrace;&rbrace;
                &lt;&#x2F;button&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.card-header --&gt;
              &lt;div
                :id&#x3D;&quot;&#x60;collapse1-${elm.id}&#x60;&quot;
                :class&#x3D;&quot;&#x60;accordion-collapse collapse ${!i ? &#39;show&#39; : &#39;&#39;} &#x60;&quot;
                :aria-labelledby&#x3D;&quot;&#x60;heading1-${elm.id}&#x60;&quot;
                data-bs-parent&#x3D;&quot;#accordionExample-1&quot;
              &gt;
                &lt;div class&#x3D;&quot;card-body&quot;&gt;
                  &lt;p&gt;&lbrace;&lbrace; elm.answer &rbrace;&rbrace;&lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;.card-body --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.accordion-collapse --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.accordion-item --&gt;

            &lt;!--&#x2F;.accordion-item --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.accordion --&gt;
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
import { faq1 } from &quot;~&#x2F;data&#x2F;faq&quot;;
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
import { faq1 } from "~/data/faq";
</script>

<style lang="scss" scoped></style>
