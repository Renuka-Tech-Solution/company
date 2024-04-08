<template>
  <section class="wrapper bg-light">
    <div class="container pt-10 pt-md-14 pb-14 pb-md-16 text-center">
      <div class="row gx-lg-8 gx-xl-12 gy-10 gy-xl-0 mb-14 align-items-center">
        <div class="col-lg-7 order-lg-2">
          <figure>
            <nuxt-img
              class="img-auto"
              src="/assets/img/illustrations/i21.png"
              srcset="/assets/img/illustrations/i21@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!-- /column -->
        <div
          class="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start"
        >
          <h1
            class="display-1 fs-54 mb-5 mx-md-n5 mx-lg-0 mt-7"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
          >
            A digital agency <br class="d-md-none" />specializing on
            <br class="d-md-none" />

            <span class="rotator-fade text-primary">
              <span
                v-if="animatedText"
                class="animate__animated animate__fadeInDown"
                style="display: inline-block"
                >{{ currentStr }}</span
              >
              <span
                v-else="animatedText"
                class="animate__animated animate__fadeInDown"
                style="display: inline-block; visibility: hidden"
                >{{ currentStr }}</span
              >
            </span>
          </h1>
          <p
            class="lead fs-lg mb-7"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          >
            We are an award winning design agency that strongly believes in the
            power of creative ideas.
          </p>
          <span
            ><a class="btn btn-lg btn-primary rounded-pill me-2"
              >Get Started</a
            ></span
          >
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <p class="text-center mb-8">
        Trusted by over 2K+ clients across the world
      </p>
      <div
        class="row row-cols-4 row-cols-md-4 row-cols-lg-7 row-cols-xl-7 gy-10 mb-2 d-flex align-items-center justify-content-center"
      >
        <div v-for="(elm, i) in clients1.slice(0, 7)" :key="i" class="col">
          <nuxt-img
            class="img-fluid px-md-3 px-lg-0 px-xl-2 px-xxl-5"
            :src="elm.src"
            alt="photo"
          />
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="overflow-hidden">
      <div class="divider text-soft-primary mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="currentColor"
            d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
          />
        </svg>
      </div>
    </div>
    <!-- /.overflow-hidden -->
  </section>
</template>

<script setup>
import { clients1 } from "~/data/clients";

const strings = ["mobile design", "web design", "3D animation"];
const currentStr = ref("mobile design");
const animatedText = ref(true);

const changeText = ref();
onMounted(() => {
  changeText.value = setInterval(() => {
    animatedText.value = false;
    setTimeout(() => {
      animatedText.value = true;
    }, 200);
    if (currentStr.value == strings[0]) {
      currentStr.value = strings[1];
    } else if (currentStr.value == strings[1]) {
      currentStr.value = strings[2];
    } else {
      currentStr.value = strings[0];
    }
  }, 2000);
});
onUnmounted(() => {
  clearInterval(changeText?.value);
});
</script>

<style lang="scss" scoped></style>
