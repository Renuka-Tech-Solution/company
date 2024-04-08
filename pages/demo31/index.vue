<template>
  <div class="space-font">
    <div class="content-wrapper">
      <HeadersHeader32 />
      <HomesHome31Hero />

      <section class="wrapper bg-gradient-primary">
        <div class="container pt-15 pt-md-17">
          <HomesHome31Clients />
          <HomesHome31Service />
        </div>
      </section>
      <section class="wrapper bg-light">
        <div class="container py-16 py-md-18">
          <HomesHome31Testimonials />
          <HomesHome31Projects />
          <HomesHome31Facts />
        </div>
        <div class="overflow-hidden">
          <div class="divider text-soft-primary mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70">
              <path
                fill="currentColor"
                d="M1440,70H0V45.16a5762.49,5762.49,0,0,1,1440,0Z"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
    <FootersFooter30 />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Home 31 || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
</script>

<style lang="scss" scoped></style>
