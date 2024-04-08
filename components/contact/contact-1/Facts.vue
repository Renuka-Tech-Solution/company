<template>
  <section
    class="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map"
    style="background-image: url(/assets/img/map.png)"
  >
    <div class="container py-10 pt-md-11 pb-md-13">
      <div class="row pt-md-12">
        <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
          <h2 class="fs-15 text-uppercase text-muted mb-3">
            Join Our Community
          </h2>
          <h3 class="display-4 mb-8 px-lg-12">
            We are trusted by over 5000+ clients. Join them now and grow your
            business.
          </h3>
        </div>
        <!-- /.row -->
      </div>
      <!-- /column -->
      <div class="row pb-md-12">
        <div class="col-md-10 col-lg-9 col-xl-7 mx-auto">
          <div class="row align-items-center counter-wrapper gy-4 gy-md-0">
            <div
              v-for="(elm, i) in facts2.slice(0, 3)"
              :key="i"
              class="col-md-4 text-center"
            >
              <h3 class="counter counter-lg text-primary">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="elm.counter"
                  :time="1500"
                />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
              </h3>
              <p>{{ elm.description }}</p>
            </div>
            <!--/column -->

            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
</template>

<script setup>
import { facts2 } from "~/data/facts";
</script>

<style lang="scss" scoped></style>
