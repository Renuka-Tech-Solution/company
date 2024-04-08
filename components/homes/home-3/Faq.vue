<template>
  <div class="container">
    <div class="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
      <div class="col-md-8 col-lg-6 offset-lg-1 order-lg-2 position-relative">
        <div
          class="shape rounded-circle bg-line primary rellax w-18 h-18"
          data-rellax-speed="1"
          style="top: -2rem; right: -1.9rem"
        ></div>
        <div
          class="shape rounded bg-soft-primary rellax d-md-block"
          data-rellax-speed="0"
          style="bottom: -1.8rem; left: -1.5rem; width: 85%; height: 90%"
        ></div>
        <figure class="rounded">
          <nuxt-img
            src="/assets/img/photos/about9.jpg"
            srcset="/assets/img/photos/about9@2x.jpg 2x"
            alt="photo"
          />
        </figure>
      </div>
      <!--/column -->
      <div class="col-lg-5">
        <h2 class="fs-16 text-uppercase text-line text-primary mb-3">
          Why Choose Us?
        </h2>
        <h3 class="display-4 mb-7">
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
        </div>
        <!--/.accordion -->
      </div>
      <!--/column -->
    </div>
  </div>
</template>

<script setup>
import { faq4 } from "~/data/faq";
</script>

<style lang="scss" scoped></style>
