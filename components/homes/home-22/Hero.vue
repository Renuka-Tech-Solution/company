<template>
  <section class="section-frame br-fix overflow-hidden">
    <div
      class="wrapper image-wrapper bg-cover bg-image bg-overlay bg-overlay-500"
      style="background-image: url(/assets/img/photos/bg26.jpg)"
    >
      <div class="container pt-18 pt-lg-21 pb-17 pb-lg-19 text-center">
        <div class="row">
          <div class="col-md-9 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
            <h2
              class="h6 text-uppercase ls-xl text-white mb-5"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay=""
            >
              Hello! We are Sandbox
            </h2>
            <h3
              class="display-1 fs-54 text-white mb-7"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="200"
            >
              Grow your business with our marketing solutions
            </h3>
            <div
              class="btn btn-circle btn-white btn-play ripple mx-auto cursor-pointer"
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
      <div class="overflow-hidden">
        <div class="divider text-white mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
            <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
          </svg>
        </div>
      </div>
      <!-- /.overflow-hidden -->
    </div>
    <!-- /.wrapper -->
  </section>
  <CommonModalVideo :modalOpen="modalOpen" @modalClose="modalClose" />
</template>

<script setup>
const modalOpen = ref(false);
const modalClose = () => {
  modalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
