<template>
  <section id="snippet-8" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-lg-11 col-xl-10 mx-auto mb-10">
          <h2 class="fs-16 text-uppercase text-muted text-center mb-3">
            Our Projects
          </h2>
          <h3 class="display-3 text-center px-lg-5 px-xl-10 px-xxl-16 mb-0">
            Check out some of our awesome projects with creative ideas and great
            design.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="grid grid-view projects-masonry">
        <div class="row gx-md-8 gy-10 gy-md-13 isotope">
          <div
            v-for="(project, i) in projects6"
            :key="project.id"
            class="project item col-md-6 col-xl-4"
          >
            <figure class="rounded mb-6">
              <nuxt-img :src="project.image.src" alt="photo" />
              <div
                class="item-link cursor-pointer"
                @click="() => setActiveLightBox(true, i)"
              >
                <i class="uil uil-focus-add"></i>
              </div>
            </figure>
            <div
              class="project-details d-flex justify-content-center flex-column"
            >
              <div class="post-header">
                <h2 class="post-title h3 fs-22">
                  <nuxt-link to="/single-project3" class="link-dark">{{
                    project.title
                  }}</nuxt-link>
                </h2>
                <div class="post-category text-ash">{{ project.category }}</div>
              </div>
              <!-- /.post-header -->
            </div>
            <!-- /.project-details -->
          </div>
          <!-- /.item -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid -->
      <div class="text-center mt-10">
        <a href="#" class="btn btn-lg btn-primary rounded-pill"
          >Start a Project</a
        >
      </div>
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-68"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-68"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-8&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-11 col-xl-10 mx-auto mb-10&quot;&gt;
          &lt;h2 class&#x3D;&quot;fs-16 text-uppercase text-muted text-center mb-3&quot;&gt;
            Our Projects
          &lt;&#x2F;h2&gt;
          &lt;h3 class&#x3D;&quot;display-3 text-center px-lg-5 px-xl-10 px-xxl-16 mb-0&quot;&gt;
            Check out some of our awesome projects with creative ideas and great
            design.
          &lt;&#x2F;h3&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;grid grid-view projects-masonry&quot;&gt;
        &lt;div class&#x3D;&quot;row gx-md-8 gy-10 gy-md-13 isotope&quot;&gt;
          &lt;div
            v-for&#x3D;&quot;(project, i) in projects6&quot;
            :key&#x3D;&quot;project.id&quot;
            class&#x3D;&quot;project item col-md-6 col-xl-4&quot;
          &gt;
            &lt;figure class&#x3D;&quot;rounded mb-6&quot;&gt;
              &lt;nuxt-img :src&#x3D;&quot;project.image.src&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
              &lt;div
                class&#x3D;&quot;item-link cursor-pointer&quot;
                @click&#x3D;&quot;() &#x3D;&gt; setActiveLightBox(true, i)&quot;
              &gt;
                &lt;i class&#x3D;&quot;uil uil-focus-add&quot;&gt;&lt;&#x2F;i&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;figure&gt;
            &lt;div
              class&#x3D;&quot;project-details d-flex justify-content-center flex-column&quot;
            &gt;
              &lt;div class&#x3D;&quot;post-header&quot;&gt;
                &lt;h2 class&#x3D;&quot;post-title h3 fs-22&quot;&gt;
                  &lt;nuxt-link to&#x3D;&quot;&#x2F;single-project3&quot; class&#x3D;&quot;link-dark&quot;&gt;&lbrace;&lbrace;
                    project.title
                  &rbrace;&rbrace;&lt;&#x2F;nuxt-link&gt;
                &lt;&#x2F;h2&gt;
                &lt;div class&#x3D;&quot;post-category text-ash&quot;&gt;&lbrace;&lbrace; project.category &rbrace;&rbrace;&lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.post-header --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;.project-details --&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.item --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.row --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.grid --&gt;
      &lt;div class&#x3D;&quot;text-center mt-10&quot;&gt;
        &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-lg btn-primary rounded-pill&quot;
          &gt;Start a Project&lt;&#x2F;a
        &gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
  &lt;Lightbox
    :images&#x3D;&quot;images&quot;
    :activeLightBox&#x3D;&quot;activeLightBox&quot;
    :firstSlideIndex&#x3D;&quot;currentSlideIndex&quot;
    @setActiveLightBox&#x3D;&quot;setActiveLightBox&quot;
  &#x2F;&gt;
  &lt;!-- Component for lightbox image slider  from omponents&gt;common&gt;Lightbox --&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import { projects6 } from &quot;~&#x2F;data&#x2F;projects&quot;;
const activeLightBox &#x3D; ref(false);
const currentSlideIndex &#x3D; ref(1);
const images &#x3D; ref([]);
onMounted(() &#x3D;&gt; {
  images.value &#x3D; projects6.map((elm) &#x3D;&gt; elm.fullImage);
});

const setActiveLightBox &#x3D; (val, i) &#x3D;&gt; {
  currentSlideIndex.value &#x3D; i;
  activeLightBox.value &#x3D; val;
};
import Lightbox from &quot;~&#x2F;components&#x2F;common&#x2F;Lightbox.vue&quot;;
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
  <Lightbox
    :images="images"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
  <!-- Component for lightbox image slider  from omponents>common>Lightbox -->
</template>

<script setup>
import { projects6 } from "~/data/projects";
const activeLightBox = ref(false);
const currentSlideIndex = ref();
const images = ref([]);
onMounted(() => {
  images.value = projects6.map((elm) => elm.fullImage);
});

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};
import Lightbox from "~/components/common/Lightbox.vue";
</script>

<style lang="scss" scoped></style>
