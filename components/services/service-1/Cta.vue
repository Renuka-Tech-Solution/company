<template>
  <section
    class="wrapper image-wrapper bg-image bg-overlay"
    style="background-image: url(/assets/img/photos/bg1.jpg)"
  >
    <div class="container py-18 text-center">
      <div class="row">
        <div class="col-lg-10 col-xl-10 col-xxl-8 mx-auto">
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
          <h2 class="display-4 px-lg-10 px-xl-13 px-xxl-10 mb-10 text-white">
            Find out everything you need to know about creating a business
            process model.
          </h2>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
  <CommonModalVideo :modalOpen="modalOpen" @modalClose="modalClose" />
</template>

<script setup>
const modalOpen = ref();
const modalClose = () => {
  modalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
