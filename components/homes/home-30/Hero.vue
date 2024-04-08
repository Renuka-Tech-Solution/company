<template>
  <div class="container pt-19 pt-md-21 text-center position-relative">
    <div
      class="position-absolute"
      style="top: -15%; left: 50%; transform: translateX(-50%)"
    >
      <nuxt-img src="/assets/img/photos/blurry.png" alt="photo" />
    </div>
    <div class="row position-relative">
      <div class="col-lg-8 col-xxl-7 mx-auto position-relative">
        <div
          class="position-absolute shape grape w-5 d-none d-lg-block"
          style="top: -5%; left: -15%"
        >
          <nuxt-img
            src="/assets/img/svg/pie.svg"
            class="icon-svg w-100 h-100"
            alt="photo"
          />
        </div>
        <div
          class="position-absolute shape violet w-10 d-none d-lg-block"
          style="bottom: 30%; left: -20%"
        >
          <nuxt-img
            src="/assets/img/svg/scribble.svg"
            class="icon-svg w-100 h-100"
            alt="photo"
          />
        </div>
        <div
          class="position-absolute shape fuchsia w-6 d-none d-lg-block"
          style="top: 0%; right: -25%; transform: rotate(70deg)"
        >
          <nuxt-img
            src="/assets/img/svg/tri.svg"
            class="icon-svg w-100 h-100"
            alt="photo"
          />
        </div>
        <div
          class="position-absolute shape yellow w-6 d-none d-lg-block"
          style="bottom: 25%; right: -17%"
        >
          <nuxt-img
            src="/assets/img/svg/circle.svg"
            class="icon-svg w-100 h-100"
            alt="photo"
          />
        </div>
        <div data-group="page-title">
          <h1 class="display-1 fs-64 mb-5 mx-md-10 mx-lg-0">
            We are a digital web agency specializing on <br /><span
              class="rotator-fade text-primary"
            >
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
            class="lead fs-24 mb-8"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay=""
          >
            We are an award winning digital web agency that strongly believes in
            the power of creative ideas.
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <span
            ><nuxt-link
              to="/single-project"
              class="btn btn-lg btn-primary rounded-xl mx-1"
              >See Project</nuxt-link
            ></span
          >
          <span
            ><a class="btn btn-lg btn-fuchsia rounded-xl mx-1"
              >Contact Us</a
            ></span
          >
        </div>
        <!-- /div -->
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script setup>
const strings = [
  "web design.",
  "SEO services.",
  "e-commerce.",
  "Google Adwords.",
];
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
  }, 2500);
});
onUnmounted(() => {
  clearInterval(changeText?.value);
});
</script>

<style lang="scss" scoped></style>
