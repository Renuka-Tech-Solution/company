<template>
  <section class="wrapper bg-soft-primary">
    <div class="container pt-15 pt-md-17 pb-15 pb-md-17">
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div class="row align-items-center counter-wrapper gy-6 text-center">
            <div v-for="(elm, i) in facts2" :key="i" class="col-md-3">
              <nuxt-img
                :src="elm.iconSrc"
                class="icon-svg icon-svg-lg text-primary mb-3"
                alt="photo"
              />
              <h3 class="counter">
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

    <!-- /.container -->
  </section>
</template>

<script setup>
import { facts2 } from "~/data/facts";
</script>

<style lang="scss" scoped></style>
