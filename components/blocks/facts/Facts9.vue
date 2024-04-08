<template>
  <section id="snippet-9" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-3 gy-10 gy-lg-0 align-items-center">
        <div class="col-lg-5 mx-auto order-lg-2">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/3d5.png"
              srcset="/assets/img/illustrations/3d5@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5 me-auto">
          <h2 class="fs-16 text-uppercase text-primary mb-3">Our Solutions</h2>
          <h3 class="display-4 mb-5 pe-xxl-5">
            Just sit & relax while we take care of your business needs.
          </h3>
          <p class="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus. Maecenas sed diam eget
            risus varius blandit sit amet non magna. Praesent commodo cursus
            magna.
          </p>
          <div class="row align-items-center counter-wrapper gy-6">
            <div class="col-md-6">
              <h3 class="counter counter-lg mb-1">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="99.7"
                  :time="1500"
                />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                %
              </h3>
              <h6 class="fs-17 mb-1">Customer Satisfaction</h6>
              <span class="ratings five"></span>
            </div>
            <!--/column -->
            <div class="col-md-6">
              <h3 class="counter counter-lg mb-1">
                <CommonCounter parentClass="" :min="0" :max="4" :time="500" />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                x
              </h3>
              <h6 class="fs-17 mb-1">New Visitors</h6>
              <span class="ratings five"></span>
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
            href="#collapse-snippet-26"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-26"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-9&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-3 gy-10 gy-lg-0 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-5 mx-auto order-lg-2&quot;&gt;
          &lt;figure&gt;
            &lt;nuxt-img
              class&#x3D;&quot;w-auto&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;3d5.png&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;illustrations&#x2F;3d5@2x.png 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;figure&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-5 me-auto&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-primary mb-3&quot;&gt;Our Solutions&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-5 pe-xxl-5&quot;&gt;
            Just sit &amp; relax while we take care of your business needs.
          &lt;&#x2F;h3&gt;
          &lt;p class&#x3D;&quot;mb-6&quot;&gt;
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus. Maecenas sed diam eget
            risus varius blandit sit amet non magna. Praesent commodo cursus
            magna.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;row align-items-center counter-wrapper gy-6&quot;&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;h3 class&#x3D;&quot;counter counter-lg mb-1&quot;&gt;
                &lt;CommonCounter
                  parentClass&#x3D;&quot;&quot;
                  :min&#x3D;&quot;0&quot;
                  :max&#x3D;&quot;99.7&quot;
                  :time&#x3D;&quot;1500&quot;
                &#x2F;&gt;
                &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
                %
              &lt;&#x2F;h3&gt;
              &lt;h6 class&#x3D;&quot;fs-17 mb-1&quot;&gt;Customer Satisfaction&lt;&#x2F;h6&gt;
              &lt;span class&#x3D;&quot;ratings five&quot;&gt;&lt;&#x2F;span&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-6&quot;&gt;
              &lt;h3 class&#x3D;&quot;counter counter-lg mb-1&quot;&gt;
                &lt;CommonCounter parentClass&#x3D;&quot;&quot; :min&#x3D;&quot;0&quot; :max&#x3D;&quot;4&quot; :time&#x3D;&quot;500&quot; &#x2F;&gt;
                &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
                x
              &lt;&#x2F;h3&gt;
              &lt;h6 class&#x3D;&quot;fs-17 mb-1&quot;&gt;New Visitors&lt;&#x2F;h6&gt;
              &lt;span class&#x3D;&quot;ratings five&quot;&gt;&lt;&#x2F;span&gt;
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

&lt;script setup&gt;&lt;&#x2F;script&gt;

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

<script setup></script>

<style lang="scss" scoped></style>
