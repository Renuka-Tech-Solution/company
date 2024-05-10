<template>
  <section class="wrapper bg-gradient-primary">
    <div class="container pb-6 pt-lg-15 pb-md-10 pb-lg-12">
      <div class="position-relative mt-10 mt-lg-n23 mt-xl-n25">
        <div class="row text-center">
          <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
            <h2 class="fs-16 text-uppercase text-muted mb-3">Our Team</h2>
            <h3 class="display-4 mb-2 px-md-13 px-lg-4 px-xl-0">
              Meet Our Development Team
            </h3>
          </div>
        </div>
        <div class="position-relative">
          <div
            class="shape bg-dot blue rellax w-16 h-17"
            data-rellax-speed="1"
            style="bottom: 0.5rem; right: -1.7rem; z-index: 0"
          ></div>
          <div
            class="shape rounded-circle bg-line red rellax w-16 h-16"
            data-rellax-speed="1"
            style="top: 0.5rem; left: -1.7rem; z-index: 0"
          ></div>
          <div class="row grid-view gy-xl-0">
            <div
              v-for="(elm, i) in teamMembers2"
              :key="i"
              class="col-md-6 col-xl-4 mb-3"
            >
              <div class="card shadow-lg">
                <div
                  class="card-body d-flex justify-content-center flex-column"
                >
                  <nuxt-img
                    class="rounded-circle w-18 mb-4 m-auto"
                    :src="elm.avatarSrc"
                    alt="photo"
                  />
                  <h4 class="mb-1 m-auto text-center">{{ elm.name }}</h4>
                  <div class="meta mb-2 m-auto">{{ elm.position }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { teamMembers2 } from "~/data/team";
</script>

<style lang="scss" scoped></style>
