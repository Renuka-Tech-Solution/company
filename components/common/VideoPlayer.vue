<template>
  <video
    style="
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
    "
    ref="videoPlayer"
    class="video-js"
  ></video>
</template>

<script setup>
import videojs from "video.js";

const videoPlayer = ref();
const props = defineProps(["options"]);
const defaultVideoOption = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: "/assets/media/movie.mp4",
      type: "video/mp4",
    },
  ],
};
const player = ref(null);

onMounted(() => {
  player.value = videojs(
    videoPlayer.value,
    props.options || defaultVideoOption,
    () => {}
  );
});

onBeforeUnmount(() => {
  if (player.value) {
    player.value.dispose();
  }
});
</script>
<style>
@import "video.js/dist/video-js.css";

.video-js > * {
  z-index: 120;
}
</style>
<!-- videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src:
              '/path/to/video.mp4',
              type: 'video/mp4'
          }
        ]
      } -->
