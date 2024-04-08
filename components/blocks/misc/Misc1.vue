<template>
  <section id="snippet-1" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row text-center">
        <div class="col-xl-10 mx-auto">
          <h2 class="fs-15 text-uppercase text-primary mb-3">Job Positions</h2>
          <h3 class="display-4 mb-10 px-xxl-15">
            We’re always searching for amazing people to join our team. Take a
            look at our current openings.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gy-6">
        <div v-for="job in jobs" :key="job.id" class="col-md-6 col-lg-4">
          <a :href="job.link" class="card shadow-lg lift h-100">
            <div class="card-body p-5 d-flex flex-row">
              <div>
                <span
                  :class="['avatar', job.avatarClass, 'w-11 h-11 fs-20 me-4']"
                  >{{ job.avatarText }}</span
                >
              </div>
              <div>
                <span :class="['badge', job.badgeClass, 'rounded py-1 mb-2']">{{
                  job.badgeText
                }}</span>
                <h4 class="mb-1">{{ job.title }}</h4>
                <p class="mb-0 text-body">{{ job.location }}</p>
              </div>
            </div>
          </a>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row mt-11">
        <div class="col-lg-6 col-xl-5 mx-auto text-center">
          <h2 class="display-6 mb-3">Can't find the right position?</h2>
          <p class="lead mb-5 px-md-16 px-lg-3">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
            leo risus, porta ac consectetur.
          </p>
          <a href="#" class="btn btn-primary rounded-pill">Get in Touch</a>
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
            href="#collapse-snippet-62"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-62"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-1&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row text-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-xl-10 mx-auto&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-15 text-uppercase text-primary mb-3&quot;&gt;Job Positions&lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-4 mb-10 px-xxl-15&quot;&gt;
            We’re always searching for amazing people to join our team. Take a
            look at our current openings.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gy-6&quot;&gt;
        &lt;div v-for&#x3D;&quot;job in jobs&quot; :key&#x3D;&quot;job.id&quot; class&#x3D;&quot;col-md-6 col-lg-4&quot;&gt;
          &lt;a :href&#x3D;&quot;job.link&quot; class&#x3D;&quot;card shadow-lg lift h-100&quot;&gt;
            &lt;div class&#x3D;&quot;card-body p-5 d-flex flex-row&quot;&gt;
              &lt;div&gt;
                &lt;span
                  :class&#x3D;&quot;[&#39;avatar&#39;, job.avatarClass, &#39;w-11 h-11 fs-20 me-4&#39;]&quot;
                  &gt;&lbrace;&lbrace; job.avatarText &rbrace;&rbrace;&lt;&#x2F;span
                &gt;
              &lt;&#x2F;div&gt;
              &lt;div&gt;
                &lt;span :class&#x3D;&quot;[&#39;badge&#39;, job.badgeClass, &#39;rounded py-1 mb-2&#39;]&quot;&gt;&lbrace;&lbrace;
                  job.badgeText
                &rbrace;&rbrace;&lt;&#x2F;span&gt;
                &lt;h4 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; job.title &rbrace;&rbrace;&lt;&#x2F;h4&gt;
                &lt;p class&#x3D;&quot;mb-0 text-body&quot;&gt;&lbrace;&lbrace; job.location &rbrace;&rbrace;&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row mt-11&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-6 col-xl-5 mx-auto text-center&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-6 mb-3&quot;&gt;Can&#39;t find the right position?&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead mb-5 px-md-16 px-lg-3&quot;&gt;
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
            leo risus, porta ac consectetur.
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary rounded-pill&quot;&gt;Get in Touch&lt;&#x2F;a&gt;
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
import { jobs } from &quot;~&#x2F;data&#x2F;job&quot;;
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
import { jobs } from "~/data/job";
</script>

<style lang="scss" scoped></style>
