<template>
  <section id="snippet-7" class="wrapper bg-light wrapper-border">
    <div class="container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10">
      <footer class="bg-dark text-inverse">
        <div class="container py-13 py-md-15">
          <div class="row gy-6 gy-lg-0">
            <div class="col-md-4 col-lg-3">
              <h4 class="widget-title text-white mb-3">Popular Posts</h4>
              <ul class="image-list">
                <li
                  v-for="post in blogPosts"
                  :key="post.id"
                  :id="post.id"
                  class="mt-5"
                >
                  <figure class="rounded">
                    <nuxt-link to="/blog-post"
                      ><nuxt-img :src="post.imageUrl" alt="photo"
                    /></nuxt-link>
                  </figure>
                  <div class="post-content">
                    <h6 class="mb-2">
                      <nuxt-link to="/blog-post" class="link-dark">{{
                        post.title
                      }}</nuxt-link>
                    </h6>
                    <ul class="post-meta">
                      <li class="post-date">
                        <i class="uil uil-calendar-alt"></i
                        ><span>{{ post.date }}</span>
                      </li>
                    </ul>
                    <!-- /.post-meta -->
                  </div>
                </li>
              </ul>
              <!-- /.image-list -->
            </div>
            <!-- /column -->
            <div class="col-md-4 col-lg-3">
              <div class="widget">
                <h4 class="widget-title text-white mb-3">Tags</h4>
                <ul class="list-unstyled tag-list">
                  <li v-for="tag in tags" :key="tag">
                    <a
                      :href="`#${tag.toLowerCase()}`"
                      class="btn btn-soft-ash text-white btn-sm rounded-pill"
                      >{{ tag }}</a
                    >
                  </li>
                </ul>
              </div>
              <!-- /.widget -->
              <div class="widget">
                <h4 class="widget-title text-white mb-3">Categories</h4>
                <ul class="unordered-list text-reset bullet-white">
                  <li v-for="category in categories" :key="category.name">
                    <a :href="`#${category.name.toLowerCase()}`">{{
                      `${category.name} (${category.count})`
                    }}</a>
                  </li>
                </ul>
              </div>
              <!-- /.widget -->
            </div>
            <!-- /column -->
            <div class="col-md-4 col-lg-3">
              <div class="widget">
                <h4 class="widget-title text-white mb-3">Get in Touch</h4>
                <address class="pe-xl-15 pe-xxl-17">
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
                <a href="mailto:#">info@email.com</a><br />
                00 (123) 456 78 90
              </div>
              <!-- /.widget -->
              <div class="widget">
                <h4 class="widget-title text-white mb-3">Elsewhere</h4>
                <nav class="nav social social-white">
                  <a
                    v-for="link in socialLinks"
                    :key="link.iconClass"
                    :href="'#'"
                  >
                    <i :class="link.iconClass"></i>
                  </a>
                </nav>
                <!-- /.social -->
              </div>
              <!-- /.widget -->
            </div>
            <!-- /column -->
            <div class="col-md-4 col-lg-3">
              <div class="widget">
                <h4 class="widget-title text-white mb-3">Learn More</h4>
                <ul class="list-unstyled text-reset mb-0">
                  <li
                    v-for="link in navigationLinks.slice(0, 3)"
                    :key="link.text"
                  >
                    <a :href="link.url">{{ link.text }}</a>
                  </li>
                </ul>
              </div>
              <!-- /.widget -->
              <div class="widget">
                <h4 class="widget-title text-white mb-3">Need Help?</h4>
                <ul class="list-unstyled text-reset mb-0">
                  <li v-for="link in footerLinks.slice(0, 3)" :key="link.text">
                    <a :href="link.url">{{ link.text }}</a>
                  </li>
                </ul>
              </div>
              <!-- /.widget -->
            </div>
            <!-- /column -->
          </div>
          <!--/.row -->
          <p class="mt-6 mb-0 text-center">
            © {{ new Date().getFullYear() }} Sandbox. All rights reserved.
          </p>
        </div>
        <!-- /.container -->
      </footer>
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-209"
            >View example's code</a
          >
        </div>
        <!--/.card-footer -->
        <div
          id="collapse-snippet-209"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-7&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10&quot;&gt;
      &lt;footer class&#x3D;&quot;bg-dark text-inverse&quot;&gt;
        &lt;div class&#x3D;&quot;container py-13 py-md-15&quot;&gt;
          &lt;div class&#x3D;&quot;row gy-6 gy-lg-0&quot;&gt;
            &lt;div class&#x3D;&quot;col-md-4 col-lg-3&quot;&gt;
              &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Popular Posts&lt;&#x2F;h4&gt;
              &lt;ul class&#x3D;&quot;image-list&quot;&gt;
                &lt;li
                  v-for&#x3D;&quot;post in blogPosts&quot;
                  :key&#x3D;&quot;post.id&quot;
                  :id&#x3D;&quot;post.id&quot;
                  class&#x3D;&quot;mt-5&quot;
                &gt;
                  &lt;figure class&#x3D;&quot;rounded&quot;&gt;
                    &lt;nuxt-link to&#x3D;&quot;&#x2F;blog-post&quot;
                      &gt;&lt;nuxt-img :src&#x3D;&quot;post.imageUrl&quot; alt&#x3D;&quot;&quot;
                    &#x2F;&gt;&lt;&#x2F;nuxt-link&gt;
                  &lt;&#x2F;figure&gt;
                  &lt;div class&#x3D;&quot;post-content&quot;&gt;
                    &lt;h6 class&#x3D;&quot;mb-2&quot;&gt;
                      &lt;nuxt-link to&#x3D;&quot;&#x2F;blog-post&quot; class&#x3D;&quot;link-dark&quot;&gt;&lbrace;&lbrace;
                        post.title
                      &rbrace;&rbrace;&lt;&#x2F;nuxt-link&gt;
                    &lt;&#x2F;h6&gt;
                    &lt;ul class&#x3D;&quot;post-meta&quot;&gt;
                      &lt;li class&#x3D;&quot;post-date&quot;&gt;
                        &lt;i class&#x3D;&quot;uil uil-calendar-alt&quot;&gt;&lt;&#x2F;i
                        &gt;&lt;span&gt;&lbrace;&lbrace; post.date &rbrace;&rbrace;&lt;&#x2F;span&gt;
                      &lt;&#x2F;li&gt;
                    &lt;&#x2F;ul&gt;
                    &lt;!-- &#x2F;.post-meta --&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;li&gt;
              &lt;&#x2F;ul&gt;
              &lt;!-- &#x2F;.image-list --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-4 col-lg-3&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Tags&lt;&#x2F;h4&gt;
                &lt;ul class&#x3D;&quot;list-unstyled tag-list&quot;&gt;
                  &lt;li v-for&#x3D;&quot;tag in tags&quot; :key&#x3D;&quot;tag&quot;&gt;
                    &lt;a
                      :href&#x3D;&quot;&#x60;#${tag.toLowerCase()}&#x60;&quot;
                      class&#x3D;&quot;btn btn-soft-ash text-white btn-sm rounded-pill&quot;
                      &gt;&lbrace;&lbrace; tag &rbrace;&rbrace;&lt;&#x2F;a
                    &gt;
                  &lt;&#x2F;li&gt;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Categories&lt;&#x2F;h4&gt;
                &lt;ul class&#x3D;&quot;unordered-list text-reset bullet-white&quot;&gt;
                  &lt;li v-for&#x3D;&quot;category in categories&quot; :key&#x3D;&quot;category.name&quot;&gt;
                    &lt;a :href&#x3D;&quot;&#x60;#${category.name.toLowerCase()}&#x60;&quot;&gt;&lbrace;&lbrace;
                      &#x60;${category.name} (${category.count})&#x60;
                    &rbrace;&rbrace;&lt;&#x2F;a&gt;
                  &lt;&#x2F;li&gt;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-4 col-lg-3&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Get in Touch&lt;&#x2F;h4&gt;
                &lt;address class&#x3D;&quot;pe-xl-15 pe-xxl-17&quot;&gt;
                  Moonshine St. 14&#x2F;05 Light City, London, United Kingdom
                &lt;&#x2F;address&gt;
                &lt;a href&#x3D;&quot;mailto:#&quot;&gt;info@email.com&lt;&#x2F;a&gt;&lt;br &#x2F;&gt;
                00 (123) 456 78 90
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Elsewhere&lt;&#x2F;h4&gt;
                &lt;nav class&#x3D;&quot;nav social social-white&quot;&gt;
                  &lt;a
                    v-for&#x3D;&quot;link in socialLinks&quot;
                    :key&#x3D;&quot;link.iconClass&quot;
                    :href&#x3D;&quot;&#39;#&#39;&quot;
                  &gt;
                    &lt;i :class&#x3D;&quot;link.iconClass&quot;&gt;&lt;&#x2F;i&gt;
                  &lt;&#x2F;a&gt;
                &lt;&#x2F;nav&gt;
                &lt;!-- &#x2F;.social --&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
            &lt;div class&#x3D;&quot;col-md-4 col-lg-3&quot;&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Learn More&lt;&#x2F;h4&gt;
                &lt;ul class&#x3D;&quot;list-unstyled text-reset mb-0&quot;&gt;
                  &lt;li
                    v-for&#x3D;&quot;link in navigationLinks.slice(0, 3)&quot;
                    :key&#x3D;&quot;link.text&quot;
                  &gt;
                    &lt;a :href&#x3D;&quot;link.url&quot;&gt;&lbrace;&lbrace; link.text &rbrace;&rbrace;&lt;&#x2F;a&gt;
                  &lt;&#x2F;li&gt;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
              &lt;div class&#x3D;&quot;widget&quot;&gt;
                &lt;h4 class&#x3D;&quot;widget-title text-white mb-3&quot;&gt;Need Help?&lt;&#x2F;h4&gt;
                &lt;ul class&#x3D;&quot;list-unstyled text-reset mb-0&quot;&gt;
                  &lt;li v-for&#x3D;&quot;link in footerLinks.slice(0, 3)&quot; :key&#x3D;&quot;link.text&quot;&gt;
                    &lt;a :href&#x3D;&quot;link.url&quot;&gt;&lbrace;&lbrace; link.text &rbrace;&rbrace;&lt;&#x2F;a&gt;
                  &lt;&#x2F;li&gt;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
              &lt;!-- &#x2F;.widget --&gt;
            &lt;&#x2F;div&gt;
            &lt;!-- &#x2F;column --&gt;
          &lt;&#x2F;div&gt;
          &lt;!--&#x2F;.row --&gt;
          &lt;p class&#x3D;&quot;mt-6 mb-0 text-center&quot;&gt;
            © &lbrace;&lbrace; new Date().getFullYear() &rbrace;&rbrace; Sandbox. All rights reserved.
          &lt;&#x2F;p&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.container --&gt;
      &lt;&#x2F;footer&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
    
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import {
  footerLinks,
  socialLinks,
  navigationLinks,
  categories,
  tags,
  blogPosts,
} from &quot;~&#x2F;data&#x2F;footer&quot;;
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
import {
  footerLinks,
  socialLinks,
  navigationLinks,
  categories,
  tags,
  blogPosts,
} from "~/data/footer";
</script>

<style lang="scss" scoped></style>
