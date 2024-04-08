<template>
  <div class="container py-15 py-md-17">
    <div class="row">
      <div class="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
        <h2 class="display-2 mb-4">What makes us different?</h2>
        <p class="lead fs-lg mb-11">
          Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam
          eget risus varius blandit sit amet non magna.
        </p>
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
    <div class="row gx-lg-0 gy-10 align-items-center mb-15 mb-md-17">
      <div class="col-lg-7 position-relative">
        <div
          class="position-absolute"
          style="
            top: 50%;
            left: 50%;
            width: 140%;
            height: auto;
            transform: translate(-50%, -50%);
            z-index: -1;
          "
        >
          <nuxt-img class="w-100" src="/assets/img/photos/blurry.png" alt="photo" />
        </div>
        <figure>
          <nuxt-img
            src="/assets/img/photos/mi1.png"
            srcset="/assets/img/photos/mi1@2x.png 2x"
            alt="photo"
          />
        </figure>
      </div>
      <!--/column -->
      <div class="col-lg-4 ms-auto">
        <h2 class="display-5 mb-2 mt-xxl-n10">Design</h2>
        <p class="mb-8">
          Maecenas sed diam eget risus varius blandit sit amet non magna justo
          sit amet risus.
        </p>
        <div
          v-for="(item, index) in items"
          :key="index"
          class="d-flex flex-row mb-6"
        >
          <div>
            <div class="svg-bg bg-white rounded-xl shadow-xl me-5">
              <nuxt-img
                :src="item.iconSrc"
                class="icon-svg solid-duo text-grape-fuchsia"
                alt="photo"
              />
            </div>
          </div>
          <div>
            <h4 class="mb-1">{{ item.title }}</h4>
            <p class="mb-0">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <!--/column -->
    </div>
    <!--/.row -->
    <div class="row gx-lg-0 gy-10 align-items-center">
      <div class="col-lg-7 position-relative order-lg-2">
        <div
          class="position-absolute"
          style="
            top: 50%;
            left: 50%;
            width: 140%;
            height: auto;
            transform: translate(-50%, -50%);
            z-index: -1;
          "
        >
          <nuxt-img class="w-100" src="/assets/img/photos/blurry.png" alt="photo" />
        </div>
        <figure>
          <nuxt-img
            src="/assets/img/photos/mi2.png"
            srcset="/assets/img/photos/mi2@2x.png 2x"
            alt="photo"
          />
        </figure>
      </div>
      <!--/column -->
      <div class="col-lg-4 me-auto">
        <h2 class="display-5 mb-2 mt-xxl-n10">Development</h2>
        <p class="mb-8">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh fermentum.
        </p>
        <div
          v-for="(item, index) in additionalItems"
          :key="index"
          :id="`additional-item-${item.id}`"
          class="d-flex flex-row mb-6"
        >
          <div>
            <div class="svg-bg bg-white rounded-xl shadow-xl me-5">
              <nuxt-img
                :src="item.iconSrc"
                class="icon-svg solid-duo text-grape-fuchsia"
                alt="photo"
              />
            </div>
          </div>
          <div>
            <h4 class="mb-1">{{ item.title }}</h4>
            <p class="mb-0">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <!--/column -->
    </div>
    <!--/.row -->
  </div>
</template>

<script setup>
const items = ref([
  {
    id: 1,
    iconSrc: "/assets/img/icons/solid/puzzle.svg",
    title: "UI/UX Design",
    description:
      "Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et.",
  },
  {
    id: 2,
    iconSrc: "/assets/img/icons/solid/pen-tool.svg",
    title: "Design System",
    description:
      "Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et.",
  },
  {
    id: 3,
    iconSrc: "/assets/img/icons/solid/share.svg",
    title: "Digital Branding",
    description:
      "Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et.",
  },
]);

const additionalItems = ref([
  {
    id: 4,
    iconSrc: "/assets/img/icons/solid/devices.svg",
    title: "Responsive Website",
    description:
      "Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et.",
  },
  {
    id: 5,
    iconSrc: "/assets/img/icons/solid/safe.svg",
    title: "Backup and Updates",
    description:
      "Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et.",
  },
  {
    id: 6,
    iconSrc: "/assets/img/icons/solid/globe-2.svg",
    title: "SEO Optimization",
    description:
      "Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et.",
  },
]);
</script>

<style lang="scss" scoped></style>
