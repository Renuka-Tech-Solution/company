<template>
  <section id="snippet-10" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-md-8 gx-xl-12 gy-6 align-items-center">
        <div class="col-md-8 col-lg-6 mx-auto">
          <div class="img-mask mask-1">
            <nuxt-img
              :width="610"
              :height="610"
              src="/assets/img/photos/about29.jpg"
              alt="photo"
            />
          </div>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-5 mb-5">
            Hi, I'm Julia, a documentary wedding and couples photographer
            currently working from and based in London.
          </h2>
          <p class="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio. Sed posuere consectetur est at
            lobortis facilisis in.
          </p>
          <div class="row counter-wrapper gy-6">
            <div class="col-md-4">
              <h3 class="counter">
                <CommonCounter :max="500" :min="50" :time="1500" />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                K+
              </h3>
              <p>Shots Taken</p>
            </div>
            <!--/column -->
            <div class="col-md-4">
              <h3 class="counter">
                <CommonCounter :max="500" :min="50" :time="1500" />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                +
              </h3>
              <p>Happy Clients</p>
            </div>
            <!--/column -->
            <div class="col-md-4">
              <h3 class="counter">
                <CommonCounter :max="25" :min="0" :time="1500" />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
              </h3>
              <p>Awards Won</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!-- /.row -->
      <div class="row gx-md-8 gx-xl-12 gy-6 mt-8">
        <div class="col-lg-4">
          <h3>My Skills</h3>
          <p>
            Etiam porta sem malesuada magna mollis euismod. Praesent commodo
            cursus magna vel consectetur purus sit amet fermentum.
          </p>
          <ul class="progress-list">
            <li
              v-for="skill in skills3"
              :key="skill.id"
              :class="{ 'mb-0': skill.id === skills3[skills3.length - 1].id }"
            >
              <p>{{ skill.name }}</p>
              <div class="progressbar line soft-primary">
                <CommonLineProgressbar :max="skill.value" />
                <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
              </div>
            </li>
          </ul>
          <!-- /.progress-list -->
        </div>
        <!-- /column -->
        <div class="col-lg-4">
          <h3>Why Choose Me?</h3>
          <p>
            Vestibulum id ligula porta felis euismod semper. Cras mattis
            consectetur purus sit amet fermentum. Donec ullamcorper nulla non
            metus auctor fringilla. Nullam id dolor id nibh ultricies. Cras
            mattis consectetur purus amet fermentum.
          </p>
          <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
            <li v-for="(item, index) in checklistItems" :key="index">
              <i class="uil uil-check"></i>{{ item.text }}
            </li>
          </ul>
        </div>
        <!-- /column -->
        <div class="col-lg-4">
          <h3>My Process</h3>
          <div
            v-for="(item, index) in tasks"
            :key="index"
            class="d-flex flex-row mb-5"
          >
            <div>
              <span
                class="icon btn btn-circle btn-soft-primary pe-none mt-1 me-5"
                ><span class="number fs-18">{{ item.number }}</span></span
              >
            </div>
            <div>
              <h5 class="mb-1">{{ item.title }}</h5>
              <p class="mb-0">{{ item.description }}</p>
            </div>
          </div>
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
            href="#collapse-snippet-5"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-5"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-10&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row gx-md-8 gx-xl-12 gy-6 align-items-center&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-8 col-lg-6 mx-auto&quot;&gt;
          &lt;div class&#x3D;&quot;img-mask mask-1&quot;&gt;
            &lt;nuxt-img
              :width&#x3D;&quot;610&quot;
              :height&#x3D;&quot;610&quot;
              src&#x3D;&quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;about29.jpg&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-5 mb-5&quot;&gt;
            Hi, I&#39;m Julia, a documentary wedding and couples photographer
            currently working from and based in London.
          &lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;mb-6&quot;&gt;
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio. Sed posuere consectetur est at
            lobortis facilisis in.
          &lt;&#x2F;p&gt;
          &lt;div class&#x3D;&quot;row counter-wrapper gy-6&quot;&gt;
            &lt;div class&#x3D;&quot;col-md-4&quot;&gt;
              &lt;h3 class&#x3D;&quot;counter&quot;&gt;
                &lt;CommonCounter :max&#x3D;&quot;500&quot; :min&#x3D;&quot;50&quot; :time&#x3D;&quot;1500&quot; &#x2F;&gt;
                &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
                K+
              &lt;&#x2F;h3&gt;
              &lt;p&gt;Shots Taken&lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-4&quot;&gt;
              &lt;h3 class&#x3D;&quot;counter&quot;&gt;
                &lt;CommonCounter :max&#x3D;&quot;500&quot; :min&#x3D;&quot;50&quot; :time&#x3D;&quot;1500&quot; &#x2F;&gt;
                &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
                +
              &lt;&#x2F;h3&gt;
              &lt;p&gt;Happy Clients&lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-4&quot;&gt;
              &lt;h3 class&#x3D;&quot;counter&quot;&gt;
                &lt;CommonCounter :max&#x3D;&quot;25&quot; :min&#x3D;&quot;0&quot; :time&#x3D;&quot;1500&quot; &#x2F;&gt;
                &lt;!-- Component for counting number with intersetion observer from omponents&gt;common&gt;counter --&gt;
              &lt;&#x2F;h3&gt;
              &lt;p&gt;Awards Won&lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;row gx-md-8 gx-xl-12 gy-6 mt-8&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-4&quot;&gt;
          &lt;h3&gt;My Skills&lt;&#x2F;h3&gt;
          &lt;p&gt;
            Etiam porta sem malesuada magna mollis euismod. Praesent commodo
            cursus magna vel consectetur purus sit amet fermentum.
          &lt;&#x2F;p&gt;
          &lt;ul class&#x3D;&quot;progress-list&quot;&gt;
            &lt;li
              v-for&#x3D;&quot;skill in skills3&quot;
              :key&#x3D;&quot;skill.id&quot;
              :class&#x3D;&quot;{ &#39;mb-0&#39;: skill.id &#x3D;&#x3D;&#x3D; skills3[skills3.length - 1].id }&quot;
            &gt;
              &lt;p&gt;&lbrace;&lbrace; skill.name &rbrace;&rbrace;&lt;&#x2F;p&gt;
              &lt;div class&#x3D;&quot;progressbar line soft-primary&quot;&gt;
                &lt;CommonLineProgressbar :max&#x3D;&quot;skill.value&quot; &#x2F;&gt;
                &lt;!-- Component for line progressbar with animation from omponents&gt;common&gt;LineProgressbar --&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;li&gt;
          &lt;&#x2F;ul&gt;
          &lt;!-- &#x2F;.progress-list --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-4&quot;&gt;
          &lt;h3&gt;Why Choose Me?&lt;&#x2F;h3&gt;
          &lt;p&gt;
            Vestibulum id ligula porta felis euismod semper. Cras mattis
            consectetur purus sit amet fermentum. Donec ullamcorper nulla non
            metus auctor fringilla. Nullam id dolor id nibh ultricies. Cras
            mattis consectetur purus amet fermentum.
          &lt;&#x2F;p&gt;
          &lt;ul class&#x3D;&quot;icon-list bullet-bg bullet-soft-primary mb-0&quot;&gt;
            &lt;li v-for&#x3D;&quot;(item, index) in checklistItems&quot; :key&#x3D;&quot;index&quot;&gt;
              &lt;i class&#x3D;&quot;uil uil-check&quot;&gt;&lt;&#x2F;i&gt;&lbrace;&lbrace; item.text &rbrace;&rbrace;
            &lt;&#x2F;li&gt;
          &lt;&#x2F;ul&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-lg-4&quot;&gt;
          &lt;h3&gt;My Process&lt;&#x2F;h3&gt;
          &lt;div
            v-for&#x3D;&quot;(item, index) in tasks&quot;
            :key&#x3D;&quot;index&quot;
            class&#x3D;&quot;d-flex flex-row mb-5&quot;
          &gt;
            &lt;div&gt;
              &lt;span
                class&#x3D;&quot;icon btn btn-circle btn-soft-primary pe-none mt-1 me-5&quot;
                &gt;&lt;span class&#x3D;&quot;number fs-18&quot;&gt;&lbrace;&lbrace; item.number &rbrace;&rbrace;&lt;&#x2F;span&gt;&lt;&#x2F;span
              &gt;
            &lt;&#x2F;div&gt;
            &lt;div&gt;
              &lt;h5 class&#x3D;&quot;mb-1&quot;&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;&#x2F;h5&gt;
              &lt;p class&#x3D;&quot;mb-0&quot;&gt;&lbrace;&lbrace; item.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
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
import { skills3 } from &quot;~&#x2F;data&#x2F;skils&quot;;
import { checklistItems } from &quot;~&#x2F;data&#x2F;features&quot;;

const tasks &#x3D; [
  {
    number: 1,
    title: &quot;Collect Ideas&quot;,
    description:
      &quot;Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus.&quot;,
  },
  {
    number: 2,
    title: &quot;Data Analysis&quot;,
    description:
      &quot;Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.&quot;,
  },
  {
    number: 3,
    title: &quot;Finalize Product&quot;,
    description:
      &quot;Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.&quot;,
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
import { skills3 } from "~/data/skils";
import { checklistItems } from "~/data/features";

const tasks = [
  {
    number: 1,
    title: "Collect Ideas",
    description:
      "Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus.",
  },
  {
    number: 2,
    title: "Data Analysis",
    description:
      "Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.",
  },
  {
    number: 3,
    title: "Finalize Product",
    description:
      "Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.",
  },
];
</script>

<style lang="scss" scoped></style>
