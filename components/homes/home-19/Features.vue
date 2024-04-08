<template>
  <section class="wrapper bg-light">
    <div class="container pb-15 pb-md-17">
      <div class="row gx-md-5 gy-5 mt-n19 mb-14 mb-md-17">
        <div
          class="col-md-6 col-xl-3"
          v-for="service in services4"
          :key="service.id"
        >
          <div class="card shadow-lg">
            <div class="card-body">
              <nuxt-img
                :src="service.icon"
                class="icon-svg icon-svg-sm solid-mono"
                :class="service.iconColorClass"
                alt="photo"
              />
              <h4>{{ service.title }}</h4>
              <p class="mb-2">{{ service.description }}</p>
              <a
                :href="service.learnMoreLink"
                class="more hover"
                :class="service.linkColorClass"
                >Learn More</a
              >
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row">
        <div
          class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center"
        >
          <h2 class="fs-16 text-uppercase text-muted mb-3">
            Why Choose Sandbox?
          </h2>
          <h3 class="display-3 mb-10 px-xl-10 px-xxl-15">
            Here are a few
            <span class="underline-3 style-2 yellow">reasons</span> why our
            customers choose Sandbox.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <ul
        class="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column"
      >
        <li class="nav-item">
          <div
            :class="`nav-link d-flex flex-row cursor-pointer ${
              activeTab == 1 ? 'active' : ''
            }`"
            @click="
              () => {
                activeTab = 1;
              }
            "
          >
            <div>
              <nuxt-img
                src="/assets/img/icons/solid/bulb.svg"
                class="icon-svg icon-svg-sm solid-mono text-fuchsia me-4"
                alt="photo"
              />
            </div>
            <div>
              <h4>Collect Ideas</h4>
              <p>Duis mollis commodo luctus cursus commodo tortor mauris.</p>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <div
            :class="`nav-link d-flex flex-row cursor-pointer ${
              activeTab == 2 ? 'active' : ''
            }`"
            @click="
              () => {
                activeTab = 2;
              }
            "
          >
            <div>
              <nuxt-img
                src="/assets/img/icons/solid/compare.svg"
                class="icon-svg icon-svg-sm solid-mono text-violet me-4"
                alt="photo"
              />
            </div>
            <div>
              <h4>Data Analysis</h4>
              <p>Vivamus sagittis lacus augue fusce dapibus tellus nibh.</p>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <div
            :class="`nav-link d-flex flex-row cursor-pointer ${
              activeTab == 3 ? 'active' : ''
            }`"
            @click="
              () => {
                activeTab = 3;
              }
            "
          >
            <div>
              <nuxt-img
                src="/assets/img/icons/solid/delivery-box.svg"
                class="icon-svg icon-svg-sm solid-mono text-green me-4"
                alt="photo"
              />
            </div>
            <div>
              <h4>Finalize Product</h4>
              <p>Vestibulum ligula porta felis maecenas faucibus mollis.</p>
            </div>
          </div>
        </li>
      </ul>
      <!-- /.nav-tabs -->
      <div class="tab-content mt-6 mt-lg-8">
        <div :class="`tab-pane fade  ${activeTab == 1 ? 'show active' : ''}`">
          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div class="col-lg-6">
              <figure class="rounded shadow-lg">
                <nuxt-img
                  src="/assets/img/photos/se5.jpg"
                  srcset="/assets/img/photos/se5@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <h2 class="mb-3">Collect Ideas</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul class="icon-list bullet-bg bullet-soft-fuchsia">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 3)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
              <a href="#" class="btn btn-fuchsia mt-2">Learn More</a>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.tab-pane -->
        <div :class="`tab-pane fade  ${activeTab == 2 ? 'show active' : ''}`">
          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div class="col-lg-6 order-lg-2">
              <figure class="rounded shadow-lg">
                <nuxt-img
                  src="/assets/img/photos/se6.jpg"
                  srcset="/assets/img/photos/se6@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <h2 class="mb-3">Data Analysis</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul class="icon-list bullet-bg bullet-soft-violet">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 3)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
              <a href="#" class="btn btn-violet mt-2">Learn More</a>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.tab-pane -->
        <div :class="`tab-pane fade  ${activeTab == 3 ? 'show active' : ''}`">
          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div class="col-lg-6">
              <figure class="rounded shadow-lg">
                <nuxt-img
                  src="/assets/img/photos/se7.jpg"
                  srcset="/assets/img/photos/se7@2x.jpg 2x"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <h2 class="mb-3">Finalize Product</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Nullam quis risus eget
                urna.
              </p>
              <ul class="icon-list bullet-bg bullet-soft-green">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 3)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
              <a href="#" class="btn btn-green mt-2">Learn More</a>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.tab-pane -->
      </div>
      <!-- /.tab-content -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { checklistItems, services4 } from "~/data/features";
const activeTab = ref(1);
</script>

<style lang="scss" scoped></style>
