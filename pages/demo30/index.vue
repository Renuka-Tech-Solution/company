<template>
  <div class="grape-theme space-font bg-soft-primary">
    <div class="content-wrapper">
      <HeadersHeader31 />
      <section class="wrapper overflow-hidden">
        <HomesHome30Hero />
        <HomesHome30HeroSlider />
        <HomesHome30Service />
      </section>
      <section
        class="wrapper pattern-wrapper bg-image section-frame"
        style="background-image: url(/assets/img/pattern.png)"
      >
        <div class="container pt-15 pt-md-17 pb-16 pb-md-18">
          <HomesHome30Process />
          <HomesHome30Facts />
        </div>
      </section>
      <section class="wrapper overflow-hidden">
        <HomesHome30Features />
        <HomesHome30HeroSlider2 />
      </section>
      <HomesHome30Cta />
      <section class="overflow-hidden">
        <div class="container pt-16 pt-md-18 pb-20 pb-md-22">
          <HomesHome30Testimonials />
          <HomesHome30Pricing />
        </div>
      </section>
    </div>
    <FootersFooter29 />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Home 30 || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
