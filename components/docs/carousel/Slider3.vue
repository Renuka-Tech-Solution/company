<template>
  <Swiper
    :space-between="30"
    :pagination="{ el: '.docssp3', clickable: true }"
    :modules="[Pagination]"
    :grab-cursor="true"
    :breakpoints="{
      500: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    }"
  >
    <SwiperSlide v-for="(elm, i) in slideContent" :key="i">
      <p>
        {{ elm.desc }}
      </p>
    </SwiperSlide>
  </Swiper>
  <div class="swiper-controls">
    <div
      class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal docssp3"
    ></div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
const slideContent = [
  {
    id: 1,
    desc: ` Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Cras mattis consectetur purus sit amet
            fermentum. Maecenas faucibus mollis interdum.`,
  },
  {
    id: 2,
    desc: ` Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Cras mattis consectetur purus sit amet
            fermentum. Maecenas faucibus mollis interdum.`,
  },
  {
    id: 3,
    desc: ` Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Cras mattis consectetur purus sit amet
            fermentum. Maecenas faucibus mollis interdum.`,
  },
  {
    id: 4,
    desc: ` Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Cras mattis consectetur purus sit amet
            fermentum. Maecenas faucibus mollis interdum.`,
  },
];
</script>

<style lang="scss" scoped></style>
