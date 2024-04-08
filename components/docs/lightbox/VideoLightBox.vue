<template>
  <div
    v-for="(elm, i) in galleryItems"
    :key="i"
    @click="() => setActiveLightBox(true, i)"
    class="item col-md-6 col-lg-4"
  >
    <figure class="overlay overlay-1 hover-scale rounded">
      <nuxt-img :src="elm.src" alt="photo" />
      <span class="bg"></span>
      <figcaption>
        <h5 class="from-top mb-0">{{ elm.captionName }}</h5>
      </figcaption>
    </figure>
  </div>
  <CommonLightBox2
    :items="galleryItems"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
</template>

<script setup>
const galleryItems = [
  {
    id: 1,
    type: "video",
    src: "/assets/img/photos/p4.jpg",
    captionName: "Vimeo",
    provider: "vimeo",
    videoId: "90355541",
  },
  {
    id: 2,
    type: "video",
    src: "/assets/img/photos/p5.jpg",
    captionName: "YouTube",
    caption: {
      title: "Title",
      description: "This is the video description",
    },
    provider: "youtube",
    videoId: "26TbMXXOe0I",
  },
  {
    id: 3,

    src: "/assets/img/photos/p6.jpg",
    captionName: "HTML5",
    caption: {
      title: "Title 2",
      description: "This div will be used as the description",
    },

    videoSrc: "/assets/media/movie.mp4",
  },
];
const activeLightBox = ref(false);
const currentSlideIndex = ref();

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};
</script>

<style lang="scss" scoped></style>
