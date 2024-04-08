<template>
  <section id="snippet-4" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7 order-lg-2">
          <div class="row gx-md-5 gy-5">
            <div
              v-for="(item, index) in cards"
              :key="index"
              :class="item.classes"
            >
              <div class="card" :class="item.cardClass">
                <div class="card-body">
                  <nuxt-img
                    :src="item.iconSrc"
                    :class="item.iconClass"
                    alt="photo"
                  />
                  <h4>{{ item.title }}</h4>
                  <p class="mb-0">{{ item.description }}</p>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.card -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
          <h3 class="display-4 mb-5">
            The service we offer is specifically designed to meet your needs.
          </h3>
          <p>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Maecenas sed diam eget risus varius blandit sit amet non
            magna. Maecenas faucibus mollis interdum. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et.
          </p>
          <a href="#" class="btn btn-navy rounded-pill mt-3">More Details</a>
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
            href="#collapse-snippet-133"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-133"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-4&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-10 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-7 order-lg-2&quot;&gt;
          &lt;div class&#x3D;&quot;row gx-md-5 gy-5&quot;&gt;
            &lt;div
              v-for&#x3D;&quot;(item, index) in cards&quot;
              :key&#x3D;&quot;index&quot;
              :class&#x3D;&quot;item.classes&quot;
            &gt;
              &lt;div class&#x3D;&quot;card&quot; :class&#x3D;&quot;item.cardClass&quot;&gt;
                &lt;div class&#x3D;&quot;card-body&quot;&gt;
                  &lt;nuxt-img
                    :src&#x3D;&quot;item.iconSrc&quot;
                    :class&#x3D;&quot;item.iconClass&quot;
                    alt&#x3D;&quot;&quot;
                  &#x2F;&gt;
                  &lt;h4&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
                  &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
                &lt;!--&#x2F;.card-body --&gt;
              &lt;&#x2F;div&gt;
              &lt;!--&#x2F;.card --&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-muted mb-3&quot;&gt;What We Do?&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-5&quot;&gt;
            The service we offer is specifically designed to meet your needs.
          &lt;&#x2F;h3&gt;
          &lt;p&gt;
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Maecenas sed diam eget risus varius blandit sit amet non
            magna. Maecenas faucibus mollis interdum. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et.
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-navy rounded-pill mt-3&quot;&gt;More Details&lt;&#x2F;a&gt;
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
const cards &#x3D; [
  {
    id: 1,
    classes: &quot;col-md-5 offset-md-1 align-self-end&quot;,
    cardClass: &quot;bg-pale-yellow&quot;,
    iconSrc: &quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;telephone-3.svg&quot;,
    iconClass: &quot;icon-svg icon-svg-md text-yellow mb-3&quot;,
    title: &quot;24&#x2F;7 Support&quot;,
    description:
      &quot;Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.&quot;,
  },
  {
    id: 2,
    classes: &quot;col-md-6 align-self-end&quot;,
    cardClass: &quot;bg-pale-red&quot;,
    iconSrc: &quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;shield.svg&quot;,
    iconClass: &quot;icon-svg icon-svg-md text-red mb-3&quot;,
    title: &quot;Secure Payments&quot;,
    description:
      &quot;Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.&quot;,
  },
  {
    id: 3,
    classes: &quot;col-md-5&quot;,
    cardClass: &quot;bg-pale-leaf&quot;,
    iconSrc: &quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;cloud-computing-3.svg&quot;,
    iconClass: &quot;icon-svg icon-svg-md text-leaf mb-3&quot;,
    title: &quot;Daily Updates&quot;,
    description: &quot;Nulla vitae elit libero, a pharetra augue.&quot;,
  },
  {
    id: 4,
    classes: &quot;col-md-6 align-self-start&quot;,
    cardClass: &quot;bg-pale-primary&quot;,
    iconSrc: &quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;analytics.svg&quot;,
    iconClass: &quot;icon-svg icon-svg-md text-primary mb-3&quot;,
    title: &quot;Market Research&quot;,
    description:
      &quot;Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget.&quot;,
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
const cards = [
  {
    id: 1,
    classes: "col-md-5 offset-md-1 align-self-end",
    cardClass: "bg-pale-yellow",
    iconSrc: "/assets/img/icons/lineal/telephone-3.svg",
    iconClass: "icon-svg icon-svg-md text-yellow mb-3",
    title: "24/7 Support",
    description:
      "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.",
  },
  {
    id: 2,
    classes: "col-md-6 align-self-end",
    cardClass: "bg-pale-red",
    iconSrc: "/assets/img/icons/lineal/shield.svg",
    iconClass: "icon-svg icon-svg-md text-red mb-3",
    title: "Secure Payments",
    description:
      "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.",
  },
  {
    id: 3,
    classes: "col-md-5",
    cardClass: "bg-pale-leaf",
    iconSrc: "/assets/img/icons/lineal/cloud-computing-3.svg",
    iconClass: "icon-svg icon-svg-md text-leaf mb-3",
    title: "Daily Updates",
    description: "Nulla vitae elit libero, a pharetra augue.",
  },
  {
    id: 4,
    classes: "col-md-6 align-self-start",
    cardClass: "bg-pale-primary",
    iconSrc: "/assets/img/icons/lineal/analytics.svg",
    iconClass: "icon-svg icon-svg-md text-primary mb-3",
    title: "Market Research",
    description:
      "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget.",
  },
];
</script>

<style lang="scss" scoped></style>
