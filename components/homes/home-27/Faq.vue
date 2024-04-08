<template>
  <div class="row">
    <div class="col-xl-11 mx-auto">
      <div class="row gx-md-8 gx-xl-12 gy-10 px-lg-5">
        <div v-for="item in faqs5" :key="item.id" class="col-lg-6">
          <div class="d-flex flex-row">
            <div>
              <nuxt-img
                :src="item.icon"
                class="icon-svg icon-svg-sm text-blue me-5 mt-1"
                alt="photo"
              />
            </div>
            <div>
              <h4 class="fs-20 ls-sm">{{ item.title }}</h4>
              <p class="mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /column -->
  </div>
</template>

<script setup>
import { faqs5 } from "~/data/faq";
</script>

<style lang="scss" scoped></style>
