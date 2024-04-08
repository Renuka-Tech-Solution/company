<template>
  <section class="wrapper bg-light">
    <div class="container pt-6 pb-14 pb-md-16">
      <div class="row gx-lg-8 gx-xl-12 gy-10">
        <div class="col-lg-6 mb-0">
          <h2 class="fs-16 text-uppercase text-primary mb-4">FAQ</h2>
          <h3 class="display-3 mb-4">
            If you don't see an answer to your question, you can send us an
            email from our contact form.
          </h3>
          <p class="mb-6">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis
            ornare.
          </p>
          <a href="#" class="btn btn-primary rounded-pill">All FAQ</a>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <div id="accordionExample-2" class="accordion-wrapper">
            <div
              v-for="(elm, i) in faq2"
              :key="i"
              class="card accordion-item shadow-lg"
            >
              <div class="card-header" :id="`heading2-${elm.id}`">
                <button
                  :class="`${!i ? 'accordion-button' : 'collapsed'}`"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse2-${elm.id}`"
                  aria-expanded="false"
                  :aria-controls="`collapse2-${elm.id}`"
                >
                  {{ elm.question }}
                </button>
              </div>
              <!--/.card-header -->
              <div
                :id="`collapse2-${elm.id}`"
                :class="`accordion-collapse collapse ${!i ? 'show' : ''} `"
                :aria-labelledby="`heading2-${elm.id}`"
                data-bs-parent="#accordionExample-2"
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
    <!-- /.container -->
    <div class="overflow-hidden">
      <div class="divider text-navy mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="currentColor"
            d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
          />
        </svg>
      </div>
    </div>
    <!-- /.overflow-hidden -->
  </section>
</template>

<script setup>
import { faq2 } from "~/data/faq";
</script>

<style lang="scss" scoped></style>
