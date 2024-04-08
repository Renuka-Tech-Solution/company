<template>
  <section class="wrapper bg-light wrapper-border">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <h1 class="display-4 mb-4">Memphis Brand Design</h1>
          <div class="row gx-0 mb-12">
            <div class="col-md-9 text-justify">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Integer posuere erat a
                ante venenatis. Etiam porta sem malesuada magna mollis euismod.
                Aenean lacinia bibendum.
              </p>
              <p>
                Donec id elit non mi porta gravida at eget metus. Cras mattis
                consectetur purus sit amet fermentum. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum.
              </p>
            </div>
            <!--/column -->
            <div class="col-md-2 ms-auto">
              <ul class="list-unstyled">
                <li>
                  <h5 class="mb-1">Date</h5>
                  <p>17 May 2018</p>
                </li>
                <li>
                  <h5 class="mb-1">Client Name</h5>
                  <p>Cool House</p>
                </li>
              </ul>

              <nuxt-link to="/single-project" class="more hover"
                >See Project</nuxt-link
              >
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gy-6 mb-12">
        <div
          v-for="(column, index) in columns"
          :key="index"
          :class="`${index == 0 ? 'col-md-12' : 'col-md-6'}`"
        >
          <figure class="hover-scale rounded cursor-dark">
            <a @click="() => setActiveLightBox(true, index, columns)">
              <nuxt-img :src="column.imageSrc" alt="photo" />
            </a>
          </figure>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row mb-12">
        <div class="col-lg-10 mx-auto">
          <h2 class="display-6 mb-4">About the Project</h2>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Integer posuere erat a ante
            venenatis. Etiam porta sem malesuada magna mollis euismod. Aenean
            lacinia bibendum.
          </p>
          <p class="mb-0">
            Donec id elit non mi porta gravida at eget metus. Cras mattis
            consectetur purus sit amet fermentum. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur et. Donec sed odio dui. Aenean eu
            leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus.
          </p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gy-6">
        <div
          v-for="(item, index) in imageItems"
          :key="index"
          :class="item.columnClass"
        >
          <figure class="hover-scale rounded cursor-dark">
            <a @click="() => setActiveLightBox(true, index, imageItems)">
              <nuxt-img :src="item.smallImageUrl" />
            </a>
          </figure>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
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
const columns = [
  { id: 1, imageSrc: "/assets/img/photos/pp24.jpg" },
  { id: 2, imageSrc: "/assets/img/photos/pp25.jpg" },
  { id: 3, imageSrc: "/assets/img/photos/pp26.jpg" },
];

const imageItems = ref([
  {
    id: 1,
    columnClass: "col-md-12",
    largeImageUrl: "/assets/img/photos/pp27@2x.jpg",
    smallImageUrl: "/assets/img/photos/pp27.jpg",
  },
  {
    id: 2,
    columnClass: "col-md-12",
    largeImageUrl: "/assets/img/photos/pp28@2x.jpg",
    smallImageUrl: "/assets/img/photos/pp28.jpg",
  },
  {
    id: 3,
    columnClass: "col-md-4",
    largeImageUrl: "/assets/img/photos/pp29@2x.jpg",
    smallImageUrl: "/assets/img/photos/pp29.jpg",
  },
  {
    id: 4,
    columnClass: "col-md-8",
    largeImageUrl: "/assets/img/photos/pp30@2x.jpg",
    smallImageUrl: "/assets/img/photos/pp30.jpg",
  },
  // Add more items as needed
]);

const activeLightBox = ref(false);
const currentSlideIndex = ref();

const images = ref([]);
const setActiveLightBox = (val, i, items) => {
  if (i != undefined) {
    currentSlideIndex.value = i;
  }
  if (items) {
    images.value = items.map((elm) => elm.imageSrc || elm.largeImageUrl);
  }
  activeLightBox.value = val;
};
</script>

<style lang="scss" scoped></style>
