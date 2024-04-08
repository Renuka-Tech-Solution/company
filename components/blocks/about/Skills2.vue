<template>
  <section id="snippet-7" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
        <div class="col-md-8 col-lg-6 position-relative">
          <div
            class="btn btn-circle btn-primary btn-play ripple mx-auto mb-5 position-absolute cursor-pointer"
            @click="
              () => {
                modalOpen = true;
              }
            "
            style="
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 3;
            "
          >
            <i class="icn-caret-right"></i>
          </div>
          <div
            class="shape rounded bg-soft-primary rellax d-md-block"
            data-rellax-speed="0"
            style="bottom: -1.8rem; right: -1.5rem; width: 85%; height: 90%"
          ></div>
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/about12.jpg"
              :width="650"
              :height="520"
              srcset="/assets/img/photos/about12@2x.jpg 2x"
              alt="image"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5 col-xl-4 offset-lg-1">
          <h3 class="display-4 mb-3">Sandbox Brings Awesomeness</h3>
          <p class="lead fs-lg mb-6">
            We have considered our solutions to
            <span class="underline">support every stage</span> of your growth.
          </p>
          <ul class="progress-list">
            <li v-for="(item, index) in skills2" :key="index">
              <p>{{ item.title }}</p>
              <div :class="`progressbar line primary`">
                <LineProgressbar :max="item.value" />
                <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
              </div>
            </li>
          </ul>
          <!-- /.progress-list -->
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
  &lt;section id=&quot;snippet-7&quot; class=&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class=&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class=&quot;row gy-10 gy-sm-13 gx-lg-3 align-items-center&quot;&gt;
        &lt;div class=&quot;col-md-8 col-lg-6 position-relative&quot;&gt;
          &lt;div
            class=&quot;btn btn-circle btn-primary btn-play ripple mx-auto mb-5 position-absolute cursor-pointer&quot;
            @click=&quot;
              () =&gt; {
                modalOpen = true;
              }
            &quot;
            style=&quot;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 3;
            &quot;
          &gt;
            &lt;i class=&quot;icn-caret-right&quot;&gt;&lt;/i&gt;
          &lt;/div&gt;
          &lt;div
            class=&quot;shape rounded bg-soft-primary rellax d-md-block&quot;
            data-rellax-speed=&quot;0&quot;
            style=&quot;bottom: -1.8rem; right: -1.5rem; width: 85%; height: 90%&quot;
          &gt;&lt;/div&gt;
          &lt;figure class=&quot;rounded&quot;&gt;
            &lt;nuxt-img
              src=&quot;/assets/img/photos/about12.jpg&quot;
              :width=&quot;650&quot;
              :height=&quot;520&quot;
              srcset=&quot;/assets/img/photos/about12@2x.jpg 2x&quot;
              alt=&quot;image&quot;
            /&gt;
          &lt;/figure&gt;
        &lt;/div&gt;
        &lt;!--/column --&gt;
        &lt;div class=&quot;col-lg-5 col-xl-4 offset-lg-1&quot;&gt;
          &lt;h3 class=&quot;display-4 mb-3&quot;&gt;Sandbox Brings Awesomeness&lt;/h3&gt;
          &lt;p class=&quot;lead fs-lg mb-6&quot;&gt;
            We have considered our solutions to
            &lt;span class=&quot;underline&quot;&gt;support every stage&lt;/span&gt; of your growth.
          &lt;/p&gt;
          &lt;ul class=&quot;progress-list&quot;&gt;
            &lt;li v-for=&quot;(item, index) in skills2&quot; :key=&quot;index&quot;&gt;
              &lt;p&gt;&lbrace;&lbrace; item.title &rbrace;&rbrace;&lt;/p&gt;
              &lt;div :class=&quot;&grave;progressbar line primary&grave;&quot;&gt;
                &lt;LineProgressbar :max=&quot;item.value&quot; /&gt;
                &lt;!-- Component for line progressbar with animation from omponents&gt;common&gt;LineProgressbar --&gt;
              &lt;/div&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
          &lt;!-- /.progress-list --&gt;
        &lt;/div&gt;
        &lt;!--/column --&gt;
      &lt;/div&gt;
      &lt;!--/.row --&gt;
    &lt;/div&gt;
    &lt;!-- /.container --&gt;
   
    &lt;!-- /.container --&gt;
  &lt;/section&gt;
  &lt;CommonModalVideo @modalClose=&quot;modalClose&quot; :modalOpen=&quot;modalOpen&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import LineProgressbar from &quot;~/components/common/LineProgressbar.vue&quot;;
import { skills2 } from &quot;~/data/skils&quot;;
const modalOpen = ref(false);
const modalClose = () =&gt; {
  modalOpen.value = false;
};
&lt;/script&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;
</code></pre>
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
  <CommonModalVideo @modalClose="modalClose" :modalOpen="modalOpen" />
</template>

<script setup>
import LineProgressbar from "~/components/common/LineProgressbar.vue";
import { skills2 } from "~/data/skils";
const modalOpen = ref(false);
const modalClose = () => {
  modalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
