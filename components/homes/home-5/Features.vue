<template>
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16 mb-lg-21 mb-xl-23">
      <div class="row gx-0 mb-16 mb-mb-20">
        <div class="col-9 col-sm-10 col-lg-9 mx-auto mt-n15 mt-md-n20">
          <nuxt-img
            class="img-fluid mx-auto rounded shadow-lg"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/sa1.jpg"
            srcset="/assets/img/photos/sa1@2x.jpg 2x"
            alt="photo"
          />
          <nuxt-img
            class="position-absolute rounded shadow-lg"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/sa2.jpg"
            srcset="/assets/img/photos/sa2@2x.jpg 2x"
            style="top: 20%; right: -10%; max-width: 30%; height: auto"
            alt="photo"
          />
          <nuxt-img
            class="position-absolute rounded shadow-lg"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/sa3.jpg"
            srcset="/assets/img/photos/sa3@2x.jpg 2x"
            style="top: 10%; left: -10%; max-width: 30%; height: auto"
            alt="photo"
          />
          <nuxt-img
            class="position-absolute rounded shadow-lg"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
            src="/assets/img/photos/sa4.jpg"
            srcset="/assets/img/photos/sa4@2x.jpg 2x"
            style="bottom: 10%; left: -13%; max-width: 30%; height: auto"
            alt="photo"
          />
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <HomesHome5Features1 />
      <!--/.row -->
      <HomesHome5Features2 />
      <!--/.row -->
      <HomesHome5Features3 />
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
