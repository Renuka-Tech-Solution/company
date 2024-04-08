<template>
  <section class="wrapper bg-light" id="demos">
    <div class="container py-14 py-md-18 pb-md-19">
      <div class="row mb-10">
        <div class="col-md-9 col-lg-7 col-xl-6 col-xxl-5 mx-auto">
          <div class="counter-wrapper">
            <h3 class="fs-70 mb-3 text-primary text-center counter">
              <CommonCounter parentClass="" :min="0" :max="21" :time="800" />
            </h3>
          </div>
          <h2 class="display-3 mb-3 text-center mb-0">
            Functional, impressive and rich demos to start with
          </h2>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="demos-wrapper">
        <h2 class="fs-16 text-uppercase text-muted mb-6 text-center">
          New Demos
        </h2>
        <div class="project mb-10" v-for="(demo, index) in demos" :key="index">
          <div :class="'card bg-soft-' + demo.color">
            <div class="card-body ps-xl-12 py-0 overflow-hidden">
              <div class="row gx-md-8 gx-xl-12 d-flex align-items-center">
                <div class="col-lg-7">
                  <div class="row gx-7">
                    <div
                      v-for="(image, i) in demo.images"
                      :key="i"
                      class="col-6"
                    >
                      <figure
                        :class="
                          'itooltip itooltip-' +
                          demo.color +
                          (i === 0 ? ' mt-9' : '')
                        "
                        v-tippy="{
                          content: `<h5 class='mb-0 bg-${demo.color} py-2 px-2 text-white rounded'>Click to see demo</h5>`,
                          allowHTML: true,
                          followCursor: true,
                        }"
                      >
                        <nuxt-link :to="demo.demoLink">
                          <nuxt-img
                            :class="
                              'shadow-lg rounded-' +
                              (i === 0 ? 'top' : 'bottom')
                            "
                            :src="image.src"
                            :srcset="image.srcset"
                            alt="photo"
                          />
                        </nuxt-link>
                      </figure>
                    </div>
                    <!-- /column -->
                  </div>
                  <!-- /.row -->
                </div>
                <!-- /column -->
                <div class="col-lg-5 d-none d-lg-block">
                  <h2 class="post-title fs-30 mb-4">{{ demo.title }}</h2>
                  <ul
                    class="icon-list"
                    :class="'bullet-' + demo.color + ' row ms-0 gy-2'"
                  >
                    <li
                      v-for="(feature, i) in demo.features"
                      :key="i"
                      class="col-md-6"
                    >
                      <span><i class="uil uil-check"></i></span>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                  <nuxt-link
                    :to="demo.demoLink"
                    class="btn btn-sm"
                    :class="'btn-' + demo.color + ' rounded-pill mt-1'"
                    >See Demo</nuxt-link
                  >
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!-- /.project -->
        <div class="text-center mt-12">
          <a href="#" class="btn btn-primary rounded-pill">See All Demos</a>
        </div>
      </div>
      <!-- /.demos-wrapper -->
    </div>
    <!-- /.container -->
    <div class="overflow-hidden">
      <div class="divider text-soft-primary mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="currentColor"
            d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
          />
        </svg>
      </div>
    </div>
    <!-- /.overflow-hidden -->
  </section>
</template>

<script setup>
import { directive as VTippy } from "vue-tippy";

const demos = ref([
  {
    title: "Demo Layout XVIII",
    color: "grape",
    demoLink: "/demo18",
    images: [
      {
        src: "/assets/img/demos/d18.jpg",
        srcset: "/assets/img/demos/d18@2x.jpg 2x",
      },
      {
        src: "/assets/img/demos/d18-2.jpg",
        srcset: "/assets/img/demos/d18-2@2x.jpg 2x",
      },
    ],
    features: [
      "Network, Marketing",
      "SVG icons",
      "3D illustrations",
      "Gradient image",
    ],
  },
  {
    title: "Demo Layout XIX",
    color: "fuchsia",
    demoLink: "/demo19",
    images: [
      {
        src: "/assets/img/demos/d19-1.jpg",
        srcset: "/assets/img/demos/d19-1@2x.jpg 2x",
      },
      {
        src: "/assets/img/demos/d19-2.jpg",
        srcset: "/assets/img/demos/d19-2@2x.jpg 2x",
      },
    ],
    features: [
      "Agency, Startup",
      "Gradient image",
      "SVG icons",
      "Colorful design",
    ],
  },
  {
    title: "Demo Layout XX",
    color: "purple",
    demoLink: "/demo20",
    images: [
      {
        src: "/assets/img/demos/d20-1.jpg",
        srcset: "/assets/img/demos/d20-1@2x.jpg 2x",
      },
      {
        src: "/assets/img/demos/d20-2.jpg",
        srcset: "/assets/img/demos/d20-2@2x.jpg 2x",
      },
    ],
    features: [
      "Agency, Startup",
      "Framed layout",
      "Illustrations",
      "Video background",
    ],
  },
]);
</script>

<style lang="scss" scoped></style>
