<template>
  <section class="wrapper bg-light">
    <div class="container">
      <div class="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-19">
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
              src="/assets/img/photos/about8.jpg"
              srcset="/assets/img/photos/about8@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5 col-xl-4 offset-lg-1">
          <h2 class="fs-15 text-uppercase text-muted mb-3">How It Works?</h2>
          <h3 class="display-4 mb-7">
            Here are the 3 working steps on success.
          </h3>
          <div
            v-for="(item, index) in features11"
            :key="index"
            :id="'featureItem_' + index"
            class="d-flex flex-row mb-5"
          >
            <div>
              <nuxt-img
                :src="item.icon"
                class="icon-svg icon-svg-md me-4"
                :class="item.iconColorClass"
                alt="photo"
              />
            </div>
            <div>
              <h4 class="mb-1">{{ item.title }}</h4>
              <p class="mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->

      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
  <CommonModalVideo :modalOpen="modalOpen" @modalClose="modalClose" />
</template>

<script setup>
const modalOpen = ref(false);
const modalClose = () => {
  modalOpen.value = false;
};
import { features11 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
