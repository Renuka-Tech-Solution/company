<template>
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="row gx-md-8 gx-xl-12 gy-8">
        <div class="col-lg-6">
          <div class="swiper-container swiper-thumbs-container">
            <Swiper
              :space-between="10"
              :navigation="{ prevEl: '.spnvp', nextEl: '.spnvn' }"
              :modules="[Navigation, Thumbs]"
              :grab-cursor="true"
              :thumbs="{ swiper: thumbsSwiper }"
            >
              <swiper-slide
                v-for="(image, index) in productImages"
                :key="index"
              >
                <figure class="rounded">
                  <nuxt-img :src="image.src" :srcset="image.srcset" alt="photo" />
                  <div
                    class="item-link cursor-pointer"
                    @click="() => setActiveLightBox(true, index)"
                  >
                    <i class="uil uil-focus-add"></i>
                  </div>
                </figure>
              </swiper-slide>
            </Swiper>
            <div class="swiper-controls">
              <div class="swiper-navigation">
                <div class="swiper-button swiper-button-prev spnvp"></div>
                <div class="swiper-button swiper-button-next spnvn"></div>
              </div>
            </div>

            <!-- /.swiper -->
            <div class="swiper swiper-thumbs">
              <Swiper
                :space-between="10"
                :slides-per-view="5"
                :modules="[Thumbs]"
                @swiper="setThumbsSwiper"
                :grab-cursor="true"
              >
                <swiper-slide
                  v-for="(image, index) in productImages"
                  :key="index"
                >
                  <figure class="rounded">
                    <nuxt-img
                      :src="image.src"
                      :srcset="image.srcset"
                      alt="photo"
                      class="rounded"
                    />
                  </figure>
                </swiper-slide>
              </Swiper>

              <!--/.swiper-wrapper -->
            </div>
            <!-- /.swiper -->
          </div>
          <!-- /.swiper-container -->
        </div>
        <!-- /column -->
        <div class="col-lg-6">
          <div class="post-header mb-5">
            <h2 class="post-title display-5">
              <nuxt-link to="/shop-product" class="link-dark"
                >Curology Skincare Set</nuxt-link
              >
            </h2>
            <p class="price fs-20 mb-2"><span class="amount">$55.00</span></p>
            <a href="#" class="link-body ratings-wrapper"
              ><span class="ratings four"></span><span>(3 Reviews)</span></a
            >
          </div>
          <!-- /.post-header -->
          <p class="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes
            nascetur ridiculus mus. Duis mollis, est non commodo luctus. Nulla
            vitae elit libero pharetra augue. Donec id elit non mi porta gravida
            at eget metus.
          </p>
          <form @submit.prevent="() => {}">
            <fieldset class="picker">
              <legend class="h6 fs-16 text-body mb-3">Choose a size</legend>
              <label v-for="size in sizes" :key="size.id" :for="size.id">
                <input
                  v-model="selectedSize"
                  type="radio"
                  :name="size.name"
                  :id="size.id"
                  :value="size.value"
                />
                <span>{{ size.label }}</span>
              </label>
            </fieldset>
            <fieldset class="picker">
              <legend class="h6 fs-16 text-body mb-3">Choose a color</legend>
              <label
                v-for="color in colors"
                :key="color.id"
                :for="color.id"
                :style="{ '--color': color.hex }"
              >
                <input
                  v-model="selectedColor"
                  type="radio"
                  :name="color.name"
                  :id="color.id"
                  :value="color.id"
                />
                <span>{{ color.label }}</span>
              </label>
            </fieldset>
            <div class="row">
              <div class="col-lg-9 d-flex flex-row pt-2">
                <div>
                  <div class="form-select-wrapper">
                    <select class="form-select" v-model="selectedValue">
                      <option
                        v-for="option in options"
                        :key="option.value"
                        :value="option.value"
                        :selected="option.selected"
                      >
                        {{ option.text }}
                      </option>
                    </select>
                  </div>
                  <!--/.form-select-wrapper -->
                </div>
                <div class="flex-grow-1 mx-2">
                  <button
                    class="btn btn-primary btn-icon btn-icon-start rounded w-100 flex-grow-1"
                  >
                    <i class="uil uil-shopping-bag"></i> Add to Cart
                  </button>
                </div>
                <div>
                  <button
                    class="btn btn-block btn-red btn-icon rounded px-3 w-100 h-100"
                  >
                    <i class="uil uil-heart"></i>
                  </button>
                </div>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
          </form>
          <!-- /form -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <ul class="nav nav-tabs nav-tabs-basic mt-12">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#tab1-1"
            >Product Details</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#tab1-2"
            >Additional Info</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#tab1-3">Delivery</a>
        </li>
      </ul>
      <!-- /.nav-tabs -->
      <div class="tab-content mt-0 mt-md-5">
        <div class="tab-pane fade show active" id="tab1-1">
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean
            eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Sed posuere consectetur est at lobortis. Sed posuere
            consectetur est at lobortis. Nulla vitae elit libero, a pharetra
            augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut
            id elit. Maecenas sed diam eget risus varius blandit sit amet non
            magna. Integer posuere erat a ante venenatis dapibus posuere velit
            aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.
            Vestibulum id ligula porta felis euismod semper.
          </p>
          <p>
            Vestibulum id ligula porta felis euismod semper. Nullam id dolor id
            nibh ultricies vehicula ut id elit. Maecenas faucibus mollis
            interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
        <!--/.tab-pane -->
        <div class="tab-pane fade" id="tab1-2">
          <p>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <!--/.tab-pane -->
        <div class="tab-pane fade" id="tab1-3">
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Integer posuere erat
            a ante venenatis dapibus posuere velit aliquet. Cras mattis
            consectetur purus sit amet fermentum. Maecenas sed diam eget risus
            varius blandit sit amet non magna. Sed posuere consectetur est at
            lobortis. Curabitur blandit tempus porttitor. Aenean lacinia
            bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra
            augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </p>
        </div>
        <!--/.tab-pane -->
      </div>
      <!-- /.tab-content -->
    </div>
    <!-- /.container -->
  </section>

  <CommonLightbox
    :images="images"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
</template>

<script setup>
const productImages = ref([
  {
    src: "/assets/img/photos/shs1.jpg",
    srcset: "/assets/img/photos/shs1@2x.jpg 2x",
    link: "/assets/img/photos/shs1@2x.jpg",
  },
  {
    src: "/assets/img/photos/shs2.jpg",
    srcset: "/assets/img/photos/shs2@2x.jpg 2x",
    link: "/assets/img/photos/shs2@2x.jpg",
  },
  {
    src: "/assets/img/photos/shs3.jpg",
    srcset: "/assets/img/photos/shs3@2x.jpg 2x",
    link: "/assets/img/photos/shs3@2x.jpg",
  },
  {
    src: "/assets/img/photos/shs4.jpg",
    srcset: "/assets/img/photos/shs4@2x.jpg 2x",
    link: "/assets/img/photos/shs4@2x.jpg",
  },
]);
const images = productImages.value.map((elm) => elm.src);
const activeLightBox = ref(false);
const currentSlideIndex = ref();

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs } from "swiper/modules";

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const sizes = ref([
  { id: "size-xs", name: "sizes", value: "XS", label: "XS" },
  { id: "size-s", name: "sizes", value: "S", label: "S" },
  { id: "size-m", name: "sizes", value: "M", label: "M" },
  { id: "size-l", name: "sizes", value: "L", label: "L" },
  { id: "size-xl", name: "sizes", value: "XL", label: "XL" },
]);

const selectedSize = ref(sizes.value[0].value);

const colors = ref([
  { id: "color-1", name: "colors", hex: "#fab758", label: "Yellow" },
  { id: "color-2", name: "colors", hex: "#e2626b", label: "Red" },
  { id: "color-3", name: "colors", hex: "#7cb798", label: "Green" },
  { id: "color-4", name: "colors", hex: "#3f78e0", label: "Blue" },
  { id: "color-5", name: "colors", hex: "#a07cc5", label: "Purple" },
]);

const selectedColor = ref(colors.value[0].id);

const options = ref([
  { value: "1", text: "1", selected: true },
  { value: "2", text: "2", selected: false },
  { value: "3", text: "3", selected: false },
  { value: "4", text: "4", selected: false },
  { value: "5", text: "5", selected: false },
]);

const selectedValue = ref("1");
</script>

<style lang="scss" scoped></style>
