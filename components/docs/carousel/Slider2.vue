<template>
  <Swiper
    :space-between="30"
    :pagination="{ el: '.docssp2', clickable: true }"
    :modules="[Pagination]"
    :grab-cursor="true"
    :breakpoints="{
      500: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2 },
    }"
  >
    <SwiperSlide v-for="(elm, i) in slideContent" :key="i"
      ><div class="item-inner">
        <article>
          <div class="card">
            <div class="card-body">
              <p>
                {{ elm.desc }}
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!-- /.card -->
        </article>
        <!-- /article -->
      </div>
    </SwiperSlide>
  </Swiper>
  <div class="swiper-controls">
    <div
      class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal docssp2"
    ></div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
const slideContent = [
  {
    id: 1,
    desc: ` Duis mollis est non commodo luctu, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Nullam quis risus eget urna
            mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna vel scelerisque nisl consectetur
            et.`,
  },
  {
    id: 2,
    desc: ` Duis mollis est non commodo luctu, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Nullam quis risus eget urna
            mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna vel scelerisque nisl consectetur
            et.`,
  },
  {
    id: 3,
    desc: ` Duis mollis est non commodo luctu, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Nullam quis risus eget urna
            mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna vel scelerisque nisl consectetur
            et.`,
  },
  {
    id: 4,
    desc: ` Duis mollis est non commodo luctu, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Nullam quis risus eget urna
            mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna vel scelerisque nisl consectetur
            et.`,
  },
];
</script>

<style lang="scss" scoped></style>
