<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
    <div class="col-md-8 col-lg-6 position-relative">
      <div
        class="shape bg-soft-primary rounded-circle rellax w-20 h-20"
        data-rellax-speed="1"
        style="top: -2rem; left: -1.9rem"
      ></div>
      <figure class="rounded">
        <nuxt-img
          src="/assets/img/photos/about10.jpg"
          srcset="/assets/img/photos/about10@2x.jpg 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <h2 class="display-4 mb-3">Who Are We?</h2>
      <p class="lead fs-lg">
        We are a digital and branding company that believes in the power of
        <span class="underline">creative strategy</span> and along with great
        design.
      </p>
      <p class="mb-6">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
        et.
      </p>
      <div class="row gx-xl-10 gy-6">
        <div v-for="(item, index) in items" :key="index" class="col-md-6">
          <div class="d-flex flex-row">
            <div>
              <nuxt-img
                :src="item.iconSrc"
                class="icon-svg icon-svg-sm me-4"
                alt="photo"
              />
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
    <!--/column -->
  </div>
</template>
<script setup>
const items = [
  {
    id: 1,
    iconSrc: "/assets/img/icons/lineal/target.svg",
    title: "Our Mission",
    description: "Dapibus eu leo quam ornare curabitur blandit tempus.",
  },
  {
    id: 2,

    iconSrc: "/assets/img/icons/lineal/award-2.svg",
    title: "Our Values",
    description: "Aenean lacinia bibendum nulla sed consectetur.",
  },
  // Add more items as needed
];
</script>

<style lang="scss" scoped></style>
