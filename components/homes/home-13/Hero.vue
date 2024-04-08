<template>
  <section
    class="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white"
    style="background-image: url(/assets/img/photos/bg2.jpg)"
  >
    <div class="container pt-17 pb-19 pt-md-19 pb-md-20 text-center">
      <div class="row mb-11">
        <div
          class="col-md-9 col-lg-7 col-xxl-6 mx-auto"
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <h2 class="h6 text-uppercase ls-xl text-white mb-5">
            Hello! This is Sandbox
          </h2>
          <h3 class="display-1 text-white mb-7">
            We bring rapid solutions for your business
          </h3>
          <div
            class="btn btn-circle btn-white btn-play ripple mx-auto mb-5 cursor-pointer"
            @click="
              () => {
                modalOpen = true;
              }
            "
          >
            <i class="icn-caret-right"></i>
          </div>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <CommonModalVideo @modalClose="modalClose" :modalOpen="modalOpen" />
</template>

<script setup>
const modalOpen = ref(false);
const modalClose = () => {
  modalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
