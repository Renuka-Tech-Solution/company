<template>
  <div class="row">
    <div class="col-xl-11 mx-auto">
      <div class="row gx-md-8 gx-xl-12 gy-10 mb-15">
        <div v-for="(elm, i) in faq3" :key="i" class="col-lg-6">
          <div class="d-flex flex-row">
            <div>
              <span class="icon btn btn-sm btn-circle btn-primary pe-none me-5"
                ><i class="uil uil-comment-exclamation"></i
              ></span>
            </div>
            <div>
              <h4>{{ elm.question }}</h4>
              <p class="mb-0">{{ elm.answer }}</p>
            </div>
          </div>
        </div>
        <!-- /column -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { faq3 } from "~/data/faq";
</script>

<style lang="scss" scoped></style>
