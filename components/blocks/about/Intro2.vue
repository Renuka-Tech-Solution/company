<template>
  <section id="snippet-4" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-6 position-relative order-lg-2">
          <div
            class="shape bg-dot primary rellax w-16 h-20"
            data-rellax-speed="1"
            style="top: 3rem; left: 5.5rem"
          ></div>
          <div class="overlap-grid overlap-grid-2">
            <div class="item">
              <figure class="rounded shadow">
                <nuxt-img
                  src="/assets/img/photos/about2.jpg"
                  :width="450"
                  :height="450"
                  srcset="/assets/img/photos/about2@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
            <div class="item">
              <figure class="rounded shadow">
                <nuxt-img
                  src="/assets/img/photos/about3.jpg"
                  :width="450"
                  :height="450"
                  srcset="/assets/img/photos/about3@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
          </div>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <nuxt-img
            :width="410"
            :height="362"
            src="/assets/img/icons/lineal/megaphone.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="photo"
          />
          <h2 class="display-4 mb-3">Who Are We?</h2>
          <p class="lead fs-lg">
            We are a digital and branding company that believes in the power of
            creative strategy and along with great design.
          </p>
          <p class="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </p>
          <div class="row gy-3 gx-xl-8">
            <div v-for="(list, index) in lists" :key="index" class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                <li v-for="(item, itemIndex) in list.items" :key="itemIndex">
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
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
            href="#collapse-snippet-102"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-102"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-4&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 position-relative order-lg-2&quot;&gt;
          &lt;div
            class&#x3D;&quot;shape bg-dot primary rellax w-16 h-20&quot;
            data-rellax-speed&#x3D;&quot;1&quot;
            style&#x3D;&quot;top: 3rem; left: 5.5rem&quot;
          &gt;&lt;&#x2F;div&gt;
          &lt;div class&#x3D;&quot;overlap-grid overlap-grid-2&quot;&gt;
            &lt;div class&#x3D;&quot;item&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded shadow&quot;&gt;
                &lt;nuxt-img
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about2.jpg&quot;
                  :width&#x3D;&quot;450&quot;
                  :height&#x3D;&quot;450&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about2@2x.jpg 2x&quot;
                  alt&#x3D;&quot;image&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
            &lt;div class&#x3D;&quot;item&quot;&gt;
              &lt;figure class&#x3D;&quot;rounded shadow&quot;&gt;
                &lt;nuxt-img
                  src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about3.jpg&quot;
                  :width&#x3D;&quot;450&quot;
                  :height&#x3D;&quot;450&quot;
                  srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about3@2x.jpg 2x&quot;
                  alt&#x3D;&quot;image&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;nuxt-img
            :width&#x3D;&quot;410&quot;
            :height&#x3D;&quot;362&quot;
            src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;megaphone.svg&quot;
            class&#x3D;&quot;icon-svg icon-svg-md mb-4&quot;
            alt&#x3D;&quot;&quot;
          &#x2F;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;Who Are We?&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg&quot;&gt;
            We are a digital and branding company that believes in the power of
            creative strategy and along with great design.
          &lt;&#x2F;p&gt;
          &lt;p class&#x3D;&quot;mb-6&quot;&gt;
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magana, vel scelerisque
            nisl consectetur et.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;row gy-3 gx-xl-8&quot;&gt;
            &lt;div v-for&#x3D;&quot;(list, index) in lists&quot; :key&#x3D;&quot;index&quot; class&#x3D;&quot;col-xl-6&quot;&gt;
              &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-primary mb-0&quot;&gt;
                &lt;li v-for&#x3D;&quot;(item, itemIndex) in list.items&quot; :key&#x3D;&quot;itemIndex&quot;&gt;
                  &lt;span&gt;&lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i&gt;&lt;&#x2F;span&gt;
                  &lt;span&gt;&lbrace;&lbrace; item.text &rbrace;&rbrace;&lt;&#x2F;span&gt;
                &lt;&#x2F;li&gt;
              &lt;&#x2F;ul&gt;
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
const lists &#x3D; [
  {
    items: [
      { text: &quot;Aenean eu leo quam ornare curabitur blandit tempus.&quot; },
      { text: &quot;Nullam quis risus eget urna mollis ornare donec elit.&quot; },
    ],
  },
  {
    items: [
      { text: &quot;Etiam porta sem malesuada magna mollis euismod.&quot; },
      { text: &quot;Fermentum massa vivamus faucibus amet euismod.&quot; },
    ],
  },
];
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
const lists = [
  {
    items: [
      { text: "Aenean eu leo quam ornare curabitur blandit tempus." },
      { text: "Nullam quis risus eget urna mollis ornare donec elit." },
    ],
  },
  {
    items: [
      { text: "Etiam porta sem malesuada magna mollis euismod." },
      { text: "Fermentum massa vivamus faucibus amet euismod." },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
