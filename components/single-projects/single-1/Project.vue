<template>
  <section class="wrapper bg-light wrapper-border">
    <div class="container pb-14 pb-md-16">
      <div class="row">
        <div class="col-12">
          <article class="mt-n21">
            <figure class="rounded mb-8 mb-md-12">
              <nuxt-img src="/assets/img/photos/pp1.jpg" alt="photo" />
            </figure>
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                <h2 class="display-6 mb-4">About the Project</h2>
                <div class="row gx-0">
                  <div class="col-md-9 text-justify">
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Integer posuere erat a ante venenatis. Etiam porta sem
                      malesuada magna mollis euismod. Aenean lacinia bibendum.
                    </p>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Cras
                      mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Aenean eu leo quam. Pellentesque
                      ornare sem lacinia quam venenatis vestibulum. Sed posuere
                      consectetur est at lobortis. Vivamus sagittis lacus vel
                      augue laoreet rutrum faucibus dolor auctor.
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
              <!-- /column -->
            </div>
            <!--/.row -->
            <div class="row mt-5 gx-md-6 gy-6">
              <div
                v-for="(image, index) in imageLinks"
                :key="index"
                class="item col-md-6"
              >
                <figure class="hover-scale rounded cursor-dark">
                  <a @click="() => setActiveLightBox(true, index)">
                    <nuxt-img :src="image.src" alt="photo" />
                  </a>
                </figure>
              </div>
              <!--/column -->
            </div>
            <!-- /.row -->
            <div class="row mt-8 mt-md-12">
              <div class="col-md-10 offset-md-1 text-justify">
                <h2 class="mb-4">Quam Mollis Bibendum</h2>
                <p>
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna. Donec ullamcorper nulla non metus auctor fringilla.
                  Cras mattis consectetur purus sit amet fermentum. Aenean
                  lacinia bibendum nulla sed consectetur. Curabitur blandit
                  tempus porttitor. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Donec id elit non mi porta
                  gravida at eget metus. Donec id elit non mi porta gravida at
                  eget metus. Cras mattis consectetur purus sit amet fermentum.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Duis mollis,
                  est non commodo luctus, nisi erat porttitor ligula, eget
                  lacinia odio sem nec elit. Maecenas faucibus mollis interdum.
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Nulla vitae elit libero, a pharetra augue. Maecenas
                  faucibus mollis interdum etiam porta.
                </p>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
          </article>
          <!-- /.project -->
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
const imageLinks = [
  {
    id: 1,
    src: "/assets/img/photos/pp2.jpg",
  },
  {
    id: 2,
    src: "/assets/img/photos/pp3.jpg",
  },
  {
    id: 3,
    src: "/assets/img/photos/pp4.jpg",
  },
  {
    id: 4,
    src: "/assets/img/photos/pp5.jpg",
  },
];

const images = imageLinks.map((elm) => elm.src);
const activeLightBox = ref(false);
const currentSlideIndex = ref();

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};
</script>

<style lang="scss" scoped></style>
