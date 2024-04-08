<template>
  <section id="services" class="scrollSpysection">
    <div class="wrapper bg-light">
      <div class="container py-14 py-md-17">
        <div class="row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center">
          <div class="col-lg-6 order-lg-2">
            <ul class="progress-list">
              <li v-for="(item, index) in skills" :key="index">
                <p>{{ item.title }}</p>
                <div :class="`progressbar line ${item.color}`">
                  <CommonLineProgressbar :max="item.value" />
                  <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
                </div>
              </li>
            </ul>
            <!-- /.progress-list -->
          </div>
          <!--/column -->
          <div class="col-lg-6">
            <h3 class="display-5 mb-5">
              The full service we are offering is specifically designed to meet
              your business needs and projects.
            </h3>
            <p>
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at
              eros. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur duis mollis commodo.
            </p>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
        <div class="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
          <div
            v-for="(elm, i) in services11"
            :key="i"
            class="col-md-6 col-lg-3"
          >
            <nuxt-img
              :src="elm.iconSrc"
              class="icon-svg icon-svg-md text-blue mb-3"
              alt="photo"
            />
            <h4>{{ elm.title }}</h4>
            <p class="mb-2">
              {{ elm.description }}
            </p>
          </div>

          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
  </section>
</template>

<script setup>
import { services11 } from "~/data/features";
import { skills } from "~/data/skils";
</script>

<style lang="scss" scoped></style>
