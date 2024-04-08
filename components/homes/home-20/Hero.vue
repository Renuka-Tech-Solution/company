<template>
  <section
    class="video-wrapper bg-overlay bg-overlay-gradient px-0 mt-0 min-vh-80"
  >
    <video
      poster="/assets/img/photos/movie2.jpg"
      src="/assets/media/movie2.mp4"
      autoplay
      loop
      playsinline
      muted
    ></video>
    <div class="video-content">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-8 col-xl-6 text-center text-white mx-auto">
            <h1
              class="display-1 fs-54 text-white mb-5"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay=""
            >
              <span class="rotator-zoom">
                <span
                  v-if="animatedText"
                  class="animate__animated animate__zoomIn"
                  style="display: inline-block"
                >
                  {{ currentStr }}
                </span>
                <span
                  v-else="animatedText"
                  class="animate__animated animate__zoomIn"
                  style="display: inline-block; visibility: hidden"
                >
                  {{ currentStr }}
                </span>
              </span>
            </h1>
            <p
              class="lead fs-24 mb-0 mx-xxl-8"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="200"
            >
              We are a digital agency specializing in web design, mobile
              development and seo optimization.
            </p>
          </div>
          <!-- /column -->
        </div>
      </div>
      <!-- /.video-content -->
    </div>
    <!-- /.content-overlay -->
  </section>
</template>

<script setup>
const strings = ["Rapid Solutions", "Innovative Thinking", "Top-Notch Support"];
const currentStr = ref("Rapid Solutions");
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
