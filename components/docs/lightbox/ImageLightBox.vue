<template>
  <div
    v-for="(elm, i) in galleryItems"
    :key="i"
    class="item col-md-6 col-lg-4"
    @click="() => setActiveLightBox(true, i)"
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
    type: "image",
    src: "/assets/img/photos/p6.jpg",
    captionName: "Image",
  },
  {
    id: 2,
    type: "image",
    src: "/assets/img/photos/p3.jpg",
    captionName: "Simple Caption",
    caption: {
      title: "Title",
      description: "This is the image description",
    },
  },
  {
    id: 3,
    type: "image",
    src: "/assets/img/photos/p2.jpg",
    captionName: "Advanced Caption",
    caption: {
      title: "Title 2",
      description: "This div will be used as the description",
    },
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
