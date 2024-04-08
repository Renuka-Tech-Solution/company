<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <BlogsBlog2Hero />
    <section class="wrapper bg-light">
      <div class="container py-14 py-md-16">
        <div class="row gx-lg-8 gx-xl-12">
          <div class="col-lg-8">
            <div class="mt-17">
              <BlogsCommonBlogs />
            </div>
          </div>
          <aside class="col-lg-4 sidebar mt-8 mt-lg-6">
            <BlogsCommonWidgets />
          </aside>
        </div>
      </div>
    </section>
  </div>
  <FootersFooter5 />
</template>

<script setup>
useSeoMeta({
  title: "Blog With Sidebar || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
