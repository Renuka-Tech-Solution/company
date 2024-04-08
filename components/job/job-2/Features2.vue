<template>
  <div class="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mt-12">
    <div class="col-lg-6">
      <div class="row gx-md-5 gy-5">
        <div class="col-12">
          <figure class="rounded mx-md-5">
            <nuxt-img
              src="/assets/img/photos/g8.jpg"
              srcset="/assets/img/photos/g8@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-md-6">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/g9.jpg"
              srcset="/assets/img/photos/g9@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-md-6">
          <figure class="rounded">
            <nuxt-img
              src="/assets/img/photos/g10.jpg"
              srcset="/assets/img/photos/g10@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <h2 class="fs-16 text-uppercase text-muted mb-3 mt-md-n5">
        What Makes Us Different?
      </h2>
      <h3 class="display-3 mb-5">
        We bring solutions to make life easier for our customers.
      </h3>
      <p class="mb-6">
        Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla
        vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna
        mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Maecenas sed.
      </p>
      <div class="row gy-8">
        <div
          class="col-md-6"
          v-for="(item, index) in missionValues"
          :key="index"
        >
          <div class="d-flex flex-row">
            <div>
              <nuxt-img
                :src="`/assets/img/icons/solid/${item.icon}.svg`"
                class="icon-svg icon-svg-xs solid-mono text-primary me-4"
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
const missionValues = ref([
  {
    icon: "share",
    title: "Our Mission",
    description: "Curabitur blandit lacus porttitor ridiculus mus.",
  },
  {
    icon: "partnership",
    title: "Our Values",
    description: "Curabitur blandit lacus porttitor ridiculus mus.",
  },
]);
</script>

<style lang="scss" scoped></style>
