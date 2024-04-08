<template>
  <section id="snippet-7" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-6 mb-10">
        <div class="col-lg-6 order-lg-2">
          <ul class="progress-list">
            <li v-for="item in progressItems" :key="item.id">
              <p>{{ item.title }}</p>
              <div :class="['progressbar', 'line', item.colorClass]">
                <CommonLineProgressbar :max="item.max" />
                <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
              </div>
            </li>
          </ul>
          <!-- /.progress-list -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-4 mb-3">What I Do?</h2>
          <p class="lead fs-20 mb-5">
            Duis mollis est commodo luctus nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare
            vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo
            cursus magna, vel scelerisque nisl.
          </p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-6 text-center">
        <div
          v-for="service in designServices"
          :key="service.id"
          class="col-md-6 col-lg-3"
        >
          <nuxt-img
            :src="service.iconSrc"
            class="icon-svg icon-svg-md mb-4"
            :class="service.iconColorClass"
            alt="photo"
          />
          <h4>{{ service.title }}</h4>
          <p class="mb-2">{{ service.description }}</p>
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
            href="#collapse-snippet-33"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-33"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-7&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-6 mb-10&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 order-lg-2&quot;&gt;
          &lt;ul class&#x3D;&quot;progress-list&quot;&gt;
            &lt;li v-for&#x3D;&quot;item in progressItems&quot; :key&#x3D;&quot;item.id&quot;&gt;
              &lt;p&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;p&gt;
              &lt;div :class&#x3D;&quot;[&#39;progressbar&#39;, &#39;line&#39;, item.colorClass]&quot;&gt;
                &lt;CommonLineProgressbar :max&#x3D;&quot;item.max&quot; &#x2F;&gt;
                &lt;!-- Component for line progressbar with animation from omponents&gt;common&gt;LineProgressbar --&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;li&gt;
          &lt;&#x2F;ul&gt;
          &lt;!-- &#x2F;.progress-list --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;What I Do?&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-20 mb-5&quot;&gt;
            Duis mollis est commodo luctus nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare
            vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo
            cursus magna, vel scelerisque nisl.
          &lt;&#x2F;p&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gx-lg-8 gx-xl-12 gy-6 text-center&quot;&gt;
        &lt;div
          v-for&#x3D;&quot;service in designServices&quot;
          :key&#x3D;&quot;service.id&quot;
          class&#x3D;&quot;col-md-6 col-lg-3&quot;
        &gt;
          &lt;nuxt-img
            :src&#x3D;&quot;service.iconSrc&quot;
            class&#x3D;&quot;icon-svg icon-svg-md mb-4&quot;
            :class&#x3D;&quot;service.iconColorClass&quot;
            alt&#x3D;&quot;&quot;
          &#x2F;&gt;
          &lt;h4&gt;&lbrace;&lbrace; service.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
          &lt;p class&#x3D;&quot;mb-2&quot;&gt;&lbrace;&lbrace; service.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
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
import { designServices, progressItems } from &quot;~&#x2F;data&#x2F;features&quot;;
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
import { designServices, progressItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
