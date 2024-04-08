<template>
  <section id="snippet-19" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row d-flex align-items-start gy-10">
        <div class="col-lg-5 position-lg-sticky" style="top: 8rem">
          <h3 class="display-2 mb-5">
            The service I offer is specifically designed to meet your needs.
          </h3>
          <p class="mb-7">
            Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper
            nulla non metus auctor fringilla. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet.
          </p>
          <a href="#" class="btn btn-lg btn-primary btn-icon btn-icon-end"
            >More Details <i class="uil uil-arrow-up-right"></i
          ></a>
        </div>
        <!-- /column -->
        <div class="col-lg-6 ms-auto">
          <div
            v-for="(item, index) in cards"
            :key="index"
            :class="item.cardClass"
          >
            <div class="card-body d-flex flex-row">
              <div>
                <nuxt-img :src="item.iconSrc" :class="item.iconClass" alt="photo" />
              </div>
              <div>
                <h3 class="fs-21 mb-2">{{ item.title }}</h3>
                <p class="mb-0">{{ item.description }}</p>
              </div>
            </div>
            <!-- /.card-body -->
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
            href="#collapse-snippet-41"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-41"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-19&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row d-flex align-items-start gy-10&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-5 position-lg-sticky&quot; style&#x3D;&quot;top: 8rem&quot;&gt;
          &lt;h3 class&#x3D;&quot;display-2 mb-5&quot;&gt;
            The service I offer is specifically designed to meet your needs.
          &lt;&#x2F;h3&gt;
          &lt;p class&#x3D;&quot;mb-7&quot;&gt;
            Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper
            nulla non metus auctor fringilla. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet.
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-lg btn-primary btn-icon btn-icon-end&quot;
            &gt;More Details &lt;i class&#x3D;&quot;uil uil-arrow-up-right&quot;&gt;&lt;&#x2F;i
          &gt;&lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6 ms-auto&quot;&gt;
          &lt;div
            v-for&#x3D;&quot;(item, index) in cards&quot;
            :key&#x3D;&quot;index&quot;
            :class&#x3D;&quot;item.cardClass&quot;
          &gt;
            &lt;div class&#x3D;&quot;card-body d-flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;nuxt-img :src&#x3D;&quot;item.iconSrc&quot; :class&#x3D;&quot;item.iconClass&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;h3 class&#x3D;&quot;fs-21 mb-2&quot;&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h3&gt;
                &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.card-body --&gt;
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
const cards &#x3D; [
  {
    id: 1,
    cardClass: &quot;card bg-soft-fuchsia mb-6&quot;,
    iconSrc: &quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;search-2.svg&quot;,
    iconClass: &quot;icon-svg icon-svg-md text-fuchsia me-5&quot;,
    title: &quot;User Research&quot;,
    description:
      &quot;Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.&quot;,
  },
  {
    id: 2,
    cardClass: &quot;card bg-soft-aqua mb-6&quot;,
    iconSrc: &quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;puzzle-2.svg&quot;,
    iconClass: &quot;icon-svg icon-svg-md text-aqua me-5&quot;,
    title: &quot;Strategy &amp; Planning&quot;,
    description:
      &quot;Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.&quot;,
  },
  {
    id: 3,
    cardClass: &quot;card bg-soft-yellow mb-6&quot;,
    iconSrc: &quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;smartphone.svg&quot;,
    iconClass: &quot;icon-svg icon-svg-md text-yellow me-5&quot;,
    title: &quot;App Design&quot;,
    description:
      &quot;Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.&quot;,
  },
  {
    id: 4,
    cardClass: &quot;card bg-soft-leaf mb-6&quot;,
    iconSrc: &quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;design.svg&quot;,
    iconClass: &quot;icon-svg icon-svg-md text-leaf me-5&quot;,
    title: &quot;Brand Design&quot;,
    description:
      &quot;Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.&quot;,
  },
  {
    id: 5,
    cardClass: &quot;card bg-soft-orange mb-6&quot;,
    iconSrc: &quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;video-editing.svg&quot;,
    iconClass: &quot;icon-svg icon-svg-md text-orange me-5&quot;,
    title: &quot;Motion Graphic&quot;,
    description:
      &quot;Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.&quot;,
  },
  {
    id: 6,
    cardClass: &quot;card bg-soft-grape&quot;,
    iconSrc: &quot;&#x2F;assets&#x2F;img&#x2F;icons&#x2F;lineal&#x2F;browser.svg&quot;,
    iconClass: &quot;icon-svg icon-svg-md text-grape me-5&quot;,
    title: &quot;Web Design&quot;,
    description:
      &quot;Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.&quot;,
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
    cardClass: "card bg-soft-fuchsia mb-6",
    iconSrc: "/assets/img/icons/lineal/search-2.svg",
    iconClass: "icon-svg icon-svg-md text-fuchsia me-5",
    title: "User Research",
    description:
      "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
  },
  {
    id: 2,
    cardClass: "card bg-soft-aqua mb-6",
    iconSrc: "/assets/img/icons/lineal/puzzle-2.svg",
    iconClass: "icon-svg icon-svg-md text-aqua me-5",
    title: "Strategy & Planning",
    description:
      "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
  },
  {
    id: 3,
    cardClass: "card bg-soft-yellow mb-6",
    iconSrc: "/assets/img/icons/lineal/smartphone.svg",
    iconClass: "icon-svg icon-svg-md text-yellow me-5",
    title: "App Design",
    description:
      "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
  },
  {
    id: 4,
    cardClass: "card bg-soft-leaf mb-6",
    iconSrc: "/assets/img/icons/lineal/design.svg",
    iconClass: "icon-svg icon-svg-md text-leaf me-5",
    title: "Brand Design",
    description:
      "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
  },
  {
    id: 5,
    cardClass: "card bg-soft-orange mb-6",
    iconSrc: "/assets/img/icons/lineal/video-editing.svg",
    iconClass: "icon-svg icon-svg-md text-orange me-5",
    title: "Motion Graphic",
    description:
      "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
  },
  {
    id: 6,
    cardClass: "card bg-soft-grape",
    iconSrc: "/assets/img/icons/lineal/browser.svg",
    iconClass: "icon-svg icon-svg-md text-grape me-5",
    title: "Web Design",
    description:
      "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
  },
];
</script>

<style lang="scss" scoped></style>
