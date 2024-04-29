<template>
  <section class="wrapper bg-light angled upper-start lower-start">
    <div class="container py-3 pt-lg-5 pb-lg-5">
      <div class="row gx-md-8 gx-xl-12 gy-10 mb-14 mb-md-10 align-items-center">
        <div class="col-lg-6">
          <h2 class="fs-16 text-uppercase text-muted mb-3">Our Strategy</h2>
          <h3 class="display-4 mb-5">
            Here are 3 working steps to build your website.
          </h3>
          <p>
           Crafting Your Digital Presence: Discover how our strategic approach transforms your vision into a captivating website. From design concepts to user experience, we tailor solutions for maximum impact and engagement.
          </p>
          <p class="mb-6 mb-md-0">
            We customize features and functionalities to match your unique needs, delivering a website that stands out and performs.
          </p>
          <!-- <a href="#" class="btn btn-primary rounded-pill mb-0">Learn More</a> -->
        </div>
        <div class="col-lg-6 order-lg-2">
          <div
            v-for="(item, index) in strategy"
            class="card"
            :class="{
              'me-lg-6': index === 0,
              'ms-lg-13': index === 1,
              'mx-lg-6': index === 2,
              'mt-6': index > 0,
            }"
            :key="index"
          >
            <div class="card-body p-4">
              <div class="d-flex flex-row">
                <div>
                  <span
                    class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4"
                  >
                    <span class="number">{{ item.number }}</span>
                  </span>
                </div>
                <div>
                  <h4 class="mb-1">{{ item.title }}</h4>
                  <p class="mb-0">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <!--/.card -->
        </div>
      </div>
      <!--/.row -->
      <div
        class="row gx-lg-8 gx-xl-12 gy-10 mb-lg-22 mb-xl-24 align-items-center"
      >
        <div class="col-lg-7">
          <figure>
            <nuxt-img
              class="w-auto"
              src="/assets/img/illustrations/home-i6.png"
              srcset="/assets/img/illustrations/home-i6.png"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="fs-16 text-uppercase text-muted mb-3">Why Choose Us?</h2>
          <h3 class="display-5 mb-7">
            We transform client visions into virtual reality.
          </h3>
          <div class="accordion accordion-wrapper" id="accordionExample-1">
            <div
              v-for="(elm, i) in homeFAQ"
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
  </section>
</template>

<script setup>
import { homeFAQ } from "~/data/faq";
import { strategy } from "~/data/process";
</script>

<style lang="scss" scoped></style>
