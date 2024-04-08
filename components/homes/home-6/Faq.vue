<template>
  <section class="wrapper bg-soft-primary">
    <div class="container py-14 pt-md-16 pt-lg-0 pb-md-16">
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div class="mt-lg-n20 mt-xl-n22 mb-14 mb-md-16 position-relative">
            <div
              class="btn btn-circle btn-primary btn-play ripple mx-auto mb-5 position-absolute cursor-pointer"
              @click="
                () => {
                  modalOpen = true;
                }
              "
              style="
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 3;
              "
            >
              <i class="icn-caret-right"></i>
            </div>
            <figure class="rounded shadow">
              <nuxt-img
                src="/assets/img/photos/v1.jpg"
                srcset="/assets/img/photos/v1@2x.jpg 2x"
                alt="photo"
              />
            </figure>
          </div>
          <h2 class="fs-15 text-uppercase text-muted mb-3 text-center">FAQ</h2>
          <h3 class="display-4 mb-10 px-lg-12 px-xl-15 text-center">
            If you don't see an answer to your question, you can send us an
            email from our contact form.
          </h3>
          <div
            class="row"
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay=""
          >
            <div class="col-lg-6 mb-0">
              <div id="accordionExample-4" class="accordion-wrapper">
                <div
                  v-for="(elm, i) in faq3.slice(0, 3)"
                  :key="i"
                  class="card accordion-item"
                >
                  <div class="card-header" :id="`heading4-${elm.id}`">
                    <button
                      :class="`${!i ? 'accordion-button' : 'collapsed'}`"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse4-${elm.id}`"
                      aria-expanded="false"
                      :aria-controls="`collapse4-${elm.id}`"
                    >
                      {{ elm.question }}
                    </button>
                  </div>
                  <!--/.card-header -->
                  <div
                    :id="`collapse4-${elm.id}`"
                    :class="`accordion-collapse collapse ${!i ? 'show' : ''} `"
                    :aria-labelledby="`heading4-${elm.id}`"
                    data-bs-parent="#accordionExample-4"
                  >
                    <div class="card-body">
                      <p>{{ elm.answer }}</p>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.accordion-collapse -->
                </div>
                <!-- /.card -->
              </div>
              <!-- /.accordion-wrapper -->
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <div id="accordionExample-3" class="accordion-wrapper">
                <div
                  v-for="(elm, i) in faq2.slice(0, 3)"
                  :key="i"
                  class="card accordion-item"
                >
                  <div class="card-header" :id="`heading3-${elm.id}`">
                    <button
                      :class="`${!i ? 'accordion-button' : 'collapsed'}`"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse3-${elm.id}`"
                      aria-expanded="false"
                      :aria-controls="`collapse3-${elm.id}`"
                    >
                      {{ elm.question }}
                    </button>
                  </div>
                  <!--/.card-header -->
                  <div
                    :id="`collapse3-${elm.id}`"
                    :class="`accordion-collapse collapse ${!i ? 'show' : ''} `"
                    :aria-labelledby="`heading3-${elm.id}`"
                    data-bs-parent="#accordionExample-3"
                  >
                    <div class="card-body">
                      <p>{{ elm.answer }}</p>
                    </div>
                    <!--/.card-body -->
                  </div>
                  <!--/.accordion-collapse -->
                </div>
                <!-- /.card -->
              </div>
              <!-- /.accordion-wrapper -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
  <CommonModalVideo @modalClose="modalClose" :modalOpen="modalOpen" />
</template>

<script setup>
import { faq2, faq3 } from "~/data/faq";

const modalOpen = ref();
const modalClose = () => {
  modalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
