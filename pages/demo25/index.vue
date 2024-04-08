<template>
  <div class="pink-theme urbanist-font">
    <div class="content-wrapper">
      <HeadersHeader26 />

      <section class="wrapper bg-gray">
        <div class="container pt-10 pb-14 pb-md-16">
          <HomesHome25Hero />
          <HomesHome25About />
          <div class="row gx-lg-8 gx-xl-12 mt-17">
            <div class="col-lg-8">
              <HomesHome25Blog1 />
              <HomesHome25Blogs2 />
              <CommonPagination />
            </div>
            <aside class="col-lg-4 sidebar mt-8 mt-lg-0">
              <HomesHome25Widget1 />
              <HomesHome25Widget2 />
              <HomesHome25Widget3 />
              <HomesHome25Widget4 />
              <HomesHome25Widget5 />
            </aside>
          </div>
        </div>
      </section>
    </div>
    <FootersFooter24 />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Home 25 || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
