<template>
  <section class="wrapper bg-gradient-primary">
    <div class="container py-14 pt-md-16 pb-md-18">
      <div class="position-relative mt-8 mt-lg-n23 mt-xl-n25">
        <div class="row text-center">
          <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
            <h2 class="fs-16 text-uppercase text-muted mb-3">Our Team</h2>
            <h3 class="display-4 mb-10 px-md-13 px-lg-4 px-xl-0">
              Meet Our Development Team
            </h3>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <div class="position-relative">
          <div
            class="shape bg-dot blue rellax w-16 h-17"
            data-rellax-speed="1"
            style="bottom: 0.5rem; right: -1.7rem; z-index: 0"
          ></div>
          <div
            class="shape rounded-circle bg-line red rellax w-16 h-16"
            data-rellax-speed="1"
            style="top: 0.5rem; left: -1.7rem; z-index: 0"
          ></div>
          <div class="row grid-view gy-6 gy-xl-0">
            <div
              v-for="(elm, i) in teamMembers2.slice(0, 4)"
              :key="i"
              class="col-md-6 col-xl-3  "
            >
              <div class="card shadow-lg">
                <div class="card-body d-flex justify-content-center flex-column">
                  <nuxt-img
                    class="rounded-circle w-15 mb-4 m-auto"
                    :src="elm.avatarSrc"
                    alt="photo"
                  />
                  <h4 class="mb-1 m-auto">{{ elm.name }}</h4>
                  <div class="meta mb-2 m-auto">{{ elm.position }}</div>
                  <!-- <p class="mb-2">{{ elm.description }}</p>
                  <nav class="nav social mb-0">
                    <a
                      v-for="(elm2, i2) in elm.socialLinks"
                      :key="i2"
                      :href="elm2.link"
                      ><i :class="elm2.iconClass"></i
                    ></a>
                  </nav> -->
                  <!-- /.social -->
                </div>
                <!--/.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!--/column -->

            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /.position-relative -->
      </div>
      <!-- /div -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { teamMembers2 } from "~/data/team";
</script>

<style lang="scss" scoped></style>
