<template>
  <div
    class="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19"
  >
    <div class="col-md-8 col-lg-6 position-relative">
      <div
        class="btn btn-circle btn-primary btn-play ripple mx-auto mb-5 position-absolute cursor-pointer"
        @click="
          () => {
            modalOpen = true;
          }
        "
        style="
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
        "
        data-glightbox
      >
        <i class="icn-caret-right"></i>
      </div>
      <div
        class="shape rounded bg-soft-primary rellax d-md-block"
        data-rellax-speed="0"
        style="bottom: -1.8rem; right: -1.5rem; width: 85%; height: 90%"
      ></div>
      <figure class="rounded">
        <nuxt-img
          src="/assets/img/photos/about12.jpg"
          srcset="/assets/img/photos/about12@2x.jpg 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-5 offset-lg-1">
      <h2 class="fs-15 text-uppercase text-muted mb-3">Who Are We?</h2>
      <h3 class="display-4 mb-6">
        Company that believes in the power of creative strategy.
      </h3>
      <p class="mb-6">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
        et.
      </p>
      <div class="row gy-3 gx-xl-8">
        <div class="col-xl-6">
          <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
            <li
              v-for="(item, index) in checklistItems.slice(0, 2)"
              :key="index"
              :class="{ 'mt-3': index > 0 }"
            >
              <span><i class="uil uil-check"></i></span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>
        <!--/column -->
        <div class="col-xl-6">
          <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
            <li
              v-for="(item, index) in checklistItems.slice(2, 4)"
              :key="index"
              :class="{ 'mt-3': index > 0 }"
            >
              <span><i class="uil uil-check"></i></span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
  </div>
  <CommonModalVideo :modalOpen="modalOpen" @modalClose="modalClose" />
</template>

<script setup>
const modalOpen = ref(false);
const modalClose = () => {
  modalOpen.value = false;
};
import { checklistItems } from "~/data/features";
</script>

<style lang="scss" scoped></style>
