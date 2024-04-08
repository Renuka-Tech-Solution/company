<template>
  <section id="snippet-6" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row align-items-center mb-10">
        <div class="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
          <h2 class="display-4 mb-3">Latest Projects</h2>
          <p class="lead fs-20 mb-0">
            Check out some of my latest projects with creative ideas.
          </p>
        </div>
        <!--/column -->
        <div class="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
          <a href="#" class="btn btn-primary rounded-pill mb-0"
            >See All Projects</a
          >
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="`card ${card.bgClass} mb-10`"
      >
        <div class="card-body p-12 pb-0">
          <div class="row">
            <div class="col-lg-4 pb-12 align-self-center">
              <div :class="`post-category mb-3 text-${card.categoryColor}`">
                {{ card.category }}
              </div>
              <h3 class="h1 post-title mb-3">{{ card.title }}</h3>
              <p>{{ card.description }}</p>
              <nuxt-link
                to="/single-project"
                class="more hover link-{{ card.categoryColor }}"
                >See Project</nuxt-link
              >
            </div>
            <div class="col-lg-7 offset-lg-1 align-self-end">
              <figure>
                <nuxt-img
                  class="img-fluid"
                  :src="card.image.src"
                  :srcset="card.image.srcset"
                  alt="photo"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <!--/.card -->
      <div class="row gx-md-8 gx-xl-10">
        <div v-for="(project, index) in projects" :key="index" class="col-lg-6">
          <div :class="project.cardClass">
            <div class="card-body p-12 pb-0">
              <div :class="project.categoryClass">{{ project.category }}</div>
              <h3 class="h1 post-title mb-3">{{ project.title }}</h3>
              <p>{{ project.description }}</p>

              <nuxt-link
                to="/single-project"
                class="more hover {{ project.linkClass }}"
                >{{ project.linkLabel }}</nuxt-link
              >
            </div>
            <!--/.card-body -->
            <nuxt-img
              class="card-img-bottom"
              :src="project.imageSrc"
              :srcset="project.imageSrcset"
              alt="photo"
            />
          </div>
          <!--/.card -->
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
            href="#collapse-snippet-67"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-67"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-6&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15&quot;&gt;
      &lt;div class&#x3D;&quot;row align-items-center mb-10&quot;&gt;
        &lt;div class&#x3D;&quot;col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-4 mb-3&quot;&gt;Latest Projects&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-20 mb-0&quot;&gt;
            Check out some of my latest projects with creative ideas.
          &lt;&#x2F;p&gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
        &lt;div class&#x3D;&quot;col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0&quot;&gt;
          &lt;a href&#x3D;&quot;#&quot; class&#x3D;&quot;btn btn-primary rounded-pill mb-0&quot;
            &gt;See All Projects&lt;&#x2F;a
          &gt;
        &lt;&#x2F;div&gt;
        &lt;!--&#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.row --&gt;
      &lt;div
        v-for&#x3D;&quot;(card, index) in cards&quot;
        :key&#x3D;&quot;index&quot;
        :class&#x3D;&quot;&#x60;card ${card.bgClass} mb-10&#x60;&quot;
      &gt;
        &lt;div class&#x3D;&quot;card-body p-12 pb-0&quot;&gt;
          &lt;div class&#x3D;&quot;row&quot;&gt;
            &lt;div class&#x3D;&quot;col-lg-4 pb-12 align-self-center&quot;&gt;
              &lt;div :class&#x3D;&quot;&#x60;post-category mb-3 text-${card.categoryColor}&#x60;&quot;&gt;
                &lbrace;&lbrace; card.category &rbrace;&rbrace;
              &lt;&#x2F;div&gt;
              &lt;h3 class&#x3D;&quot;h1 post-title mb-3&quot;&gt;&lbrace;&lbrace; card.title &rbrace;&rbrace;&lt;&#x2F;h3&gt;
              &lt;p&gt;&lbrace;&lbrace; card.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
              &lt;a
                :href&#x3D;&quot;card.link&quot;
                class&#x3D;&quot;more hover link-&lbrace;&lbrace; card.categoryColor &rbrace;&rbrace;&quot;
                &gt;See Project&lt;&#x2F;a
              &gt;
            &lt;&#x2F;div&gt;
            &lt;div class&#x3D;&quot;col-lg-7 offset-lg-1 align-self-end&quot;&gt;
              &lt;figure&gt;
                &lt;nuxt-img
                  class&#x3D;&quot;img-fluid&quot;
                  :src&#x3D;&quot;card.image.src&quot;
                  :srcset&#x3D;&quot;card.image.srcset&quot;
                  alt&#x3D;&quot;&quot;
                &#x2F;&gt;
              &lt;&#x2F;figure&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      &lt;!--&#x2F;.card --&gt;
      &lt;div class&#x3D;&quot;row gx-md-8 gx-xl-10&quot;&gt;
        &lt;div v-for&#x3D;&quot;(project, index) in projects&quot; :key&#x3D;&quot;index&quot; class&#x3D;&quot;col-lg-6&quot;&gt;
          &lt;div :class&#x3D;&quot;project.cardClass&quot;&gt;
            &lt;div class&#x3D;&quot;card-body p-12 pb-0&quot;&gt;
              &lt;div :class&#x3D;&quot;project.categoryClass&quot;&gt;&lbrace;&lbrace; project.category &rbrace;&rbrace;&lt;&#x2F;div&gt;
              &lt;h3 class&#x3D;&quot;h1 post-title mb-3&quot;&gt;&lbrace;&lbrace; project.title &rbrace;&rbrace;&lt;&#x2F;h3&gt;
              &lt;p&gt;&lbrace;&lbrace; project.description &rbrace;&rbrace;&lt;&#x2F;p&gt;
              &lt;a
                :href&#x3D;&quot;project.link&quot;
                class&#x3D;&quot;more hover &lbrace;&lbrace; project.linkClass &rbrace;&rbrace;&quot;
                &gt;&lbrace;&lbrace; project.linkLabel &rbrace;&rbrace;&lt;&#x2F;a
              &gt;
            &lt;&#x2F;div&gt;
            &lt;!--&#x2F;.card-body --&gt;
            &lt;nuxt-img
              class&#x3D;&quot;card-img-bottom&quot;
              :src&#x3D;&quot;project.imageSrc&quot;
              :srcset&#x3D;&quot;project.imageSrcset&quot;
              alt&#x3D;&quot;&quot;
            &#x2F;&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.card --&gt;
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
const projects &#x3D; [
  {
    id: 1,
    cardClass: &quot;card bg-soft-leaf mb-10 mb-lg-0&quot;,
    categoryClass: &quot;post-category mb-3 text-leaf&quot;,
    category: &quot;Web Design&quot;,
    title: &quot;Missio Theme&quot;,
    description:
      &quot;Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque id ligula felis.&quot;,
    link: &quot;#&quot;,
    linkClass: &quot;link-leaf mb-8&quot;,
    linkLabel: &quot;See Project&quot;,
    imageSrc: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f3.png&quot;,
    imageSrcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f3@2x.png 2x&quot;,
  },
  {
    id: 2,
    cardClass: &quot;card bg-soft-pink mb-lg-0&quot;,
    categoryClass: &quot;post-category mb-3 text-pink&quot;,
    category: &quot;Mobile Design&quot;,
    title: &quot;Storage App&quot;,
    description:
      &quot;Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper.&quot;,
    link: &quot;#&quot;,
    linkClass: &quot;link-pink mb-8&quot;,
    linkLabel: &quot;See Project&quot;,
    imageSrc: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f4.png&quot;,
    imageSrcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f4@2x.png 2x&quot;,
  },
];
const cards &#x3D; [
  {
    bgClass: &quot;bg-soft-violet&quot;,
    category: &quot;Web Design&quot;,
    categoryColor: &quot;violet&quot;,
    title: &quot;Snowlake Theme&quot;,
    description:
      &quot;Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.&quot;,
    link: &quot;#&quot;,
    image: {
      src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f1.png&quot;,
      srcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f1@2x.png 2x&quot;,
    },
  },
  {
    bgClass: &quot;bg-soft-blue&quot;,
    category: &quot;Mobile Design&quot;,
    categoryColor: &quot;blue&quot;,
    title: &quot;Budget App&quot;,
    description:
      &quot;Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.&quot;,
    link: &quot;#&quot;,
    image: {
      src: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f2.png&quot;,
      srcset: &quot;&#x2F;assets&#x2F;img&#x2F;photos&#x2F;f2@2x.png 2x&quot;,
    },
  },
  &#x2F;&#x2F; Add more cards as needed
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
const projects = [
  {
    id: 1,
    cardClass: "card bg-soft-leaf mb-10 mb-lg-0",
    categoryClass: "post-category mb-3 text-leaf",
    category: "Web Design",
    title: "Missio Theme",
    description:
      "Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque id ligula felis.",
    link: "#",
    linkClass: "link-leaf mb-8",
    linkLabel: "See Project",
    imageSrc: "/assets/img/photos/f3.png",
    imageSrcset: "/assets/img/photos/f3@2x.png 2x",
  },
  {
    id: 2,
    cardClass: "card bg-soft-pink mb-lg-0",
    categoryClass: "post-category mb-3 text-pink",
    category: "Mobile Design",
    title: "Storage App",
    description:
      "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper.",
    link: "#",
    linkClass: "link-pink mb-8",
    linkLabel: "See Project",
    imageSrc: "/assets/img/photos/f4.png",
    imageSrcset: "/assets/img/photos/f4@2x.png 2x",
  },
];
const cards = [
  {
    bgClass: "bg-soft-violet",
    category: "Web Design",
    categoryColor: "violet",
    title: "Snowlake Theme",
    description:
      "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.",
    link: "#",
    image: {
      src: "/assets/img/photos/f1.png",
      srcset: "/assets/img/photos/f1@2x.png 2x",
    },
  },
  {
    bgClass: "bg-soft-blue",
    category: "Mobile Design",
    categoryColor: "blue",
    title: "Budget App",
    description:
      "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.",
    link: "#",
    image: {
      src: "/assets/img/photos/f2.png",
      srcset: "/assets/img/photos/f2@2x.png 2x",
    },
  },
  // Add more cards as needed
];
</script>

<style lang="scss" scoped></style>
