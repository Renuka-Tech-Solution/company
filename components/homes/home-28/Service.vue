<template>
  <div class="row gx-lg-0 gy-10 align-items-center">
    <div class="col-lg-5 offset-lg-1 order-lg-2">
      <h2 class="display-3 mb-3">My areas of <em>expertise</em></h2>
      <p class="lead fs-lg">
        The full service I am offering is specifically designed to meet your
        business needs.
      </p>
      <p>
        Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nullam quis risus eget urna
        mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel
        eu leo. Maecenas faucibus mollis elit interdum. Duis mollis, est non
        commodo luctus, nisi erat ligula magna mollis.
      </p>
      <a href="#" class="btn btn-primary rounded-pill mt-3">More Details</a>
    </div>
    <!-- /column -->
    <div class="col-lg-6">
      <div class="row g-6 text-center">
        <div class="col-md-6">
          <div class="row">
            <div
              v-for="(elm, i) in services2.slice(0, 2)"
              :key="i"
              class="col-lg-12"
            >
              <div class="card shadow-lg mb-6">
                <div class="card-body">
                  <nuxt-img
                    :src="elm.icon"
                    class="icon-svg icon-svg-sm solid-duo text-purple-aqua mb-3"
                    alt="photo"
                  />
                  <h3>{{ elm.title }}</h3>
                  <p class="mb-2">
                    {{ elm.description.split(" ").slice(0, 15).join(" ") }}
                  </p>
                  <a href="#" class="more hover link-primary">Learn More</a>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.card -->
            </div>
            <!-- /column -->

            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /column -->
        <div class="col-md-6">
          <div class="row">
            <!-- /column -->
            <div
              v-for="(elm, i) in services2.slice(2, 4)"
              :key="i"
              :class="`col-lg-12 ${!i ? 'order-md-2' : ''}`"
            >
              <div class="card shadow-lg mb-6">
                <div class="card-body">
                  <nuxt-img
                    :src="elm.icon"
                    class="icon-svg icon-svg-sm solid-duo text-purple-aqua mb-3"
                    alt="photo"
                  />
                  <h3>{{ elm.title }}</h3>
                  <p class="mb-2">
                    {{ elm.description.split(" ").slice(0, 15).join(" ") }}
                  </p>
                  <a href="#" class="more hover link-primary">Learn More</a>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.card -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /column -->
  </div>
</template>

<script setup>
import { services2 } from "~/data/features";
</script>

<style lang="scss" scoped></style>
