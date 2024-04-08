<template>
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="blog single mt-n17">
            <div class="card">
              <figure class="card-img-top">
                <nuxt-img src="/assets/img/photos/b1.jpg" alt="photo" />
              </figure>
              <div class="card-body">
                <div class="classic-view">
                  <article class="post">
                    <div class="post-content mb-5">
                      <h2 class="h1 mb-4">
                        Cras mattis consectetur purus fermentum
                      </h2>
                      <p>
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                        dolor auctor. Cras mattis consectetur purus sit amet
                        fermentum. Aenean lacinia bibendum nulla sed
                        consectetur. Curabitur blandit tempus porttitor. Vivamus
                        sagittis lacus vel augue laoreet rutrum faucibus dolor
                        auctor. Nullam quis risus eget porta ac consectetur
                        vestibulum.
                      </p>
                      <p>
                        Donec sed odio dui consectetur adipiscing elit. Etiam
                        adipiscing tincidunt elit, eu convallis felis suscipit
                        ut. Phasellus rhoncus tincidunt auctor. Nullam eu
                        sagittis mauris. Donec non dolor ac elit aliquam
                        tincidunt at at sapien. Aenean tortor libero,
                        condimentum ac laoreet vitae, varius tempor nisi. Duis
                        non arcu vel lectus urna mollis ornare vel eu leo.
                      </p>
                      <div class="row g-6 mt-3 mb-10">
                        <div
                          v-for="(elm, i) in galleryItems"
                          :key="i"
                          class="col-md-6"
                        >
                          <figure
                            class="hover-scale rounded cursor-dark"
                            @click="() => setActiveLightBox(true, i)"
                          >
                            <a> <nuxt-img :src="elm.imageSrc" alt="photo" /></a>
                          </figure>
                        </div>

                        <!--/column -->
                      </div>
                      <!-- /.row -->
                      <p>
                        Maecenas sed diam eget risus varius blandit sit amet non
                        magna. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Donec sed
                        odio dui. Nulla vitae elit libero, a pharetra augue.
                        Maecenas faucibus mollis interdum. Donec id elit non mi
                        porta gravida at eget metus. Nullam quis risus eget urna
                        mollis ornare vel eu leo. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed posuere consectetur est
                        at lobortis. Cras mattis consectetur purus sit amet
                        fermentum. Praesent commodo cursus magna.
                      </p>
                      <blockquote class="fs-lg my-8">
                        <p>
                          Sed posuere consectetur est at lobortis. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit. Duis
                          mollis, est non commodo luctus, nisi erat porttitor
                          ligula lacinia odio sem nec elit purus.
                        </p>
                        <footer class="blockquote-footer">
                          Very important person
                        </footer>
                      </blockquote>
                      <h3 class="h2 mb-4">Sit Vulputate Bibendum Purus</h3>
                      <p>
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet
                        risus. Aenean lacinia bibendum nulla sed consectetur.
                        Cras mattis consectetur purus sit amet fermentum.
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vestibulum id ligula porta felis euismod
                        semper.
                      </p>
                      <p>
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet
                        risus. Donec sed odio dui. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam. Fusce dapibus, tellus
                        ac cursus commodo, tortor mauris condimentum nibh, ut
                        fermentum massa justo sit amet risus. Sed posuere
                        consectetur est at lobortis. Donec id elit non mi porta
                        gravida at eget metus. Nulla vitae elit libero, a
                        pharetra augue. Cum sociis natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus. Fusce
                        dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh.
                      </p>
                    </div>
                    <!-- /.post-content -->
                    <div
                      class="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8"
                    >
                      <div>
                        <ul class="list-unstyled tag-list mb-0">
                          <li v-for="(elm, i) in tags.slice(0, 3)" :key="i">
                            <a
                              :href="elm.link"
                              class="btn btn-soft-ash btn-sm rounded-pill mb-0"
                              >{{ elm.name }}</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="mb-0 mb-md-2">
                        <div class="dropdown share-dropdown btn-group">
                          <button
                            class="btn btn-sm btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="uil uil-share-alt"></i> Share
                          </button>
                          <div class="dropdown-menu">
                            <a
                              v-for="(elm, i) in socialMediaLinks"
                              :key="i"
                              class="dropdown-item"
                              :href="elm.link"
                              ><i :class="elm.iconClass"></i>{{ elm.name }}</a
                            >
                          </div>
                          <!--/.dropdown-menu -->
                        </div>
                        <!--/.share-dropdown -->
                      </div>
                    </div>
                    <!-- /.post-footer -->
                  </article>
                  <!-- /.post -->
                </div>
                <!-- /.classic-view -->
                <hr />
                <BlogSingleCommonAuthor />
                <!-- /.social -->
                <hr />
                <BlogSingleCommonSimilerBlog />
                <!-- /.swiper-container -->
                <hr />
                <BlogSingleCommonComments />
                <!-- /#comments -->
                <hr />
                <BlogSingleCommonForm />
                <!-- /.comment-form -->
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.blog -->
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
import { tags } from "~/data/blogs";

const galleryItems = ref([
  {
    id: 1,
    imageSrc: "/assets/img/photos/b8.jpg",
    fullImageSrc: "/assets/img/photos/b8-full.jpg",
  },
  {
    id: 2,
    imageSrc: "/assets/img/photos/b9.jpg",
    fullImageSrc: "/assets/img/photos/b9-full.jpg",
  },
  {
    id: 3,
    imageSrc: "/assets/img/photos/b10.jpg",
    fullImageSrc: "/assets/img/photos/b10-full.jpg",
  },
  {
    id: 4,
    imageSrc: "/assets/img/photos/b11.jpg",
    fullImageSrc: "/assets/img/photos/b11-full.jpg",
  },
]);

const images = galleryItems.value.map((elm) => elm.fullImageSrc);
const activeLightBox = ref(false);
const currentSlideIndex = ref();

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};

const socialMediaLinks = [
  { id: 1, name: "Twitter", iconClass: "uil uil-twitter", link: "#" },
  { id: 2, name: "Facebook", iconClass: "uil uil-facebook-f", link: "#" },
  { id: 3, name: "LinkedIn", iconClass: "uil uil-linkedin", link: "#" },
];
</script>

<style lang="scss" scoped></style>
