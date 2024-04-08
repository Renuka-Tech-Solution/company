<template>
  <div class="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
    <div class="col-md-8 col-lg-6 position-relative">
      <div
        class="shape bg-dot primary rellax w-17 h-21"
        data-rellax-speed="1"
        style="top: -2rem; left: -1.9rem"
      ></div>
      <div
        class="shape rounded bg-soft-primary rellax d-md-block"
        data-rellax-speed="0"
        style="bottom: -1.8rem; right: -1.5rem; width: 85%; height: 90%"
      ></div>
      <figure class="rounded">
        <nuxt-img
          src="/assets/img/photos/about14.jpg"
          srcset="/assets/img/photos/about14@2x.jpg 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-5 col-xl-4 offset-lg-1">
      <h2 class="fs-16 text-uppercase text-line text-primary mb-3">
        Get In Touch
      </h2>
      <h2 class="display-4 mb-8">
        Convinced yet? Let's make something great together.
      </h2>
      <div v-for="item in contactInfo" :key="item.id" class="d-flex flex-row">
        <div>
          <div class="icon text-primary fs-28 me-6 mt-n1">
            <i :class="item.iconClass"></i>
          </div>
        </div>
        <div>
          <h5 class="mb-1">{{ item.title }}</h5>

          <address v-if="item.address">
            {{ item.address.line1 }}<br class="d-none d-md-block" />{{
              item.address.line2
            }}
          </address>

          <p v-if="item.content">{{ item.content }}</p>
          <a v-if="item.mail" :href="item.mail" class="link-body">{{
            item.mail
          }}</a>
        </div>
      </div>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { contactInfo } from "~/data/contact";
</script>

<style lang="scss" scoped></style>
