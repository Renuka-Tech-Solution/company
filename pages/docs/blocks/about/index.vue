<template>
  <Header1 />
  <div class="content-wrapper">
    <Hero />
    <Tabbar />
    <Intro />
    <Features />
    <FeaturesTwo />
    <Intro2 />
    <Reason />
    <Skils />
    <Skills2 />
    <Features3 />
    <Features4 />
    <Intro3 />
    <Intro4 />
    <Features5 />
    <BlocksAboutFeatures6 />
    <BlocksAboutIntro5 />
  </div>
  <BlocksCommonBannerBottom />
</template>

<script setup>
useSeoMeta({
  title: "Blocs About || Sandbox - Modern & Multipurpose Nuxtjs Template",
  description: "Sandbox - Modern & Multipurpose Nuxtjs Template",
});
import Tabbar from "~/components/blocks/common/Tabbar.vue";
import Header1 from "../components/headers/Header1.vue";
import Hero from "~/components/blocks/about/Hero.vue";
import Intro from "~/components/blocks/about/Intro.vue";
import Features from "~/components/blocks/about/Features.vue";
import FeaturesTwo from "~/components/blocks/about/FeaturesTwo.vue";
import Intro2 from "~/components/blocks/about/Intro2.vue";
import Reason from "~/components/blocks/about/Reason.vue";
import Skils from "~/components/blocks/about/Skils.vue";
import Skills2 from "~/components/blocks/about/Skills2.vue";
import Features3 from "~/components/blocks/about/Features3.vue";
import Features4 from "~/components/blocks/about/Features4.vue";
import Features5 from "~/components/blocks/about/Features5.vue";
import Intro3 from "~/components/blocks/about/Intro3.vue";
import Intro4 from "~/components/blocks/about/Intro4.vue";
</script>

<style lang="scss" scoped></style>
