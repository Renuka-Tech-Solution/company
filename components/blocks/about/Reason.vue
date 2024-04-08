<template>
  <section id="snippet-5" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7 order-lg-2">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/i2.png"
              srcset="/assets/img/illustrations/i2@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="fs-15 text-uppercase text-line text-primary mb-3">
            Why Choose Us?
          </h2>
          <h3 class="display-5 mb-7">
            A few reasons why our valued customers choose us.
          </h3>
          <div class="accordion accordion-wrapper" id="accordionExample">
            <div
              v-for="(item, index) in accordionItems"
              :key="index"
              class="card plain accordion-item"
            >
              <div class="card-header" :id="`heading${index + 1}`">
                <button
                  :class="{ collapsed: !item.expanded }"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${index + 1}`"
                  :aria-expanded="item.expanded"
                  :aria-controls="`collapse${index + 1}`"
                  @click="toggleAccordionItem(index)"
                >
                  {{ item.title }}
                </button>
              </div>
              <div
                :id="`collapse${index + 1}`"
                :class="`accordion-collapse collapse ${
                  item.expanded ? 'show' : ''
                }`"
                :aria-labelledby="`heading${index + 1}`"
                data-bs-parent="#accordionExample"
              >
                <div class="card-body">
                  <p>{{ item.content }}</p>
                </div>
              </div>
            </div>
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
            href="#collapse-snippet-105"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-105"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-5&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7 order-lg-2&quot;&gt;
          &lt;figure&gt;
            &lt;nuxt-img
              class&#x3D;&quot;w-auto&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i2.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;i2@2x.png 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-line text-primary mb-3&quot;&gt;
            Why Choose Us?
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-5 mb-7&quot;&gt;
            A few reasons why our valued customers choose us.
          &lt;&#x2F;h3&gt;
          &lt;div class&#x3D;&quot;accordion accordion-wrapper&quot; id&#x3D;&quot;accordionExample&quot;&gt;
            &lt;div
              v-for&#x3D;&quot;(item, index) in accordionItems&quot;
              :key&#x3D;&quot;index&quot;
              class&#x3D;&quot;card plain accordion-item&quot;
            &gt;
              &lt;div class&#x3D;&quot;card-header&quot; :id&#x3D;&quot;&#x60;heading${index + 1}&#x60;&quot;&gt;
                &lt;button
                  :class&#x3D;&quot;{ collapsed: !item.expanded }&quot;
                  data-bs-toggle&#x3D;&quot;collapse&quot;
                  :data-bs-target&#x3D;&quot;&#x60;#collapse${index + 1}&#x60;&quot;
                  :aria-expanded&#x3D;&quot;item.expanded&quot;
                  :aria-controls&#x3D;&quot;&#x60;collapse${index + 1}&#x60;&quot;
                  @click&#x3D;&quot;toggleAccordionItem(index)&quot;
                &gt;
                  &lbrace;&lbrace; item.title &rbrace;&rbrace;
                &lt;&#x2F;button&gt;
              &lt;&#x2F;div&gt;
              &lt;div
                :id&#x3D;&quot;&#x60;collapse${index + 1}&#x60;&quot;
                :class&#x3D;&quot;&#x60;accordion-collapse collapse ${
                  item.expanded ? &#39;show&#39; : &#39;&#39;
                }&#x60;&quot;
                :aria-labelledby&#x3D;&quot;&#x60;heading${index + 1}&#x60;&quot;
                data-bs-parent&#x3D;&quot;#accordionExample&quot;
              &gt;
                &lt;div class&#x3D;&quot;card-body&quot;&gt;
                  &lt;p&gt;&lbrace;&lbrace; item.content &rbrace;&rbrace;&lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
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
const accordionItems &#x3D; [
  {
    title: &quot;Professional Design&quot;,
    content:
      &quot;Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.&quot;,
    expanded: true,
  },
  {
    title: &quot;Top-Notch Support&quot;,
    content:
      &quot;Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.&quot;,
    expanded: false,
  },
  {
    title: &quot;Header and Slider Options&quot;,
    content:
      &quot;Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.&quot;,
    expanded: false,
  },
];

const toggleAccordionItem &#x3D; (index) &#x3D;&gt; {
  accordionItems.forEach((item, i) &#x3D;&gt; {
    item.expanded &#x3D; i &#x3D;&#x3D;&#x3D; index &amp;&amp; !item.expanded;
  });
};
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
const accordionItems = [
  {
    title: "Professional Design",
    content:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
    expanded: true,
  },
  {
    title: "Top-Notch Support",
    content:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
    expanded: false,
  },
  {
    title: "Header and Slider Options",
    content:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
    expanded: false,
  },
];

const toggleAccordionItem = (index) => {
  accordionItems.forEach((item, i) => {
    item.expanded = i === index && !item.expanded;
  });
};
</script>

<style lang="scss" scoped></style>
