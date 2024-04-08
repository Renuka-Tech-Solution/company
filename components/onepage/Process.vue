<template>
  <section id="process" class="scrollSpysection">
    <div class="wrapper bg-gray">
      <div class="container py-14 py-md-17">
        <div
          class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-16 align-items-center"
        >
          <div class="col-lg-7">
            <figure>
              <nuxt-img
                class="w-auto"
                src="/assets/img/illustrations/i3.png"
                srcset="/assets/img/illustrations/i3@2x.png 2x"
                alt="photo"
              />
            </figure>
          </div>
          <!--/column -->
          <div class="col-lg-5">
            <h2 class="fs-15 text-uppercase text-line text-primary mb-3">
              How It Works?
            </h2>
            <h3 class="display-5 mb-7 pe-xxl-5">
              Everything you need on creating a business process.
            </h3>
            <div
              v-for="(item, i) in steps5"
              :class="`d-flex flex-row ${i != 2 ? 'mb-4' : ''}`"
              :key="i"
            >
              <div>
                <nuxt-img
                  :src="item.iconSrc"
                  class="icon-svg icon-svg-sm"
                  :class="['text-' + item.iconColor, 'me-4']"
                  alt="photo"
                />
              </div>
              <div>
                <h4 class="mb-1">{{ item.title }}</h4>
                <p class="mb-1">{{ item.description }}</p>
              </div>
            </div>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
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
      </div>
      <!-- /.container -->
    </div>
    <!-- /.wrapper -->
  </section>
</template>

<script setup>
import { faq4 } from "~/data/faq";
import { steps5 } from "~/data/process";
</script>

<style lang="scss" scoped></style>
