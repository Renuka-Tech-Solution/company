<template>
  <section id="snippet-14" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center mb-16 mb-md-18">
        <div class="col-md-8 col-lg-6 mx-auto">
          <div class="img-mask mask-3 px-xxl-5">
            <nuxt-img
              src="/assets/img/avatars/avatar.jpg"
              srcset="/assets/img/avatars/avatar@2x.jpg 2x"
              alt="photo"
            />
          </div>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-2 mb-3">More about me</h2>
          <p class="lead fs-24">
            👋 Hello! I'm Camille, a multidisciplinary product designer 🧸 based
            in New York City 🚕. I’m very passionate about the work 💌 that I
            do.
          </p>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh ut fermentum massa justo sit
            amet risus.
          </p>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Aenean lacinia bibendum nulla sed consectetur.
          </p>
          <a href="#" class="btn btn-primary btn-icon btn-icon-end mt-2"
            >Learn More <i class="uil uil-arrow-up-right"></i
          ></a>
        </div>
        <!--/column -->
      </div>
      <!-- /.row -->
      <div class="row gx-md-8 gx-xl-12 gy-10">
        <div class="col-lg-5 mx-auto">
          <h2 class="display-2 mb-3">My experiences</h2>
          <p class="lead fs-24 pe-xxl-8">
            I've had the pleasure to work with companies 🏢 across a variety of
            industries 🏛️ I'm always interested in new ✨ and exciting
            adventures 🧨
          </p>
          <a href="#" class="btn btn-primary btn-icon btn-icon-end mt-2"
            >Download Resume <i class="uil uil-arrow-up-right"></i
          ></a>
        </div>
        <!--/column -->
        <div class="col-lg-7">
          <ul class="timeline">
            <li
              v-for="experience in experiences"
              :key="experience.id"
              class="timeline-item"
            >
              <div class="timeline-info meta fs-14">
                {{ experience.duration }}
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">{{ experience.title }}</h3>
                <p>{{ experience.description }}</p>
              </div>
            </li>
          </ul>
        </div>
        <!--/column -->
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
            href="#collapse-snippet-6"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-6"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-14&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-md-8 gx-xl-12 gy-10 align-items-center mb-16 mb-md-18&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-8 col-lg-6 mx-auto&quot;&gt;
          &lt;div class&#x3D;&quot;img-mask mask-3 px-xxl-5&quot;&gt;
            &lt;nuxt-img
              :width&#x3D;&quot;560&quot;
              :height&#x3D;&quot;525&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;avatars&#x2F;avatar.jpg&quot;
              srcset&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;avatars&#x2F;avatar@2x.jpg 2x&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-2 mb-3&quot;&gt;More about me&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-24&quot;&gt;
            👋 Hello! I&#39;m Camille, a multidisciplinary product designer 🧸 based
            in New York City 🚕. I’m very passionate about the work 💌 that I
            do.
          &lt;&#x2F;p&gt;
          &lt;p&gt;
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh ut fermentum massa justo sit
            amet risus.
          &lt;&#x2F;p&gt;
          &lt;p&gt;
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Aenean lacinia bibendum nulla sed consectetur.
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary btn-icon btn-icon-end mt-2&quot;
            &gt;Learn More &lt;i class&#x3D;&quot;uil uil-arrow-up-right&quot;&gt;&lt;&#x2F;i
          &gt;&lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gx-md-8 gx-xl-12 gy-10&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-5 mx-auto&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-2 mb-3&quot;&gt;My experiences&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-24 pe-xxl-8&quot;&gt;
            I&#39;ve had the pleasure to work with companies 🏢 across a variety of
            industries 🏛️ I&#39;m always interested in new ✨ and exciting
            adventures 🧨
          &lt;&#x2F;p&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary btn-icon btn-icon-end mt-2&quot;
            &gt;Download Resume &lt;i class&#x3D;&quot;uil uil-arrow-up-right&quot;&gt;&lt;&#x2F;i
          &gt;&lt;&#x2F;a&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-7&quot;&gt;
          &lt;ul class&#x3D;&quot;timeline&quot;&gt;
            &lt;li
              v-for&#x3D;&quot;experience in experiences&quot;
              :key&#x3D;&quot;experience.id&quot;
              class&#x3D;&quot;timeline-item&quot;
            &gt;
              &lt;div class&#x3D;&quot;timeline-info meta fs-14&quot;&gt;
                &lbrace;&lbrace; experience.duration &rbrace;&rbrace;
              &lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;timeline-marker&quot;&gt;&lt;&#x2F;div&gt;
              &lt;div class&#x3D;&quot;timeline-content&quot;&gt;
                &lt;h3 class&#x3D;&quot;timeline-title&quot;&gt;&lbrace;&lbrace; experience.title &rbrace;&rbrace;&lt;&#x2F;h3&gt;
                &lt;p&gt;&lbrace;&lbrace; experience.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;li&gt;
          &lt;&#x2F;ul&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { experiences } from &quot;~&#x2F;data&#x2F;experiences&quot;;
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
import { experiences } from "~/data/experiences";
</script>

<style lang="scss" scoped></style>
