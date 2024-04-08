<template>
  <section id="snippet-7" class="wrapper bg-light">
    <div class="container pb-13 pb-md-15">
      <div class="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
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
              :width="650"
              :height="520"
              srcset="/assets/img/photos/about12@2x.jpg 2x"
              alt="image"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5 col-xl-4 offset-lg-1">
          <h3 class="display-4 mb-3">Sandbox Brings Awesomeness</h3>
          <p class="lead fs-lg mb-6">
            We have considered our solutions to
            <span class="underline">support every stage</span> of your growth.
          </p>
          <ul class="progress-list">
            <li v-for="(item, index) in skills2" :key="index">
              <p>{{ item.title }}</p>
              <div :class="`progressbar line primary`">
                <LineProgressbar :max="item.value" />
                <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
              </div>
            </li>
          </ul>
          <!-- /.progress-list -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
  <CommonModalVideo @modalClose="modalClose" :modalOpen="modalOpen" />
</template>

<script setup>
import LineProgressbar from "~/components/common/LineProgressbar.vue";
import { skills2 } from "~/data/skils";
const modalOpen = ref(false);
const modalClose = () => {
  modalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
