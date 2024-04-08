<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
    <div class="col-lg-7 order-lg-2">
      <figure>
        <nuxt-img
          class="w-auto"
          src="/assets/img/illustrations/i2.png"
          srcset="/assets/img/illustrations/i2@2x.png 2x"
          alt="photo"
        />
      </figure>
    </div>
    <!--/column -->
    <div class="col-lg-5">
      <h2 class="fs-15 text-uppercase text-line text-primary mb-3">
        Why Choose Us?
      </h2>
      <h3 class="display-5 mb-7">
        A few reasons why our valued customers choose us.
      </h3>
      <div class="accordion accordion-wrapper" id="accordionExample-1">
        <div
          v-for="(elm, i) in faq4"
          :key="i"
          class="card plain accordion-item"
        >
          <div class="card-header" :id="`heading1-${elm.id}`">
            <button
              :class="`${!i ? 'accordion-button' : 'collapsed'}`"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse1-${elm.id}`"
              aria-expanded="true"
              :aria-controls="`collapse1-${elm.id}`"
            >
              {{ elm.question }}
            </button>
          </div>
          <!--/.card-header -->
          <div
            :id="`collapse1-${elm.id}`"
            :class="`accordion-collapse collapse ${!i ? 'show' : ''} `"
            :aria-labelledby="`heading1-${elm.id}`"
            data-bs-parent="#accordionExample-1"
          >
            <div class="card-body">
              <p>{{ elm.answer }}</p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.accordion-collapse -->
        </div>
        <!--/.accordion-item -->

        <!--/.accordion-item -->
      </div>
      <!--/.accordion -->
    </div>
    <!--/column -->
  </div>
  <!--/.row -->
</template>

<script setup>
import { faq4 } from "~/data/faq";
</script>

<style lang="scss" scoped></style>
